function capture() {
    save("filterImage.png")
}
function preload() {
    mustache = loadImage("mustache3.png")
}
nx=0
ny=0
function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoded)
    poseNet.on("pose", gotPoses)
}
function draw() {
    image(video, 0, 0, 300, 300)
    image(mustache, nx, ny, 150, 75)
}
function modelLoded() {
    console.log("poseNet is ready");
}
function gotPoses(result) {
    console.log(result);
    if (result.length>0) {
        nx=result[0].pose.nose.x-70
        ny=result[0].pose.nose.y-20
    }
}