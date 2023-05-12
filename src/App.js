import logo from './logo.svg';
import './App.css';
import GoMommy from "./abis/GoMommy.json";
import { useEffect, useState } from 'react';
// import DisplayDomains from './components/DisplayDomains';

function App() {
  var [account, changeAccount] = useState(null);
  const loadBlockchainData = async()=>{
     const accounts = await window.ethereum.request({'method':'eth_requestAccounts'})
     var acc = accounts[0];
     changeAccount(acc);
    //  console.log(account);
  }
  useEffect(()=>{
    loadBlockchainData();
  }, []);
  return (
    <>
      <h1>Hello World</h1>
      <p>This is {account}</p>
    </>
  );
}

export default App;
