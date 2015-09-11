var superFind = function(word, passage) {
    var passage_array = passage.split(' ');
    var result = [];
    console.log(passage);
    for (var i = 0; i <=passage_array.length; i++) {
        if (word == passage_array[i]) {
            result.push(word);
        }
    }
    return result.toString();
};
