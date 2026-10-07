const audioEngine = new AudioEngine(
    document.querySelectorAll("audio[data-sound]")
);

document.querySelectorAll("button[data-sound]").forEach((button) => {
    button.addEventListener("click", () => {
        audioEngine.play(button.dataset.sound);
    });
});