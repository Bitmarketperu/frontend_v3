import { useEffect, useState,useContext } from "react"
import axios from "axios"
import { DataContext } from "../../context/DataContext"
const Porcentajes = ()=>{

    const {apiUrl} = useContext(DataContext)
    const [usdtDolares,setUsdtDolares] = useState(0)
    const [usdtSoles,setUsdtSoles] = useState(0)
    const [solesUsdt,setSolesUsdt] = useState(0)
    const [dolaresUsdt,setDolaresUsdt] = useState(100)

    const [maxSol,setMaxSol] = useState(false)
    const [maxDol,setMaxDol] = useState(false)
    const [maxCrypto,setMaxCrypto] = useState(false)
    const [limSol,setLimSol] = useState(false)
    const [limDol,setLimDol] = useState(false)

    useEffect(()=>{
        getConfig()
    },[])

    const getConfig = async ()=>{
        const res = await axios.get(apiUrl + "config")
        const config = res.data.response
        console.log(config)
        setUsdtDolares(config.dolInp)
        setUsdtSoles(config.dolOut)
        setSolesUsdt(config.solOut)
        setDolaresUsdt(config.solInp)
    }

    
    
    return (<>
        <div>
            <div className="changes">
                <div>
                    USDT - Dolares 
                </div>
                <div className="adminPercent">
                    <input onChange={(e)=>setUsdtDolares(e.target.value)} type="text" value={usdtDolares}/>
                    <div> % </div>
                    <button> Save </button>
                </div>
            </div>
            <div className="changes">
                <div>
                    USDT - Soles 
                </div>
                <div className="adminPercent">
                    <input onChange={(e)=>setUsdtSoles(e.target.value)} type="text" value={usdtSoles}/>
                    <div> % </div>
                    <button> Save </button>
                </div>
            </div>
            <div className="changes">
                <div>
                Soles - USDT 
                </div>
                <div className="adminPercent">
                    <input onChange={(e)=>setSolesUsdt(e.target.value)} type="text" value={solesUsdt}/>
                    <div> % </div>
                    <button> Save </button>
                </div>
            </div>
            <div className="changes">
                <div>
                Dolares - USDT 
                </div>
                <div className="adminPercent">
                    <input onChange={(e)=>setDolaresUsdt(e.target.value)} type="text" value={dolaresUsdt}/>
                    <div> % </div>
                    <button> Save </button>
                </div>
            </div>
        </div>
    </>)
}
export default Porcentajes