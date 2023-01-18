// Search in all tab
function toggleAllSearchBox() {
  var x = document.querySelector("#all-table-search-box");
  var z = document.querySelector(".all-search-icon");
  var a = document.querySelector(".all-close-icon");

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

function performAllSearch() {
  // Declare search string
  var filter = allSearchBox.value.toUpperCase();

  // Loop through first tbody's rows
  for (var rowI = 0; rowI < alltrs.length; rowI++) {
    // define the row's cells
    var tds = alltrs[rowI].getElementsByTagName("td");

    // hide the row
    alltrs[rowI].style.display = "none";

    // loop through row cells
    for (var cellI = 0; cellI < tds.length; cellI++) {
      // if there's a match
      if (tds[cellI].innerHTML.toUpperCase().indexOf(filter) > -1) {
        // show the row
        alltrs[rowI].style.display = "";

        // skip to the next row
        continue;
      }
    }
  }
}

// declare elements
const allSearchBox = document.querySelector("#all-table-search-box");
const allTable = document.querySelector("#all-records-table");
const alltrs = allTable.tBodies[0].getElementsByTagName("tr");

// add event listener to search box
allSearchBox.addEventListener("keyup", performAllSearch);

// Search in Apartment tab
function toggleAptSearchBox() {
  var x = document.querySelector("#apt-table-search-box");
  var z = document.querySelector(".apt-search-icon");
  var a = document.querySelector(".apt-close-icon");

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

function performAptSearch() {
  // Declare search string
  var filter = aptSearchBox.value.toUpperCase();

  // Loop through first tbody's rows
  for (var rowI = 0; rowI < apttrs.length; rowI++) {
    // define the row's cells
    var tds = apttrs[rowI].getElementsByTagName("td");

    // hide the row
    apttrs[rowI].style.display = "none";

    // loop through row cells
    for (var cellI = 0; cellI < tds.length; cellI++) {
      // if there's a match
      if (tds[cellI].innerHTML.toUpperCase().indexOf(filter) > -1) {
        // show the row
        apttrs[rowI].style.display = "";

        // skip to the next row
        continue;
      }
    }
  }
}

// declare elements
const aptSearchBox = document.querySelector("#apt-table-search-box");
const aptTable = document.querySelector("#apt-records-table");
const apttrs = aptTable.tBodies[0].getElementsByTagName("tr");

// add event listener to search box
aptSearchBox.addEventListener("keyup", performAptSearch);

// Search in Lawn tab

function toggleLwnSearchBox() {
  var x = document.querySelector("#lwn-table-search-box");
  var z = document.querySelector(".lwn-search-icon");
  var a = document.querySelector(".lwn-close-icon");

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

function performLwnSearch() {
  // Declare search string
  var filter = lwnSearchBox.value.toUpperCase();

  // Loop through first tbody's rows
  for (var rowI = 0; rowI < lwntrs.length; rowI++) {
    // define the row's cells
    var tds = lwntrs[rowI].getElementsByTagName("td");

    // hide the row
    lwntrs[rowI].style.display = "none";

    // loop through row cells
    for (var cellI = 0; cellI < tds.length; cellI++) {
      // if there's a match
      if (tds[cellI].innerHTML.toUpperCase().indexOf(filter) > -1) {
        // show the row
        lwntrs[rowI].style.display = "";

        // skip to the next row
        continue;
      }
    }
  }
}

// declare elements
const lwnSearchBox = document.querySelector("#lwn-table-search-box");
const lwnTable = document.querySelector("#lwn-records-table");
const lwntrs = lwnTable.tBodies[0].getElementsByTagName("tr");

// add event listener to search box
lwnSearchBox.addEventListener("keyup", performLwnSearch);

// Search in Bone Vault tab

function toggleBvSearchBox() {
  var x = document.querySelector("#bv-table-search-box");
  var z = document.querySelector(".bv-search-icon");
  var a = document.querySelector(".bv-close-icon");

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

function performBvSearch() {
  // Declare search string
  var filter = bvSearchBox.value.toUpperCase();

  // Loop through first tbody's rows
  for (var rowI = 0; rowI < bvtrs.length; rowI++) {
    // define the row's cells
    var tds = bvtrs[rowI].getElementsByTagName("td");

    // hide the row
    bvtrs[rowI].style.display = "none";

    // loop through row cells
    for (var cellI = 0; cellI < tds.length; cellI++) {
      // if there's a match
      if (tds[cellI].innerHTML.toUpperCase().indexOf(filter) > -1) {
        // show the row
        bvtrs[rowI].style.display = "";

        // skip to the next row
        continue;
      }
    }
  }
}

// declare elements
const bvSearchBox = document.querySelector("#bv-table-search-box");
const bvTable = document.querySelector("#bv-records-table");
const bvtrs = bvTable.tBodies[0].getElementsByTagName("tr");

// add event listener to search box
bvSearchBox.addEventListener("keyup", performBvSearch);

// Search in Archived tab

function toggleArcSearchBox() {
  var x = document.querySelector("#arc-table-search-box");
  var z = document.querySelector(".arc-search-icon");
  var a = document.querySelector(".arc-close-icon");

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

function performArcSearch() {
  // Declare search string
  var filter = arcSearchBox.value.toUpperCase();

  // Loop through first tbody's rows
  for (var rowI = 0; rowI < arctrs.length; rowI++) {
    // define the row's cells
    var tds = arctrs[rowI].getElementsByTagName("td");

    // hide the row
    arctrs[rowI].style.display = "none";

    // loop through row cells
    for (var cellI = 0; cellI < tds.length; cellI++) {
      // if there's a match
      if (tds[cellI].innerHTML.toUpperCase().indexOf(filter) > -1) {
        // show the row
        arctrs[rowI].style.display = "";

        // skip to the next row
        continue;
      }
    }
  }
}

// declare elements
const arcSearchBox = document.querySelector("#arc-table-search-box");
const arcTable = document.querySelector("#arc-records-table");
const arctrs = arcTable.tBodies[0].getElementsByTagName("tr");

// add event listener to search box
arcSearchBox.addEventListener("keyup", performArcSearch);
