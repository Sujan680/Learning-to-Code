import { useContext } from "react";
import {GlobalContext} from "../../context"


function ContextTextComponent(){

    const { theme } = useContext(GlobalContext);
    return(
        <h2 style={{ fontSize : theme === 'light' ? '40px' : '60px'}}>
            Sujan Magaar...
        </h2>
    )
}

export default ContextTextComponent;