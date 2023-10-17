
const btnPlay = document.querySelector('.play');
const btnNext = document.querySelector('.next');
const btnBack = document.querySelector('.back');
const audio = document.querySelector('audio');
const nameSonger = document.querySelector('.nameSonger');
const song = document.querySelector('.song');
const songImg = document.querySelector('.img');

let flag = false;
const songs = [
    {id: 1, path: './music/Imagine Dragons - Bad Liar.mp3', nameSonger: 'Imagine Dragons', song: 'Bad Liar', songImg: 'background-image: url(./assets/django.jpg)'},
    {id: 2, path: './music/Imagine Dragons - Believer.mp3', nameSonger: 'Imagine Dragons', song: 'Believer', songImg: 'background-image: url(./assets/criminal.jpg)'},
    {id: 3, path: './music/Imagine Dragons - Demons.mp3', nameSonger: 'Imagine Dragons', song: 'Demons', songImg: 'background-image: url(./assets/fight.jpg)'},
    {id: 4, path: './music/Imagine Dragons - Natural.mp3', nameSonger: 'Imagine Dragons', song: 'Natural', songImg: 'background-image: url(./assets/jon.jpg)'},
    {id: 5, path: './music/Imagine Dragons - Radioactive.mp3', nameSonger: 'Imagine Dragons', song: 'Radioactive', songImg: 'background-image: url(./assets/leon.jpg)'},
    {id: 6, path: './music/Imagine Dragons - Thunder.mp3', nameSonger: 'Imagine Dragons', song: 'Thunder', songImg: 'background-image: url(./assets/peak.jpg)'},
    {id: 7, path: './music/Imagine Dragons - Whatever It Takes.mp3', nameSonger: 'Imagine Dragons', song: 'Whatever It Takes', songImg: 'background-image: url(./assets/vegas.jpg)'}
]

let currentIndexSong = 0;

btnPlay.addEventListener('click', function () {
    audio.src = songs[currentIndexSong].path;
    nameSonger.textContent = songs[currentIndexSong].nameSonger;
    song.textContent = songs[currentIndexSong].song;
    songImg.style = songs[currentIndexSong].songImg;
    if (flag == false) {
        audio.play();
        flag = true;
        btnPlay.style = 'background-image: url(./zdjecia.img/pause.svg)';
    } else {
        audio.pause();
        flag = false;
        btnPlay.style = 'background-image: url(./zdjecia.img/playBtn.svg)';
    }
})

btnBack.addEventListener('click', function () {
    if (currentIndexSong == 0) return
    currentIndexSong--
    audio.src = songs[currentIndexSong].path;
    nameSonger.textContent = songs[currentIndexSong].nameSonger;
    song.textContent = songs[currentIndexSong].song;
    songImg.style = songs[currentIndexSong].songImg;
    audio.play();
    flag = true;
    btnPlay.style = 'background-image: url(./zdjecia.img/pause.svg)';
})

btnNext.addEventListener('click', function () {
    if (currentIndexSong == songs.length - 1) return
    currentIndexSong++
    audio.src = songs[currentIndexSong].path;
    nameSonger.textContent = songs[currentIndexSong].nameSonger;
    song.textContent = songs[currentIndexSong].song;
    songImg.style = songs[currentIndexSong].songImg;
    audio.play();
    flag = true;
    btnPlay.style = 'background-image: url(./zdjecia.img/pause.svg)';
})