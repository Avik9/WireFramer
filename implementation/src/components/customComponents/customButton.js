import React from 'react';
import { Rnd } from "react-rnd";

class CustomButton extends React.Component {
    render() {

        const buttonStyle = {
            width: "100px",
            height: "27.5px",
            border: "1.5px solid black",
            borderRadius: "5px",
            backgroundColor: "#E6E6E6",
            // textAlign: "center",
            // verticalAlign: "center",
        }

        return (
            <Rnd default={{
                x: 100,
                y: 100,
                width: 100,
                height: 27.5,
            }}>
                <div style={buttonStyle} onClick={() => this.props.setCurrentComponent(this.props.component)} onBlur={() => this.props.setCurrentComponent()}>
                    Submit
                </div>
            </Rnd>
        );
    }
}

export default CustomButton;