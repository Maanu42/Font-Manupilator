difference=0;
function preload(){
}
function setup(){
    video=createCapture(VIDEO);
    video.size(280,300);
    canvas= createCanvas(530,480);
    canvas.center();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Model is working...")
}
function gotPoses(results,error){
if(results.length>0){
    console.log(results);
    right=results[0].pose.rightWrist.x;
    left=results[0].pose.leftWrist.x;
    console.log("Right="+right);
    console.log("left"+left);
    difference=floor(left-right);
console.log("Size is"+difference);
draw();
}
else{
    console.error(error);
}
}
function draw(){
    background('white')
        textSize(difference);    
        text("I am testing this web page..",20,30);
}