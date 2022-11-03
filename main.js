rangerImgWidth= 170;
rangerImgHeight= 170;

playerX=20;
playerY=20;

function newImage(getImage){
    Image.fromURL(getImage, function(Img){
        blockImgObj=Img;

        blockImgObj.scaleToWidth(blockImgWidth);
        blockImgObj.scaleToHeight(blockImgHeight);
        blockImgObj.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockImgObj);
    });
}



window.addEventListener("keydown", myKeydown);
function myKeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift key pressed together");
        blockImgWidth=blockImgWidth+10;
        blockImgHeight=blockImgHeight+10;
        document.getElementById("currentWidth").innerHTML=blockImgWidth;
        document.getElementById("currentHeight").innerHTML=blockImgHeight;
    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift key pressed together");
        blockImgWidth=blockImgWidth-10;
        blockImgHeight=blockImgHeight-10;
        document.getElementById("currentWidth").innerHTML=blockImgWidth;
        document.getElementById("currentHeight").innerHTML=blockImgHeight;
    }
    if(keyPressed == '82'){
        document.getElementById
        ("powerR").
        src="RedPowerRanger.jpg"
        //newImage('RedPowerRanger.jpg');
        console.log("R");
    }
    if(keyPressed == '66'){
        document.getElementById
        ("powerR").
        src="BlackPowerRanger.png"
        //newImage('BlackPowerRanger.png');
        console.log("B");
    }
    if(keyPressed == '89'){
        document.getElementById
        ("powerR").
        src="YellowPowerRanger.jpg"
        //newImage('YellowPowerRanger.jpg');
        console.log("Y");
    }
    if(keyPressed == '71'){
        document.getElementById("powerR").src="GreenPowerRangerBackground.jpg";
        //newImage('GreenPowerRanger.jpg');
        console.log("G");
    }
    if(keyPressed == '80'){
        document.getElementById
        ("powerR").
        src="PinkPowerRanger.jpg"
        //newImage('PinkPowerRanger.jpg');
        console.log("P");
    }
}


