require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    // rinkeby: {
    //   url: "https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
    //   accounts: [privateKey1, privateKey2]
    // }
  },
  solidity: {
    version: "0.5.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
    // compilers: [
    //   {
    //     version: "0.5.5",
    //   },
    //   {
    //     version: "0.6.7",
    //     settings: {},
    //   },
    // ],
    // overrides: {
    //   "contracts/Foo.sol": {
    //     version: "0.5.5",
    //     settings: { }
    //   }
    // }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}