import './App.css';
import React, { Component } from 'react'
import SonicxWeb from 'sonicxweb'

const HttpProvider = SonicxWeb.providers.HttpProvider;

const fullNode = new HttpProvider('https://fullnode.sonicxhub.com');
const solidityNode = new HttpProvider('https://solnode.sonicxhub.com');
const eventServer = 'https://event.sonicxhub.com/';
const privateKey = 'D8B708BFFFA424473D83349CF4C6A2395E4436E065B60F0BF31E582281256D1C';

export default class App extends Component {
    constructor() {
        super() 
        this.state = {
            repos: [],
            btnPressed: false,
        }
    }    async execSonicxWeb() {

        const sonicxWeb = new SonicxWeb(
               fullNode,
               solidityNode,
               eventServer,
               privateKey
            );

            const nodeInfo = await sonicxWeb.trx.getNodeInfo();
            console.log(nodeInfo);

            const address = sonicxWeb.address.fromPrivateKey(privateKey);
            console.log(address);


            const nodes = await sonicxWeb.isConnected();
            const connected = !Object.entries(nodes).map(([name, connected]) => {
                if (!connected)
                    console.error(`Error: ${name} is not connected`);

            return connected;
        }).includes(false);
        if (!connected)
            return;

}

     displayApp() {
         return <button onClick={this.execSonicxWeb.bind(this)}>Get Info</button>
   
    }    

render() {
    return (
        <div>
            <h1>Push Get Info and see console.log()</h1>
    {this.displayApp()}
    </div>
    )
   }
}