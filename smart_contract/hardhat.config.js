//https://eth-goerli.g.alchemy.com/v2/J91B2b8o9SAwY1IryP9fl9FSjgMx3rTi
require('@nomiclabs/hardhat-waffle');
module.exports={
  solidity:'0.8.0',
  networks:{
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/J91B2b8o9SAwY1IryP9fl9FSjgMx3rTi',
      accounts:['f2014cc87cd6fe49ee3528ca344e8ab3d85c18b496a98bcb9dfe74a173fe23e0']
    }
  }
}