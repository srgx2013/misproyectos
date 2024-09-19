
const skills: string[] = ['bash', 'çonunter', 'healing']; 'skills'


interface Chararter {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;


}

const strider: Chararter = {
  name: 'strinder',
  hp: 100,
  skills: ['bash', 'counter']
};

strider.hometown = 'rivendell';
console.table(strider)




export { };
