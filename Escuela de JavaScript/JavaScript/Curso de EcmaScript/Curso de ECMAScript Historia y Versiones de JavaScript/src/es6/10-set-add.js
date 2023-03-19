const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3');

console.log(list)


const set = new Set();
set.add('item 1');                  	// Set ['item 1']
set.add('item 2').add('item 3'); // Set ['item 1','item 				2','item 3']
set.has('item 2');                 // true
set.delete('item 1');             // Set ['item 2','item 3', 1]                    
set.size(); // 2


console.log(set)