leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(500 , 500);
    canvas.position(560 , 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
    background('#fcf8eb');

    document.getElementById("text_size").innerHTML = "Width and Height of the text will be = " + difference + "px";
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX : " + leftWristX + " rightWristX : " + rightWristX + " difference : " + difference);
    }
}