
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
const AudioPlayer: AudioPlayer = {

  audioVolumen: 90,
  songDuration: 36,
  song: "Mes",
  details: {
    autor: "Ed Sheeran",
    year: 2015
  }
}









export { };
