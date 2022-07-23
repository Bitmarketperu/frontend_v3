import usdt from '../../img/monedas/usdt.png'
import busd from '../../img/monedas/busd.png'
import dai from '../../img/monedas/dai.png'
import usd from '../../img/monedas/usd.png'
import sol from '../../img/monedas/sol.png'
import efectivo from '../../img/monedas/efectivo.png'

const CoinList = ()=>{
    return (<>
        <div className='coinList'>
            <img src={usdt} alt="" />
            <div className='mx-2'>
                <div>
                    <p>USDT</p>
                    <h4>Theter USD</h4>
                </div>
            </div>
        </div>
        <div className='coinList'>
            <img src={busd} alt="" />
            <div className='mx-2'>
                <div>
                    <p>BUSD</p>
                    <h4>Binance USD</h4>
                </div>
            </div>
        </div>
        <div className='coinList'>
            <img src={dai} alt="" />
            <div className='mx-2'>
                <div>
                    <p>DAI</p>
                    <h4>Dai USD</h4>
                </div>
            </div>
        </div>
    </>)
}
export default CoinList