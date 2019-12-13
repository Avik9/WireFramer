import React from 'react';
// import { Rnd } from "react-rnd";

import CustomTextfield from '../customComponents/CustomTextfield.js'
import CustomLabel from '../customComponents/CustomLabel.js'
import CustomButton from '../customComponents/CustomButton.js'
import CustomContainer from '../customComponents/CustomContainer.js'


class CanvasColumn extends React.Component {

    render() {
        return (
            <div className="list_item_card_toolbar">
                <CustomTextfield />

                <CustomLabel />

                <CustomButton />

                <CustomContainer />
                
            </div>
        );
    }
}
export default CanvasColumn;