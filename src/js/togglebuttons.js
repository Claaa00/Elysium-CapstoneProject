function toggleShowButton() {
  document.querySelector(".show-button-options").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".show-button")) {
    var dropdowns = document.querySelector(".show-button-options"),
      showEvent = "show";
    for (var i = 0; i < dropdowns.length; i++) {
      var currentElement = dropdowns[i],
        currentElementAsString = dropdowns[i].toString();
      if (currentElementAsString.localeCompare(showEvent)) {
        currentElement.classList.remove("show");
      }
    }
  }
};

// remove dropdown
