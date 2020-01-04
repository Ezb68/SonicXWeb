const sonicxwebBuilder = require('../test/helpers/sonicxwebBuilder');
const SonicxWeb = sonicxwebBuilder.SonicxWeb;

const privateKey = 'D8B708BFFFA424473D83349CF4C6A2395E4436E065B60F0BF31E582281256D1C';
const walletAddr = 'ScGybiD3LeuvMohLWBDrGbU6qZexXs9bhx';

const sonicxWeb = new SonicxWeb({
    fullNode: 'https://fullnode.sonicxhub.com',
    solidityNode: 'https://solnode.sonicxhub.com',
    eventServer: 'https://event.sonicxhub.com/',
    privateKey: privateKey
})

async function generateSignature(privateKey) {
    let timestamp = Date.now().toString();
    let message = sonicxWeb.sha3(Buffer.from(timestamp));
    let signature = await sonicxWeb.trx.sign(message, privateKey);

    return {signature, timestamp};
}

async function verifySignature(timestamp, signature, walletAddr) {
    const message = sonicxWeb.sha3(Buffer.from(timestamp))
    
    var result = false;
    try {
        result = await sonicxWeb.trx.verifyMessage(message, signature, walletAddr);
    } catch(err) {
        result = false;
    }
    
    return result;
}

async function test() {
    const sig = await generateSignature(privateKey)
    console.log("sig=", sig)

    const result = await verifySignature(sig.timestamp, sig.signature, walletAddr)
    console.log("result=", result)
}

test()