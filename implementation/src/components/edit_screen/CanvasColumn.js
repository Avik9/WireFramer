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
                component.type === "customButton" || component.type === "sampleButton" ? <CustomButton key={component.key} component={component} setCurrentComponent={this.props.setCurrentComponent}/> :
                component.type === "customLabel" || component.type === "sampleLabel" ? <CustomLabel key={component.key} component={component} setCurrentComponent={this.props.setCurrentComponent}/> :
                component.type === "customContainer" || component.type === "sampleContainer" ? <CustomContainer key={component.key} component={component} setCurrentComponent={this.props.setCurrentComponent}/> :
                component.type === "customTextField" || component.type === "sampleTextfield" ? <CustomTextfield key={component.key} component={component} setCurrentComponent={this.props.setCurrentComponent}/> : null
                )}
            </div>
        );
    }
}
export default CanvasColumn;