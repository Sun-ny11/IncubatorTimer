let timerId; // переменная, которая будет хранить ID таймера


const startButton = document.getElementById("start");
startButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
    clearInterval(timerId)
    timerId = setInterval(updateClock, 1); // запускаем  updateClock() каждую секунду
});


const stopButton = document.getElementById("stop");
stopButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    clearInterval(timerId); // останавливаем таймер
});


function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours = zero(now.getHours())
    const minutes = zero(now.getMinutes())
    const seconds = zero(now.getSeconds())
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}

function zero (i) {
    return (i<10)? "0"+i : i
};