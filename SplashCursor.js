(function (global) {
  // Minimal stub to avoid errors and keep page functional
  class SplashCursor {
    constructor(options = {}) {
      this.canvas = document.createElement('canvas');
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.canvas.style.position = 'fixed';
      this.canvas.style.inset = '0';
      this.canvas.style.zIndex = '-1';
      // Transparent background to avoid interfering with page visuals
      this.canvas.style.background = 'transparent';
    }
  }
  global.SplashCursor = SplashCursor;
})(window);