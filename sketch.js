

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable:');
function setup(){
  var b2 = createButton("click here to Swap");
  b2.mousePressed(Swap)
  }


function draw()
{
}
function swap(){
[a,b]=[b,a]
console.log("the value of a after bracket",+a)
console.log("the value of b after bracket",+b)
}