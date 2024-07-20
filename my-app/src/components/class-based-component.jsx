import { Component } from "react";

class ClassBasedComponent extends Component {

    state = {
        showText: false,
        changeColor: false,
        count: 0
    };

    handleClick = () => {

    const {showText, changeColor} = this.state;

        this.setState({
            showText : !showText,
            changeColor: !changeColor,
        })
    }

    handleCOunt = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1
        })
    }

     componentDidMount(){
        console.log("This is callded first time on page load");

        this.setState({
            showText: !this.state.showText,
            changeColor: !this.state.changeColor
        });
     }

     componentDidUpdate(prevProps, prevState){
        console.log(prevState);
      
     }

    
    render(){
        console.log(this.state);
        const {showText, changeColor, count} = this.state;
        return(
            <>
                {showText ? <h3 style={{color: changeColor ? 'red' : 'black'}}>This is class based components</h3> : null}
                
                <button onClick={this.handleClick}>Toggle text</button>
                <button onClick={this.handleCOunt}>Increase</button>
                <h3> COunt is {count}</h3>
            </>
        )
    }
}

export default ClassBasedComponent;