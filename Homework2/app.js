const audioEngine = new AudioEngine(
    document.querySelectorAll("audio[data-sound]")
);

document.querySelectorAll("button[data-sound]").forEach((button) => {
    button.addEventListener("click", () => {
        audioEngine.play(button.dataset.sound);
    });
});
const keyBindings = new Map();

document.querySelectorAll("button[data-key][data-sound]").forEach((button) => {
    keyBindings.set(
        button.dataset.key.toLowerCase(),
        button.dataset.sound
    );
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

    audioEngine.play(soundName);
});