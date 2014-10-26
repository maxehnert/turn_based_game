// var Badguy = function (name){
//
//   this.name = name;
//   this.health = 100;
//   this.attack = function (attackee){
//     return attackee.health = attackee.health - _.random(2, 10);
//   };
//   this.special = function (attackee){
//     return attackee.health = attackee.health - _.random(10, 50);
//   };
// };
/////////////////////////////////////
var Badguy = function (options){
var special_pts, attack_pts;
  options = options || {};
  this.name = options.name;
  this.type = options.type;
  //this.image = options.image;
  this.health = 100;
  switch (this.type){
    case "1":
      attack_pts = _.random(4, 6);;
      special_pts = 5;
    break;
    case "2":
      attack_pts = _.random(1, 10);
      special_pts = 25;
    break;
    case "3":
      attack_pts = _.random(2, 8);
      special_pts = 30;
    break;
  };
  this.attack = function (attackee){
    return attackee.health = attackee.health - attack_pts;
  };
  this.special = function (attackee){
    return attackee.health = attackee.health - special_pts; //_.random(10, 50);
  };
};

////////////////////////////////////

var Goodguy = function (options){
  var special_pt, attack_pt;
  options = options || {};
  this.name = options.name;
  this.type = options.type;
//  this.image = options.image;
  this.health = 100;
  switch (this.type){
    case "1":
      attack_pt = _.random(4, 6);
      special_pt = 5;
    break;
    case "2":
      attack_pt = _.random(1, 10);
      special_pt = 25;
    break;
    case "3":
      attack_pt = _.random(2, 8);
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

$('.player_select button').on('click', function(event){
  event.preventDefault();

  var char_type= $(this).attr('name'),
      char_name= $(this).text();

      //char_image= $(this).attr('class');
  //create instance of good guy
  player = new Goodguy({
    name: char_name,
    type: char_type,
    //image: char_image,
  });

  //create instance of my bad guy
  // monster = new Badguy('bowser');
// }).on('mouseover', function(){
//   // $(this).on('mouseover', function(){
//     $('.weapon-hover').show("slow");
//   console.log('test');
//})
});

$('.opponent_select button').on('click', function(event){
    event.preventDefault();

    var char_type= $(this).attr('name'),
        char_name= $(this).text();

    //create instance of my bad guy
     monster = new Badguy({
       name: char_name,
       type: char_type,
     });


//get ready to fight
});

$('.b1').on('mouseover', function(){
  $('.weapon1').show();
}).on('mouseleave', function(){
  $('.weapon1').hide();
});

$('.b2').on('mouseover', function(){
  $('.weapon2').show();
}).on('mouseleave', function(){
  $('.weapon2').hide();
});

$('.b3').on('mouseover', function(){
  $('.weapon3').show();
}).on('mouseleave', function(){
  $('.weapon3').hide();
});

$('.b4').on('mouseover', function(){
  $('.weapon4').show();
}).on('mouseleave', function(){
  $('.weapon4').hide();
});

$('.b5').on('mouseover', function(){
  $('.weapon5').show();
}).on('mouseleave', function(){
  $('.weapon5').hide();
});

$('.b6').on('mouseover', function(){
  $('.weapon6').show();
}).on('mouseleave', function(){
  $('.weapon6').hide();
});

$('.start').on('click', function(event){
  event.preventDefault();

   //if( Goodguy.name === true && Badguy.name === true ){

  $('.welcome').toggle(0, function (){

    //set player/monster name and health
       $('.ggName').prepend(player.name).find('.ggHealth').text(player.health);
    $('.bgName').prepend(monster.name).find('.bgHealth').text(monster.health);


    $('.fight').toggle();
  });
// }
// else{
//   console.log('test');
//   alert("select two characters");
//
// }
});

//fight squence


$('#fight').on('click', function(event){
  event.preventDefault();

var who_attack = _.random(1,2);

if(who_attack == 1){

  var attack_type = _.random(1,20);

  if(attack_type == 1){
    player.special(monster);
  }
  else if(attack_type >= 2){
    player.attack(monster);
  }

}
else{
  var attack_type2 = _.random(1,20);


  if(attack_type2 == 1){
    monster.special(player);
  }
  else if(attack_type2 >= 2){
    monster.attack(player);
  }
}
///test code///
// var p_attack = function (){
//   var attack_type = _.random(1,20);
//
//
//   if(attack_type == 1){
//     player.special(monster);
//   }
//   else if(attack_type >= 2){
//     player.attack(monster);
//   }
// };
//
// var o_attack = function(){
//   var attack_type2 = _.random(1,20);
//
//
//   if(attack_type2 == 1){
//     monster.special(player);
//   }
//   else if(attack_type2 >= 2){
//     monster.attack(player);
//   }
// };

// $('#fight').toggle(function (){
//
//   var attack_type = _.random(1,20);
//
//
//   if(attack_type == 1){
//     player.special(monster);
//   }
//   else if(attack_type >= 2){
//     player.attack(monster);
//   }
// },
// function(){
//   var attack_type2 = _.random(1,20);
//
//
//   if(attack_type2 == 1){
//     monster.special(player);
//   }
//   else if(attack_type2 >= 2){
//     monster.attack(player);
//   }
// });
//end test code////

  $('.chair').show(1000, function(){

  });

  //good guy will attack the bad guy
  //bad guys health will decrease

  //player.attack(monster);
  $('.bgHealth').text(monster.health);

  //bad guy will retaliate
  //good guys health will decrease

  //monster.attack(player);
  $('.ggHealth').text(player.health);

//when one person reaches 0 the button stops and the attack window disappears and the winner window opens

  if(player.health <= 0){
    //someones dead
    $('.fight').toggle();
    $('.end_lose').toggle();
    $('#fight').attr('disabled', 'disabled');

  }
  else if(monster.health <= 0){
    //monster dead
    $('.fight').toggle();
    $('.end_win').toggle();
    $('#fight').attr('disabled', 'disabled');

  }
//displays the winners name in the new window
  // if(player.health > monster.health){
  //   $('.winner').prepend(player.name);
  // }
  // else if(player.health < monster.health){
  //   $('.winner').prepend(monster.name);
  // }
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
