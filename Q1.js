// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//take string and remove dash

//first attempt:
// function camelize(str){
//     return str
//     .split('-')
//     .map(function(word, index){
//         if(word[index] !==0){
//             return word.toUperCase()
//             }
//    })
//  }
 
 //change appropriate word to uppercase
 //put into new array
 // That is: removes all dashes, each word after dash becomes uppercased.
 
 function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array  and removes '-' ['my', 'long', 'word']
      .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }

  // capitalizes first letters of all array items except the first one
 // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']