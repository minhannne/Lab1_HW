const eventTimeElement = document.querySelector("time[datetime]");
const countdownElement = document.getElementById("countdown");

const eventTime = Date.parse(eventTimeElement.dateTime);
let timerId = null;

function updateCountdown() {
    if (!Number.isFinite(eventTime)) {
        countdownElement.textContent = "Thời gian sự kiện không hợp lệ.";
        stopCountdown();
        return;
    }

    const remaining = eventTime - Date.now();

    if (remaining <= 0) {
        countdownElement.textContent = "Sự kiện đã bắt đầu!";
        stopCountdown();
        return;
    }

    const totalSeconds = Math.ceil(remaining / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    countdownElement.textContent =
        `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
}

function stopCountdown() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}

updateCountdown();

if (Number.isFinite(eventTime) && eventTime > Date.now()) {
    timerId = setInterval(updateCountdown, 1000);
}