(function () {
  const langSwitch = document.getElementById("lang-switch");
  const currentPath = window.location.pathname;
  const isInSpanishPath = currentPath.startsWith("/es");

  if (langSwitch) {
    langSwitch.addEventListener("click", (e) => {
      e.preventDefault();
      const newLang = isInSpanishPath ? "en" : "es";
      localStorage.setItem("language", newLang);

      if (newLang === "es") {
        window.location.href = "/es";
      } else {
        window.location.href = "/";
      }
    });
  }
})();
