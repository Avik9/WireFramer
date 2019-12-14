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
            borderThickness: 1.5,
            borderRadius: 5,
            width: 100,
            height: 27.5,
            x: 50,
            y: 50,
        };

        var customStyle = {}

        if (this.props.component.type === "sampleLabel")
        {
            customStyle = {
                width: basicButton.width,
                height: basicButton.height,
                border: basicButton.borderThickness,
                borderRadius: basicButton.borderRadius,
                backgroundColor: basicButton.backgroundColor,
                borderColor: basicButton.borderColor,
                fontColor: basicButton.fontColor,
                fontSize: basicButton.fontSize,
                positionX: this.props.component.x,
                positionY: this.props.component.y,
            }

            this.state = {
                label: basicButton,
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
                positionX: this.props.component.x,
                positionY: this.props.component.y,
            }

            this.state = {
                button: this.props.component,
                buttonStyle: customStyle,
            };
        }
    }

    render() {

        // const buttonStyle = {
        //     width: "100px",
        //     height: "27.5px",
        //     border: "1.5px solid black",
        //     borderRadius: "5px",
        //     backgroundColor: "#E6E6E6",
        // }

        return (
            <Rnd default={{
                x: this.state.button.positionX,
                y: this.state.button.positionY,
                width: this.state.button.width,
                height: this.state.button.height,
            }}>
                <div style={this.state.buttonStyle} onClick={() => this.props.setCurrentComponent(this.props.component)} onBlur={() => this.props.setCurrentComponent()}>
                    {this.state.button.text}
                </div>
            </Rnd>
        );
    }
}

export default CustomButton;