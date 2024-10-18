class PlayButton {
  constructor(musicScreen) {
      this.musicScreen = musicScreen;
      this.button = document.getElementById('play-button');
  }

  updateButton() {
      const imageUrl = this.musicScreen.audioPlayer.isPlaying ? 'pause.png' : 'play.png';
      this.button.style.backgroundImage = `url(${imageUrl})`;
  }
}
