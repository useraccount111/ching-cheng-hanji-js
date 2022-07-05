var newAudio = document.createElement("audio");
    newAudio.innerHTML = "<source></source>"
    document.body.appendChild(newAudio);

var audEdit = document.getElementsByTagName("audio");
    audEdit[0].setAttribute("controls", "");
    audEdit[0].setAttribute("autoplay", "https://ly2015-fst-test-bucket-2.s3.eu-central-1.amazonaws.com/tom-ching-cheng-hanji.mp3");

var srcEdit = document.getElementsByTagName("source");
    srcEdit[0].setAttribute("src", "https://ly2015-fst-test-bucket-2.s3.eu-central-1.amazonaws.com/tom-ching-cheng-hanji.mp3");
    srcEdit[0].setAttribute("type", "audio/mp3");

var rootEdit = document.getElementsByTagName("html");
    rootEdit[0].setAttribute("class", " ovbvzt idc0_341");

var headWritingDiv = document.createElement("div");
    headWritingDiv.innerHTML = "<h1>listen to ching cheng hanji with this audio below</h1><br><br><br>";
    document.body.insertBefore(headWritingDiv, audEdit[0], newAudio);

var queryUppercase = document.querySelectorAll("h1");
    queryUppercase[0].style.textTransform = "uppercase";