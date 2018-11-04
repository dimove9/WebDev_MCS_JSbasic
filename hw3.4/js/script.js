var x = prompt('сколько у вас с собой есть денег?')
var y = prompt('сколько вы купили яблок?')
var h = prompt('сколько вы купили батонов хлеба?')
var o = prompt('сколько стоит одно яблоко?')
var p =  o*y
var bh = prompt('сколько стоит один батон хлеба?')
var l = h*bh
var s =  p+l
var b =console.log(x-s)

var itog = Boolean(x>=y*o+h*bh)
document.write(itog)