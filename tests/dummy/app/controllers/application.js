import Controller from '@ember/controller';

export default Controller.extend({

  init() {
    this._super(...arguments);
    this.sources = [
      { src: "https://vjs.zencdn.net/v/oceans.mp4", type: "video/mp4" },
      { src: "https://vjs.zencdn.net/v/oceans.webm", type: "video/webm" }
    ];
  },

});