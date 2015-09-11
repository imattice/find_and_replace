describe('superFind', function() {

    it('finds a word within a given passage', function() {
        expect(superFind('hello', 'hello my name is ike')).to.eql(['hello'])
    });

    it('finds multiple words within a passage', function() {
        expect(superFind('cat', 'I live with one cat.  The cat belongs to my roommate. The cat is brown and has long cat hair.')).to.eql(['cat', 'cat', 'cat', 'cat'])
    });

    // it('finds word regardless of captialization', function() {
    //     expect(superFind('carbuncle', 'My roommate\'s cAt is named Carbuncle. carbuncle really likes to chase lasors.')).to.eql(['Carbuncle', 'carbuncle'])
    // });
})

describe('findReplace', function() {

    // it('replaces found word within a given passage', function() {
    //     expect(findReplace('plants', 'feet', 'Sometimes she will attack our plants.')).to.equal('Sometimes she will attack our feet.');
    // });
    //
    // it('maintains captialization if the input is not capitalized', function() {
    //     expect(findReplace('she', 'carbuncle', 'She meows when she is locked out of any room.')).to.equal('Carbuncle meows when she is locked out of any room.')
    // });
    //
    // it('replaces all words within a given passage', function() {
    //     expect(findReplace('good', 'great','She is still a good cat, though.  Good cats can be hard to find.')).to.equal('She is still a great cat, though.  Great cats can be hard to find.')
    // });

})
