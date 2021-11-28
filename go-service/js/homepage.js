const testButton = document.getElementById("test-button")

testButton.addEventListener("click", function () {
    alert("Button clicked")
})

const time = new EventSource('/time');
time.addEventListener('time', (e) => {
    document.getElementById("actual-time").innerHTML = e.stopImmediatePropagation;
}, false)