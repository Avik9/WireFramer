import React from 'react';
import { Rnd } from "react-rnd";

class CustomTextfield extends React.Component {

    constructor(props) {
        super(props);

        console.log(this.props.component);
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