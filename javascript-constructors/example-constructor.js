function ExampleConstructor() {

}

console.log('value of ExampleConstructor:', ExampleConstructor);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor);

var newExample = new ExampleConstructor();

console.log('value of newExample:', newExample);

var instance = newExample instanceof ExampleConstructor;

console.log('value of instance:', instance);
