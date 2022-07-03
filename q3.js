// Why do we use the word “debugger” in javascript?

// The debugger for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off, requiring the user to report faults. The remaining section of the code should stop execution before moving on to the next line while debugging.

let x = 15 * 5;
debugger;
document.getElementById("demo").innerHTML = x;