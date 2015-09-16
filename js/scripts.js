var findReplace = function(word, replacement, passage) {
    var split_passage = passage.split(' ');
    var result = [];


    for (var i = 0; i<=split_passage.length; i++){
        if (word == split_passage[i]) {
            var new_word = word.replace(split_passage[i], replacement)
            // var new_passage = passage.replace(split_passage[i], replacement)
            result.push(new_word);
        } else {
            result.push(split_passage[i]);
        }
    }

    var joined_result = result.join(' ');
    var final_result = joined_result.slice(0, joined_result.length-1);
    return final_result;
}











































//lesson learned -> start simple and build from there.d


//unneccessary complications
    // var superFind = function(word, passage) {
    //     var passage_no_punctuation = passage.replace(/[.,-\/#!$\^&\*;:{}=\-\_`~()]/g, '');
    //     // var original_array = passage_no_punctuation.split(' ')
    //     var lower_passage = passage_no_punctuation.toLowerCase();
    //     var find_array = lower_passage.split(' ');
    //     var result = [];
    //
    //     for (var i = 0; i <=find_array.length; i++) {
    //         if (word.toLowerCase() == find_array[i]) {
    //             // for (var = 0; i <=original_array.length; i++)
    //             //     if {original_array[i][0]
    //             //
    //             //     }
    //             //     else {
    //             //
    //             //     }
    //             // console.log(find_array[i][0])
    //             result.push(word);
    //         }
    //     }
    //     return result;
    // };

    //
        // var lower_word = word.toLowerCase();
        // var found_words = superFind(word, passage);
        // //console.log(found_words);
        //
        // for(var i = 0; i<=found_words.length; i++) {
        //     if (word.toLowerCase() === found_words[i]) {
        //         passage.replace(replacement);
        //     }
        //
        //
        // var new_passage = passage.replace(word, replacement);
        // return new_passage;




    //capitalization ideas

        //do not lowercase the find array and push the original found letter into the result.  Then, in findReplace, check if the letter[0] in the find array is uppercase.  If it is, uppercase the replacement[0].
            // find_array[i].toLowerCase() does not work.  Cannot call .toLowerCase on undefined

        //two arrays and compare at index number
            //again, cannot call toUpperCase() on a looped array item
