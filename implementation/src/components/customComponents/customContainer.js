import React from 'react';
import { Rnd } from "react-rnd";

class CustomContainer extends React.Component {

    constructor(props) {
        super(props);

        var basicContainer = {
            type: "customContainer",
            text: "",
            fontSize: -1,
            backgroundColor: "white",
            borderColor: "black",
            fontColor: "black",
            borderThickness: 4,
            border: "3pt solid black",
            borderRadius: 0,
            width: 70,
            height: 50,
            x: 50,
            y: 50,
        };

        var customStyle = {}

        if (this.props.component.type === "sampleContainer")
        {
            customStyle = {
                width: basicContainer.width,
                height: basicContainer.height,
                border: basicContainer.border,
                borderRadius: basicContainer.borderRadius,
                backgroundColor: basicContainer.backgroundColor,
                borderColor: basicContainer.borderColor,
                fontColor: basicContainer.fontColor,
                fontSize: basicContainer.fontSize,
            }

            this.state = {
                container: basicContainer,
                containerStyle: customStyle,
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
                container: this.props.component,
                containerStyle: customStyle,
            };
        }
    }

    render() {

        return (
            
            <Rnd default={{
                x: this.state.container.positionX,
                y: this.state.container.positionY,
                width: this.state.container.width,
                height: this.state.container.height,
            }}
                bounds=".canvas_column"
                onClick={() => this.props.setCurrentComponent(this.props.component)} 
                onBlur={() => this.props.setCurrentComponent()} 
                style={this.state.containerStyle}

            />
        );
    }
}

export default CustomContainer;