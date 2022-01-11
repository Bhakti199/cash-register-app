const billAmount = document.querySelector("#amount-input");
const cashGiven = document.querySelector("#cash-input");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const cashTable = document.querySelector("#show-cash-table");
const proceedBtn = document.querySelector("#proceed-button");
const secondPart = document.querySelector("#second-part");
 

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
proceedBtn.style.display = "block";
secondPart.style.display = "none"; 

const proceedBtnClickHandler = () => {
  
    cashGiven.value = null;
    // secondPart.style.display = "none";    
    const bill = Number(billAmount.value);
    if(bill  > 0){
        hideMessage();
       
        secondPart.style.display = "block";
       proceedBtn.style.display = "none";
        cashTable.style.display = "none";
    }else{
        console.log("here");
        showMessage(" Invalid input.");
        
        secondPart.style.display = "none";    
        proceedBtn.style.display = "block"; 

    }
}

proceedBtn.addEventListener("click"  , proceedBtnClickHandler);

const validateBillAndCashAmount = () => {
   hideMessage();
const bill = Number(billAmount.value);
const cash = Number(cashGiven.value);
secondPart.style.display = "block";
  if (cash > 0 && bill > 0) {
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
        showMessage("Do you wanna wash plates?");
        cashTable.style.display = "none";
        
    }
  } else if(bill < 0 || bill === 0){
    console.log("invalid");
    showMessage(" Invalid input.");
    proceedBtn.style.display = "block"; 
    secondPart.style.display = "none";
    cashTable.style.display = "none";
    
  }else {
    console.log("invalid");
    showMessage(" Invalid input.");
   
    cashTable.style.display = "none";
    
  }
    
  };

checkButton.addEventListener("click",validateBillAndCashAmount);

const calculateChange = amountToBeReturned => {
    availableNotes.map((num, index) => {
      const numberOfNotes = Math.trunc(amountToBeReturned / num);
      amountToBeReturned = amountToBeReturned % num;
      noOfNotes[index].innerText = numberOfNotes;
    })
}

const showMessage = msg => {
    message.style.display= "";
    message.innerText = msg;
}
const hideMessage = () => {
   message.style.display = "none";
}