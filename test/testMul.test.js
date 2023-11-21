const testMul = artifacts.require("testMul");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */

contract("testMul",() => {
    it("test function testmul1", async() => {
        const inst = await testMul.deployed();    
        const result = await inst.testmul1.call();
        console.log("result:",result);
    });

    it("test function testmul2", async() => {
        const inst = await testMul.deployed();    
        const result = await inst.testmul2.call();
        console.log("result:",result);
    });
});