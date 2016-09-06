console.log('hello world');
 var count = 100;
function fizzBuzz(){
  var output;
 for (var i = 1; i <= count; i++) {
   output = '';
  if (i % 3 ===0){
    output += 'Fizz'+' ';
  }
  if (i % 5 === 0){
    output += 'Buzz'+' ';
  }
  if (!i % 3 ===0 && !i % 5 ===0){
    output +=i;
  }
  console.log(output);
}
}
fizzBuzz();
