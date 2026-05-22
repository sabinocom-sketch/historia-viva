const interactiveSelector = [
  "[data-route]",
  "[data-flow-action]",
  "[data-lesson-action]",
  "[data-era]",
  "#daily-curiosity",
  "#shuffle-question",
  "#question-form"
].join(",");

let appPromise;

function isHomeRoute() {
  const hash = window.location.hash.replace(/^#\/?/, "").trim();
  return !hash || hash === "home";
}

function loadApp() {
  if (!appPromise) {
    document.body.classList.add("is-app-loading");
    appPromise = import("./script.js").finally(() => {
      document.body.classList.remove("is-app-loading");
    });
  }
  return appPromise;
}

function replayInteraction(event) {
  const target = event.target?.closest?.(interactiveSelector);
  if (!target || target.dataset.bootstrapHandled === "true") return;

  event.preventDefault();
  event.stopPropagation();

  loadApp().then(() => {
    if (!target.isConnected) return;
    target.dataset.bootstrapHandled = "true";
    target.dispatchEvent(new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window
    }));
    delete target.dataset.bootstrapHandled;
  });
}

function scheduleIdleLoad() {
  window.setTimeout(() => {
    const loadWhenIdle = () => loadApp();
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadWhenIdle, { timeout: 2200 });
      return;
    }
    loadWhenIdle();
  }, 1400);
}

document.body.classList.remove("is-booting");
document.addEventListener("click", replayInteraction, { capture: true });
document.addEventListener("submit", replayInteraction, { capture: true });

if (isHomeRoute()) {
  scheduleIdleLoad();
} else {
  loadApp();
}
