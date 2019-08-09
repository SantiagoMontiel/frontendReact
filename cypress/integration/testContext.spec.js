const addContext = require('mochawesome/addContext');

describe('test suite', () => {
    it('should add context', () => {

        // context can be a simple string
        addTestContext('Text','simple string');

        // context can be a url and the report will create a link
        addTestContext('Link','http://localhost:3000');

        // context can be an image url and the report will show it inline
        addTestContext('Image', 'http://i.imgur.com/c4jt321.png');

        // context can be an object with title and value properties
        addTestContext('Response', {
            title: 'expected output',
            value: {
                a: 1,
                b: '2',
                c: 'd'
            }
        });
    })
});

function addTestContext(title, value) {
    cy.once('test:after:run', test => addContext({ test }, { title, value }));
}