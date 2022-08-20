var stylenode = document.createElement("style");

const node = document.createTextNode(
  ".dropdown-content {display:flex-root;position: absolute;background-color: #f1f1f1;min-width: 160px;overflow: auto;box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);z-index: 1;}.dropdown-content a {color: black;padding: 12px 16px;text-decoration: none;display: block;} #mySuggesDropDown a:hover {background-color: #ddd;}"
);
stylenode.appendChild(node);
document.getElementsByTagName("head")[0].appendChild(stylenode);

let elementlist = document.getElementsByTagName("input");

// setlisteners to input box

for (let i = 0; i < elementlist.length; i++) {
  let elem = elementlist[i];

  if (["input", "textbox", "email", "text"].includes(elem.type)) {
    elem.addEventListener("click", function () {
      setSuggestions(this);
    });
  }
}

let selectedTextBox;
function setSuggestions(inputField) {
    console.log(inputField)
    document.getElementById("mySuggesDropDown")!=null? document.getElementById("mySuggesDropDown").remove():"";
  const headnode = document.createElement("div");
  headnode.id = "mySuggesDropDown";
  headnode.className = "dropdown-content";
  let suggestions = ["Brain Copper", "xxx@elka.com", "325235233531531"];
  for (let i = 0; i < suggestions.length; i++) {
    let element = document.createElement("a");
    element.innerHTML = suggestions[i];
    element.setAttribute(
      "onclick",
      "setSelValuetoInput('" + suggestions[i] + "')"
    );
    headnode.appendChild(element);
  }
  selectedTextBox = inputField;
  inputField.parentNode.insertBefore(headnode, inputField.nextSibling);
}


function setSelValuetoInput(val) {
  selectedTextBox.value += val;

  document.getElementById("mySuggesDropDown").remove();
}

// var drop=<div id="mySuggesDropDown" class="dropdown-content">
//     <a href="#home">Home</a>
//     <a href="#about">About</a>
//     <a href="#contact">Contact</a>
//   </div>
