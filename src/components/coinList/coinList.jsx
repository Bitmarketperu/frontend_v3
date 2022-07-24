import usdt from '../../img/monedas/usdt.png'
import busd from '../../img/monedas/busd.png'
import dai from '../../img/monedas/dai.png'
const CoinList = ({selectCrypto})=>{
   
    return (<>
        <div onClick={()=>selectCrypto("usdt")}  className='coinList'>
            <img src={usdt} alt="" />
            <div className='mx-2'>
                <div>
                    <p>USDT</p>
                    <h4>Theter USD</h4>
                </div>
            </div>
        </div>
        <div onClick={()=>selectCrypto("busd")}  className='coinList'>
            <img src={busd} alt="" />
            <div className='mx-2'>
                <div>
                    <p>BUSD</p>
                    <h4>Binance USD</h4>
                </div>
            </div>
        </div>
        <div onClick={()=>selectCrypto("dai")}  className='coinList'>
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