require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name recipe sister come harvest permit equal gas'; 
let testAccounts = [
"0x0d604720fde733547fb103c8a52bec1cf4b137191fcb9f700097692da8201453",
"0xdb094442ea514d03148ddfa7200f35883e5ad95bfb5122ed76f02e34f6baa87b",
"0x9cab36f411c4ad6d0a9c916b390dd5d4d4d4ea5a0f9ac1053f9cee0f3ba7eb52",
"0xb6ba1cdb6b682ef284fe5e0873e36f5c309bde84361b57ed098f8fa50b47c8e1",
"0x3d478014ab782d0d286d84d71f824e9491feb9246433b1d214d6f623996971fd",
"0xcd2bd5eabeaf67e63619e9b2a6ed4a80699cdc7b9b3882fda5723fd611e62ad5",
"0x8721fa21c87210d9b7e45fa01bee84f8b5854252b267aec75ec5821b39b4ba7d",
"0xc394bcd333c5a2688d08c0e2feed2a7f577a439bf5264d890719854f086a1d23",
"0x2f6f4e25476d6afc3accc90e283fc6d90ec05605d79f0b94fe27b7d00bfe1cae",
"0x39dab213be2d28db0ac8dfe180d8861d774006e1dbfc6ac16451342632cfe355"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
