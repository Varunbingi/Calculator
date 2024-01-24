function changeValue(value) {
  document.getElementById("inputField").value += value;
}

function result() {
  var p = document.getElementById("inputField").value;
  var q = eval(p);

  document.getElementById("inputField").value = q;
}

const sc = document.getElementById("ac");

sc.addEventListener("click", function () {
  document.getElementById("inputField").value = "";
});
