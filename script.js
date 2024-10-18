// // NOTE: You may, but do not have to, modify this file, such as to create other
// // classes or to call methods on `App`. You may not add any global state
// // variables.
// const app = new App();
class MusicApp {
    constructor() {
        this.selectionScreen = new SelectionScreen(this);
        this.trackScreen = null;
    }
  
    startMusicScreen(selectedSong, theme) {
        this.trackScreen = new TrackScreen(this, selectedSong, theme);
    }
  }
  
  // Instantiate the app when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    const app = new MusicApp();
  });