const billAmount = document.querySelector("#amount-input");
const cashGiven = document.querySelector("#cash-input");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click",validateBillAndCashAmount);
function validateBillAndCashAmount()
{
//    hideMessage();
const bill = Number(billAmount.value);
const cash = Number(cashGiven.value);
  if (bill > 0) {
    if (cash > bill) {
      const amountToBeReturned = cash - bill;
      calculateChange(amountToBeReturned);
    } else {
     message.innerText = "Do you wanna wash plates??";
    }
  } else {
    message.innerText=" Invalid bill amount.";
  }
};

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

//  function hideMessage() {
//    message.style.display = "none";
// }