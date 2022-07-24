import CoinList from '../coinList/coinList'
const ModalCrypto = ({setModalCrypto,selectCrypto}) =>{
    return <div className="modal-wrapper">
        <div className="modal-display">
            <div className="modalHeader">
                <div>
                    <b>
                        Elija un token
                    </b>
                </div>
                <div>
                    <i onClick={()=>setModalCrypto(false)} className="bi-x x"/>
                </div>
            </div>
            <div className="modalContent">
                <CoinList selectCrypto={selectCrypto}/>
            </div>
        </div>
    </div>
}
export default ModalCrypto