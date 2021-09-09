const billAmount = document.querySelector("#amount-input");
const cashGiven = document.querySelector("#cash-input");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const cashTable = document.querySelector("#show-cash-table");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click",validateBillAndCashAmount);
function validateBillAndCashAmount()
{
   hideMessage();
const bill = Number(billAmount.value);
const cash = Number(cashGiven.value);
  if (bill > 0 && cash > 0) {
    if (cash > bill) {
      const amountToBeReturned = cash - bill;
      calculateChange(amountToBeReturned);
      cashTable.style.display = "flex";
    } 
    if(cash === bill){
         showMessage("bill paid");
         cashTable.style.display = "none";
    }
    if(cash < bill){
        showMessage("Do you wanna wash plates");
        cashTable.style.display = "none";
    }
  } else {
    showMessage(" Invalid input.");
    cashTable.style.display = "none";
    
  }
};

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}
function showMessage(msg){
    message.style.display= "";
    message.innerText = msg;
}
 function hideMessage() {
   message.style.display = "none";
}