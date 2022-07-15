import { useEffect } from "react"
import { useState } from "react"
import Web3 from "web3"
const web3 = new Web3("https://bsc-dataseed.binance.org/")
const Home = ()=>{

    const [balance,setBalance] = useState(false)
    useEffect(()=>{
        getBalance()
    },[])

    const getBalance = async ()=>{
        let _balance = await web3.eth.getBalance("0x37fDEd159F8bb80B69f29C18FC293c939F9cC5A3")
        _balance = web3.utils.fromWei(_balance.toString(),"ether")
        setBalance(_balance)
    }
    return (<>
        <h3>Web3 Connect</h3>
        <h2>Wallet: 0x37fDEd159F8bb80B69f29C18FC293c939F9cC5A3</h2>
        <h1>Account Balance: {balance ?? balance} BNB </h1>
    </>)
}

export default Home