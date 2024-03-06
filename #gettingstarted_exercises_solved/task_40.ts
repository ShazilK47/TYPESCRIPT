function make_album(
  artist_Name: string,
  album_title: string,
  number_Of_Tracks: any = null
) {
  let album = {
    artistName: artist_Name,
    albumTitle: album_title,
    numberOfTracks: number_Of_Tracks,
  };
  return album;
}

let dictionary_1 = make_album("Junaid Jamshed", "Naats");
let dictionary_2 = make_album("Shazil", "The Revenge");
let dictionary_3 = make_album("Iqbal", "Baang e dara");

console.log(dictionary_1);
console.log("\n");
console.log(dictionary_2);
console.log("\n");
console.log(dictionary_3);

let dictionary_4 = make_album("Ali", "TheRise", 23);
console.log("\n");
console.log(dictionary_4);
