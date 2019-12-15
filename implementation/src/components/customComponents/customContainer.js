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
            borderWidth: 3,
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
                borderWidth: basicContainer.borderWidth,
                borderRadius: basicContainer.borderRadius,
                borderStyle: "solid",
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
                borderWidth: this.props.component.borderWidth,
                borderRadius: this.props.component.borderRadius,
                backgroundColor: this.props.component.backgroundColor,
                borderColor: this.props.component.borderColor,
                fontColor: this.props.component.fontColor,
                borderStyle: "solid",
                fontSize: this.props.component.fontSize,
            }

            this.state = {
                container: this.props.component,
                containerStyle: customStyle,
            };
        }

        this.props.updateElement(this.props.component, this.state.container);
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
                // onChange={() => this.props.setCurrentComponent()} 
                style={this.state.containerStyle}

            />
        );
    }
}

export default CustomContainer;