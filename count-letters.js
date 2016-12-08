function countLetters(string) {
  var count = {};
  var compressed = string.split(' ').join('').toLowerCase();
  for(var i = 0; i < compressed.length; i++){
    if (count[compressed[i]]) count[compressed[i]]++;
    else count[compressed[i]] = 1;
  }
  return count;
}  

console.log(countLetters("lighthouse in the house"));