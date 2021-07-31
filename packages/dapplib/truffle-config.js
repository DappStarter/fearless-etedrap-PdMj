require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain purse grace castle obscure thing'; 
let testAccounts = [
"0x5d1dda55fbf9072cccf428e1f44f362e0474b006ac33488d408aac85857fb250",
"0xf4f1b97248d57ae022e312d08c364a4efe7e6ba58188116207007f6676ae0084",
"0x58823755ec29b66a3c05d0327130dfb9c7ffd34674b8c950a82aa890752c3ac5",
"0xf89bf704f862268ffd616b483ee80e9b64f572b11dfb83204899a859c56e616f",
"0x1631759e252fa9b0bf98c52fbc9066ca0bfbc41589ed05ff63bdd029f038b41b",
"0x48d1f56a82388ee09626d9797e2c5e61432959b94b48820b92e8ffd9d20a6123",
"0xb07d20cd67648d71e1be1d189ee800b8cbf127ba4b88acb21a752eec882bb16f",
"0x9d0cf9bdbcf3ae88753e557acd770992e3f3e07bdf6e1378e3c938c7e85e4e7a",
"0x02006128a3c4a0ad05f01e3e6cb8ec1b8b0f08481ae87ae0eda9f4efa325633f",
"0xf82af2478d32dccdfb71f564f8025657d93e144ad608a07d73ce60f071513b6e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

