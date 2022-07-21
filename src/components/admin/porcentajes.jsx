import { useEffect, useState,useContext } from "react"
import axios from "axios"
import { DataContext } from "../../context/DataContext"
const Porcentajes = ()=>{

    const {apiUrl} = useContext(DataContext)

    useEffect(()=>{
        //getPercents()
    },[])

    const getPercents = async ()=>{
        const res = await axios.get(apiUrl + "percents")
        const percents = res.data.response
        console.log(percents)
        setUsdtDolares(percents[0])
        setUsdtSoles(percents[1])
        setSolesUsdt(percents[2])
        setDolaresUsdt(percents[3])
    }

    const [usdtDolares,setUsdtDolares] = useState(3)
    const [usdtSoles,setUsdtSoles] = useState(4)
    const [solesUsdt,setSolesUsdt] = useState(5)
    const [dolaresUsdt,setDolaresUsdt] = useState(4)
    
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