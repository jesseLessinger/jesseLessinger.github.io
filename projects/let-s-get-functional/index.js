// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-jesselessinger');


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {

    return _.filter(array, (person)=>{
        return person.gender === "male";
    }).length;
   
 

};

var femaleCount = function(array) {
    
    return _.reduce(array,(count, person)=>{
        return count + (person.gender === "female" ? 1 : 0);
    },0);
}

var oldestCustomer = (array) => {
    
    return _.reduce(array,(oldest, person)=>{
        return person.age > oldest.age ? person : oldest; 
    }).name
};

var youngestCustomer = (array) => {
    
    return _.reduce(array,(youngest, person)=>{
        return person.age < youngest.age ? person : youngest; 
    }).name
};

var averageBalance = (array) => {
  return _.reduce(array,(total, person)=>{
      return total + parseFloat(person.balance.replace(/\$|\,?/g,"")); 
  }, 0) / array.length; 
}

var firstLetterCount = (arr, letter) => {
    return _.reduce(arr, (count, person)=>{
        return count + 
            (person.name[0].toLowerCase() === letter.toLowerCase() ? 1 :0)
    }, 0);
};

var friendFirstLetterCount = (arr, name, letter) => {
    
   for (let person of arr) {
       if (person.name === name) {
           return _.reduce(person.friends,(count, friend)=>{
               return count + 
                (friend.name[0].toLowerCase() === letter.toLowerCase() ? 1 :0)
           },0)
       }
   }
};


var friendsCount = (arr, name) =>{
    
    //filter out friends
    let friendsList = _.filter(arr, (person)=>{
        let friends = _.pluck(person.friends, "name"); 
        return _.contains(friends, name);
    }); 
    
    return _.pluck(friendsList, "name")
    
};



var topThreeTags = (arr)=>{
    
   let tags = _.pluck(arr, "tags");
   let allTags = _.reduce(tags,(accum,tagArr)=>{
        return accum.concat(tagArr);
    })
    
    //tally them all up
    let counter = 
    _.reduce(allTags, (count,tag)=>{
        if (count[tag]) count[tag] += 1;
        else count[tag] = 1;
        return count;
    },{})
    
    //find the top three
    let tag1 = 0, tag2 = 0, tag3 = 0;
    let topThree = [];

    _.each(counter, (tagCount,tag)=>{
        if (tagCount > tag1) {
            topThree[0] = tag;
            tag1 = tagCount;
        } else if (tagCount > tag2) {
            topThree[1] = tag;
            tag2 = tagCount;
        } else if (tagCount > tag3) {
            topThree[2] = tag;
            tag3 = tagCount;
        }
    })    
    
    return topThree;
      
};




var genderCount = (array) => {
    let count = {};
    
    _.each(array, (person) => {
        if (count[person.gender]) count[person.gender] += 1;
        else count[person.gender] = 1;
    })
    
    return count;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
