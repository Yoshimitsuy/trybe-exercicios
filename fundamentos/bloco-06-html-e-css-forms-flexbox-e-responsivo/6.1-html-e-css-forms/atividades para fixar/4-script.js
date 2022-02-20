// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function clickANotRun(event) {
 event.preventDefault();
 console.log(HREF_LINK);

}
HREF_LINK.addEventListener('click', clickANotRun)

INPUT_CHECKBOX.addEventListener('click', (event2) => {
  event2.preventDefault();
});

INPUT_TEXT.addEventListener('keypress', (event3) => {
  const char = event3.key;
  if (char !== 'a') {
    event3.preventDefault();
    console.log(char);
  }
})