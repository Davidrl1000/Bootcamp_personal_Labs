var DC = require('./DollarCurrency');
var EC = require('./EuroCurrency');

// var flag = true;
//
// var readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);
//
// rl.prompt();
// rl.on('line', function(line) {
//   if(flag){
//     rl.setPrompt('What do you want to do?\n0- Get me out of here!\n'+
//                                         '1- Current dolar value\n'+
//                                         '2- Current euro value\n'+
//                                         '3- Colones to dollars\n'+
//                                         '4- Dollars to colones\n'+
//                                         '5- Colones to euros\n'+
//                                         '6- Euros to colones\n');
//     }else{
//       rl.setPrompt('Write the amount: ');
//     }
//
//     if (line === '0'){
//       rl.close();
//     }else if(line==='1'){
//       console.log(DC.currentDollarValue());
//     }else if(line==='2'){
//       console.log(EC.currentEuroValue());
//     }else if(line==='3'){
//
//       console.log(DC.colonesToDollars(getValue()));
//     }
//
//
//     rl.prompt();
//
// }).on('close',function(){
//     process.exit(0);
// });

// var rl = require('readline');
// var i = rl.createInterface(process.stdin, process.stdout, null);
//
// i.question('What do you want to do?\n1- Current dolar value\n'+
//                                     '2- Current euro value\n'+
//                                     '3- Colones to dollars\n'+
//                                     '4- Dollars to colones\n'+
//                                     '5- Colones to euros\n'+
//                                     '6- Euros to colones\n', function(answer) {
//
//   if(answer==='1'){
//     console.log(DC.currentDollarValue());
//   }else if(answer==='2'){
//     console.log(EC.currentEuroValue());
//   }else if(answer==='3'){
//     console.log(DC.colonesToDollars(getValue()));
//   }
//
//
//   i.close();
//   process.stdin.destroy();
// });
//
// function getValue(){
//   var stdin = process.openStdin();
//
//   stdin.addListener("data", function(d) {
//       return d.toString().trim();
//     });
//
// }//end getValue


console.log(DC.currentDollarValue());

console.log(DC.colonesToDollars(100000));

console.log(DC.dollarsToColones(100000));

console.log(EC.currentEuroValue());

console.log(EC.colonesToEuros(100000));

console.log(EC.eurosToColones(100000));
