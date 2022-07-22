import styles from '../../css/dashboard/dashboard.module.css'
import { DataContext } from '../../context/DataContext'
import { useContext, useState } from 'react'
import Loader from '../../components/loader/Loader'
import axios from 'axios'
import Bank from '../../components/bank/bank'
const Dashboard = () => {
    const { wallet,connect,loading,apiUrl,user } = useContext(DataContext)

    const [addData,setAddData] = useState(false)
    const [nombre,setNombre] = useState(false)
    const [correo,setCorreo] = useState(false)
    const [telefono,setTelefono] = useState(false)

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
                            <Bank />
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