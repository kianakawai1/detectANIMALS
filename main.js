cat = 0
dog = 0
lion = 0
cow = 0

function startMic() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wRYRudgZT/model.json', modelReady);
}
function modelReady() {
    console.log("model ready log");

    classifier.classify(gotResults);

}

function gotResults(error, results) {
    console.log("got results log")

    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        random_r = Math.floor(Math.random() * 255) + 1;
        random_g = Math.floor(Math.random() * 255) + 1;
        random_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("detectedAnimal").innerHTML = "I can hear -" + results[0].label;
        document.getElementById("detectedAnimal").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";

        var IMG = document.getElementById("ear");

        console.log("results[0].label: " + results[0].label);

        if (results[0].label == "DOG BARK") {
            IMG.src = 'dog2.png';
            dog = dog + 1;
        }
        else if (results[0].label == "CAT MEOW") {
            IMG.src = 'cat2.png';
            cat = cat + 1;
        }
        else if (results[0].label == "COW MOO") {
            IMG.src = 'cow2.png';
            cow = cow + 1;
        }
        else if (results[0].label == "LION ROAR") {
            IMG.src = 'lion2.png';
            cow = cow + 1;
        }
        else {
            //IMG.src = 'ear.jpg';
        }
    }
}
