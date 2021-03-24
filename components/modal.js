var modal = document.getElementById("modal-id");
var btn = document.getElementById("modal-btn");
var btnCancel = document.getElementById("modal-btn-cancel");
var btnDelete = document.getElementById("modal-btn-delete");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

btnCancel.onclick = function() {
    modal.style.display = "none";
  }

  btnDelete.onclick = function() {
    modal.style.display = "none";
  }


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
