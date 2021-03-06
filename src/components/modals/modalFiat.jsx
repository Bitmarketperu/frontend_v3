import FiatList from '../coinList/fiatList'
const ModalFiat = ({setModalFiat,select}) =>{

    return <div className="modal-wrapper">
        <div className="modal-display">
            <div className="modalHeader">
                <div>
                    <b>
                        Elija un Moneda
                    </b>
                </div>
                <div>
                    <i onClick={()=>setModalFiat(false)} className="bi-x x"/>
                </div>
            </div>
            <div className="modalContent">
                <FiatList select={select}/>
            </div>
        </div>
    </div>
}
export default ModalFiat