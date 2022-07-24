import styled from 'styled-components'

const DarkMode = ({ darkMode, setDarkMode}) => {

    const Switche = styled.div`
        display: flex;
        justify-content: space-between;
        width: 70px;
        padding: 4px 4px;
        background-color: ${() => darkMode ? "rgb(18,44,59)" : "rgb(18 44 59 / 23%)"};
        border-radius: 25px;
        cursor: pointer;

        span{
            display: grid;
            place-items: center;
            width: 28px;
            height: auto;
            border-radius: 50%;
        }
    `;

    const Sol = styled.span`
        background-color: ${() => darkMode ? "rgb(18,44,59)" : "rgb(13,32,44)"};
        border: ${() => darkMode ? "transparent" : "1px solid rgb(236,184,10)"};
        color: ${() => darkMode ? "rgb(118, 146, 168)" : "rgb(236,184,10)"}; 
        
    `;

    const Luna = styled.span`
        background-color: ${() => darkMode && "rgb(13,32,44)"};
        border: 1px solid ${() => darkMode ? "rgb(236,184,10)" : "transparent"};
        color: ${() => darkMode ? "rgb(236,184,10)" : "rgb(118, 146, 168)"};
    `;
    
    const handleClick = () => {
        setDarkMode(darkMode ? false : true);
    }

    return ( 
        <Switche onClick={() => handleClick()}>
            <Sol><i className="bi bi-sun" style={{fontSize: "17px"}}></i></Sol>
            <Luna><i className="bi bi-moon" style={{fontSize: "15px"}}></i></Luna>
        </Switche>
     );
}
 
export default DarkMode;