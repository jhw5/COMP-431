


var time = 0;

function mainGame(){
    //initializing global variables
    var maxDistractions = 5;
    //grabbing the canvas
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');
    //7 common distractions
    var imgArr = ["fb.png",
        "instagram.jpg", "reddit.png",
        "snapchat.jpg", "tumblr.png", "twitter.jpg"];
    //moving difference horizontally
    var dx = 1;
    var dy = 1;
    //boolean values to see whether or not right/left arrow key is pressed, default -> false
    var rightArrow = false;
    var leftArrow = false;
    function keyDown(trigger){
        if (trigger.keyCode == 39){
            rightArrow = true;
        } else if (trigger.keyCode == 37){
            leftArrow = true;
        }
    }
    function keyUp(trigger){
        if (trigger.keyCode == 39){
            rightArrow = false;
        } else if (trigger.keyCode == 37){
            leftArrow = false;
        }
    }
    var fallingObj = [];
    var student = {
        x : canvas.width/2 - 15,
        y : canvas.height - 30,
        moveR : function(){
            student.x += 2;
        },
        moveL : function(){
            student.x -= 3;
        }
    };

    var grade = 100;

    function distractionObj(){
        return {
            x : Math.floor(Math.random() * (canvas.width + 1)),
            y : 0
        };
    }


    //creating event listeners for moving students
    document.addEventListener("keydown", keyDown, false);
    document.addEventListener("keyup", keyUp, false);

    for (i=1 ; i<=maxDistractions; i++){
        var randNum = Math.floor(Math.random() * 6);
        fallingObj.push({x : Math.floor(Math.random() * (canvas.width + 1)), y : -Math.floor(Math.random() * (canvas.width + 1)), imgSrc : imgArr[randNum]});
    }


    function showGrade(){
        ctx.font = "15px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Grade:" + grade, 8, 20);
        ctx.fillText("TIME:" + time, 8, 40);

    }
    function drawDistraction (singleDistraction){
        ctx.beginPath();
        ctx.rect(singleDistraction.x, singleDistraction.y, 30, 30);
        createDistractions(singleDistraction.x, singleDistraction.y, singleDistraction.imgSrc);
        ctx.fill();
        ctx.closePath();
    }

    function createDistractions(x, y, imgSrc) {
        var distImg = createImg(imgSrc);
        distImg.onload = function(){
            ctx.drawImage(distImg, x, y, 30, 30);
        }
    }

    function moveDistraction(singleDistraction){
        singleDistraction.y += dy;
        if (singleDistraction.y > canvas.height){
            singleDistraction.y = 0;
            singleDistraction.x = Math.floor(Math.random() * (canvas.width + 1));
        }
    }
    function collisionCheck(distraction) {
        if (student.x < (distraction.x + 30) && (student.x + 30) > distraction.x && student.y < (distraction.y + 30) && (student.y + 30) > distraction.y){
            grade -= 10;
            distraction.x = Math.floor(Math.random() * (canvas.width + 1));
            distraction.y = -Math.floor(Math.random() * (canvas.width + 1));
        }
    }
    function drawStudent() {
        ctx.beginPath();
        ctx.rect(student.x, student.y, 30, 30);

        // var studentImg = createImg("student_cartoon.jpg");
        var studentImg = new Image();
        studentImg.src = 'student_cartoon.jpg'
        studentImg.onload = function(){
            var pattern = ctx.createPattern(this, "repeat");
            ctx.fillStyle = pattern;
            ctx.fillRect(student.x, student.y, 30, 30);
        };
        ctx.fill();
        ctx.closePath();
    }

    function createImg(srcLink){
        var imag = new Image();
        imag.src = srcLink;
        return imag;
    }
    function moveStudent(){

        if (rightArrow && student.x <= canvas.width - 30){
            student.moveR();
        } else if (leftArrow && student.x >= 0) {
            student.moveL();
        }
    }

    var count = 0;
    function reDraw(){

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        showGrade();
        count++;
        console.log(count);
        drawStudent();

        moveStudent();


        fallingObj.forEach(
            function(distraction){
                drawDistraction(distraction);
            }
        );

        fallingObj.forEach(
            function(distraction){
                moveDistraction(distraction);
            }
        );
        fallingObj.forEach(
            function(distraction){
                collisionCheck(distraction);
            }
        );

        //restart
        if (grade <= 0){
            time = 0;
            grade = 100;
            alert("you died");
        }

        requestAnimationFrame(reDraw);

        //draw everything
        //check for collisions
        //move pieces

    }

    reDraw();



}
function updateTime(){
    time ++;
}

window.onload = function(){
    setInterval(updateTime, 1000);

    mainGame();
};

