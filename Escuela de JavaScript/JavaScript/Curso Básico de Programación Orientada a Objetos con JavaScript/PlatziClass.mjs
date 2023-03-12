function videoPlay (id) {
  const urlSecret = 'http://secretvideo' + id;
  console.log('se reproduce:', urlSecret)
}

function videoStop (id) {
  const urlSecret = 'http://secretvideo' + id;
  console.log('se pauso:', urlSecret)
}

export class PlatziClass {
  constructor({
    name,
    videoID,
  }){
    this.name = name;
    this.videID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID)
  }

  pausa() {
    videoStop(this.videoID)
  }
}