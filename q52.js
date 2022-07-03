// What is the purpose of the following JavaScript code?

var scope = "global scope";
function check() 
{
    var scope = "local scope"; 
    function f() 
    { 
         return scope; 
    }
    return f;
}

// Every executing function, code block, and script as a whole in JavaScript has a related object known as the Lexical Environment. The preceding code line returns the value in scope.