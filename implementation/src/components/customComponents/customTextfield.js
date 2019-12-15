import React from 'react';
import { Rnd } from "react-rnd";

class CustomTextfield extends React.Component {

    constructor(props) {
        super(props);

        var basicTextfield = {
            type: "customTextfield",
            text: "",
            fontSize: 12,
            backgroundColor: "white",
            borderColor: "black",
            fontColor: "#fbfbfb",
            borderWidth: 2,
            borderRadius: 0,
            width: 250,
            height: 50,
            positionX: 150,
            positionY: 150,
            placeholder: "Input",
        };

        var customStyle = {}

        if (this.props.component.type === "sampleTextfield")
        {
            customStyle = {
                width: basicTextfield.width,
                height: basicTextfield.height,
                borderStyle: "solid",
                borderWidth: basicTextfield.borderWidth,
                borderRadius: basicTextfield.borderRadius,
                backgroundColor: basicTextfield.backgroundColor,
                borderColor: basicTextfield.borderColor,
                fontColor: basicTextfield.fontColor,
                fontSize: basicTextfield.fontSize,
                // positionX: basicTextfield.x,
                // positionY: basicTextfield.y,
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
                borderWidth: this.props.component.borderWidth,
                borderRadius: this.props.component.borderRadius,
                borderStyle: "solid",
                backgroundColor: this.props.component.backgroundColor,
                borderColor: this.props.component.borderColor,
                fontColor: this.props.component.fontColor,
                fontSize: this.props.component.fontSize,
                // positionX: this.props.component.x,
                // positionY: this.props.component.y,
            }

            this.state = {
                textfield: this.props.component,
                textfieldStyle: customStyle,
                // width: this.props.component.width,
                // height: this.props.component.height,
                // x: customStyle.positionX,
                // y: customStyle.positionY,
            };
        }
        this.props.updateElement(this.props.component, this.state.textfield);
    }

    render() {
        return (
            <div>
                <Rnd 
                    default={{
                        x: this.state.textfield.positionX,
                        y: this.state.textfield.positionY,
                        width: this.state.textfield.width,
                        height: this.state.textfield.height,
                    }}
                    bounds=".canvas_column"
                    style={this.state.textfieldStyle} 
                    onClick={() => this.props.setCurrentComponent(this.props.component)} 
                    // onChange={() => this.props.setCurrentComponent()}
                    // onResizeStop={(e, direction, ref, delta, position) => {
                    //     this.setState({
                    //       width: parseInt(ref.style.width),
                    //       height: parseInt(ref.style.height),
                    //       ...position
                    //     });}
                    // }
                    // onDragStop={(e, d) => {
                    //     this.setState({ 
                    //         x: parseInt(d.x), 
                    //         y: parseInt(d.y),
                    //     });
                    //   }}
                >
                    {this.state.textfield.text}
                </Rnd>
            </div>
        );
    }
}

export default CustomTextfield;