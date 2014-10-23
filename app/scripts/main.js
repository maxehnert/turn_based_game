var Badguy = function (name){

  this.name = name;
  this.health = 100;
  this.attack = function (attackee){
    return attackee.health = attackee.health - _.random(2, 10);
  };
  this.special = function (attackee){
    return attackee.health = attackee.health - _.random(10, 50);
  };
};


var Goodguy = function (options){
  var special_pt, attack_pt;
  options = options || {};
  this.name = options.name;
  this.type = options.type;
  this.health = 100;
  switch (this.type){
    case "1":
      attack_pt = 10;
      special_pt = 10;
    break;

    case "2":
      attack_pt = 15;
      special_pt = 25;
    break;
    case "3":
      attack_pt = 5;
      special_pt = 30;
    break;
  };
  this.attack = function (attackee){
    return attackee.health = attackee.health - attack_pt;
  };
  this.special = function (attackee){
    return attackee.health = attackee.health - special_pt;
  };
};

//starting the game
var player, monster;

$('.welcome button').on('click', function(event){
  event.preventDefault();

  var char_type= $(this).attr('name'),
      char_name= $(this).text();

  //create instance of good guy
  player = new Goodguy({
    name: char_name,
    type: char_type,

  });

  //create instance of my bad guy
   monster = new Badguy('bowser');
//get ready to fight
  $('.welcome').toggle(0, function (){

    //set player/monster name and health
       $('.ggName').prepend(player.name).find('.ggHealth').text(player.health);
    $('.bgName').prepend(monster.name).find('.bgHealth').text(monster.health);


    $('.fight').toggle();
  });
});

//fight squence

//issues: winner not random and health goes below 0
$('#fight').on('click', function(event){
  event.preventDefault();

var attack_type = _.random(1,2);

if(attack_type == 1){
  player.attack(monster);
}
else{
  player.special(monster);
}


  //good guy will attack the bad guy
  //bad guys health will decrease
  player.attack(monster);
  $('.bgHealth').text(monster.health);

  //bad guy will retaliate
  //good guys health will decrease
  monster.attack(player);
  $('.ggHealth').text(player.health);

  if(player.health <= 0){
    //someones dead
    $('.fight').toggle();
    $('.end').toggle();
    $('#fight').attr('disabled', 'disabled');

  }
  else if(monster.health <= 0){
    //monster dead
    $('.fight').toggle();
    $('.end').toggle();
    $('#fight').attr('disabled', 'disabled');

  }

  if(player.health > monster.health){
    $('.winner').text(player.name);
  }
  else if(player.health < monster.health){
    $('.winner').text(monster.name);
  }
});








//
//
// if(Player.health == 0){
//   ('something').addClass('class that pops up enemy win window');
// }
//
// $('#attack').on('click', function(){
//   Player.attack;
//   document.getElementById('bad_health').value = Enemy.health;
// });
//
// var Player = function (options) {
//   this.name = options.name;
//   this.health = options.health;
//   this.attack = function (target) {
//     target.health = target.health - _.random(10);
//   };
// };
//
// var Enemy = function (options) {
//   this.name = options.name;
//   this.health = options.health;
//   this.attack = function (target) {
//     target.health = target.health - _.random(10);
//   };
// };
//
// var player1 = new Player({
//   name:'Max',
//   health: 100,
//   });
// var player2 = new Player({
//   name:'Jack',
//   health: 100,
//   });
// var monster1 = new Enemy({
//   name:'jim',
//   health: 100,
//   });
// var monster2 = new Enemy({
//   name:'john',
//   health: 100,
//   });

// ///////////////////////////////////
// var Dog = function (options){
//   options = options || {};
//   this.color = options.color;
//   this.hungry = (options.hungry=== undefined) ? true : options.hungry;
//   this.status = 'normal';
// };
//
// var Human = function (options){
//   options = options || {};
//   this.cool = (options.cool=== undefined) ? false : options.cool;
//   this.pet = function (target){
//     this.status = 'happy';
//   };
//
//   this.feed = function(dog){
//     dog.hungry = false;
//   };
// };
//
// var sadie = new Dog({
//   color: "black",
//   hungry: false
// });
//
// var moonshine = new Dog({
//   color: "blue-red"
// });
//
// var atticus = new Dog();
//
// var mason = new Human();
//
// var julia = new Human({
//   cool: true
// });


// when i hit attack the number can drop by a possible 10 then increments so next time it can only go 10 lower than last time until it gets to 0.
