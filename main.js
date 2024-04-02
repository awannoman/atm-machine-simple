import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Enter your pin number?"
});
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct");
}
else {
    console.log("Pin is incorrect");
}
let operationAnswer = await inquirer.prompt({
    name: "operation",
    type: "list",
    message: "please select option",
    choices: ["withdraw", "checkbalance"]
});
if (operationAnswer.operation === "withdraw") {
    let withdrawAnswer = await inquirer.prompt({
        name: "withdraw",
        type: "number",
        message: "Enter the amount to withdraw",
    });
    myBalance -= withdrawAnswer.withdraw;
    console.log(`your balance is ${myBalance}`);
    console.log("Thank you for using our ATM");
}
if (operationAnswer.operation === "checkbalance") {
    console.log(`your balance is ${myBalance}`);
    console.log("Thank you for using our ATM");
}
