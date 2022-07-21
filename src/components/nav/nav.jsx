import { NavLink } from 'react-router-dom'
import logo from '../../img/isotipoBitmarket.png'
import { DataContext } from '../../context/DataContext'
import { useContext } from 'react'
import Resume from '../../services/resumeWallet'
const Nav = ()=>{

    const { wallet,connect } = useContext(DataContext)

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
            <NavLink to='/admin' className='nav-link'>
                Admin
            </NavLink>
            <div className='mx-3 yellow'>
                5 <i className='bi-bell-fill' />
            </div>
            
            <button onClick={connect} className='connect-btn'> 
                <div className='external-circle'>
                    <div className='internal-circle'>
                        <i className='bi-wallet2 text-white' ></i>
                    </div>
                </div> 
                <div>
                    {wallet ? Resume(wallet) : <>Conectar Wallet</>}
                </div>
            </button>
        </div>
    </div>
</div>
}
export default Nav