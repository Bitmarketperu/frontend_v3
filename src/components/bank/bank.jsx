import { useContext, useState,useEffect } from "react"
import { DataContext } from "../../context/DataContext"
import bcp from '../../img/bancos/bcp.png'
import styles from '../../css/dashboard/dashboard.module.css'
import axios from "axios"
import Loader from "../loader/Loader"
const Bank = ()=>{

    const {wallet,apiUrl,loading,setLoading} = useContext(DataContext)
    const [banks,setBanks] = useState(false)
    const [addBanks,setAddBanks] = useState(false)
    const [name,setName] = useState(1)
    const [money,setMoney] = useState(1)
    const [accountType,setAccountType] = useState(1)
    const [accountNumber,setAccontNumber] = useState(false)
    const [titular,setTitular] = useState(false)
    const [validForm,setValidForm] = useState(false)

    useEffect(()=>{
        if(wallet) getBank()
    },[wallet])

    const getBank = async ()=>{
        const bankList = await axios.get(apiUrl + "bank/" + wallet)
        setBanks(bankList.data.response)
        console.log("bankList:  ", bankList.data.response)
    }

    const deleteBanc = async (_id)=>{
        setLoading(true)
        const res = await axios.put(apiUrl + "bank/" + _id)
        console.log(res.data.response)
        await getBank()
        setLoading(false)
    }

    const sendForm = async (e)=>{
        setLoading(true)
        e.preventDefault()
        if(name === 1 || money === 1 || accountType === 1){
            if(name === 1) alert("Debe elegir un banco")
            if(money === 1) alert("Debe elegir un tipo de moneda")
            if(accountType === 1) alert("Debe elegir un tipo de cuenta")
        }else{
            setAddBanks(false)
            let body = {
                wallet,
                name,
                titular,
                number: accountNumber,
                type: accountType,
                money
            }
            console.log(body)
            const res = await axios.post(apiUrl + "bank" , body)
            console.log(res.data.response)
            await getBank()
            setLoading(false)
        }   
    }

    return (<>
        {loading && <Loader/>}
        {addBanks && 
            <div className='bgtransparentDark'>
                <div className='modal-display'>
                    <div className='modalHeader'>
                        <div>
                            Agregar bancos
                        </div>
                        <div>
                            <i onClick={()=>setAddBanks(false)} className='bi-x x'></i>
                        </div>
                    </div>
                    <div className='backOptions'>
                        <form action="" onSubmit={sendForm}>
                            <span> Elija su banco </span>
                            <select onChange={(e)=>setName(e.target.value)} className='form-control' name="" id="">
                                <option value="1"> - Elija un banco -</option>
                                <option value="BCP">BCP</option>
                                <option value="BBVA">BBVA</option>
                                <option value="Scotiabank">ScotiaBank</option>
                                <option value="Interbank">Interbank</option>
                            </select>

                            <span> Moneda </span>
                            <select onChange={(e)=>setMoney(e.target.value)}  className='form-control' name="" id="">
                                <option value="1"> - Elija una moneda - </option>
                                <option value="Soles">Soles</option>
                                <option value="Dolares">Dolares</option>
                            </select>

                            <span> Tipo de cuenta </span>
                            <select onChange={(e)=>setAccountType(e.target.value)}  className='form-control' name="" id="">
                                <option value="1"> - Elija un tipo de cuenta - </option>
                                <option value="Ahorros">Ahorros</option>
                                <option value="Corriente">Corriente</option>
                            </select>

                            <span> Numero de cuenta </span>
                            <input onChange={(e)=>setAccontNumber(e.target.value)} className='form-control' type="text" placeholder='Escriba su numero de cuenta' required/>

                            <span> Titular </span>
                            <input onChange={(e)=>setTitular(e.target.value)} className='form-control' type="text" placeholder='Nombre del titular' required/>
                            
                            {!validForm ? 
                                <button className={styles.saveBtn}> Guardar </button> :
                                <button className={styles.saveBtnDisabled} disabled> Guardar </button>
                            }
                        </form>
                    </div>
                </div>
            </div>
            }
        <div className={styles.bgDark}>
            <div className={styles.bancos}>
                <h4>Cuentas de banco</h4>
                <button onClick={()=>setAddBanks(true)}> <i className='bi-plus-circle'/> Agregar banco </button>
            </div>
            {banks ? banks.map((item)=>{
                return (
                <div key={item._id} className='mt-1'>
                <div className={styles.bList}>
                    <div className={styles.bListIn}>
                        <img src={bcp} alt="" />
                        <div>
                            <h4>{item.name.toUpperCase()} - {item.money}</h4>
                            <b>{item.number} <br/> {item.titular}</b>
                            <h3>{item.type}</h3>
                        </div>
                    </div>
                    <i onClick={()=>deleteBanc(item._id)} className='bi-trash deleteButton'/>
                </div>
            </div> 
            )}):
            <>No posee bancos registrados</>}
        </div>
    </>)
}
export default Bank