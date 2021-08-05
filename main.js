Webcam.set({
    width :320,
    height: 300,
    image_format : 'jpeg',
    jpeg_quality: 90,

    constraints: {facingMode : 'environment'}
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'captured_img' src = '" + data_uri + "'> ";
    });
}

console.log('ml5 version' , ml5.version);
classifier = ml5.imageClassifier('MobileNet', model_loaded);

function model_loaded(){
    console.log("Model has been loaded succesfully !")
    }

function check(){
    img = document.getElementById("captured_img");
    classifier.classify(img, got_result)
}

function got_result(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result)
        document.getElementById("Answer").innerHTML = result[0].label;
    }
}