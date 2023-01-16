const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");
const timeContainer = document.querySelector(".time");
const currentTime = document.querySelector("#current-time");
const durationTime = document.querySelector("#duration");

// Song titles
const songs = [
	"שיחה ללא נושא | על מבחנים, החיים ושירים",
	"שיחה ללא נושא | גרמנית, ג'אווה ועוד שירים",
	"שיחה ללא נושא | מעולמות שונים",
	"?שיחה ללא נושא | לאן הגענו",
	"שיחה ללא נושא | מה שלא היה נכנס - פרק בונוס",
	"שיחה ללא נושא | גילי אמרה לי לקרוא לפרק הזה \"שיחה בנות\" למרות שהוא לא",
	"שיחה ללא נושא | על הממשלה, גרעינים, ועוד",
	"שיחה ללא נושא | קצת מזה וקצת מזה"
];

// Song title to paths
const songPaths = {
	"שיחה ללא נושא | על מבחנים, החיים ושירים": {
		"audio": "../assets/audio/ATWAS/2201.mp3",
		"cover": "../assets/img/ATWAS.png",
		"duration": "01:08:37"
	},
	"שיחה ללא נושא | גרמנית, ג'אווה ועוד שירים": {
		"audio": "../assets/audio/ATWAS/2202.mp3",
		"cover": "../assets/img/ATWAS.png",
		"duration": "01:02:22"
	},
	"שיחה ללא נושא | מעולמות שונים": {
		"audio": "../assets/audio/ATWAS/2203.mp3",
		"cover": "../assets/img/ATWAS.png",
		"duration": "00:45:50"
	},
	"?שיחה ללא נושא | לאן הגענו": {
		"audio": "../assets/audio/ATWAS/2204.mp3",
		"cover": "../assets/img/ATWAS.png",
		"duration": "00:39:04"
	},
	"שיחה ללא נושא | מה שלא היה נכנס - פרק בונוס": {
		"audio": "../assets/audio/ATWAS/2205.mp3",
		"cover": "../assets/img/ATWAS.png",
		"duration": "00:21:19"
	},
	"שיחה ללא נושא | גילי אמרה לי לקרוא לפרק הזה \"שיחה בנות\" למרות שהוא לא": {
		"audio": "../assets/audio/ATWAS/2206.mp3",
		"cover": "../assets/img/ATWAS.png",
		"duration": "00:50:59"
	},
	"שיחה ללא נושא | על הממשלה, גרעינים, ועוד": {
		"audio": "../assets/audio/ATWAS/2207.mp3",
		"cover": "../assets/img/ATWAS.png",
		"duration": "00:55:37"
	},
	"שיחה ללא נושא | קצת מזה וקצת מזה": {
		"audio": "../assets/audio/ATWAS/2308.mp3",
		"cover": "../assets/img/ATWAS.png",
		"duration": "00:43:18"
	}
};

var path = window.location.pathname;
var page = path.split("/").pop();
var epNumberStr = page.replace("Ep", "").replace(".html", "");
var epNumber = parseInt(epNumberStr);

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var play = urlParams.get('play');

// Keep track of song
let songIndex = epNumber - 1;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) 
{
	title.innerText = song;
	
	audio.src = songPaths[song]["audio"];
	cover.src = songPaths[song]["cover"];

	durationTime.textContent = songPaths[song]["duration"];
}

// Play song
function playSong()
{
	window.history.replaceState({}, document.title, "Ep" + epNumber + ".html?play=true");
	play = "true";

	musicContainer.classList.add("play");
	playBtn.querySelector("i.fas").classList.remove("fa-play");
	playBtn.querySelector("i.fas").classList.add("fa-pause");

	audio.play();
}

// Pause song
function pauseSong()
{
	window.history.replaceState({}, document.title, "Ep" + epNumber + ".html?play=false");
	play = "false";

	musicContainer.classList.remove("play");
	playBtn.querySelector("i.fas").classList.add("fa-play");
	playBtn.querySelector("i.fas").classList.remove("fa-pause");

	audio.pause();
}

// Previous song
function prevSong()
{
	var num = epNumber - 1;
	if (num < 1)
	{
		num = songs.length;
	}
	
	if (play == "true")
		window.location.href = "Ep" + num + ".html?play=true";
	else
		window.location.href = "Ep" + num + ".html?play=false";
}

// Next song
function nextSong()
{
	var num = epNumber + 1;
	if (num > songs.length)
	{
		num = 1;
	}

	if (play == "true")
		window.location.href = "Ep" + num + ".html?play=true";
	else
		window.location.href = "Ep" + num + ".html?play=false";
}

// Update progress bar
function updateProgress(e)
{
	const { duration, currentTime } = e.srcElement;

	// Calculate display for duration(with hours if needed)
	const hours = Math.floor(duration / 3600);
	const durationMinutes = Math.floor(duration / 60);
	let durationSeconds = Math.floor(duration % 60);
	
	if (durationSeconds < 10)
	{
		durationSeconds = `0${durationSeconds}`;
	}

	// Delay switching duration element to avoid NaN
	if (durationSeconds)
	{
		currentTime.textContent = `${hours ? hours + ":" : ""}${durationMinutes}:${durationSeconds}`;
	}

	// update progress bar
	const progressPercent = (currentTime / duration) * 100;
	progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e)
{
	const width = this.clientWidth;
	const clickX = e.offsetX;
	const duration = audio.duration;

	// Calculate display for duration(with hours if needed)
	const hours = Math.floor(duration / 3600);
	const durationMinutes = Math.floor(duration / 60);
	let durationSeconds = Math.floor(duration % 60);
	
	if (durationSeconds < 10)
	{
		durationSeconds = `0${durationSeconds}`;
	}

	// Delay switching duration element to avoid NaN
	if (durationSeconds)
	{
		currentTime.textContent = `${hours ? hours + ":" : ""}${durationMinutes}:${durationSeconds}`;
	}

	audio.currentTime = (clickX / width) * duration;
}

// On load - check if should play
if (play == "true")
{
	loadSong(songs[songIndex]);
	playSong();
}

// Event listeners
playBtn.addEventListener("click", () => 
{
	const isPlaying = musicContainer.classList.contains("play");

	if (isPlaying) 
	{
		pauseSong();
	} 
	else 
	{
		playSong();
	}
});

// Change song events
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);