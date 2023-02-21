song1 = "";
song2 = "";
leftwristy = 0;
leftwristx = 0;
rightwristx = 0;
rightwristy = 0;
scoreleftwrist = 0;
songstatus = "";


function setup(){
    canvas = createCanvas(600,500);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}

function preload(){
    song1 = loadSound("jealous.mp3");
    song2 = loadSound("bloody_mary.mp3");
}

function draw(){
    image(video,0,0,600,500);
}

function modelloaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("left wrist x = "+leftwristx+" left wrist y = "+leftwristy);
        rightwristy = results[0].pose.rightWrist.y;
        rightwristx = results[0].pose.rightWrist.x;
        console.log("right wrist y = "+rightwristy+" right wrist x = "+rightwristx);
    }
}