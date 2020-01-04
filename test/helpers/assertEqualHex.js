const assert = require('chai').assert;
const sonicxwebBuilder = require('./sonicxwebBuilder');

module.exports = async function (result, string) {

    assert.equal(
        result,
        sonicxwebBuilder.getInstance().toHex(string).substring(2)
    )
}
