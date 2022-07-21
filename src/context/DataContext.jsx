import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import Web3 from 'web3'
const eth = window.ethereum
const provider = "https://bsc-dataseed.binance.org/"
const web3 = new Web3(provider)
export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    
    const networks = [1,56,137]
    
    const apiUrl = "http://bitmarketperu.herokuapp.com/api/v1/"
    
    const [loading,setLoading] = useState(false)
    const [wallet,setWallet] = useState(false)

    useEffect(()=>{
        connect()
        compareNetworks()
    },[])

    const compareNetworks = async ()=>{
        const usedNetwork = await eth.request({method:'eth_chainId'})
        const usedNetworkNumber = web3.utils.hexToNumber(usedNetwork)
        console.log("Used Network: "+ usedNetwork + ", in Number: " +usedNetworkNumber )
    }

    const connect = async()=>{
        setLoading(true)
        if(window.ethereum){
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            console.log("Chain "+ web3.utils.hexToNumber(chainId))
            const accounts = await window.ethereum.request({method:"eth_requestAccounts"})
            const wallet = accounts[0]
            const body = {
                wallet
            }
            const res = await axios.post(apiUrl+"auth",body)
            setWallet(wallet)
            setLoading(false)
            console.log(res.data.response)
        }else{
            alert("Por favor instale Metamask")
            setLoading(false)
        }
    }
    
    const _context = {
        connect,wallet,
        loading,setLoading,
        apiUrl
    }

    return (
        <DataContext.Provider value={_context}>
            {children}
        </DataContext.Provider>
    )
}