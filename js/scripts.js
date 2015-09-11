var superFind = function(word, passage) {
    var passage_no_punctuation = passage.replace(/[.,-\/#!$\^&\*;:{}=\-\_`~()]/g, '');
    var lower_passage =passage_no_punctuation.toLowerCase();
    var passage_array = lower_passage.split(' ');
    var result = [];

    for (var i = 0; i <=passage_array.length; i++) {
        if (word == passage_array[i]) {
            result.push(word);
        }
    }
    return result;
};


var findReplace = function(word, replacement, passage) {

    var new_passage = passage.replace(word, replacement)

    return new_passage;
}
