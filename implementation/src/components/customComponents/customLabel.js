import React from 'react';
import { Rnd } from "react-rnd";

class CustomLabel extends React.Component {

    constructor(props) {
        super(props);

        var basicLabel = {
            type: "customLabel",
            text: "Prompt for Input: ",
            fontSize: 12,
            backgroundColor: "white",
            borderColor: "black",
            fontColor: "black",
            borderThickness: 2,
            borderRadius: 0,
            width: 250,
            height: 50,
            positionX: 150,
            positionY: 150,
            placeholder: "Label",
        };

        var customStyle = {}

        if (this.props.component.type === "sampleLabel")
        {
            customStyle = {
                width: basicLabel.width,
                height: basicLabel.height,
                border: basicLabel.borderThickness,
                borderRadius: basicLabel.borderRadius,
                backgroundColor: basicLabel.backgroundColor,
                borderColor: basicLabel.borderColor,
                fontColor: basicLabel.fontColor,
                fontSize: basicLabel.fontSize,
            }

            this.state = {
                label: basicLabel,
                labelStyle: customStyle,
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
            }

            this.state = {
                label: this.props.component,
                labelStyle: customStyle,
            };
        }
        
    }

    render() {
        return (
            <Rnd 
                default={{
                    x: this.state.label.positionX,
                    y: this.state.label.positionY,
                    width: this.state.label.width,
                    height: this.state.label.height,
                }}
                bounds=".canvas_column"
                className="active center" 
                type="text" 
                onClick={() => this.props.setCurrentComponent(this.props.component)} 
                onBlur={() => this.props.setCurrentComponent()}
                style={this.state.labelStyle}
                >
                {this.state.label.text}
            </Rnd>
        );
    }
}

export default CustomLabel;