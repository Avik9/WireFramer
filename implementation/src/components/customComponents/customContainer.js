import React from 'react';
import { Rnd } from "react-rnd";

class CustomContainer extends React.Component {

    constructor(props) {
        super(props);

        var basicContainer = {
            type: "customContainer",
            text: "",
            fontSize: -1,
            backgroundColor: "#000000",
            borderColor: "#FFFFFF",
            fontColor: "#FFFFFF",
            borderThickness: 2,
            borderRadius: 0,
            width: 200,
            height: 150,
            x: 150,
            y: 150,
        };

        var customStyle = {}

        if (this.props.component.type === "sampleLabel")
        {
            customStyle = {
                width: basicContainer.width,
                height: basicContainer.height,
                border: basicContainer.borderThickness,
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
        // const containerStyle = {
        //     background: "white",
        //     border: "2pt solid black",
        //     height: "150px",
        //     width: "200px",
        // }

        return (
            
            <Rnd default={{
                x: this.state.container.positionX,
                y: this.state.container.positionY,
                width: this.state.container.width,
                height: this.state.container.height,
            }} // style={containerStyle}
            >
                {/* {console.log("CustomContainer: ")}
                {console.log(this.props.component)} */}
                <div 
                onClick={() => this.props.setCurrentComponent(this.props.component)} 
                onBlur={() => this.props.setCurrentComponent()} 
                style={this.state.containerStyle}/>

            </Rnd>
        );
    }
}

export default CustomContainer;