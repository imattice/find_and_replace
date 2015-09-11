var superFind = function(word, passage) {
    var passage_no_punctuation = passage.replace(/[.,-\/#!$\^&\*;:{}=\-\_`~()]/g, '');
    var passage_array = passage_no_punctuation.split(' ');
    var result = [];

    for (var i = 0; i <=passage_array.length; i++) {
        if (word == passage_array[i]) {
            result.push(word);
        }
    }
    return result;
};
