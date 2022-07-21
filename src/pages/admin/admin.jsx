const Admin = ()=>{
    return (
    <div className="container">
        <div className="row">
            <div className="col-3 sideMenu">
                <div className="adminHeader">
                    <h3> Jason Hernandez </h3>
                    <p> Admin account </p>
                </div>
                <ul>
                    <li className="adminMenu">
                        <a href="">
                            <i className="bi-percent"/> Porcentajes
                        </a>
                    </li>
                    <li className="adminMenu">
                        <a href="">
                            <i className="bi-people"/> Usuarios
                        </a>
                    </li>
                    <li className="adminMenu">
                        <a href="">
                            <i className="bi-bank"/> Bancos
                        </a>
                    </li>
                </ul>
                {/* */}
            </div>
            <div className="col-9 text-white p-5">
            <div className="changes">
                    <div>
                        USDT - Dolares 
                    </div>
                    <div className="adminPercent">
                        <input type="text" value={"5"} />
                        <div> % </div>
                        <button> Save </button>
                    </div>
                </div>
                <div className="changes">
                    <div>
                        USDT - Soles 
                    </div>
                    <div className="adminPercent">
                        <input type="text" value={"5"} />
                        <div> % </div>
                        <button> Save </button>
                    </div>
                </div>
                <div className="changes">
                    <div>
                       Soles - USDT 
                    </div>
                    <div className="adminPercent">
                        <input type="text" value={"5"} />
                        <div> % </div>
                        <button> Save </button>
                    </div>
                </div>
                <div className="changes">
                    <div>
                       Dolares - USDT 
                    </div>
                    <div className="adminPercent">
                        <input type="text" value={"5"} />
                        <div> % </div>
                        <button> Save </button>
                    </div>
                </div>


            {/* Administrar porcentajes de los cambios<br/>
                listar usuarios, eliminar, editar<br/>
                listar, agregar, eliminar, editar bancos<br/>  */}
            </div>
        </div>
    </div>)
}
export default Admin