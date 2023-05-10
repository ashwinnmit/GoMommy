import React from "react";
import { ethers } from "hardhat";


async function DisplayDomains(){
    const goMommy = await ethers.getContractFactory("GoMommy");
    const goMom = await goMommy.deploy("Ashwin","SreeLakshmi");
    const num = await goMom.count();

    return (
        <>
            <h1>The List of Domains are: </h1>
            <p>{num}</p>
        </>
    )
}


export default DisplayDomains;