import React, {Component} from "react"

class Cell extends Component{
    constructor(props){
        super (props);
        this.state = {
        curColor: this.props.color,
        newColor: this.props.NewColor
        }
        this.changeColor = this.changeColor.bind(this);
    }
    
    changeColor(){
        this.setState({
            curColor: this.props.newColor
        });
    }
    
    render(){
        return <div className="canvas-col" onMouseOver={this.changeColor}
        style={{backgroundColor: this.state.curColor, color: this.state.curColor,
        width: "50px", height: "50px"
        }}>
        </div>
    }
};

export default Cell;
