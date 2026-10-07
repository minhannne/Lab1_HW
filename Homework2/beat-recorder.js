class BeatRecorder {
    constructor() {
        this.queue = [];
        this.isRecording = false;
        this.startedAt = 0;
    }

    start() {
        this.queue = [];
        this.startedAt = performance.now();
        this.isRecording = true;
    }

    stop() {
        this.isRecording = false;
    }

    record(soundName) {
        if (!this.isRecording) return;

        this.queue.push({
            sound: soundName,
            timestamp: performance.now() - this.startedAt
        });
    }

    dequeue() {
        return this.queue.shift();
    }

    getEvents() {
        return this.queue.map((event) => ({ ...event }));
    }
}