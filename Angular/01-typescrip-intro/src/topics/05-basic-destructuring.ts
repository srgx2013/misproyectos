
interface AudioPlayer {
  audioVolumen: number;
  songDuration: number;
  song: string;
  details: Details;

}

interface Details {
  autor: string;
  year: number;

}
const audioPlayer: AudioPlayer = {

  audioVolumen: 90,
  songDuration: 36,
  song: "Mes",
  details: {
    autor: "Ed Sheeran",
    year: 2014
  }
}

const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const { autor: author } = details;
//
// console.log('song: ', audioPlayer.song);
// console.log('Áuthor: ', author);
// console.log('Duration: ', duration);

const [, , trunks]: string[] = ['Goku', 'Vegeta', 'Trunks'];


console.error('Personaje 3:', trunks);




export { };
