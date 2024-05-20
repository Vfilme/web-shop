// valuebles
// data - information about products
// myKeyWords - text of search
// itog - products which match with search text
const data = [
    {
        id: 1,
        keyWords: ['shoes', 'red', "men"],
        stat: 0
    },
    {
        id: 2,
        keyWords: ['shoes', 'blue'],
        stat: 0
    },
    {
        id: 3,
        keyWords: ['shoes', 'red'],
        stat: 0
    },
    {
        id: 4,
        keyWords: ['t-shirt', 'black'],
        stat: 0
    }
];

let myKeyWord = " SHHH Red  jhfkj    dd  "; // search text
myKeyWord = myKeyWord.trim().replace(/\s+/g, " ").split(" "); // make massive remove all space

//match and counting stat
for (let i=0; i<data.length; i++) {
    for (let j=0; j<data[i].keyWords.length; j++) {
        for (let l=0; l<myKeyWord.length; l++) {
            if ( data[i].keyWords[j].search(new RegExp(myKeyWord[l], "i"))!=-1 ) {
                data[i].stat++;
            }
        }
    }
}
let itog = data.filter((el, i)=>{
    return el.stat > 0 ;
});

// sort of stat
itog.sort((a,b)=>b.stat - a.stat);

console.log(itog);//show result



