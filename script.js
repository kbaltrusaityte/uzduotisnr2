var vardas1 = "Jon Snow"
var vardas2 = "Cersei Lannister"
var vardas3 = "Daenerys Targaryen"
var vardas4 = "Theon Greyjoy"
var vardas5 = "Tyrion Lannister"
var vardas6 = "Arya Stark"

var vardai = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"]

console.log(vardai[0])
console.log(vardai[5])

var LastItemIndex = vardai.length - 1 

let inputNumber = prompt('Įveskite skaičių nuo 1 iki 6');

console.log(vardai[inputNumber-1]);