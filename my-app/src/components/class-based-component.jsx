import { Component } from "react";

class ClassBasedComponent extends Component {

    state = {
        showText: true,
        changeColor: true,
    };

    handleClick = () => {

    const {showText, changeColor} = this.state;
    
        this.setState({
            showText : !showText,
            changeColor: !changeColor
        })
    }

    
    render(){
        console.log(this.state);
        const {showText, changeColor} = this.state;
        return(
            <>
                {showText ? <h3 style={{color: changeColor ? 'red' : 'black'}}>This is class based components</h3> : null}
                
                <button onClick={this.handleClick}>Toggle text</button>
            </>
        )
    }
}

export default ClassBasedComponent;