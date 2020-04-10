module.exports = {

    PRIVATE_KEY: 'D8B708BFFFA424473D83349CF4C6A2395E4436E065B60F0BF31E582281256D1C',
    ADDRESS_HEX: '3fa458463bb8b73ae118decab19004e848370374c7',
    ADDRESS_BASE58: 'ScGybiD3LeuvMohLWBDrGbU6qZexXs9bhx',
    CONSUME_USER_RESOURCE_PERCENT: 100,
    FEE_LIMIT: 1000000000,
    FULL_NODE_API: 'https://fullnode.sonicxhub.com',
    SOLIDITY_NODE_API: 'https://solnode.sonicxhub.com',
    EVENT_API: 'https://event.sonicxhub.com',
    NETWORK_ID: "*",
    UPDATED_TEST_TOKEN_OPTIONS: {
        description: 'Very useless utility token',
        url: 'https://none.example.com',
        freeBandwidth: 10,
        freeBandwidthLimit: 100
    },
    getTokenOptions: () => {
        const rnd = Math.random().toString(36).substr(2);
        return {
            name: `Token${rnd}`,
            abbreviation: `T${rnd.substring(2).toUpperCase()}`,
            description: 'Useless utility token',
            url: `https://example-${rnd}.com/`,
            totalSupply: 100000000,
            saleEnd: Date.now() + 60000, // 1 minute
            frozenAmount: 5,
            frozenDuration: 1,
            trxRatio: 10,
            tokenRatio: 2,
            saleStart: Date.now() + 500,
            freeBandwidth: 100,
            freeBandwidthLimit: 1000
        }
    },
    isProposalApproved: async (tronWeb, proposal) => {
        let chainParameters = await tronWeb.trx.getChainParameters()
        for(let param of chainParameters) {
            if(param.key === proposal) {
                return param.value
            }
        }
        return false
    }
}
