const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/ProjectFactory.json");

const provider = new HDWalletProvider(
  "tone custom buddy country banner trouble wrong behind hurt cover tornado dash",
  // remember to change this to your own phrase!
  "https://goerli.infura.io/v3/e6c3f9a2d8b84572a0d488a90c57f969"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: "8000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
