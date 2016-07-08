'use strict';

describe('HTML loading', function() {

    before(function() {
        fixture.setBase('test/templates');
    });

    beforeEach(function() {
        this.result = fixture.load('core.html');
        console.log(this.result);
    });

    afterEach(function() {
        fixture.cleanup();
    });

    describe('#indexOf()', function() {
        it('plays with the html fixture', function() {
            expect(fixture.el.firstChild).to.equal(this.result[0]);
        });
    });
});
