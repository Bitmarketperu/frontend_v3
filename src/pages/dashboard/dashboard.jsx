import styles from '../../css/dashboard/dashboard.module.css'
import bcp from '../../img/bancos/bcp.png'
import { DataContext } from '../../context/DataContext'
import { useContext, useEffect, useState } from 'react'
import Loader from '../../components/loader/Loader'
import axios from 'axios'

const Dashboard = () => {
    const { wallet,connect,loading,apiUrl,user } = useContext(DataContext)

    useEffect(()=>{
        if(wallet) getBank()
    },[wallet])

    const [addBanks,setAddBanks] = useState(false)
    const [addData,setAddData] = useState(false)

    const [name,setName] = useState(1)
    const [money,setMoney] = useState(1)
    const [accountType,setAccountType] = useState(1)
    const [accountNumber,setAccontNumber] = useState(false)
    const [titular,setTitular] = useState(false)
    const [validForm,setValidForm] = useState(false)
    const [banks,setBanks] = useState(false)
    const [nombre,setNombre] = useState(false)
    const [correo,setCorreo] = useState(false)
    const [telefono,setTelefono] = useState(false)


    const sendForm = async (e)=>{
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
            getBank()
        }   
    }

    const deleteBanc = async (_id)=>{
        const res = await axios.put(apiUrl + "bank/" + _id)
        console.log(res.data.response)
        getBank()
    }   

    const getBank = async ()=>{
        const bankList = await axios.get(apiUrl + "bank/" + wallet)
        setBanks(bankList.data.response)
        console.log("bankList:  ", bankList.data.response)
    }

    const sendFormData = async (e)=>{
        e.preventDefault()
        let body = {
            _id: user._id,
            wallet,
            name: nombre,
            "email": correo,
            "phone": telefono
        }

        const res = await axios.put(apiUrl + "user/",body)
        setAddData(false)
        connect()
    }

    return (
        <div className="container-fluid text-white">
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

            {addData && 
            <div className='bgtransparentDark'>
                <div className='modal-display'>
                    <div className='modalHeader'>
                        <div>
                            Agregar Datos Personales
                        </div>
                        <div>
                            <i onClick={()=>setAddData(false)} className='bi-x x'></i>
                        </div>
                    </div>
                    <div className='backOptions'>
                        <form action="" onSubmit={(e)=>sendFormData(e)}>
                            <span> <i className='bi-people'/> Nombre completo</span>
                            <input onChange={(e)=>setNombre(e.target.value)} className='form-control mb-2' type="text" placeholder='Escriba su nombre' required/>

                            <span> <i className='bi-envelope'/> Correo Electronico </span>
                            <input onChange={(e)=>setCorreo(e.target.value)} className='form-control mb-2' type="email" placeholder='Correo electronico' required/>
                            
                            <span> <i className='bi-telephone'/> Numero de telefono </span>
                            <input onChange={(e)=>setTelefono(e.target.value)} className='form-control mb-2' type="text" placeholder='Numero de telefono' required/>
                            
                            <button className={styles.saveBtn}> Guardar </button>
                        </form>
                    </div>
                </div>
            </div>
            }

            <div className='container'>
                <div className="row">
                    {wallet ? <>
                        <div className="col-6 pad">
                        <div className={styles.bgDark}>
                            <div className={styles.bancos}>
                                <h4>Datos personales</h4>
                                <button onClick={()=>setAddData(true)}> <i className='bi-plus-circle'/> Agregar </button>
                            </div>
                            <div className='datos mt-3'>
                                <div className={styles.datosList}>
                                    <div>
                                    <i className='bi-person mx-2'/>
                                        {user.name ? user.name : <> Nombre no asignado <i className='lb'> ( Opcional )</i></> } 
                                    </div>
                                </div>
                                <div className={styles.datosList}>
                                    <div>
                                        <i className='bi-envelope mx-2'/>
                                        {user.email ? user.email : <> Correo electronico no asignado <i className='lb'> ( Opcional )</i></>}  
                                    </div>
                                </div>
                                <div className={styles.datosList}>
                                    <div>
                                    <i className='bi-telephone mx-2'/>
                                        {user.phone ? user.phone : <>Telefono no asignado<i className='lb'> ( Opcional )</i></>}  
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-6 pad">
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
                        </div>
                    </> : <div className='col-12'>
                        <div className={styles.noConnectedArea}>
                            <button onClick={connect} > Conectar wallet </button>
                            <p> Debe conectar su cartera de metamask para visualizar su informacion de usuario </p>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}
export default Dashboard