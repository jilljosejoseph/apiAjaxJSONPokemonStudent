console.log(pokemon[0].moves);

$("#bulbasaur h1").text(pokemon[0].name);
$("#bulb-img").html(`<img src="${pokemon[0].image}">`);

$("#ivysaur h1").text(pokemon[1].name);
$("#ivy-img").html(`<img src="${pokemon[1].image}">`);

$("#venusaur h1").text(pokemon[2].name);
$("#ven-img").html(`<img src="${pokemon[2].image}">`);

$("#charmander h1").text(pokemon[3].name);
$("#char-img").html(`<img src="${pokemon[3].image}">`);

$("#charmeleon h1").text(pokemon[4].name);
$("#charm-img").html(`<img src="${pokemon[4].image}">`);

for(var i = 0; i < pokemon[0].moves.length; i++){
  $("#bulb-move").append("<li>"+pokemon[0].moves[i]+"</li>")
}
for(var i = 0; i < pokemon[1].moves.length; i++){
  $("#ivy-move").append("<li>"+pokemon[1].moves[i]+"</li>")
}
for(var i = 0; i < pokemon[2].moves.length; i++){
  $("#ven-move").append("<li>"+pokemon[2].moves[i]+"</li>")
}
for(var i = 0; i < pokemon[3].moves.length; i++){
  $("#char-move").append("<li>"+pokemon[3].moves[i]+"</li>")
}
for(var i = 0; i < pokemon[4].moves.length; i++){
  $("#charm-move").append("<li>"+pokemon[4].moves[i]+"</li>")
}
