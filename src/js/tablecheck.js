$(document).ready(function () {
  $("table").simpleCheckboxTable();
});

$(document).ready(function () {
  $("table").simpleCheckboxTable({
    onCheckedStateChanged: function ($checkbox) {
      // Do something
      // $(".checkbox").click(function () {
      //   $("#archive-button").prop("disabled", !$(".checkbox:checked").length);
      // });

      $("#archive-button").prop("disabled", !$(".checkbox:checked").length);
    },
  });
});
