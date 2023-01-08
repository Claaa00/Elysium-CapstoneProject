function toggleSearchBox() {
  var x = document.querySelector("#table-search-box");
  var y = document.querySelector(".search-button");
  var z = document.querySelector(".search-icon");
  var a = document.querySelector(".close-icon");

  if (x.style.display !== "none") {
    x.style.display = "none";
    z.style.display = "block";
    a.style.display = "none";
  } else {
    x.style.display = "flex";
    z.style.display = "none";
    a.style.display = "block";
  }
}

function performSearch() {
  // Declare search string
  var filter = searchBox.value.toUpperCase();

  // Loop through first tbody's rows
  for (var rowI = 0; rowI < trs.length; rowI++) {
    // define the row's cells
    var tds = trs[rowI].getElementsByTagName("td");

    // hide the row
    trs[rowI].style.display = "none";

    // loop through row cells
    for (var cellI = 0; cellI < tds.length; cellI++) {
      // if there's a match
      if (tds[cellI].innerHTML.toUpperCase().indexOf(filter) > -1) {
        // show the row
        trs[rowI].style.display = "";

        // skip to the next row
        continue;
      }
    }
  }
}

// declare elements
const searchBox = document.querySelector("#table-search-box");
const table = document.querySelector("#records-table");
const trs = table.tBodies[0].getElementsByTagName("tr");

// add event listener to search box
searchBox.addEventListener("keyup", performSearch);
