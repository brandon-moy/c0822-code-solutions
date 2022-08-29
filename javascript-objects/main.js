var student = {
  firstName: 'Brandon',
  lastName: 'Moy',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;
student.livesInIrvine = true;
student.previousOccupation = 'Purchasing Manager';

console.log('value of fullName:', fullName);
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Mazda',
  model: 'Mazda 3',
  year: 2005
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Bacchus',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
