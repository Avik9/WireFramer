import React from 'react';

class PropertiesColumn extends React.Component {
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
                        onChange={() => this.props.changeName(this.refs.name.value)} 
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
                    <span>Font Color: <br /><input className="active center" type="color" onChange={() => this.props.changeFontColor(component.key, this.refs.fontColor.value)} value={component.color} ref="fontColor"/></span>
                    <br /><br />
                    <span>Border Thickness: <input className="active center" type="number" onChange={() => this.props.changeborderWidth(component.key, this.refs.borderWidth.value)} value={component.borderWidth} ref="borderWidth"/></span>
                    <span>Border Radius: <input className="active center" type="number" onChange={() => this.props.changeBorderRadius(component.key, this.refs.borderRadius.value)} value={component.borderRadius} ref="borderRadius"/></span>
                </div>
            </div>
        );
    }
}
export default PropertiesColumn;