function solution(s) {
    var word=["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(i=0; i<10; i++){
      s = s.replaceAll(word[i], word.indexOf(word[i]));   
    }

    return parseInt(s);
}