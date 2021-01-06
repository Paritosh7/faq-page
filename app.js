var divFaqs = document.getElementById("div-faqs");

/** Since elements need to be handled in a similar way,
 *  then instead of assigning handler to each of them,
 *  we put a single handler to the ancestor (divFaqs here).
 *  Using Event Bubbling (Event delegation)
 */
divFaqs.addEventListener("click", (eve) => {
  let div = eve.target.closest("div");

  if (div.classList.contains("div-ques")) {
    let ans = div.nextElementSibling;
    let question = div.firstElementChild;
    let arrow = div.lastElementChild;
    showAnswer(ans, question, arrow);
  } else return;
});

/** handles displaying answer using classList toggle method
 * for adding removing classes
 */
function showAnswer(ans, question, arrow) {
  ans.classList.toggle("ans_style_active");
  question.classList.toggle("ques_style_active");
  arrow.classList.toggle("arrow_transform");
}
