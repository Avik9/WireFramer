import React from 'react';

class PropertiesColumn extends React.Component {
    changeName = () => {
        // console.log("Old name: " + this.props.wireframe.name);
        this.props.wireframe.name = this.refs.name.value;
        // console.log("New name: " + this.props.wireframe.name);
    }
    
    changeText = () => {
        // console.log("Old text: " + this.props.component.text);
        this.props.component.text = this.refs.text.value;
        // console.log("New text: " + this.props.component.text);
    }
    
    changeFontSize = () => {
        // console.log("Old font size: " + this.props.component.fontSize);
        this.props.component.fontSize = this.refs.fontSize.value;
        // console.log("New font size: " + this.props.component.fontSize);
    }

    changeBackgroundColor = () => {
        // console.log("Old background color: " + this.props.component.backgroundColor);
        this.props.component.backgroundColor = this.refs.backgroundColor.value;
        // console.log("New background color: " + this.props.component.backgroundColor);
    }

    changeBorderColor = () => {
        // console.log("Old border color: " + this.props.component.backgroundColor);
        this.props.component.borderColor = this.refs.borderColor.value;
        // console.log("New border color: " + this.props.component.backgroundColor);
    }

    changeFontColor = () => {
        // console.log("Old font color: " + this.props.component.fontColor);
        this.props.component.fontColor = this.refs.fontColor.value;
        // console.log("New font color: " + this.props.component.fontColor);
    }

    changeBorderThickness = () => {
        // console.log("Old border thickness: " + this.props.component.borderThickness);
        this.props.component.borderThickness = this.refs.borderThickness.value;
        // console.log("New border thickness: " + this.props.component.borderThickness);
    }

    changeBorderRadius = () => {
        // console.log("Old border radius: " + this.props.component.borderRadius);
        this.props.component.borderRadius = this.refs.borderRadius.value;
        // console.log("New border radius: " + this.props.component.borderRadius);
    }

    render() {
        var component = this.props.component ? this.props.component : {
            text: "",
            fontSize: "",
            backgroundColor: "",
            borderColor: "",
            fontColor: "",
            borderThickness: "",
            borderRadius: "",
        }

        return (
            <div className="card z-depth-0 wireframe-list-link">
                <div className="card-content grey-text text-darken-3 item-card">
                    <span className="card-title center">Name:</span>
                    <input className="active center" type="text" onBlur={this.changeName} defaultValue={this.props.wireframe.name} ref="name"/>
                    <span className="card-title center">Properties</span>
                    {/* {console.log(component)} */}
                    <input className="active center" type="text" onBlur={this.changeText} defaultValue={component.text} ref="text"/>
                    {this.props.component.fontSize !== -1 && <span>Font Size: <input className="active center" type="number" onChange={this.changeFontSize} defaultValue={component.fontSize} ref="fontSize"/></span>}
                    <span>Background Color: <br /><input className="active center" type="color" onChange={this.changeBackgroundColor} defaultValue={component.backgroundColor} ref="backgroundColor"/></span>
                    <br /><br />
                    <span>Border Color: <br /><input className="active center" type="color" onChange={this.changeBorderColor} defaultValue={component.borderColor} ref="borderColor"/></span>
                    <br /><br />
                    <span>Font Color: <br /><input className="active center" type="color" onChange={this.changeFontColor} defaultValue={component.fontColor} ref="fontColor"/></span>
                    <br /><br />
                    <span>Border Thickness: <input className="active center" type="number" onChange={this.changeBorderThickness} defaultValue={component.borderThickness} ref="borderThickness"/></span>
                    <span>Border Radius: <input className="active center" type="number" onChange={this.changeBorderRadius} defaultValue={component.borderRadius} ref="borderRadius"/></span>
                </div>
            </div>
        );
    }
}
export default PropertiesColumn;