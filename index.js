import inquirer from "inquirer";
let todos = []; // Array of objects with text property
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add to your todos?",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like to add more to your todos?",
            default: false, // Default to "no" for adding more items
        },
    ]);
    todos.push({ text: todoQuestions.firstQuestion }); // Push object with text property
    console.log("Added:", todos[todos.length - 1].text); // Print only the last added item's text
    condition = todoQuestions.secondQuestion;
}
console.log("Your todos:");
for (const todo of todos) {
    console.log(todo.text); // Print all to-do items after the loop
}
