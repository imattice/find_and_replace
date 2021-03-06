describe('findReplace', function() {
    it('checks if a word is within a given passage', function() {
        expect(findReplace('hello','hello', 'hello hi bye')).to.equal('hello hi bye');
    });

//how to ensure tests still pass without making a new function
    it('replaces single word with only one letter with replacement word', function() {
        expect(findReplace('a', 'b', 'a')).to.equal('b');
    });
    it('replaces single word with replacement word', function() {
        expect(findReplace('hello', 'howdy', 'hello')).to.equal('howdy');
    });

    it('replaces word in sentence with replacement word', function() {
        expect(findReplace('hello', 'howdy', 'hello hi bye')).to.equal('howdy hi bye');
    });

    it('replaces multiple words in passage with replacement word', function() {
        expect(findReplace('hello', 'howdy', 'hello hi hello bye hello')).to.equal('howdy hi howdy bye howdy');
    });

    it('does not replace a word which is only a partial match', function() {
        expect(findReplace('he', 'banana', 'hello')).to.equal('hello');
    });
    //negative outcomes, more specific cases. what could go wrong?
    //punctuation
});






































//tests for unneccessary complications
    // describe('superFind', function() {
    //
    //     it('finds a word within a given passage', function() {
    //         expect(superFind('hello', 'hello my name is ike')).to.eql(['hello'])
    //     });
    //
    //     it('finds multiple words within a passage', function() {
    //         expect(superFind('cat', 'I live with one cat.  The cat belongs to my roommate. The cat is brown and has long cat hair.')).to.eql(['cat', 'cat', 'cat', 'cat'])
    //     });
    //
    //     it('finds word regardless of captialization', function() {
    //         expect(superFind('carbuncle', 'My roommate\'s cAt is named Carbuncle. carbuncle really likes to chase lasors.')).to.eql(['carbuncle', 'carbuncle'])
    //     });
    // })
    //
    // //split into two functions because two differnt output types
    // describe('findReplace', function() {
    //
    //     it('replaces found word within a given passage', function() {
    //         expect(findReplace('plants', 'feet', 'Sometimes she will attack our plants. plants.  plants.  plants.')).to.equal('Sometimes she will attack our feet.  feet.  feet.  feet.');
    //     });

        // it('maintains captialization if the input is not capitalized', function() {
        //     expect(findReplace('she', 'carbuncle', 'She meows when she is locked out of any room.')).to.equal('Carbuncle meows when she is locked out of any room.')
        // });
        // //
        // it('replaces all words within a given passage', function() {
        //     expect(findReplace('good', 'great','She is still a good cat, though.  Good cats can be hard to find.')).to.equal('She is still a great cat, though.  Great cats can be hard to find.')
        // });

    // })
