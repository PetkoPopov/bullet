
///////////////////////////////////////////
var speed = 250;
var counter = -1;

var bullets = [];
var movingControl;
var countBullet = -1
var nummBullet;
var summ=0 ;
///////////////////////////////////
///////////////////////////////////\

var score = document.getElementById("score");

var startBullet = document.getElementById("startBullet");
startBullet.addEventListener('click',
    () => {

        let newDiv = document.createElement("div");
        countBullet++;
        nummBullet = countBullet;
        newDiv.setAttribute("id", countBullet);
        newDiv.setAttribute("class", "bullet");
        document.body.appendChild(newDiv);
        createBullet();
        // let moveForward=
        // setInterval(moveBullet, 2000);
        //movingControl.push(moveForward);
        clearInterval(movingControl);
        movingControl =
            setInterval(moveAllBulets, 1000);

    }

)
////////////////////////
function moveAllBulets() {
    for (let i = 0; i < bullets.length; i++) {
    
        moveBullet(i);
    }
}
/////////////////////////////
function moveBullet(bullet) {
    // let l = document.getElementsByTagName("div").length - 1;

    if (typeof (bullet) == "undefined") {
        currentBullet = bullets.length - 1;
    } else {
        currentBullet = bullet;
    }


    let testBullet = document.getElementById(String(currentBullet));
    if (bullets.length > 0) {

        bullets[currentBullet].coorX -= 10;
       
        testBullet.innerHTML = bullets[currentBullet].power;
       

        testBullet.style.right = String(bullets[currentBullet].coorX) + "px";//scoor ;
        testBullet.style.bottom = String(bullets[currentBullet].coorY) + "px";
        testBullet.addEventListener("click", () => {
            testBullet.style.display="none";
            summ+=bullets[currentBullet].power;   
            score.innerHTML=summ;
               
        })
    }
}


const bulletStop = document.getElementById("stopBullet");
bulletStop.addEventListener("click", () => {

    clearInterval(bullets.pop());

    counter--;
    countBullet--;

})

function createBullet() {
    // counter++;
    let bullet = {

        power: Math.floor(Math.random() * 60),
        color: 'red',
        coorX: 700,
        coorY: Math.floor(Math.random() * 600),
        countBullet: nummBullet
    };
    bullets.push(bullet);

}













