// 1. Skriv en funktion longestWord(sentence) som tar en mening, sentence, och
// returnerar det längsta ordet i meningen
// longestWord(“I love JavaScript”); // “JavaScript”
//
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
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
console.log(longestWord("Samir Aboutaka"));
//


// 2. Skriv en funktion reverseString(str) som tar en sträng, str, och returnerar
// strängen baklänges
// reverseString(“Hello”); // “olleH”
function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}
console.log(reverseString("negnildemröfstebrA"));
function.palindrom(str){

}
