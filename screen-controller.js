export function createScreenController({ root, views }) {
  const screenViews = Array.from(views || []);
  const parkedScreens = document.createDocumentFragment();

  function getScreen(section) {
    return screenViews.find((view) => view.dataset.view === section) || null;
  }

  function parkInactiveScreens(activeScreen) {
    screenViews.forEach((view) => {
      if (view === activeScreen) return;
      view.classList.remove("active", "is-route-entering", "is-screen-preparing");
      delete view.dataset.motionRoute;
      delete view.dataset.routeView;
      if (view.parentElement) parkedScreens.append(view);
    });
  }

  function show(section) {
    if (!root) return null;
    const activeScreen = getScreen(section);
    if (!activeScreen) return null;

    parkInactiveScreens(activeScreen);
    if (activeScreen.parentElement !== root) root.append(activeScreen);
    activeScreen.classList.add("active");
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
