import { useContext } from "react";
import {GlobalContext} from "../../context"


function ContextTextComponent(){

    const { theme } = useContext(GlobalContext);

    return(
        <h2 style={{ fontSize : theme === 'light' ? '40px' : '60px' ,
            color: theme === 'light' ? '#fff' : '#000',
            padding: '20px',
            textAlign: 'center'}}>
            Sujan Magaar...
        </h2>
    )
}

export default ContextTextComponent;