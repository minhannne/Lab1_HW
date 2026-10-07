const audioEngine = new AudioEngine(
    document.querySelectorAll("audio[data-sound]")
);
const recorder = new BeatRecorder();

const recordBtn = document.getElementById("record-btn");
const stopBtn = document.getElementById("stop-btn");
const playBtn = document.getElementById("play-btn");
const status = document.getElementById("record-status");
const beatList = document.getElementById("beat-list");

const keyBindings = new Map();
let isPlaying = false;

function hitDrum(soundName) {
    audioEngine.play(soundName);
    recorder.record(soundName);

    if (recorder.isRecording) {
        const events = recorder.getEvents();
        const latest = events[events.length - 1];

        const item = document.createElement("li");
        item.textContent =
            `${latest.sound} — ${Math.round(latest.timestamp)} ms`;
        beatList.appendChild(item);
    }
}

document.querySelectorAll("button[data-sound]").forEach((button) => {
    keyBindings.set(
        button.dataset.key.toLowerCase(),
        button.dataset.sound
    );

    button.addEventListener("click", () => {
        hitDrum(button.dataset.sound);
    });
});

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey || event.altKey || event.metaKey) return;

    const target = event.target;
    if (
        target instanceof HTMLElement &&
        (target.matches("input, textarea, select") || target.isContentEditable)
    ) {
        return;
    }

    const soundName = keyBindings.get(event.key.toLowerCase());
    if (!soundName) return;

    event.preventDefault();
    if (event.repeat) return;

    hitDrum(soundName);
});

recordBtn.addEventListener("click", () => {
    if (isPlaying) return;

    recorder.start();
    beatList.replaceChildren();

    recordBtn.disabled = true;
    stopBtn.disabled = false;
    playBtn.disabled = true;
    status.textContent = "Recording...";
});

stopBtn.addEventListener("click", () => {
    recorder.stop();

    recordBtn.disabled = false;
    stopBtn.disabled = true;
    playBtn.disabled = recorder.getEvents().length === 0;
    status.textContent = "Recording stopped.";
});

playBtn.addEventListener("click", () => {
    if (isPlaying || recorder.isRecording) return;

    // Sao chép để phát lại mà vẫn giữ bản ghi gốc.
    const playback = new BeatRecorder();
    playback.queue = recorder.getEvents();

    if (playback.queue.length === 0) return;

    isPlaying = true;
    recordBtn.disabled = true;
    playBtn.disabled = true;
    status.textContent = "Playing recording...";

    const startedAt = performance.now();

    function playNext() {
        // Lấy tiếng được ghi sớm nhất ra trước: FIFO.
        const beat = playback.dequeue();

        if (!beat) {
            isPlaying = false;
            recordBtn.disabled = false;
            playBtn.disabled = false;
            status.textContent = "All recorded beats played.";
            return;
        }

        const elapsed = performance.now() - startedAt;
        const delay = Math.max(0, beat.timestamp - elapsed);

        setTimeout(() => {
            audioEngine.play(beat.sound);
            playNext();
        }, delay);
    }

    playNext();
});