(function () {
  const storedLang = localStorage.getItem("language");
  const currentPath = window.location.pathname;
  const isInSpanishPath = currentPath.startsWith("/es");
  const currentLang = isInSpanishPath ? "es" : "en";

  if (storedLang === null) {
    const preferredLang = navigator.language.startsWith("es") ? "es" : "en";
    localStorage.setItem("language", preferredLang);

    if (preferredLang !== currentLang) {
      if (preferredLang === "es") {
        window.location.href = "/es";
      } else {
        window.location.href = "/";
      }
    }
  } else {
    if (storedLang !== currentLang) {
      if (storedLang === "es") {
        window.location.href = "/es";
      } else {
        window.location.href = "/";
      }
    }
  }
})();
