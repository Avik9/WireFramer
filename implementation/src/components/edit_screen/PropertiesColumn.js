import React from 'react';

class PropertiesColumn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            wireframe: this.props.wireframe,
            currentComponent : this.props.component,
        }
    }

    changeName = () => {
        // console.log("Old name: " + this.props.wireframe.name);
        this.props.wireframe.name = this.refs.name.value;
        // console.log("New name: " + this.props.wireframe.name);

        this.setState({
            wireframe: this.props.wireframe,
        });
    }
    
    // changeText = (key, value) => {
    //     // console.log("Old text: " + this.props.component.text);
    //     this.props.wireframe.components[key].text = value;
    //     // console.log("New text: " + this.props.component.text);

    //     this.setState({
    //         wireframe: this.props.wireframe,
    //         currentComponent: this.props.wireframe.components[key],
    //     });
    // }
    
    // changeFontSize = () => {
    //     // console.log("Old font size: " + this.props.component.fontSize);
    //     this.props.component.fontSize = this.refs.fontSize.value;
    //     // console.log("New font size: " + this.props.component.fontSize);

    //     this.setState();
    // }

    // changeBackgroundColor = () => {
    //     console.log("Old background color: " + this.props.component.backgroundColor);
    //     this.props.component.backgroundColor = this.refs.backgroundColor.value;
    //     console.log("New background color: " + this.props.component.backgroundColor);

    //     this.setState();
    // }

    // changeBorderColor = () => {
    //     // console.log("Old border color: " + this.props.component.backgroundColor);
    //     this.props.component.borderColor = this.refs.borderColor.value;
    //     // console.log("New border color: " + this.props.component.backgroundColor);

    //     this.setState();
    // }

    // changeFontColor = () => {
    //     // console.log("Old font color: " + this.props.component.fontColor);
    //     this.props.component.fontColor = this.refs.fontColor.value;
    //     // console.log("New font color: " + this.props.component.fontColor);

    //     this.setState();
    // }

    // changeborderWidth = () => {
    //     // console.log("Old border thickness: " + this.props.component.borderWidth);
    //     this.props.component.borderWidth = this.refs.borderWidth.value;
    //     // console.log("New border thickness: " + this.props.component.borderWidth);

    //     this.setState();
    // }

    // changeBorderRadius = () => {
    //     // console.log("Old border radius: " + this.props.component.borderRadius);
    //     this.props.component.borderRadius = this.refs.borderRadius.value;
    //     // console.log("New border radius: " + this.props.component.borderRadius);

    //     this.setState();
    // }

    render() {
        var component = this.props.component ? this.props.component : {
            text: "",
            fontSize: "",
            backgroundColor: "",
            borderColor: "",
            fontColor: "",
            borderWidth: "",
            borderRadius: "",
        }

        return (
            <div className="card z-depth-0 wireframe-list-link">
                <div className="card-content grey-text text-darken-3 item-card">
                    <span className="card-title center">Name:</span>
                    <input 
                        className="active center" type="text" 
                        onChange={() => this.changeName} 
                        value={this.props.wireframe.name} 
                        ref="name"
                    />

                    <span className="card-title center">Properties</span>
                    
                    <input 
                        className="active center" 
                        type="text" 
                        onChange={() => this.props.changeText(component.key, this.refs.text.value)} 
                        value={component.text} 
                        ref="text"
                    />
                    
                    {this.props.component.fontSize !== -1 && <span>Font Size: <input className="active center" type="number" onChange={() => this.props.changeFontSize(component.key, this.refs.fontSize.value)} value={component.fontSize} ref="fontSize"/></span>}
                    <span>Background Color: <br /><input className="active center" type="color" onChange={() => this.props.changeBackgroundColor(component.key, this.refs.backgroundColor.value)} value={component.backgroundColor} ref="backgroundColor"/></span>
                    <br /><br />
                    <span>Border Color: <br /><input className="active center" type="color" onChange={() => this.props.changeBorderColor(component.key, this.refs.borderColor.value)} value={component.borderColor} ref="borderColor"/></span>
                    <br /><br />
                    <span>Font Color: <br /><input className="active center" type="color" onChange={() => this.props.changeFontColor(component.key, this.refs.fontColor.value)} value={component.fontColor} ref="fontColor"/></span>
                    <br /><br />
                    <span>Border Thickness: <input className="active center" type="number" onChange={() => this.props.changeborderWidth(component.key, this.refs.borderWidth.value)} value={component.borderWidth} ref="borderWidth"/></span>
                    <span>Border Radius: <input className="active center" type="number" onChange={() => this.props.changeBorderRadius(component.key, this.refs.borderRadius.value)} value={component.borderRadius} ref="borderRadius"/></span>
                </div>
            </div>
        );
    }
}
export default PropertiesColumn;