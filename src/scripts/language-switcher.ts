(function () {
  const langSwitch = document.getElementById("lang-switch");
  const langSwitchMobile = document.getElementById("lang-switch-mobile");
  const currentPath = window.location.pathname;
  const isInSpanishPath = currentPath.startsWith("/es");

  function handleLanguageSwitch(e: Event) {
    e.preventDefault();
    const newLang = isInSpanishPath ? "en" : "es";
    localStorage.setItem("language", newLang);

    if (newLang === "es") {
      window.location.href = "/es";
    } else {
      window.location.href = "/";
    }
  }

  if (langSwitch) {
    langSwitch.addEventListener("click", handleLanguageSwitch);
  }

  if (langSwitchMobile) {
    langSwitchMobile.addEventListener("click", handleLanguageSwitch);
  }
})();
