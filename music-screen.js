// // This class will represent the music visualizer screen, i.e. the screen that
// // you see after you select a song.
// //
// // This class should create and own:
// //   - 1 AudioPlayer
// //   - 1 GifDisplay
// //   - 1 PlayButton
// //
// // See labwork 7 writeup for more hints and details.
// class MusicScreen {
//   constructor() {
//     // TODO(you): Implement the constructor and add fields as necessary.
//   }
//   // TODO(you): Add methods as necessary.
// }
class TrackScreen {
    constructor(app, selectedSong, theme) {
        this.app = app;
        this.selectedSong = selectedSong;
        this.theme = theme;
        this.audioPlayer = new AudioPlayer(selectedSong);
        this.gifDisplay = new GifDisplay(theme);
        this.init();
    }
  
    init() {
        this.setupLayout();
        this.setupEventListeners();
        this.gifDisplay.preloadGifs().then(() => {
            this.gifDisplay.setInitialGifs();
            this.show();
            this.audioPlayer.play();
        });
    }
  
    setupLayout() {
        const musicScreen = document.getElementById('music');
        musicScreen.classList.remove('hidden');
        this.gifDisplay.setupGifDisplay();
    }
  
    setupEventListeners() {
        const playButton = document.getElementById('play-button');
        playButton.addEventListener('click', () => {
            if (this.audioPlayer.isPlaying()) {
                this.audioPlayer.pause();
                this.updatePlayButton(false);
            } else {
                this.audioPlayer.play();
                this.updatePlayButton(true);
            }
        });
  
        this.audioPlayer.onKick(() => {
            this.gifDisplay.showNextGif();
        });
    }
  
    updatePlayButton(isPlaying) {
        const playButtonImage = document.querySelector('#play-button img');
        playButtonImage.src = isPlaying ? 'images/pause.png' : 'images/play.png';
    }
  
    show() {
        const musicScreen = document.getElementById('music');
        musicScreen.classList.remove('hidden');
    }
  }