
/*Create a variable called sentence. The value of the variable should be a string that contains the words
 “not” and “bad”.
For example, “The movie is not that bad, I like it”.

Create a variable called wordNot where it’s value is the first appearance (ie. the position)
 of the substring “not” (from the sentence variable).

Create a variable called wordBad where it’s value is the first appearance (ie. the position) 
of the substring “bad” (from the sentence variable).

If the word “bad” comes after the word “not”, you should replace the whole “not…bad”
 substring with “good”, then console.log the result.
For example, the result here should be : “The movie is good, I like it”
If the word “bad” does not come after “not” or the words are not in the sentence,
 console.log the original sentence.*/

 let sentence= 'healthy stress like training is not bad';

 let wordNot= sentence.indexOf('not');
 console.log(wordNot);
 let wordword=sentence.search('not');
 console.log(wordword);

 let wordBad=sentence.indexOf('bad');
 console.log(wordBad);
 console.log(sentence.search('bad'));

 if(wordNot<wordBad){
    console.log(`${sentence.slice(0,32)}good`);
 } else{
    console.log(sentence);
 };
 
