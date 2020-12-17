var quesClass = document.getElementsByClassName("ques");
console.log(quesClass);

for (let ques of quesClass) {
  let toggle = true;
  ques.addEventListener("click", (eve) => {
    let ans = eve.target.parentNode.nextElementSibling;
    let arrowSibling = eve.target.nextElementSibling;
    console.log(arrowSibling);
    if (toggle) {
      ques.style.color = "hsl(237, 12%, 33%)";
      ques.style.fontWeight = "600";
      arrowSibling.style.transform = "rotate(180deg)";
      ans.style.display = "block";
      toggle = false;
    } else {
      ques.style.color = "hsl(240, 6%, 50%)";
      ques.style.fontWeight = "400";
      arrowSibling.style.transform = "rotate(360deg)";
      ans.style.display = "none";
      toggle = true;
    }
  });
}
