var keysPressed = [];
var brother;
var canvas;
var context;

window.onload = function(){
    startUp();
}

$(document).keydown(function(e){
    var haskey = keysPressed[e.keyCode];
    if(!haskey){
        keysPressed[e.keyCode] = true;
    }
});

$(document).keyup(function(e){
    keysPressed[e.keyCode] = false;
});

function startUp(){
    canvas = document.getElementById('game_canvas');
    context = canvas.getContext('2d');
    brother = new Brother(10,10);
    window.setInterval(function(){ gameLoop();}, 15);
    window.setInterval(function(){ movimentaBrother();}, 200);
    window.setInterval(function(){ setDirecao();}, 1);
}

function gameLoop(){
    clearCanvas(canvas);
    drawBrother();
}

function movimentaBrother(){
    brother.src_x += 200;
    if (brother.src_x >= 800) {
        brother.src_x = 0;
    }
}

function setDirecao(){
    if (keysPressed[37]){
        brother.src_y = 200; //left
    }
    if(keysPressed[39]){
        brother.src_y = 0; //rigth
    }
}

function Brother(des_x, des_y){
    var sprite = new Image();
    sprite.src = "images/walking.png";
    var brother = {
        src_x : 0,      // posicao inicial x do corte na imagem
        src_y : 0,      // posicao inicial y do corte na imagem
        src_w : 200,     // largura do corte / eixo x
        src_h : 200,     // altura do corte / eixo y
        des_x : des_x,  // posicao inicial x onde a imagem sera renderizada
        des_y : des_y,  // posicao inicial y onde a imagem sera renderizada
        des_w : 200,     // largura do corte / eixo x
        des_h : 200,     // altura do corte / eixo y
        sprite : sprite,
    };
    return brother;
    /*
    return{
        x:x,
        y:y,
        sprite:sprite,
        move:function(keysPressed){
            var next_y = this.y + (keysPressed[38] ? -1 : 0) + //up
                      (keysPressed[40] ?  1 : 0);  //down
            var next_x = this.x + (keysPressed[37] ? -1 : 0) + //left
                      (keysPressed[39] ?  1 : 0); //rigth
            if (next_y >= 0 && next_y < 385) this.y = next_y;
            if (next_x >= 0 && next_x < 585) this.x = next_x;
        }
    }
    */
}

function drawBrother()
{
    context.drawImage(brother.sprite, brother.src_x, brother.src_y, brother.src_w, brother.src_h, brother.des_x, brother.des_y, brother.des_w, brother.des_h);
}

function clearCanvas(canvas){
    canvas.width = canvas.width;
}
