import { NavLink } from 'react-router-dom'
import logo from '../../img/isotipoBitmarket.png'
import walletImg from '../../img/wallet.png'
const Nav = ()=>{
    return <div className='principal-nav'>
    <div className='container-nav'>
        <div className='nav-section-1'>
            <img src={logo} alt="" srcset="" /> 
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
            <button className='connect-btn'> 
                <div className='external-circle'>
                    <div className='internal-circle'>
                        <img className='walletimg' src={walletImg} alt="" /> 
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