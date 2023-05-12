// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GoMommy is ERC721{
    address payable public owner;
    uint public count;
    uint public numSold;

    modifier onlyOwner() {
        require(owner == msg.sender, "Only the owner can list the domain names :(");
        _; // run the function body if require satisfies (we can put this above the require as well);
    }
    struct Domain {
        string name;
        uint256 cost;
        bool isOwned;
    }

    mapping(uint256 => Domain) public domains;

    constructor(string memory _name,string memory _symbol) ERC721(_name,_symbol){
        owner = payable(msg.sender);
    }

    function listDomain(string memory _name,uint256 _cost) public onlyOwner{
        // function to add a domain
        domains[count] = Domain(_name , _cost, false);
        count++;
    }

    function buyDomain(uint id) public payable{
        require(msg.value >= domains[id].cost);
        require(id <= count);
        require(id >=0);
        require(domains[id].isOwned == false);


        _safeMint(msg.sender, id);
        domains[id].isOwned = true;
        numSold++;
    }

    function getBalanceEth() public view returns(uint){
        return address(this).balance;
    }

    function withdrawEth() public onlyOwner{
        owner.transfer(address(this).balance);
    }

    function checkOwnerBalance() public view returns(uint){
        return address(owner).balance;
    }
}