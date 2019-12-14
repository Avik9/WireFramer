import React from 'react';
import { Rnd } from "react-rnd";

class CustomTextfield extends React.Component {

    constructor(props) {
        super(props);

        var basicButton = {
            type: "customTextfield",
            text: "",
            fontSize: -1,
            backgroundColor: "#E6E6E6",
            borderColor: "#FFFFFF",
            fontColor: "#FFFFFF",
            borderThickness: 2,
            borderRadius: 0,
            width: 200,
            height: 150,
            x: 150,
            y: 150,
            placeholder: "Input",
        };

        this.state = {
            label: this.props.component.type === "sampleButton" ? basicButton : this.props.component,
        };
    }

    render() {
        const textfieldStyle = {
            background: "white",
        }

        return (
            <div>
                <Rnd default={{
                    x: 100,
                    y: 100,
                    width: 320,
                    height: 200,
                }}>
                    <div style={textfieldStyle} onClick={() => this.props.setCurrentComponent(this.props.component)} onBlur={() => this.props.setCurrentComponent()}>
                        <input className="active center" type="text" placeholder="Input" />
                    </div>
                </Rnd>
            </div>
        );
    }
}

export default CustomTextfield;