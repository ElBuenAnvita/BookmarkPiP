javascript: (function() {
    var video;
    var inte;
    if (document.getElementsByTagName('video').length > 1) {
        inte = prompt('Hay ' + document.getElementsByTagName('video').length + ' videos disponibles. Seleccione uno.', '')
    } else {
        inte = 0
    };
    video = document.getElementsByTagName('video')[inte];
    video.play();
    document.pictureInPictureEnabled === true ? video.requestPictureInPicture() : document.exitPictureInPicture();
})()
