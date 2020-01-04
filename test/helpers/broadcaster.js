const sonicxwebBuilder = require('../helpers/sonicxwebBuilder');

module.exports = async function (func, pk, transaction) {
    const tronWeb = sonicxwebBuilder.createInstance();
    if( !transaction) {
        transaction = await func;
    }
    const signedTransaction = await tronWeb.trx.sign(transaction, pk);
    const result = {
        transaction,
        signedTransaction,
        receipt: await tronWeb.trx.sendRawTransaction(signedTransaction)
    };
    return Promise.resolve(result);
}
