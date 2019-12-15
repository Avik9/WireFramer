import React from 'react';
import { Rnd } from "react-rnd";

class CustomButton extends React.Component {

    constructor(props) {
        super(props);

        var basicButton = {
            type: "customButton",
            text: "Submit",
            fontSize: -1,
            backgroundColor: "#e6e6e6",
            borderColor: "#ffffff",
            fontColor: "#ffffff",
            borderWidth: 1.5,
            borderRadius: 5,
            width: 100,
            height: 27.5,
            x: 50,
            y: 50,
        };

        var customStyle = {}

        if (this.props.component.type === "sampleButton")
        {
            customStyle = {
                width: 100,
                height: 27.5,
                borderWidth: 1.5,
                borderRadius: 5,
                backgroundColor: "#e6e6e6",
                borderColor: "#ffffff",
                fontColor: "#ffffff",
                fontSize: 12,
                positionX: 50,
                positionY: 50,
                borderStyle: "solid",
            }

            this.state = {
                button: basicButton,
                buttonStyle: customStyle,
            };
        }
        else
        {
            customStyle = {
                width: this.props.component.width,
                height: this.props.component.height,
                borderWidth: this.props.component.borderWidth,
                borderRadius: this.props.component.borderRadius,
                borderStyle: "solid",
                backgroundColor: this.props.component.backgroundColor,
                borderColor: this.props.component.borderColor,
                fontColor: this.props.component.fontColor,
                fontSize: this.props.component.fontSize,
                positionX: this.props.component.x,
                positionY: this.props.component.y,
            }

            this.state = {
                button: this.props.component,
                buttonStyle: customStyle,
            };
        }
        this.props.updateElement(this.props.component, this.state.button);

    }

    render() {

        return (
            <Rnd 
                default={{
                    x: this.state.button.positionX,
                    y: this.state.button.positionY,
                    width: this.state.button.width,
                    height: this.state.button.height,
                }}
                bounds=".canvas_column"
                style={this.state.buttonStyle} 
                onClick={() => this.props.setCurrentComponent(this.props.component)} 
                // onChange={() => this.props.setCurrentComponent()}
                >
                
                {this.state.button.text} 
            </Rnd>
        );
    }
}

export default CustomButton;