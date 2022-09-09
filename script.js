let form = document.querySelector("form");
form.onsubmit = submit;
function submit(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value === "yes") {
    alert("true, true");
  } else if (input.value === "Yes") {
    alert("true, true");
  } else {
    alert("No you are wrong, Zarin=Nerd");
  }
}
