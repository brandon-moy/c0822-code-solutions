var books = [
  {
    isbn: '978060201869',
    title: 'Amelia Bedelia',
    author: 'Peggy Parish'
  },
  {
    isbn: '978007127047',
    title: 'If You Give  a Mouse a Cookie',
    author: 'Laura Numeroff'
  },
  {
    isbn: '978006298435',
    title: 'Frog and Toad Are Friends',
    author: 'Arnold Lobel'
  }
];

var booksJSON = JSON.stringify(books);

var student = '{"id": "121064","name": "Brandon"}';
var studentJS = JSON.parse(student);

console.log('books:', books);
console.log('typeof books:', typeof books);

console.log('books JSON:', booksJSON);
console.log('typeof booksJSON:', typeof booksJSON);

console.log('student:', student);
console.log('typeof student:', typeof student);

console.log('studentJS:', studentJS);
console.log('typeof studentJS:', typeof studentJS);
