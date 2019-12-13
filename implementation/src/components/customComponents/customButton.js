import React from 'react';
import { Rnd } from "react-rnd";

class CustomButton extends React.Component {
    render() {
        return (
            <div>
                <Rnd default={{
                    x: 100,
                    y: 100,
                    width: 320,
                    height: 200,
                }}>
                    {/* <input class="active center custom_container" type="text" placeholder="Input" defaultValue="Avik Kadakia" />
                <span>Avik Kadakia</span> */}

                    <button> Submit </button>
                </Rnd>
            </div >
        );
    }
}

export default CustomButton;