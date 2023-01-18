// function selectGraveType(selectEl) {
//   let selectedValue = selectEl.options[selectEl.selectedIndex].value;
//   let subForms = document.querySelectorAll(".input-group .grave-type-option");
//   for (let i = 0; i < subForms.length; i += 1) {
//     if (selectedValue === subForms[i].name) {
//       subForms[i].setAttribute("style", "display:block");
//     } else {
//       subForms[i].setAttribute("style", "display:none");
//     }
//   }
// }

// function selectGraveType(form) {
//   for (var i = 0; i < form.length; i++) {
//     var form_op = form.options[i].value;
//     if (form_op == form.value) {
//       document.getElementsByName(form_op)[0].style.display = "block";
//     } else {
//       document.getElementsByName(form_op)[0].style.display = "none";
//     }
//   }
// }

// $("#myselect").on("change", function () {
//   $("#" + $(this).val())
//     .show()
//     .siblings()
//     .hide();
// });

$("#grave-type-input").on("change", function () {
  $(".grave-type-option").hide();
  $("#" + $(this).val()).show();
});

$("#grave-type-input-edit").on("change", function () {
  $(".grave-type-option-edit").hide();
  $("#" + $(this).val()).show();
});
