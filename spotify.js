// just execute the main method in the console

const authorization = prompt("Enter authorization");
const clientToken = prompt("Enter clientToken");
const playlistId = prompt("Enter playlistId");

async function helperFetchAllLikedSongs() {
    let offset = 0;
    let songsData = [];
    while (true) {
        const response = await fetch(`https://api.spotify.com/v1/me/tracks?offset=${offset}&limit=50`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: authorization,
                "client-token": clientToken,
            }
        });

        const songsResponse = await response.json();
        songsData = songsData.concat(songsResponse.items);

        if (songsResponse.next === null) {
            return songsData;
        }
        offset = offset + 50;
    }
}

async function helperAddTracksToPlaylist(spotifyIds) {

    while(spotifyIds.length !== 0){
        const payLoadIds = spotifyIds.splice(0,100);

        const promise = fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: authorization,
                "client-token": clientToken,
            },
            body: JSON.stringify(
                { uris: payLoadIds }
            ),
        })
    }
}

// main method
async function main() {

    const likedSongsData = await helperFetchAllLikedSongs();
    console.log("likedSongsData......", likedSongsData);

    let trackIds = [];
    for (song of likedSongsData) {
        trackIds.push(song.track.id);
    }
    console.log("trackIds......", trackIds);

    let spotifyIds = [];
    for (id of trackIds) {
        spotifyIds.push(`spotify:track:${id}`);
    }

    console.log('spotifyIds........', spotifyIds)

    helperAddTracksToPlaylist(spotifyIds)
}
