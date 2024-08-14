let first = document.querySelector('.first')
let con = document.querySelector('.con')
const videos = document.querySelectorAll("video");
let containerlow = document.querySelector('.containerlow')

setTimeout(() => {
    first.style.display = "none";
    con.style.display = "block";

}, 5000);

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => 
            entry.isIntersecting ? entry.target.play() : entry.target.pause()
        );
    }, { threshold: 0.5 });

    videos.forEach(video => observer.observe(video));
});

videos.forEach(video => {
    video.addEventListener('loadeddata', () => {
        console.log(`Video with src ${video.src} has loaded`);
        containerlow.style.display = "none";
        
    });
});