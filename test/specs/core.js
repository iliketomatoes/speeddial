'use strict';

describe('Speed Dial', function() {

    var instance;

    /**
    * http://stackoverflow.com/a/25317941
    * Check if an object is a DOM-object
    *
    * @param { Object } e
    * @return { Boolean }
    */
    function isDOM(e) {
        return (/HTML(?:.*)Element/).test(Object.prototype.toString.call(e).slice(8, -1));
    }

    before(function() {
        fixture.setBase('test/templates');
    });

    beforeEach(function() {
        this.result = fixture.load('core.html');
        instance = speeddial('.speed-dial', { direction: 'down' });
    });

    afterEach(function() {
        fixture.cleanup();
    });

    it('has to be a function', function () {
        assert.typeOf(speeddial, 'function');
    });

    it('has to return an object', function () {
        assert.typeOf(instance, 'object');
    });

    describe('Public method', function() {

        it('getContainer() returns an HTMLElement', function() {
            var container = instance.getContainer();
            expect(isDOM(container)).to.be.true;
        });

        it('getButton() returns an HTMLElement', function() {
            var btn = instance.getButton();
            expect(isDOM(btn)).to.be.true;
        });

        it('getList() returns an HTMLElement', function() {
            var list = instance.getList();
            expect(isDOM(list)).to.be.true;
        });

        it('open() adds .is-visible class', function() {
            var list = instance.getList();
            instance.open();
            expect(list.classList.contains('is-visible')).to.be.true;
        });

        it('close() removes .is-visible class', function() {
            var list = instance.getList();
            instance.close();
            expect(list.classList.contains('is-visible')).to.be.false;
        });

        describe('direction-related', function() {
            it('getDirection() returns down for this instance', function() {
                expect(instance.getDirection()).to.equal('down');
            });

            it('expects SpeedDial container to have .speed-dial--down class', function() {
                var container = instance.getContainer();
                expect(container.classList.contains('speed-dial--down')).to.be.true;
            });

            describe('setDirection(\'left\')', function() {

                beforeEach(function() {
                    instance.setDirection('left');
                });

                it('removes .speed-dial--down class', function() {
                    var container = instance.getContainer();
                    expect(container.classList.contains('speed-dial--down')).to.be.false;
                });

                it('adds .speed-dial--left class', function() {
                    var container = instance.getContainer();
                    expect(container.classList.contains('speed-dial--left')).to.be.true;
                });

                it('expects direction in settings to be left', function() {
                    expect(instance.getDirection()).to.equal('left');
                });
            });

        });

    });

});
