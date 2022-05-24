const pets = ['cat', 'dog', 'bat'];

let includeInArray = false; 
for (var i = 0; i < pets.length; i++) {
    element = pets[i];
    if(element === 'dog'){
        includeInArray = true;
        break;
    }
}

console.log('rta: ', includeInArray );

const rta = pets.includes('dog');

console.log('rta includes : ', rta );