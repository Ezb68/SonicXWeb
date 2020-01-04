const sonicxwebBuilder = require('./sonicxwebBuilder');
const tronWeb = sonicxwebBuilder.createInstance();

const amount = process.argv[2] || 10;

(async function () {
    await sonicxwebBuilder.newTestAccounts(amount)
})()

