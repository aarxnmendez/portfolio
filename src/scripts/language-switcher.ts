(function () {
  // Minimal language detection - only for default redirect
  const storedLang = localStorage.getItem("language");
  const currentPath = window.location.pathname;
  const isInEnglishPath = currentPath.startsWith("/en");

  // Only redirect if on main page and stored language is English
  if (currentPath === "/" && storedLang === "en") {
    window.location.href = "/en";
  }

  // Rest of your existing button code...
  const langSwitch = document.getElementById("lang-switch");
  const langSwitchMobile = document.getElementById("lang-switch-mobile");

  function handleLanguageSwitch(e: Event) {
    e.preventDefault();
    const newLang = isInEnglishPath ? "es" : "en";
    localStorage.setItem("language", newLang);

    if (newLang === "en") {
      window.location.href = "/en";
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
