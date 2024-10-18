// // This class will represent the music visualizer as a whole, similar to the
// // role that the `App` class played.
// //
// // See labwork 7 writeup for more hints and details.
// class App {
//   constructor() {
//     // TODO(you): Implement the constructor and add fields as necessary.
//   }
//   // TODO(you): Add methods as necessary.
// }
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