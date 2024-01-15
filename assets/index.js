var registerForm = document.querySelector(".registerForm");
var convertResult;
registerForm.onsubmit = function (e) {
  e.preventDefault();
  var elements = e.target.elements;
  var amount = elements["amount"].value;
  var currency = elements["exchange"].value;
  if (currency == "dollar") {
    convertResult = amount * 3.75;
  } else if (currency == "dinar") {
    convertResult = amount * 5.29;
  } else {
    convertResult = amount;
  }
  document.querySelector("p").textContent = convertResult;
};
