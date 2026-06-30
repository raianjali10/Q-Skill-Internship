// बटन क्लिक होने पर यह चलेगा
function handleSearch() {
    const songUrl = document.getElementById("music-input").value; 
    
    if (!songUrl) {
        alert("कृपया पहले एक गाने का लिंक पेस्ट करें!");
        return;
    }

    // डिफ़ॉल्ट गाना: केसरिया
    let songData = {
        name: "Kesariya",
        artist: "Arijit Singh",
        image: "https://scdn.co",
        preview_url: "https://soundhelix.com",
        spotify_url: songUrl
    };

    // अगर लिंक में Perfect गाने की ID है
    if (songUrl.includes("7i6a05VbZ")) {
        songData = {
            name: "Perfect",
            artist: "Ed Sheeran",
            image: "https://scdn.co",
            preview_url: "https://soundhelix.com",
            spotify_url: songUrl
        };
    } 
    // अगर लिंक में Brown Munde गाने की ID है
    else if (songUrl.includes("5688aY6u")) {
        songData = {
            name: "Brown Munde",
            artist: "AP Dhillon",
            image: "https://scdn.co",
            preview_url: "https://soundhelix.com",
            spotify_url: songUrl
        };
    }

    // सीधे स्क्रीन पर गाना रेंडर करें
    getSong(songData);
}

// स्क्रीन पर दिखाने वाला फ़ंक्शन
function getSong(songData) {
    const result = document.getElementById("result");

    result.innerHTML = `
        <div class="song-card">
            <img src="${songData.image}" width="250">
            <h2>${songData.name}</h2>
            <p>${songData.artist}</p>
            
            <audio id="audioPlayer" controls>
                <source src="${songData.preview_url}" type="audio/mpeg">
            </audio>
            <br><br>
            <a href="${songData.spotify_url}" target="_blank">Open Song</a>
        </div>
    `;
}