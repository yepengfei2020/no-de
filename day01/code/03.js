// process.stdout.write('hello node');
process.stdout.write('hello node');


var log = function (message) {
  process.stdout.write(message+'\n');
};

log('lllllll')
// // es2015 array function
// var log2 = (message) => {
//   process.stdout.write(message+'\n');
// };

var msg = 'hello'

var a =  1;

// 模版字符串  随意回车换行、直接取值
process.stdout.write(`
  ${msg} world ${a}
`);
// ""
// $aaa = 'sdf';
// $bbb = "sdfnkjsdkj$aaa"

// ''  ""

// ``

// var frams = [];
// frams[frams.length] = `
// 1111111111`;
// frams[frams.length] = `
// 22222222222`;

// frams[frams.length] = `
// 333333333333`;

// frams[frams.length] = `
// 44444444444444`;

// frams[frams.length] = `
// 55555555555`;
// var ftp  = 10;
// var current = 0;
// var render = () =>{
//   process.stdout.write('\033[2J');
//   process.stdout.write('\033[0f');
//   if (current === frams.length) { current = 0; }
//   process.stdout.write(frams[current++]);
// }

// setInterval(render,1000/ftp);