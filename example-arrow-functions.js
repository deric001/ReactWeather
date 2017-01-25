var names=['deric', 'cathi', 'matt', 'mike', 'meghan'];

names.forEach(function(name) {
  console.log('forEach', name);
});


names.forEach((name)=>{
  console.log('arrowFunc',name)
});


names.forEach((name)=>console.log(name));


var returnMe = (name)=> name + '!';
console.log(returnMe('Deric is Great'));


//anonomous functions don't use their parent binding so you have to create a variable
//and set it to this  (e.g.  var that=this;)
//if you don't do this step, this will be undefined within the anonomous function
var person = {
  name: 'Deric',
  greet: function () {
    var that=this;
    names.forEach(function(name) {
      console.log(that.name + 'says hi to ' + name)
    });
  },
};

person.greet();

//arrow functions take on their parent's this binding so you can simply use this
var person = {
  name: 'Deric',
  greet: function () {
    names.forEach((name)=>{
      console.log(this.name + 'says hi to ' + name)
    });
  },
};

person.greet();


//challenge
function add (a, b) {
  return a+b;
}
console.log(add(1,20));
console.log(add(10,13));

//add statement
var addStatement = (a, b)=>{return a+b;}
console.log(addStatement(4,2));
console.log(addStatement(15,1));

//add expression
var addExpression = (a,b)=>a+b;
console.log(addExpression(14,12));
console.log(addExpression(5,3));
