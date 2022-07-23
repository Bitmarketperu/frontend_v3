import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import Web3 from 'web3'
const eth = window.ethereum
const provider = "https://bsc-dataseed.binance.org/"
const web3 = new Web3(provider)
export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    
    //const networks = [1,56,137]
    
    const apiUrl = "http://bitmarketperu.herokuapp.com/api/v1/"
    
    const [loading,setLoading] = useState(false)
    const [wallet,setWallet] = useState(false)
    const [user,setUser] = useState(false)
    const [config,setConfig] = useState(false)

    useEffect(()=>{connect()},[])

    /* const compareNetworks = async ()=>{
        const usedNetwork = await eth.request({method:'eth_chainId'})
        const usedNetworkNumber = web3.utils.hexToNumber(usedNetwork)
        console.log("Used Network: "+ usedNetwork + ", in Number: " +usedNetworkNumber )
    } */

    const connect = async()=>{
        setLoading(true)
        if(window.ethereum){
            await window.ethereum.request({ method: 'eth_chainId' });
            const accounts = await window.ethereum.request({method:"eth_requestAccounts"})
            const wallet = accounts[0]
            const body = {
                wallet
            }
            const res = await axios.post(apiUrl+ "auth",body)
            const res2 = await axios.get(apiUrl + "config")
            setConfig(res2.data.request)
            setUser(res.data.response)
            setWallet(wallet)
            setLoading(false)
        }else{
            alert("Por favor instale Metamask")
            setLoading(false)
        }
    }
    
    const context = {
        connect,wallet,
        loading,setLoading,
        apiUrl, user,config
    }

    return (
        <DataContext.Provider value={context}>
            {children}
        </DataContext.Provider>
    )
}