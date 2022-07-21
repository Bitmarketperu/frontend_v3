import { useState } from "react"
import Porcentajes from "../../components/admin/porcentajes"
import Usuarios from "../../components/admin/usuarios"
import Bancos from "../../components/admin/bancos"
import Transacciones from "../../components/admin/transacciones"
const Admin = ()=>{

    const [menu,setMenu] = useState(1)

    return (
    <div className="container">
        <div className="row">
            <div className="col-3 sideMenu">
                <div className="adminHeader">
                    <h3> Administrador </h3>
                    <p> Nivel 1 </p>
                </div>
                <ul>
                    <li className="adminMenu">
                        <div onClick={()=>setMenu(1)}>
                            <i className="bi-percent"/> Porcentajes
                        </div>
                    </li>
                    <li className="adminMenu">
                        <div onClick={()=>setMenu(2)}>
                            <i className="bi-people"/> Usuarios
                        </div>
                    </li>
                    <li className="adminMenu">
                        <div onClick={()=>setMenu(3)}>
                            <i className="bi-bank"/> Bancos
                        </div>
                    </li>
                    <li className="adminMenu">
                        <div onClick={()=>setMenu(4)}> 
                            <i className="bi-card-list"/> Transacciones
                        </div>
                    </li>
                </ul>
                {/* */}
            </div>
            <div className="col-9 text-white p-5">
                {menu === 1 && <Porcentajes />}
                {menu === 2 && <Usuarios />}
                {menu === 3 && <Bancos />}
                {menu === 4 && <Transacciones />}
            </div>
        </div>
    </div>)
}
export default Admin