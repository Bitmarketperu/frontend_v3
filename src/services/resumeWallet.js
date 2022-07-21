const Resume = (wallet) => {
    return  wallet.substr(0,6)  + "..." + wallet.substr(wallet.length - 6, 6) 
}

export default Resume