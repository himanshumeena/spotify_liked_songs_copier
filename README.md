# Spotify Share Your Liked Songs
Spotify don't allow to share your liked songs directly, this script copies your liked songs in a given playlist so that you can share the same.

Note: This only works for desktop browser

## Steps to use this tool
0. create a new bookmark. edit the bookmart and in the url paste the content of the file [spotify.js](https://github.com/himanshumeena/spotify_liked_songs_copier/blob/master/spotify.js). this script will do the copy job.
Note: this step need to be done only once.

1. Login to your [spotify web player](https://open.spotify.com/collection/tracks) account

2. Create a new playlist and click on the created playlist. Copy its playlist id from the url. We will copy our liked songs into this playlist
example: `2CoIt4CG4bzXcjlhs0QPNJ` for given screenshot

![Screenshot 2022-08-07 at 4 42 07 PM](https://user-images.githubusercontent.com/20402232/183287857-2cc1cc2a-8eec-4558-8b9b-716864aadac5.png)

3. We also need `authorization` `clientToken` values of your spotify account for this we will use chrome devtools. Open devtools in chrome
Note: `authorization` `clientToken` values are valid only for 6 mins so you need to get these values again by doing below steps if you want to copy songs in future

![Screenshot 2022-08-07 at 4 37 44 PM](https://user-images.githubusercontent.com/20402232/183287747-cccceb6b-794b-4a1c-b549-edb3b655a306.png)

4. Select the network tab and reload the page

5. Once reload complete search for "tracks" in the search bar under the network tab. you might need to click filter icon to enable search by name.
Click on the entry that starts with "tracks"

![Screenshot 2022-08-07 at 4 49 11 PM](https://user-images.githubusercontent.com/20402232/183288269-7cd5b298-fefd-408f-89be-c5646f903ac1.png)

6. you will see screen like below. Click on header tab and copy the values of `authorization` and `client-token` as show(highlighted with light red color)
![Screenshot 2022-08-07 at 5 19 45 PM](https://user-images.githubusercontent.com/20402232/183289393-7a6a664d-2d1e-44cc-b9a3-05ba8803f30a.png)

7. Once you are ready with the values of `authorization`, `client-token`, `playlistId` click the bookmark created in step 0. it will ask for 3 values so enter the same.

8. If done right you will see your liked songs in the playlist you created in step 2. Now you can share this playlist which have your liked songs


For any feedback/help you can mail : him.10meena@gmail.com
