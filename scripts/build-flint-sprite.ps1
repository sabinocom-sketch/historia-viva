param(
  [string]$Source = "assets/silex-original.png",
  [string]$Output = "assets/silex-lascado-sprite.png",
  [int]$BackgroundMaxChannel = 32,
  [int]$BackgroundLuma = 22,
  [int]$Padding = 24
)

Add-Type -AssemblyName System.Drawing

Add-Type -ReferencedAssemblies "System.Drawing" -TypeDefinition @"
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class FlintSpriteBuilder
{
    public static string Build(string sourcePath, string outputPath, int backgroundMaxChannel, int backgroundLuma, int padding)
    {
        using (var sourceImage = Image.FromFile(sourcePath))
        using (var bitmap = new Bitmap(sourceImage.Width, sourceImage.Height, PixelFormat.Format32bppArgb))
        {
            using (var graphics = Graphics.FromImage(bitmap))
            {
                graphics.CompositingMode = CompositingMode.SourceCopy;
                graphics.InterpolationMode = InterpolationMode.NearestNeighbor;
                graphics.PixelOffsetMode = PixelOffsetMode.Half;
                graphics.DrawImage(sourceImage, 0, 0, sourceImage.Width, sourceImage.Height);
            }

            int width = bitmap.Width;
            int height = bitmap.Height;
            var rect = new Rectangle(0, 0, width, height);
            var data = bitmap.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = data.Stride;
            int byteCount = Math.Abs(stride) * height;
            var pixels = new byte[byteCount];
            Marshal.Copy(data.Scan0, pixels, 0, byteCount);

            var background = new bool[width * height];
            var queue = new Queue<int>();

            Action<int, int> tryEnqueue = (x, y) =>
            {
                if (x < 0 || y < 0 || x >= width || y >= height) return;
                int index = y * width + x;
                if (background[index]) return;
                int offset = y * stride + x * 4;
                byte b = pixels[offset + 0];
                byte g = pixels[offset + 1];
                byte r = pixels[offset + 2];
                int max = Math.Max(r, Math.Max(g, b));
                double luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
                if (max > backgroundMaxChannel || luma > backgroundLuma) return;
                background[index] = true;
                queue.Enqueue(index);
            };

            for (int x = 0; x < width; x++)
            {
                tryEnqueue(x, 0);
                tryEnqueue(x, height - 1);
            }

            for (int y = 0; y < height; y++)
            {
                tryEnqueue(0, y);
                tryEnqueue(width - 1, y);
            }

            while (queue.Count > 0)
            {
                int index = queue.Dequeue();
                int x = index % width;
                int y = index / width;
                tryEnqueue(x + 1, y);
                tryEnqueue(x - 1, y);
                tryEnqueue(x, y + 1);
                tryEnqueue(x, y - 1);
            }

            int minX = width;
            int minY = height;
            int maxX = -1;
            int maxY = -1;
            int transparentPixels = 0;

            for (int y = 0; y < height; y++)
            {
                for (int x = 0; x < width; x++)
                {
                    int index = y * width + x;
                    int offset = y * stride + x * 4;
                    if (background[index])
                    {
                        pixels[offset + 3] = 0;
                        transparentPixels++;
                    }
                    else
                    {
                        pixels[offset + 3] = 255;
                        if (x < minX) minX = x;
                        if (y < minY) minY = y;
                        if (x > maxX) maxX = x;
                        if (y > maxY) maxY = y;
                    }
                }
            }

            if (maxX < minX || maxY < minY)
            {
                bitmap.UnlockBits(data);
                throw new InvalidOperationException("No foreground pixels found.");
            }

            Marshal.Copy(pixels, 0, data.Scan0, byteCount);
            bitmap.UnlockBits(data);

            int cropX = Math.Max(0, minX - padding);
            int cropY = Math.Max(0, minY - padding);
            int cropRight = Math.Min(width - 1, maxX + padding);
            int cropBottom = Math.Min(height - 1, maxY + padding);
            int cropWidth = cropRight - cropX + 1;
            int cropHeight = cropBottom - cropY + 1;

            using (var sprite = new Bitmap(cropWidth, cropHeight, PixelFormat.Format32bppArgb))
            using (var graphics = Graphics.FromImage(sprite))
            {
                graphics.CompositingMode = CompositingMode.SourceCopy;
                graphics.InterpolationMode = InterpolationMode.NearestNeighbor;
                graphics.PixelOffsetMode = PixelOffsetMode.Half;
                graphics.DrawImage(
                    bitmap,
                    new Rectangle(0, 0, cropWidth, cropHeight),
                    new Rectangle(cropX, cropY, cropWidth, cropHeight),
                    GraphicsUnit.Pixel
                );
                sprite.Save(outputPath, ImageFormat.Png);
            }

            return String.Format(
                "{{\"sourceWidth\":{0},\"sourceHeight\":{1},\"spriteWidth\":{2},\"spriteHeight\":{3},\"backgroundPixelsRemoved\":{4},\"backgroundMaxChannel\":{5},\"backgroundLuma\":{6},\"padding\":{7}}}",
                width, height, cropWidth, cropHeight, transparentPixels, backgroundMaxChannel, backgroundLuma, padding
            );
        }
    }
}
"@

$sourcePath = (Resolve-Path $Source).Path
$outputPath = Join-Path (Get-Location) $Output
[FlintSpriteBuilder]::Build($sourcePath, $outputPath, $BackgroundMaxChannel, $BackgroundLuma, $Padding)
