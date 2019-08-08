const addContext = require('mochawesome/addContext');

describe('test suite', function () {
    it('should add context', function () {
        var test=this;
        // context can be a simple string
        addContext(test, 'simple string');

        // context can be a url and the report will create a link
        addContext(test, 'http://localhost:3000');

        // context can be an image url and the report will show it inline
        addContext(test, 'http://i.imgur.com/c4jt321.png');

        // context can be an object with title and value properties
        addContext(test, {
            title: 'expected output',
            value: {
                a: 1,
                b: '2',
                c: 'd'
            }
        });
    })
});