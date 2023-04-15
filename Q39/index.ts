// Question //
// Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album. 

type Album =
{
    Artist: string;
    Title: string;
    Tracks?: number;
}
let make_album = (Artist: string, Title: string, Tracks?: number) => 
{
    let album: Album = 
    {
      Artist,
      Title,
    }
    if (Tracks) 
    {
      album.Tracks = Tracks;
    }
    return album;
};
  let album1 = make_album("Lil Nas X", "Old Town Road");
  let album2 = make_album("Taylor Swift", "Dark Love", 30);
  let album3 = make_album("Billi Eylish", "Bad Guy", 21);
   
  console.log(album1);
  console.log(album2);
  console.log(album3);
  