
let arr = ['john', 'smith', 'doe']

// let result = arr.filter(i => i !== 'john')
console.log();

let index = arr.indexOf('john');
console.log(index);

//if(index === 0)
arr.splice(index, 1);
console.log(arr);