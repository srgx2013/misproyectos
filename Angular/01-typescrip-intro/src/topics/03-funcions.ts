// function addNumbers(a: number, b: number) {
//   return a + b;
// }
// const addNumbersArrow = (a: number, b: number) => {
//   return a + b;
// }
// function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
//   return firstNumber * base;
// }
//
// const result = addNumbers(1, 2);
// const result2: number = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);
// console.log({ result, result2, multiplyResult })
//
interface Character {
  name: string;
  hp: number;
  showhp: () => void;

}

const healChararter = (chararter: Character, amount: number) => {

  chararter.hp += amount;
}

const strider: Character = {
  name: 'strider',
  hp: 50,
  showhp() {
    console.log(`puntos de vida  ${this.hp}`);
  }

}

healChararter(strider, 10);
healChararter(strider, 30);

strider.showhp();

export { };
