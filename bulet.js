
///////////////////////////////////////////
var speed = 250;
var counter = -1;

var bullets = [];
var movingControl;
var countBullet = -1
var nummBullet;
var summ=0 ;
var speedBullet = 1000;
var goal = Math.floor(Math.random()*200) ;
var left=0;
///////////////////////////////////
///////////////////////////////////\

var score = document.getElementById("score");
score.innerHTML=summ;
var startBullet = document.getElementById("startBullet");
startBullet.addEventListener('click',
    () => {

        let newDiv = document.createElement("div");
        countBullet++;
        nummBullet = countBullet;
        newDiv.setAttribute("id", countBullet);
        newDiv.setAttribute("class", "bullet");

        document.body.appendChild(newDiv);
        let bullet = createBullet();
        
newDiv.addEventListener('click',()=>{
    summ+=bullet.power;
    score.innerHTML=summ;
    newDiv.style.display="none";
})
        // let moveForward=
        // setInterval(moveBullet, 2000);
        //movingControl.push(moveForward);
        clearInterval(movingControl);
        movingControl =
            setInterval(
                moveAllBulets
                , speedBullet);

    }

)
////////////////////////
function moveAllBulets() {
    for (let i = 0; i < bullets.length; i++) {
    
        moveBullet(i);
    }
    calc_goal_left();
}
/////////////////////////////
function moveBullet(bullet) {
    
    if (typeof (bullet) == "undefined") {
        currentBullet = bullets.length - 1;
    } else {
        currentBullet = bullet;
    }


    let testBullet = document.getElementById(String(currentBullet));
    if (bullets.length > 0) {

        bullets[currentBullet].coorX -= 10;
       
        testBullet.innerHTML = bullets[currentBullet].power;
       

        testBullet.style.right = String(bullets[currentBullet].coorX) + "px";
        testBullet.style.bottom = String(bullets[currentBullet].coorY) + "px";
    
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
return bullet;
}
 
///////////////////////////////
function calc_goal_left(){
document.getElementById("goal").innerHTML="GOAL :<br/> "+goal;
left = goal - summ;
document.getElementById("left").innerHTML="LEFT : <br/>"+left;
}












