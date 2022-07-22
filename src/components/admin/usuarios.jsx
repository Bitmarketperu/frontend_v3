import axios from "axios"
import { useEffect,useContext, useState } from "react"
import { DataContext } from '../../context/DataContext'
import Loader from "../loader/Loader"
const Usuarios = ()=>{

    const { apiUrl,wallet,loading,setLoading } = useContext(DataContext)

    const [users,setUsers] = useState(false)
    const [modal,setModal] = useState(false)
    const [user,setUser] = useState(false)
    const [name,setName] = useState(false)
    const [email,setEmail] = useState(false)
    const [phone,setPhone] = useState(false)

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = async ()=>{
        const res = await axios.get(apiUrl+"user")
        console.log(res.data.response)
        setUsers(res.data.response)
    }

    const last = (id)=>{
        let x = id.toString()
        return x.substr(x.length - 8, 8) 
    }

    const sendFormData = async (e)=>{
        setLoading(true)
        setModal(false)
        e.preventDefault()
        let body = {
            _id: user._id,
            wallet,
            name,
            email,
            phone
        }
        const res = await axios.put(apiUrl + "user/",body)
        await getUsers()
        setLoading(false)
    }

    const userData = (user)=>{
        setUser(user)
        setName(user.name)
        setPhone(user.phone)
        setEmail(user.email)
        setModal(true)
    }

    return (<>
        {loading && <Loader/>}
        {modal && <div className="bgtransparentDark">
            <div className='modal-display'>
                <div className='modalHeader'>
                    <div>
                        Editando Usuario <br />
                    <div className="lb">{user._id}</div>
                    </div>
                    <div>
                        <i onClick={()=>setModal(false)} className='bi-x x'></i>
                    </div>
                </div>
                <div className="usuariosModalBody">
                    <form action="" onSubmit={(e)=>sendFormData(e)}>
                        <span> <i className='bi-people'/> Nombre completo</span>
                        <input  onChange={(e)=>setName(e.target.value)}  value={name}  className='form-control mb-2' type="text" placeholder='Escriba el nombre' required/>

                        <span> <i className='bi-envelope'/> Correo Electronico </span>
                        <input  value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control mb-2' type="email" placeholder='Correo electronico' required/>
                        
                        <span> <i className='bi-telephone'/> Numero de telefono </span>
                        <input value={phone}  onChange={(e)=>setPhone(e.target.value)} className='form-control mb-2' type="text" placeholder='Numero de telefono' required/>
                        <div className="saveChanges">
                            <button> Guardar </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>}
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3> <i className="bi-people"></i> Usuarios</h3>
                </div>
            </div>
            <div className="row yellow">
                <div className="col-3">Nombre</div>
                <div className="col-2">Id</div>
                <div className="col-4">Email</div>
                <div className="col-2">Telefono</div>
                <div className="col-1"></div>
            </div>
            {users && users.map((item)=> <div key={item._id} className="row my-3">
                    <div className="col-3">{!item.name ? "n/a" : item.name}</div>
                    <div className="col-2">{ last(item._id) }</div>
                    <div className="col-4">{!item.email ? "n/a" : item.email}</div>
                    <div className="col-2">{!item.phone ? "n/a" : item.phone}</div>
                    <div className="col-1">
                        <button onClick={()=>userData(item)}> <i className="bi-wrench"></i> </button>
                    </div>
                    <div className="col-12 adminUserWallet"> {item.wallet} </div>
                </div>
            )}
        </div>
    </>)
}
export default Usuarios