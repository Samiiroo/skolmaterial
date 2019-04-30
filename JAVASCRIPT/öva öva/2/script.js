//uppgift 2
//Skriv en funktion longestWord som tar en sträng som argument.
//Funktionen ska returnera det ord i strängen som har flest bokstäver.

/* Implement your solution here */
function longestWord(string) {
    let str = string.split(" ");
    let longest = 0;
    let word = null;
    str.forEach(function(str)
    {
        if (longest < str.length)
        {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("I am a computer and I like to calculate stuff"));

/* Do not touch the code below this line, but make sure the examples work */
if (longestWord("I am a computer and I like to calculate stuff") !== "calculate") console.error('Invalid solution');
else console.log('Solved!');
