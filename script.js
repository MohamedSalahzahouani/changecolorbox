// implement your logic here
let button = document.getElementById("color-btn");
let box = document.getElementById("color-box");
/*button.addEventListener("click", function () {
  /*box.style.backgroundColor = "red";
  box.style.backgroundColor = "green";
  box.style.backgroundColor = "yellow";*/
/*const change = () => {
  const random = (Math.random() * 0xffffff).toString(16);
  box.style.backgroundColor = "#" + random;
};*/
function change() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  box.style.background = bgColor;
}
