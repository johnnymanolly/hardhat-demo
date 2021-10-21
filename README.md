## Init the project
```npm init```
```npm install --save-dev hardhat```

## To use your local installation of Hardhat, you need to use npx to run it
```npx hardhat``` (choose basic sample project)

# Basic Sample Hardhat Project

## compile contracts
```npx hardhat compile``` (this will create artifacrs and cache folders)

## test your contracts
```npx hardhat test```

## deploy
```npx hardhat run scripts/sample-script.js```

# Connecting a wallet or Dapp to Hardhat Network

Hardhat will always spin up an in-memory instance of Hardhat Network on startup by default. It's also possible to run Hardhat Network in a standalone fashion so that external clients can connect to it. This could be MetaMask, your Dapp front-end, or a script.

To run Hardhat Network in this way, run 
```npx hardhat node```

This will expose a JSON-RPC interface to Hardhat Network. To use it connect your wallet or application to http://localhost:8545.

If you want to connect Hardhat to this node to, for example, run a deployment script against it, you simply need to run it using --network localhost.

To try this, start a node with npx hardhat node and re-run the sample script using the network option:
```npx hardhat run scripts/sample-script.js --network localhost```

# Configuration

When Hardhat is run, it searches for the closest hardhat.config.js file starting from the Current Working Directory. This file normally lives in the root of your project. An empty hardhat.config.js is enough for Hardhat to work.

The entirety of your Hardhat setup (i.e. your config, plugins and custom tasks) is contained in this file.

There are two kinds of networks in Hardhat: JSON-RPC (opens new window)based networks, and the built-in Hardhat Network.
You can customize which network is used by default when running Hardhat by setting the config's defaultNetwork field. If you omit this config, its default value is "hardhat"# hardhat-demo
