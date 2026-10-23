(function () {
  var tabs = document.querySelectorAll('[role="tab"]');
  function select(tab) {
    for (var i = 0; i < tabs.length; i++) {
      var on = tabs[i] === tab;
      tabs[i].setAttribute("aria-selected", on ? "true" : "false");
      var panel = document.getElementById(tabs[i].getAttribute("aria-controls"));
      if (panel) panel.hidden = !on;
    }
  }
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () { select(this); });
  }
  var copies = document.querySelectorAll(".copy");
  for (var j = 0; j < copies.length; j++) {
    copies[j].addEventListener("click", function () {
      var text = this.previousElementSibling.textContent;
      var button = this;
      var done = button.textContent;
      function mark() { button.textContent = "OK"; setTimeout(function () { button.textContent = done; }, 1200); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(mark);
      else mark();
    });
  }
  var langs = document.querySelectorAll("[data-lang]");
  for (var k = 0; k < langs.length; k++) {
    langs[k].addEventListener("click", function () {
      try { localStorage.setItem("lang", this.getAttribute("data-lang")); } catch (e) {}
    });
  }
})();
