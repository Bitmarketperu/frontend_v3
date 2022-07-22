import { useEffect, useState,useContext } from "react"
import axios from "axios"
import { DataContext } from "../../context/DataContext"
import Loader from "../loader/Loader"
const Config = ()=>{

    const {apiUrl,loading,setLoading} = useContext(DataContext)
    const [maxSol,setMaxSol] =       useState(false)
    const [maxDol,setMaxDol] =       useState(false)
    const [maxCrypto,setMaxCrypto] = useState(false)
    const [limSol,setLimSol] =       useState(false)
    const [limDol,setLimDol] =       useState(false)

    const [config,setConfig] = useState(false)

    useEffect(()=>{
        getConfig()
    },[])

    const getConfig = async ()=>{
        const res = await axios.get(apiUrl + "config")
        const config = res.data.response
        setConfig(config)
        setMaxSol(config.maxSol)
        setMaxDol(config.maxDol)
        setMaxCrypto(config.maxCrypto)
        setLimDol(config.limDol)
        setLimSol(config.limSol)

        console.log(config)
    }

    const save = async ()=>{
        setLoading(true)
        const body = {
            ...config,
            maxDol,
            maxSol,
            maxCrypto,
            limDol,
            limSol
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
                    Transaccion maxima en soles
                </div>
                <div className="adminPercent">
                    <input min="0" max="100" step="0.1" onChange={(e)=>setMaxSol(e.target.value)} type="number" value={maxSol}/>
                    <div> Sol </div>
                </div>
            </div>
            <div className="changes">
                <div>
                    Transaccion maxima en dolares
                </div>
                <div className="adminPercent">
                    <input min="0" max="100" step="0.1" onChange={(e)=>setMaxDol(e.target.value)} type="number" value={maxDol}/>
                    <div> Dolares </div>
                </div>
            </div>
            <div className="changes">
                <div>
                    Transaccion maxima en crypto
                </div>
                <div className="adminPercent">
                    <input min="0" max="100" step="0.1" onChange={(e)=>setMaxCrypto(e.target.value)} type="number" value={maxCrypto}/>
                    <div> USDT </div>
                </div>
            </div>
            <div className="changes">
                <div>
                    Soles disponibles
                </div>
                <div className="adminPercent">
                    <input min="0" max="100" step="0.1" onChange={(e)=>setLimSol(e.target.value)} type="number" value={limSol}/>
                    <div> Soles </div>
                </div>
            </div>
            <div className="changes">
                <div>
                    Dolares disponibles
                </div>
                <div className="adminPercent">
                    <input min="0" max="100" step="0.1" onChange={(e)=>setLimDol(e.target.value)} type="number" value={limDol}/>
                    <div> Dolares </div>
                </div>
            </div>
            <div className="saveChanges">
                <button onClick={save} > Guardar cambios</button>
            </div>
        </div>
    </>)
}
export default Config