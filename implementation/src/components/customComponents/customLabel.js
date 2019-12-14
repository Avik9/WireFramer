import React from 'react';
import { Rnd } from "react-rnd";

class CustomLabel extends React.Component {
    render() {
        return (
            <div>
                <Rnd default={{
                    x: 100,
                    y: 100,
                    width: 320,
                    height: 200,
                }}>
                    <input className="active center" type="text" placeholder="Input" defaultValue="Prompt for Input:" onClick={() => this.props.setCurrentComponent(this.props.component)} onBlur={() => this.props.setCurrentComponent()}/>
                </Rnd>
            </div>
        );
    }
}

export default CustomLabel;