var customers = require('./data/customers.json');
var _ = require('lodown-jesselessinger');

var topN = (array, n) => {
    
    let sortedCount = _.reduce(array,(rank,elem,index,arr)=>{
        if (arr.indexOf(elem) === index) { //first time in the array
            rank[elem] = {cnt:1,next:rank.$.next}; //count is 1, next is $next
            rank.$.next = elem; //not $ points to our new element, first in line!
        } else { //found a dupe
            rank[elem].cnt++; //increment the count
            let nextElem = rank[elem].next;
            if (nextElem !== null && rank[elem].cnt > rank[nextElem].cnt) { //if its count is bigger than its super
                rank[elem].next = rank[nextElem].next;  //elem's next is the nextElem next
                rank[nextElem].next = elem;  // and nextElem next becomes elem, you got cut brah!
            }

        }
        return rank;
    } ,{$:{cnt:0,next:null}}); 
    
    while () {
    
}

let arr = ["d","a","b","c","a","a","c","c","c","e","d"];

console.log(topN(arr,5));