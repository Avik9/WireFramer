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
                    <input class="active center" type="text" placeholder="Input" defaultValue="Prompt for Input:" />
                </Rnd>
            </div>
        );
    }
}

export default CustomLabel;