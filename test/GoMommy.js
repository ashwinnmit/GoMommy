const {expect} = require("chai");
const { ethers } = require("hardhat");

const tokens = (n)=>{
    return ethers.utils.parseUnits(n.toString(),"ether");
}


describe("GoMommy", ()=>{
    let goMom;
    let deployer, owner1;
    beforeEach(async ()=>{

        // user account address
        [deployer, owner1] = await ethers.getSigners();
        const GoMommy = await ethers.getContractFactory("GoMommy");
        goMom = await GoMommy.deploy("Ashwin","Ash");
        // const transaction = await goMom.setNum(10);
        // await transaction.wait();

        const transaction = await goMom.connect(deployer).listDomain("Ashwin.eth",tokens(10));
        //await transaction.wait();

        const num = await goMom.count();
        console.log(`${num} number of domains`);

        // List a domain
        // const transaction = await goMom.connect(deployer).list("Ashwin.eth", tokens(10));
        // await transaction.wait();
    });
    describe("Deployment", ()=>{
        it("has a name", async ()=>{
            const result = await goMom.name();
            expect(result).to.equal("Ashwin");
        })
        it("has a symbol", async ()=>{
            const result2 = await goMom.symbol();
            expect(result2).to.equal("Ash");
        })
        it("Has an Owner", async ()=>{
            let address = await goMom.owner();
            expect(address).to.equal(deployer.address);
        })

        // it("Has a number", async ()=>{
        //     let num = await goMom.num();
        //     expect(num).to.equal(10);
        //     console.log(num);
        // })
    })

    describe("Domain", ()=>{
        it("Returns Domain attr", async ()=>{
            let domain = await goMom.domains(0);
            console.log(domain);
            expect(domain.name).to.equal("Ashwin.eth");
        })
    })



    describe("Buying Domains", ()=>{
        const ID = 0;
        const AMT = ethers.utils.parseUnits("10","ether")
        beforeEach(async ()=>{
            const balfirst = await goMom.checkOwnerBalance();
            console.log("First balance");
            console.log(balfirst);
            const transaction = await goMom.connect(owner1).buyDomain(ID, {value : AMT});
            await transaction.wait();
        })
        it("Checking Ownership", async ()=>{
            const owner = await goMom.ownerOf(ID);
            expect(owner).to.equal(owner1.address);
        })

        it("Checking Balance", async ()=>{
            const num = await goMom.getBalanceEth();
            console.log(num);
            console.log(AMT);
            expect(num).to.equal(AMT);
        })

        it("WithDraw Funds from Smart Contract", async ()=>{
            await goMom.connect(deployer).withdrawEth();
            const num = await goMom.getBalanceEth();
            console.log(num);
            expect(num).to.equal(0);
        })

        
    })
})