function openCreateOverlay() {
  var x = document.querySelector("#create-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeCreateOverlay() {
  var x = document.querySelector("#create-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openEditOverlay() {
  var x = document.querySelector("#edit-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeEditOverlay() {
  var x = document.querySelector("#edit-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openArchiveOverlay() {
  var x = document.querySelector("#archive-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeArchiveOverlay() {
  var x = document.querySelector("#archive-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openDetailedViewOverlay() {
  var x = document.querySelector("#view-details-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeDetailedViewOverlay() {
  var x = document.querySelector("#view-details-record-overlay");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function validateForm() {
  var errorMessage = document.querySelector(".error-message");
  var fname = document.querySelector("#first-name");
  var lname = document.querySelector("#last-name");
  var graveType = document.querySelector("#grave-type-input");
  var graveTypeValue = graveType.options[graveType.selectedIndex].value;
  var aptBlock = document.querySelector("#apt-block-input");
  var aptBlockValue = aptBlock.options[aptBlock.selectedIndex].value;
  var aptColumn = document.querySelector("#apt-column-input");
  var aptColumnValue = aptColumn.options[aptColumn.selectedIndex].value;
  var aptRow = document.querySelector("#apt-row-input");
  var aptRowValue = aptRow.options[aptRow.selectedIndex].value;
  var bvBlock = document.querySelector("#bv-block-input");
  var bvBlockValue = bvBlock.options[bvBlock.selectedIndex].value;
  var bvColumn = document.querySelector("#bv-column-input");
  var bvColumnValue = bvColumn.options[bvColumn.selectedIndex].value;
  var bvRow = document.querySelector("#bv-row-input");
  var bvRowValue = bvRow.options[bvRow.selectedIndex].value;
  var lwnBlock = document.querySelector("#lwn-block-input");
  var lwnBlockValue = lwnBlock.options[lwnBlock.selectedIndex].value;
  var lwnColumn = document.querySelector("#lwn-column-input");
  var lwnColumnValue = lwnColumn.options[lwnColumn.selectedIndex].value;
  var lwnRow = document.querySelector("#lwn-row-input");
  var lwnRowValue = lwnRow.options[lwnRow.selectedIndex].value;

  if (
    graveTypeValue == "" ||
    fname.value.length < 1 ||
    lname.value.length < 1
  ) {
    errorMessage.style.display = "block";
  } else if (
    graveTypeValue == "apartment-type-form" ||
    fname.value.length < 1 ||
    lname.value.length < 1
  ) {
    if (aptBlockValue == "" || aptColumnValue == "" || aptRowValue == "") {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  } else if (
    graveTypeValue == "lawn-type-form" ||
    fname.value.length < 1 ||
    lname.value.length < 1
  ) {
    if (lwnBlockValue == "" || lwnColumnValue == "" || lwnRowValue == "") {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  } else if (
    graveTypeValue == "bone-vault-type-form" ||
    fname.value.length < 1 ||
    lname.value.length < 1
  ) {
    if (bvBlockValue == "" || bvColumnValue == "" || bvRowValue == "") {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  } else {
    errorMessage.style.display = "none";
  }
}

function validateEditForm() {
  var errorMessage = document.querySelector(".edit-message");
  var fnameEdit = document.querySelector("#first-name-edit");
  var lnameEdit = document.querySelector("#last-name-edit");
  var graveTypeEdit = document.querySelector("#grave-type-input-edit");
  var graveTypeEditValue =
    graveTypeEdit.options[graveTypeEdit.selectedIndex].value;
  var aptBlockEdit = document.querySelector("#apt-block-input-edit");
  var aptBlockEditValue =
    aptBlockEdit.options[aptBlockEdit.selectedIndex].value;
  var aptColumnEdit = document.querySelector("#apt-column-input-edit");
  var aptColumnEditValue =
    aptColumnEdit.options[aptColumnEdit.selectedIndex].value;
  var aptRowEdit = document.querySelector("#apt-row-input-edit");
  var aptRowEditValue = aptRowEdit.options[aptRowEdit.selectedIndex].value;
  var bvBlockEdit = document.querySelector("#bv-block-input-edit");
  var bvBlockEditValue = bvBlockEdit.options[bvBlockEdit.selectedIndex].value;
  var bvColumnEdit = document.querySelector("#bv-column-input-edit");
  var bvColumnEditValue =
    bvColumnEdit.options[bvColumnEdit.selectedIndex].value;
  var bvRowEdit = document.querySelector("#bv-row-input-edit");
  var bvRowEditValue = bvRowEdit.options[bvRowEdit.selectedIndex].value;
  var lwnBlockEdit = document.querySelector("#lwn-block-input-edit");
  var lwnBlockEditValue =
    lwnBlockEdit.options[lwnBlockEdit.selectedIndex].value;
  var lwnColumnEdit = document.querySelector("#lwn-column-input-edit");
  var lwnColumnEditValue =
    lwnColumnEdit.options[lwnColumnEdit.selectedIndex].value;
  var lwnRowEdit = document.querySelector("#lwn-row-input-edit");
  var lwnRowEditValue = lwnRowEdit.options[lwnRowEdit.selectedIndex].value;
  var statusEdit = document.querySelector("#status-input-edit");
  var statusEditValue = statusEdit.options[statusEdit.selectedIndex].value;

  if (
    graveTypeEditValue == "" ||
    fnameEdit.value.length < 1 ||
    lnameEdit.value.length < 1 ||
    statusEditValue == ""
  ) {
    errorMessage.style.display = "block";
  } else if (
    graveTypeEditValue == "apartment-type-form-edit" ||
    fnameEdit.value.length < 1 ||
    lnameEdit.value.length < 1 ||
    statusEditValue == ""
  ) {
    if (
      aptBlockEditValue == "" ||
      aptColumnEditValue == "" ||
      aptRowEditValue == ""
    ) {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  } else if (
    graveTypeEditValue == "lawn-type-form-edit" ||
    fnameEdit.value.length < 1 ||
    lnameEdit.value.length < 1 ||
    statusEditValue == ""
  ) {
    if (
      lwnBlockEditValue == "" ||
      lwnColumnEditValue == "" ||
      lwnRowEditValue == ""
    ) {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  } else if (
    graveTypeEditValue == "bone-vault-type-form-edit" ||
    fnameEdit.value.length < 1 ||
    lnameEdit.value.length < 1 ||
    statusEditValue == ""
  ) {
    if (
      bvBlockEditValue == "" ||
      bvColumnEditValue == "" ||
      bvRowEditValue == ""
    ) {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  } else {
    errorMessage.style.display = "none";
  }
}
