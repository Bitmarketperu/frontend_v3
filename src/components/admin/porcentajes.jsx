import { useEffect, useState,useContext } from "react"
import axios from "axios"
import { DataContext } from "../../context/DataContext"
import Loader from "../loader/Loader"
const Porcentajes = ()=>{

    const {apiUrl,connect,loading,setLoading} = useContext(DataContext)

    const [usdtDolares,setUsdtDolares] = useState(0)
    const [usdtSoles,setUsdtSoles] = useState(0)
    const [solesUsdt,setSolesUsdt] = useState(0)
    const [dolaresUsdt,setDolaresUsdt] = useState(0)

    const [config,setConfig] = useState(false)

    useEffect(()=>{
        getConfig()
    },[])

    const getConfig = async ()=>{
        const res = await axios.get(apiUrl + "config")
        const config = res.data.response
        setConfig(config)
        setUsdtDolares(parseFloat(config.dolOut))
        setUsdtSoles(parseFloat(config.solOut))
        setDolaresUsdt(parseFloat(config.dolInp))
        setSolesUsdt(parseFloat(config.solInp))
    }

    const save = async ()=>{
        setLoading(true)
        const body = {
            ...config,
            solInp:solesUsdt,
            dolOut:usdtDolares,
            dolInp:dolaresUsdt,
            solOut:usdtSoles,
        }
        console.log(body)
        try {
            await axios.put(apiUrl + "config",body)
            await getConfig()
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }

    return (<>
        {loading && <Loader/>}
        <div>
            <div className="changes">
                <div>
                    USDT - Dolares 
                </div>
                <div className="adminPercent">
                    <input min="0" max="100" step="0.1" onChange={(e)=>setUsdtDolares(e.target.value)} type="number" value={usdtDolares}/>
                    <div> % </div>
                </div>
            </div>
            <div className="changes">
                <div>
                    USDT - Soles 
                </div>
                <div className="adminPercent">
                    <input min="0" max="100" step="0.1" onChange={(e)=>setUsdtSoles(e.target.value)} type="number" value={usdtSoles}/>
                    <div> % </div>
                </div>
            </div>
            <div className="changes">
                <div>
                Soles - USDT 
                </div>
                <div className="adminPercent">
                    <input min="0" max="100" step="0.1" onChange={(e)=>setSolesUsdt(e.target.value)} type="number" value={solesUsdt}/>
                    <div> % </div>
                </div>
            </div>
            <div className="changes">
                <div>
                Dolares - USDT 
                </div>
                <div className="adminPercent">
                    <input min="0" max="100" step="0.1" onChange={(e)=>setDolaresUsdt(e.target.value)} type="number" value={dolaresUsdt}/>
                    <div> % </div>
                    
                </div>
            </div>
            <div className="saveChanges">
                <button onClick={save} > Guardar cambios</button>
            </div>
        </div>
    </>)
}
export default Porcentajes