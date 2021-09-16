video = "";
check = "";
objects = [];

function preload(){
    video = createVideo("video.mp4");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Is Loaded!");
    check = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw(){
    image(video, 0, 0, 300, 300);
    if(check != ""){
        objectDetector.detect(video, gotResults);
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("objects").innerHTML = "Number of objects detected are : " + objects.length;
            percent = floor(objects[i].confidence*100);
            fill("red");
            text(objects[i].label + " " + percent + " %", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    objects = results;
    console.log(objects);
}