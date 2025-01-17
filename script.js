document.addEventListener("DOMContentLoaded", function () {

    do {

        var balance = prompt("Enter Your Balance :");
        if (balance === null) {
            alert("Please Enter A Starting Balance. This Cannot be Empty");
        }
        if (balance < 0) {
            alert("Enter a Positive Balance.");
        }
        if (isNaN(balance)) {
            alert("Enter a Numeric Balance Only!");
        }

        balance = parseFloat(balance);
        displayBalance();

    }
    while (isNaN(balance) || balance < 0);

    // Displaying the Balance in Main Balance
    function displayBalance() {
        document.getElementById("updating_balance").innerHTML = "₹" + balance;
    }

    // Displaying the Balance in Income Balance
    function displayIncomeBalance() {
        document.getElementById("income_balance").innerHTML = "₹" + income_balance;
    }

    // Displaying the Balance in Expense Balance
    function displayExpenseBalance() {
        document.getElementById("expense_balance").innerHTML = "₹" + expense_balance;
    }

    // Clear the Inputs
    function clear_feild(){
        document.getElementById("amount_recieve").value = "";
        document.getElementById("remarks_recieve").value = "";
    }

    var income_balance = 0;
    var expense_balance = 0;

    // Adding Balance Using Income Button
    document.getElementById("income_btn").addEventListener("click", function () {

        var amount_recieved = parseFloat(document.getElementById("amount_recieve").value);

        if (isNaN(amount_recieved) || amount_recieved <= 0) {
            alert("Please Enter A Valid Amount.");
            return;
        }

        balance += amount_recieved;
        income_balance += amount_recieved;
        displayBalance();
        displayIncomeBalance();
        clear_feild();

    });


    // Adding Expense 
    document.getElementById("expense_btn").addEventListener("click",function(){
        var amount_recieved = parseFloat(document.getElementById("amount_recieve").value);

        if (isNaN(amount_recieved) || amount_recieved <= 0) {
            alert("Please Enter A Valid Amount.");
            return;
        }

        if(amount_recieved > balance ){
            alert("Expense Cannot be Greater than Balance Amount.");
            return;
        }

        balance -= amount_recieved;
        expense_balance += amount_recieved;

        displayBalance();
        displayExpenseBalance();
        clear_feild();
    });



});






