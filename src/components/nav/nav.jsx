import { NavLink } from 'react-router-dom'
import logo from '../../img/isotipoBitmarket.png'
const Nav = ()=>{
    return <div className='principal-nav'>
    <div className='container-nav'>
        <div className='nav-section-1'>
            <img src={logo} alt="" srcSet="" /> 
            BitmarketPeru
        </div>
        <div className='nav-section-2'>
            <NavLink to='/home' className='nav-link'>
                Home
            </NavLink>
            <NavLink to='/dashboard' className='nav-link'>
                dasboard 
            </NavLink>
            <NavLink to='/swap' className='nav-link'>
                Swap
            </NavLink>
            <div className='mx-3 yellow'>
                5 <i className='bi-bell-fill' />
            </div>
            <button className='connect-btn'> 
                <div className='external-circle'>
                    <div className='internal-circle'>
                        <i className='bi-wallet2 text-white' ></i>
                    </div>
                </div> 
                <div>
                    Conectar Wallet
                </div>
            </button>
        </div>
    </div>
</div>
}
export default Nav