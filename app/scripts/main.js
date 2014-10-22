




// function .onClick() {
//     clicks -= 1;
//     document.getElementById('.bad_health').innerHTML = clicks;
//     console.log('clicked me');
// };

$('#attack').on('click', function(){
n= 100;
  var action =  _.random(n-10, n);


  document.getElementById('bad_health').value = action;
});





// when i hit attack the number can drop by a possible 10 then increments so next time it can only go 10 lower than last time until it gets to 0.

//
// function modify_qty(val) {
//     var qty = document.getElementById('qty').value;
//     var new_qty =  _.random(0, 100)
//     };
//
//
//     document.getElementById('qty').value = new_qty;
//     return new_qty;
// }

//
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }





//Persons
// var heavy = New Good{
//
// };
//
// var engi = New Good{
//
// };
//
// var demo = New Bad{
//
// };
//
// var spy = New Bad{
//
// };
