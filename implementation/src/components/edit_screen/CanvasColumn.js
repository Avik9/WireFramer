import React from 'react';
// import { Rnd } from "react-rnd";

import customTextfield from './../customComponents/customTextfield.js'
// import customLabel from './../customComponents/customLabel.js'
// import customButton from './../customComponents/customButton.js'
// import customContainer from './../customComponents/customContainer.js'


class CanvasColumn extends React.Component {

    render() {
        return (
            <div className="list_item_card_toolbar">
                <customTextfield />
                
            </div>
        );
    }
}
export default CanvasColumn;