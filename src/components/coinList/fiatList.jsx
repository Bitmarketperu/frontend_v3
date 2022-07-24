import usd from '../../img/monedas/usd.png'
import sol from '../../img/monedas/sol.png'
import efectivo from '../../img/monedas/efectivo.png'

const FiatList = ({select})=>{

    

    return (<>
        <div onClick={()=>select("DolaresTransferencia")} className='coinList'>
            <img src={usd} alt="" />
            <div className='mx-2'>
                <div>
                    <p>USD</p>
                    <h4>Transferencia en Dolares</h4>
                </div>
            </div>
        </div>
        <div className='coinList'>
            <img src={sol} alt="" />
            <div className='mx-2'>
                <div>
                    <p>SOL</p>
                    <h4>Transferencia en Soles</h4>
                </div>
            </div>
        </div>
        <div className='coinList'>
            <img src={efectivo} alt="" />
            <div className='mx-2'>
                <div>
                    <p>Efectivo en Soles</p>
                    <h4>Retiro por caja, Miraflores</h4>
                </div>
            </div>
        </div>
        <div className='coinList'>
            <img src={efectivo} alt="" />
            <div className='mx-2'>
                <div>
                    <p>Efectivo en Dolares</p>
                    <h4>Retiro por caja, Miraflores</h4>
                </div>
            </div>
        </div>
    </>)
}
export default FiatList