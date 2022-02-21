 const user = {id:1, name:'kamal', age:55}

// console.log("API");
// console.log(user)

const stringifyUser = JSON.stringify(user);

// console.log(stringifyUser);
// console.log(user);

const shop = {
    name:'kamal shop',
    adress:'Gazipur',
    products:['apple','orange','blue','yellow'],
    isExpensive:false,
    profit:20000,
    owner:{name:'jamal', profession:'abcd', salary:5000}
};


//console.log(shop);
const shopString = JSON.stringify(shop);
console.log(shopString);

const convertToParse = JSON.parse(shopString);

console.log(convertToParse);