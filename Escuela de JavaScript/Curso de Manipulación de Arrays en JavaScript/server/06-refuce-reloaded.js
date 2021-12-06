const items = [1, 3, 2, 4, 3, 3, 4, 4]

const rta = items.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    } else {
         obj[item] = obj[item] + 1;
    }
    return obj;
}, {})

console.log('rta', rta);

const data = [
    { 
        name: 'Edwin',
        level: 'low'

    },
    { 
        name: 'Camilo',
        level: 'medium'

    },
    { 
        name: 'manuela',
        level: 'hight'

    },
    { 
        name: 'sandra',
        level: 'low'

    },
    { 
        name: 'sonia',
        level: 'medium'

    },
    { 
        name: 'milena',
        level: 'hight'

    },
    { 
        name: 'sofia',
        level: 'low'

    },
    { 
        name: 'juan',
        level: 'medium'

    },
    { 
        name: 'sara',
        level: 'hight'

    },

];

const rta2 = data
.map(item => item.level)
.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    } else {
         obj[item] = obj[item] + 1;
    }
    return obj;
}, {})

console.log(rta2)