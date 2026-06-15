export function createScreenController({ root, views }) {
  const screenViews = Array.from(views || []);
  const parkedScreens = document.createDocumentFragment();
  const leaveTimers = new WeakMap();
  const leaveDurationMs = 520;
  let currentScreen = screenViews.find((view) => view.classList.contains("active")) || null;

  function getScreen(section) {
    return screenViews.find((view) => view.dataset.view === section) || null;
  }

  function cancelLeavingScreen(view) {
    const timer = leaveTimers.get(view);
    if (timer) window.clearTimeout(timer);
    leaveTimers.delete(view);
    view.classList.remove("is-screen-leaving");
  }

  function parkScreen(view) {
    cancelLeavingScreen(view);
    view.classList.remove("active", "is-route-entering", "is-screen-preparing");
    delete view.dataset.motionRoute;
    delete view.dataset.routeView;
    if (view.parentElement) parkedScreens.append(view);
  }

  function releaseLeavingScreen(view) {
    if (view.classList.contains("active")) return;
    parkScreen(view);
  }

  function markLeavingScreen(view) {
    cancelLeavingScreen(view);
    view.classList.remove("active", "is-route-entering", "is-screen-preparing");
    delete view.dataset.motionRoute;
    delete view.dataset.routeView;
    view.classList.add("is-screen-leaving");
    leaveTimers.set(view, window.setTimeout(() => releaseLeavingScreen(view), leaveDurationMs));
  }

  function parkInactiveScreens(activeScreen, previousScreen) {
    screenViews.forEach((view) => {
      if (view === activeScreen) return;
      if (view === previousScreen && view.parentElement === root) {
        markLeavingScreen(view);
        return;
      }
      parkScreen(view);
    });
  }

  function show(section) {
    if (!root) return null;
    const activeScreen = getScreen(section);
    if (!activeScreen) return null;

    const previousScreen = currentScreen;
    cancelLeavingScreen(activeScreen);
    if (activeScreen.parentElement !== root) root.append(activeScreen);
    parkInactiveScreens(activeScreen, previousScreen);
    activeScreen.classList.add("active");
    currentScreen = activeScreen;
    return activeScreen;
  }

  return {
    show,
    getScreen,
    get mountedScreens() {
      return screenViews.filter((view) => view.parentElement === root);
    }
  };
}
