document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById('playButton');
    const video = document.getElementById('video');
    const audio = document.getElementById('audio');
    const audioVolumeSlider = document.getElementById('audioVolume');
    const videoVolumeSlider = document.getElementById('videoVolume');


    let isPlaying = false;



    playButton.addEventListener('click', function () {
        if (!isPlaying) {
            video.play();
            audio.play();
            isPlaying = true;
        } else {
            video.pause();
            audio.pause();
            isPlaying = false;
        }
    });

    playButton.addEventListener('click', function handleClick() {
        const initialText = 'Lejátszás';
      
        if (playButton.textContent.toLowerCase().includes(initialText.toLowerCase())) {
            playButton.textContent = 'Megállítás';
        } else {
            playButton.textContent = initialText;
        }
      });



    audioVolumeSlider.addEventListener('input', function () {
        audio.volume = audioVolumeSlider.value;
    });

    videoVolumeSlider.addEventListener('input', function () {
        video.volume = videoVolumeSlider.value;
    });

    video.addEventListener('play', function () {
        audio.play();
    });

    video.addEventListener('pause', function () {
        if (!audio.paused) {
            audio.pause();
        }
    });

    video.addEventListener('ended', function () {
        audio.pause();
        isPlaying = false;
    });
});


function csere(zene) {
    
    document.getElementById("audio").setAttribute('src', zene);
    alert('Music changed succesfully!')
    
}