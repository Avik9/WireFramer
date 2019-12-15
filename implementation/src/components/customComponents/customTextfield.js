import React from 'react';
import { Rnd } from "react-rnd";

class CustomTextfield extends React.Component {

    constructor(props) {
        super(props);

        var basicTextfield = {
            type: "customTextfield",
            text: "",
            fontSize: 12,
            backgroundColor: "#e6e6e6",
            borderColor: "black",
            fontColor: "black",
            borderThickness: 2,
            borderRadius: 0,
            width: 200,
            height: 150,
            x: 150,
            y: 150,
            placeholder: "Input",
        };

        var customStyle = {}

        if (this.props.component.type === "sampleTextfield")
        {
            customStyle = {
                width: basicTextfield.width,
                height: basicTextfield.height,
                border: basicTextfield.borderThickness,
                borderRadius: basicTextfield.borderRadius,
                backgroundColor: basicTextfield.backgroundColor,
                borderColor: basicTextfield.borderColor,
                fontColor: basicTextfield.fontColor,
                fontSize: basicTextfield.fontSize,
                positionX: this.props.component.x,
                positionY: this.props.component.y,
            }

            this.state = {
                textfield: basicTextfield,
                textfieldStyle: customStyle,
            };
        }
        else
        {
            customStyle = {
                width: this.props.component.width,
                height: this.props.component.height,
                border: this.props.component.borderThickness,
                borderRadius: this.props.component.borderRadius,
                backgroundColor: this.props.component.backgroundColor,
                borderColor: this.props.component.borderColor,
                fontColor: this.props.component.fontColor,
                fontSize: this.props.component.fontSize,
                positionX: this.props.component.x,
                positionY: this.props.component.y,
            }

            this.state = {
                textfield: this.props.component,
                textfieldStyle: customStyle,
            };
        }
    }

    render() {
        const textfieldStyle = {
            background: "white",
        }

        return (
            <div>
                <Rnd 
                    default={{
                        x: this.state.textfieldStyle.positionX,
                        y: this.state.textfieldStyle.positionY,
                        width: this.state.textfieldStyle.width,
                        height: this.state.textfieldStyle.height,
                    }}
                    bounds=".canvas_column"
                    style={textfieldStyle} 
                    onClick={() => this.props.setCurrentComponent(this.props.component)} 
                    onBlur={() => this.props.setCurrentComponent()}>
                    {this.state.textfield.text}
                </Rnd>
            </div>
        );
    }
}

export default CustomTextfield;