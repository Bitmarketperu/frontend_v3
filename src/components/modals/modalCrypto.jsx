import CoinList from '../coinList/coinList'
const ModalCrypto = ({setModalCrypto}) =>{
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
                <CoinList />
            </div>
        </div>
    </div>
}
export default ModalCrypto