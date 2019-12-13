import React from 'react';

import CustomTextfield from '../customComponents/CustomTextfield.js'
import CustomLabel from '../customComponents/CustomLabel.js'
import CustomButton from '../customComponents/CustomButton.js'
import CustomContainer from '../customComponents/CustomContainer.js'


class CanvasColumn extends React.Component {

    render() {
        const components = this.props.wireframe.components;
        console.log(components);


        return (
            <div className="list_item_card_toolbar">
                {components && components.map(component => 
                component.type === "customButton" ? <CustomButton key={component.key} component={component} /> :
                component.type === "customLabel" ? <CustomLabel key={component.key} component={component} /> :
                component.type === "customContainer" ? <CustomContainer key={component.key} component={component} /> :
                component.type === "customTextField" ? <CustomTextfield key={component.key} component={component} /> : null
                )}
            </div>
        );
    }
}
export default CanvasColumn;