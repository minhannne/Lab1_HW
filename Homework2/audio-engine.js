class AudioEngine {
    constructor(audioElements) {
        this.sources = new Map();
        this.activeVoices = new Set();

        for (const audio of audioElements) {
            this.sources.set(audio.dataset.sound, audio);
        }
    }

    play(soundName) {
        const source = this.sources.get(soundName);

        if (!source) {
            console.warn(`Unknown sound: ${soundName}`);
            return;
        }

        const voice = source.cloneNode(true);
        this.activeVoices.add(voice);

        const cleanup = () => {
            this.activeVoices.delete(voice);
        };

        voice.addEventListener("ended", cleanup, { once: true });
        voice.addEventListener("error", cleanup, { once: true });

        voice.play().catch((error) => {
            cleanup();
            console.error(`Cannot play ${soundName}:`, error);
        });
    }
}