var timeCount = 0;

function TimeDisplay() {
    timeCount += 1;
    document.getElementById("timeCount").innerText = timeCount
}

setInterval(TimeDisplay, 1000)

function locationSet() {
    window.location = "student2/main/student2_main.html";
}

setTimeout(locationSet, 4000);