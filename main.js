function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JKG8RY5n_/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error , results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;  


        document.getElementById("result_label").innerHTML ='I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML ='Accuracy - ' + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color ="rgb(" +random_number_r + "," + random_number_g + "," + random_number_b + ");"
        document.getElementById("result_confidence").style.color ="rgb(" +random_number_r + "," + random_number_g + "," + random_number_b + ");"


        img1=document.getElementById('al1');
        img2=document.getElementById('al2');
        img3=document.getElementById('al3');
        img4=document.getElementById('al4');

        if (results[0].label=="Cow"){

        img1.src= '1.gif';
        img2.src= '2.png';
        img3.src= '3.png';
        img4.src= '4.png';
        }
        else if (results[0].label=="Lion"){
        img1.src= '1.png';
        img2.src= '2.gif';
        img3.src= '3.png';
        img4.src= '4.png';
        }
          else if (results[0].label=="Frog"){
        img1.src= '1.png';
        img2.src= '2.png';
        img3.src= '3.gif';
        img4.src= '4.png';
        }
          else if (results[0].label=="Elephant") {
            img1.src= '1.png';
        img2.src= '2.png';
        img3.src= '3.png';
        img4.src= '4.gif';
        }
    }
}