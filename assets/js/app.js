(function () {
  var defaultLang = "tr";
  var savedLang = localStorage.getItem("cellTourLang");
  var lang = savedLang || defaultLang;
  var page = document.body.dataset.page;
  var activeStep = 0;

  function getPath(obj, path) {
    return path.split(".").reduce(function (value, key) {
      return value && value[key];
    }, obj);
  }

  function setLanguage(nextLang) {
    lang = nextLang;
    localStorage.setItem("cellTourLang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var value = getPath(window.CELL_I18N[lang], node.dataset.i18n);
      if (value) {
        node.textContent = value;
      }
    });

    document.querySelectorAll(".lang-button").forEach(function (button) {
      button.classList.toggle("is-active", button.dataset.lang === lang);
    });

    if (page === "tour") {
      renderTour();
    }
  }

  function renderTour() {
    var tourName = document.body.dataset.tour;
    var data = window.CELL_TOURS[lang][tourName];
    var steps = data.steps;

    document.querySelectorAll("[data-tour-field]").forEach(function (node) {
      node.textContent = data[node.dataset.tourField] || "";
    });

    document.getElementById("step-count").textContent =
      window.CELL_I18N[lang].tour.step + " " + (activeStep + 1) + "/" + steps.length;
    document.getElementById("step-title").textContent = steps[activeStep].title;
    document.getElementById("step-body").textContent = steps[activeStep].body;

    document.querySelectorAll("[data-step]").forEach(function (item) {
      item.classList.toggle("is-active", Number(item.dataset.step) === activeStep);
    });

    var dots = document.getElementById("step-dots");
    dots.innerHTML = "";
    steps.forEach(function (_, index) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot" + (index === activeStep ? " is-active" : "");
      dot.setAttribute("aria-label", window.CELL_I18N[lang].tour.step + " " + (index + 1));
      dot.addEventListener("click", function () {
        activeStep = index;
        renderTour();
      });
      dots.appendChild(dot);
    });
  }

  function bindTourControls() {
    var tourName = document.body.dataset.tour;
    var steps = window.CELL_TOURS[lang][tourName].steps;

    document.getElementById("prev-step").addEventListener("click", function () {
      activeStep = (activeStep - 1 + steps.length) % steps.length;
      renderTour();
    });

    document.getElementById("next-step").addEventListener("click", function () {
      activeStep = (activeStep + 1) % steps.length;
      renderTour();
    });

    document.querySelectorAll("[data-step]").forEach(function (hotspot) {
      hotspot.addEventListener("click", function () {
        activeStep = Number(hotspot.dataset.step);
        renderTour();
      });
    });
  }

  document.querySelectorAll(".lang-button").forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.dataset.lang);
    });
  });

  if (page === "tour") {
    bindTourControls();
  }

  setLanguage(lang);
})();
