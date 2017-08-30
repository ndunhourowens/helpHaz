$(document).ready(function(){
    $('.bkgrnd').on('click', function(){
        $('.fly').fadeIn('fast');
    });
    $('#hiddenDiv').on('click', function(event){
        console.log(event);
    });

    var c = document.getElementById("imgBox");
    var rect = c.getBoundingClientRect();
    var ctx = c.getContext("2d");

    // ball
    var ballRadius = 20;
    var x = c.width/2;
    var y = c.height-30;
    // var x = 100;
    // var y = 100;
    var dx = 1;
    var dy = -1;

    // collision Block
    var blockX = 180;
    var blockY = 180;
    var blockH = 80;
    var blockW = 80;


    var numOfFlies = 5;
    var level = 1;
    var squashedEm = 1;
    var touched = 1;

    c.addEventListener('click', squashed);

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    }

    function drawBoundry() {
        ctx.beginPath();
        ctx.rect(blockX,blockY,blockH,blockW);
        ctx.fillStyle = "#e542f4";
        ctx.fill();
        ctx.closePath();

    }

    function collisionOfBoundry(){

        if(x > blockX && x < blockX + blockW && y > blockY && y < blockY + blockH){
            $('#bark').css('visibility', 'visible');
        } else{
            $('#bark').css('visibility', 'hidden');
        }

    }

    // function levelUp(){
    //     level += 1;
    //     numOfFlies += 5;
    //     dx += 1;
    //     dx += 1;
    //     $('#level').text(level);
    // }

    function squashed(){
        console.log('squashed')
        var evtX = event.layerX;
        var evtY = event.layerY;
        // var outSide = y + 20;
            console.log('x and y', x+ballRadius + ' ' + (y+ballRadius))
            console.log('evtX and evtY', evtX + ' ' + evtY)

        if( x-40 < evtX && y-40 < evtY && x+40 > evtX && y+40 > evtY ){
            console.log('in circle')

        }

  //  &&

  // var clickHitCircle =

  //   Math.sqrt(
  //     Math.pow((evtX- x), 2) +
  //     Math.pow((evtY - y), 2)
  //   ) < ballRadius
  // ;

  // console.log('hit', clickHitCircle)
        // left side of circle - outSide < evtX





        // squashedEm += 1;
        // var remainder = numOfFlies - squashedEm;
        // $('#squashed').text(remainder);
    }

    function draw() {
        ctx.clearRect(0, 0, c.width, c.height);
        drawBall();
        drawBoundry();
        collisionOfBoundry();
        // drawBricks();


        if(x + dx > c.width-ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if(y + dy > c.height-ballRadius || y + dy < ballRadius) {
            dy = -dy;
        }

        x += dx;
        y += dy;
    }

    setInterval(draw, 10);

});