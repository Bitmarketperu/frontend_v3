import styles from '../../css/swap/swap.module.css'
import usdt from '../../img/usdt.png'
import sol from '../../img/sol.png'
import arrow from '../../img/downArrow.svg'
import dobleArrow from '../../img/dobleArrow.svg'
const Swap = ()=>{
    return (
        <div className="container-fluid">
            <div className='container'>
                <div className="row">
                    <div className="col-7 pad">
                        <div className={styles.grafic}>
                            <p className='text-white'> Grafica </p>
                        </div>
                    </div>
                    <div className="col-5 pad">
                        <div className={styles.swapSection}>
                            <h2> Swap </h2>
                            <p> Cambia tokens al instante </p>
                            <hr />
                            <div className='mb-2'>
                                <div className={styles.select}>
                                    <img src={usdt} alt="" /> 
                                    <div className='mx-2'>USDT</div>
                                    <img src={arrow} alt="" className={styles.arrow} />
                                </div>
                            </div>
                                <input type="text" name="" id="" />
                                <div className={styles.dobleArrowWrap}>
                                    <div className={styles.dobleArrowCircle}>
                                        <img src={dobleArrow} alt=""/>
                                    </div>
                                </div>
                                <div className='mb-2'>
                                    <div className={styles.select}>
                                        <img src={sol} alt="" />
                                        <div className='mx-2'>SOLES</div>
                                        <img src={arrow} alt="" className={styles.arrow} />
                                    </div>
                                </div>
                                <input type="text" name="" id="" />
                                <div>
                                    <button> Procesar </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    )
}
export default Swap