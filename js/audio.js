const audio = document.createElement("audio");
audio.src = "./audio/theme.mp3";
audio.loop = true;
audio.volume = 0.2;

window.addEventListener("scroll", () => {
    audio.play();
});