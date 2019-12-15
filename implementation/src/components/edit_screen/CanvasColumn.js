import React from 'react';

import CustomTextfield from '../customComponents/CustomTextfield.js'
import CustomLabel from '../customComponents/CustomLabel.js'
import CustomButton from '../customComponents/CustomButton.js'
import CustomContainer from '../customComponents/CustomContainer.js'


class CanvasColumn extends React.Component {

    componentDidMount(){
        window.addEventListener("keydown", (e) => this.keysPressed(e), false);
        window.addEventListener("keyup", (e) => this.keysReleased(e), false);
    }

    componentWillUnmount(){
        window.removeEventListener("keydown", (e) => this.keysPressed(e), false);
        window.removeEventListener("keyup", (e) => this.keysReleased(e), false);
    }

    render() {
        const components = this.props.wireframe.components;
        console.log(components);


        return (
                <div className="canvas_column" >
                    <div className="canvas_column_scale" style={{transform: "scale(" + this.props.wireframe.zoomPercent + ")"}}>
                    {components && components.map(component =>
                        component.type === "customButton" || component.type === "sampleButton" ? <CustomButton key={component.key} zoom={this.props.zoom} component={component} setCurrentComponent={this.props.setCurrentComponent} currentComponent={this.props.currentComponent} /> :
                            component.type === "customLabel" || component.type === "sampleLabel" ? <CustomLabel key={component.key} zoom={this.props.zoom} component={component} setCurrentComponent={this.props.setCurrentComponent}  currentComponent={this.props.currentComponent} /> :
                                component.type === "customContainer" || component.type === "sampleContainer" ? <CustomContainer key={component.key} zoom={this.props.zoom} component={component} setCurrentComponent={this.props.setCurrentComponent} currentComponent={this.props.currentComponent} /> :
                                    component.type === "customTextField" || component.type === "sampleTextfield" ? <CustomTextfield key={component.key} zoom={this.props.zoom} component={component} setCurrentComponent={this.props.setCurrentComponent} currentComponent={this.props.currentComponent} /> : null
                    )}
                    </div>
                </div>
        );
    }
    // onClick={() => this.props.setCurrentComponent(undefined)}

    keysPressed = (e) => { 
        // store an entry for every key pressed
        this.props.keys[e.keyCode] = true;
        
        // Ctrl + Z
        if (this.props.keys[17] && this.props.keys[90]) {

            // if(this.props.jsTPSstack.hasTransactionToUndo())
            // {
            //     this.props.jsTPSstack.undoTransaction();

            //     document.getElementById('list_name_textfield').value = this.props.todoList.name;
            //     document.getElementById('list_owner_textfield').value = this.props.todoList.owner;

            //     this.props.loadList(this.props.getCurrentList());
            //     this.setState({});
            // }
            
            this.props.keys[17] = false; 
            this.props.keys[90] = false;

            // prevent default browser behavior
            e.preventDefault();	
        }
        
        // Ctrl + Y
        if (this.props.keys[17] && this.props.keys[89]) {
            // do something

            if(this.props.jsTPSstack.hasTransactionToRedo()){
                this.props.jsTPSstack.doTransaction();

                document.getElementById('list_name_textfield').value = this.props.todoList.name;
                document.getElementById('list_owner_textfield').value = this.props.todoList.owner;
    
                this.props.loadList(this.props.getCurrentList());
                this.setState({});
            }
            
            this.props.keys[17] = false; 
            this.props.keys[89] = false;

            // prevent default browser behavior
            e.preventDefault();	
        }

        return;
    }

    keysReleased = (e) => {
        // mark keys that were released
        this.props.keys[e.keyCode] = false;
    }
}
export default CanvasColumn;