$(document).ready(function () {
  $("table").simpleCheckboxTable();
});

$(document).ready(function () {
  $("table").simpleCheckboxTable({
    onCheckedStateChanged: function ($checkbox) {
      // Do something
    },
  });
});
