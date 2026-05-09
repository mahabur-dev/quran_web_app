type Listener = (playingKey: string | null) => void;

class AudioManager {
  private audio: HTMLAudioElement | null = null;
  private currentKey: string | null = null;
  private listeners: Set<Listener> = new Set();

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.currentKey));
  }

  getPlayingKey(): string | null {
    return this.currentKey;
  }

  async toggle(key: string, url: string): Promise<void> {
   
    if (this.currentKey === key) {
      this.audio?.pause();
      this.currentKey = null;
      this.notify();
      return;
    }

    if (this.audio) {
      this.audio.pause();
      this.audio.src = '';
      this.audio = null;
    }

    
    const audio = new Audio(url);
    this.audio = audio;
    this.currentKey = key;
    this.notify();

    audio.onended = () => {
      if (this.currentKey === key) {
        this.currentKey = null;
        this.audio = null;
        this.notify();
      }
    };

    audio.onerror = () => {
      if (this.currentKey === key) {
        this.currentKey = null;
        this.audio = null;
        this.notify();
      }
    };

    try {
      await audio.play();
    } catch {
      this.currentKey = null;
      this.audio = null;
      this.notify();
    }
  }

  stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.src = '';
      this.audio = null;
    }
    this.currentKey = null;
    this.notify();
  }
}

export const audioManager = new AudioManager();
