import React from 'react';

class PropertiesColumn extends React.Component {
    changeText = () => {
        this.props.component.text = this.refs.text;
    }
    
    changeFontSize = () => {
        this.props.component.fontSize = this.refs.fontSize;
    }

    changeBackgroundColor = () => {
        this.props.component.backgroundColor = this.refs.backgroundColor;
    }

    changeBorderColor = () => {
        this.props.component.borderColor = this.refs.borderColor;
    }

    changeFontColor = () => {
        this.props.component.fontColor = this.refs.fontColor;
    }

    changeBorderThickness = () => {
        this.props.component.borderThickness = this.refs.borderThickness;
    }

    changeBorderRadius = () => {
        this.props.component.borderRadius = this.refs.borderRadius;
    }

    render() {
        return (
            <div className="card z-depth-0 wireframe-list-link">
                <div className="card-content grey-text text-darken-3 item-card">
                    <span className="card-title center">Name:</span>
                    <input className="active center" type="text" onChange={this.changeText} defaultValue={this.props.wireframe.name} ref="text"/>
                    <span className="card-title center">Properties</span>
                    <input className="active center" type="text" onChange={this.changeText} defaultValue={this.props.component.text} ref="text"/>
                    {this.props.component.fontSize !== -1 && <span>Font Size: <input className="active center" type="number" onChange={this.changeFontSize} defaultValue={this.props.component.fontSize} ref="fontSize"/></span>}
                    <span>Background Color: <input className="active center" type="text" onChange={this.changeBackgroundColor} defaultValue={this.props.component.backgroundColor} ref="backgroundColor"/></span>
                    <span>Border Color: <input className="active center" type="color" onChange={this.changeBorderColor} defaultValue={this.props.component.borderColor} ref="borderColor"/></span>
                    <br /><br />
                    <span>Font Color: <input className="active center" type="color" onChange={this.changeFontColor} defaultValue={this.props.component.fontColor} ref="fontColor"/></span>
                    <br /><br />
                    <span>Border Thickness: <input className="active center" type="text" onChange={this.BorderThickness} defaultValue={this.props.component.borderThickness} ref="borderThickness"/></span>
                    <span>Border Radius: <input className="active center" type="text" onChange={this.BorderRadius} defaultValue={this.props.component.borderRadius} ref="borderRadius"/></span>
                </div>
            </div>
        );
    }
}
export default PropertiesColumn;