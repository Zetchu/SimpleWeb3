//https://eth-ropsten.alchemyapi.io/v2/V5AV4d6nQ1t7ASTJvrV1i_mYHAcF0Hdc

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity: '0.8.8',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/V5AV4d6nQ1t7ASTJvrV1i_mYHAcF0Hdc',
      accounts: [ '077b588b914638ffda3df4ba518672188748482d5dcd4851db81a13f90e8fb21' ]
    }
  }
}