const BigNumbers = artifacts.require("BigNumbers");
const Crypto = artifacts.require("Crypto");
const testMul = artifacts.require("testMul");

module.exports = function(deployer) {
  deployer.deploy(BigNumbers);
  deployer.link(BigNumbers,testMul);
  deployer.deploy(Crypto);
  deployer.link(BigNumbers,Crypto);
  deployer.link(Crypto,testMul);
  deployer.deploy(testMul);
};
