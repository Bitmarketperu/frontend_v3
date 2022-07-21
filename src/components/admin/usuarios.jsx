import axios from "axios"
import { layouts } from "chart.js"
import { useEffect,useContext, useState } from "react"
import { DataContext } from '../../context/DataContext'

const Usuarios = ()=>{

    const { apiUrl } = useContext(DataContext)
    const [users,setUsers] = useState(false)

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
    const editUser = (_id)=>{
        alert("Editando: "+ _id )
    }

    return (<>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3> <i className="bi-people"></i> Usuarios</h3>
                </div>
            </div>
            <div className="row yellow">
                <div className="col-3">Nombre</div>
                <div className="col-2">Id</div>
                <div className="col-3">Email</div>
                <div className="col-3">Telefono</div>
                <div className="col-1"></div>
            </div>
            {users && users.map((item)=> <div key={item._id} className="row my-3">
                    <div className="col-3">{!item.name ? "n/a" : item.name}</div>
                    <div className="col-2">{ last(item._id) }</div>
                    <div className="col-3">{!item.email ? "n/a" : item.email}</div>
                    <div className="col-3">{!item.phone ? "n/a" : item.phone}</div>
                    <div className="col-1">
                        <button onClick={()=>editUser(item._id)} > <i className="bi-wrench"></i> </button>
                    </div>
                    <div className="col-12 adminUserWallet"> {item.wallet} </div>
                </div>
            )}
        </div>
    </>)
}
export default Usuarios