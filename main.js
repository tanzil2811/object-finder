function setup()
{
    canvas = createCanvas(640, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(620, 360);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function draw()
{
    image(video, 0, 0, 620, 360);
}