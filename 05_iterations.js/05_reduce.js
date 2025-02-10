// Reduce

const myNum = [1,2,3]

total = myNum.reduce((acc,curval)=> {
    return acc + curval
},0 )
// console.log(total);


const shoppingCart = [
    {
        itemName: "JS",
        cost : 299
    },
    {
        itemName: "Python",
        cost : 999
    },
    {
        itemName: "mobileDev",
        cost : 4999
    },
    {
        itemName: "data sci",
        cost : 11999
    }
]

let totalCost = shoppingCart.map( (item)=> item.cost).reduce( (acc,currval)=> acc+currval ,0)
console.log(totalCost);
