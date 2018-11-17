let sumofmany=prompt("сколько у вас денег?");
let hmapple=prompt("сколько яблок вы купили?");
let hmbread=prompt("сколько штук хлеба вы взяли?");
let coinofapple=prompt("сколько стоит одно яблоко?");
let coinofbread=prompt("сколько стоит один хлеб?");
var haveEnough = function (sumofmany, hmapple, hmbread, coinofapple, coinofbread) {
     if (sumofmany>=(hmapple*coinofapple+hmbread*coinofbread)) 
     {
     	return ('Вам хватает денег на покупки');
     }
     else 
     {
     	return ('Вам не хватает денег');
     }
}

console.log(haveEnough(sumofmany, hmapple, hmbread, coinofapple, coinofbread));