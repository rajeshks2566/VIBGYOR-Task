let div = document.getElementById("rainbow");
let colors = document.querySelectorAll("div");

let colARR = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

for (let i = 0; i <= colARR.length; i++) {
  for (let j = i; j <= i; j++) {
    console.log(`${i}==${j}`);
    colors[i].addEventListener("mouseover", m1);

    function m1() {
      colors[i].style.backgroundColor = colARR[j];
      div.style.border = "2px solid";
    }
    colors[i].addEventListener("mouseout", m2);

    function m2() {
      colors[i].style.backgroundColor = "white";
    }
  }
}
