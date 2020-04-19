let obj = {
  pers: 'male',
  age: 23,
  calc: (el, num) => {
    return {
      text: `Need to add ${el} and ${obj.age + num} and ${obj.pers}`,
      option: 'OPTION'
    }
  },
}
let arg = obj.calc('Carlo', 22);
const rafl = [
  'time_stamp',
  'god_get_some',
  'big_boss',
  'take_no',
]
// let a = Array.from([1, 2, 3], x => x + x);
// console.log(a)
// let cal = Array.from(rafl, el => {
//   return `ADd__${el}_ADD`
// })
// console.log(cal);
// let ass = '12314124';
// let num = Array.from(ass, e => +e)
// let arr = ['a', 'b', 'c'];
// let eArr = arr.entries();
// let hof = `Name + ${eArr.next().value[1]} _ADD`
// let half = `Stand up = ${eArr.next().value[1]} _NUN`
// console.log(hof, half)
// var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr4.flat(Infinity));
var arr1 = [1, 2, 3, 4];
// let list = '12314124'
// console.log(Array.from(list, e => e + '_ss'));
// arr1.forEach((el, index, array) => {
//   console.log(`El => ${el} + ${index}`)
// });
// console.log(arr1.includes(2, 4)) // 2 - искать // 4 - позиция с котой искать
// if(arr1.includes(2)) console.log(arr1.indexOf(2))
// let ab = arr1[2];
// arr1.includes(ab) && console.log(arr1.indexOf(ab));
// if (arr1.indexOf(2)) {
//   console.log(arr1.indexOf(2))
// }
// let loop = !arr1.indexOf(2) ? 'true' : 'None' ? 'ssssss' : 'wwwwww' ? 'ewqewqeqwe' : '321312321'
//   console.log(loop)
// let str = 'ew3213edsaewqewq312adweqeqw-e21313';
// let lst = [];
// let str2 = str.split('').map(e => +e).filter(Number).sort();

// console.log(str2)
// let ww = arr1.join(' ')
// console.log(typeof ww, ww)

// let martin = () => console.log(`Name is ${martin.name}`);
// martin();
// let a = martin.name = 'gold'
// console.log(a)
// function Foo() {}  // ES2015 Syntax: class Foo {}