import React from 'react';
import { Rnd } from "react-rnd";

class CustomTextfield extends React.Component {

    selected() {
        if(this.props.currentComponent === this.props.component)
        {
            return(
                <div>
                    <div className="selected top left" />
                    <div className="selected bottom left" />
                    <div className="selected top right" />
                    <div className="selected bottom right" />
                </div>
            )
        }
        else{
            return "";
        }
    }

    render() {
        return (
            <div>
                <Rnd 
                    default={{
                        x: this.props.component.positionX,
                        y: this.props.component.positionY,
                        width: this.props.component.width,
                        height: this.props.component.height,
                    }}
                    bounds=".canvas_column"
                    style={{
                        width: this.props.component.width,
                        height: this.props.component.height,
                        borderWidth: this.props.component.borderWidth,
                        borderRadius: this.props.component.borderRadius,
                        borderStyle: "solid",
                        backgroundColor: this.props.component.backgroundColor,
                        borderColor: this.props.component.borderColor,
                        color: this.props.component.fontColor,
                        fontSize: this.props.component.fontSize,
                    }} 
                    onClick={() => this.props.setCurrentComponent(this.props.component)} 
                    onResizeStop={(e, direction, ref, delta, position) => {
                          this.props.component.width = ref.style.width;
                          this.props.component.height = ref.style.height;
                    }}
                    onDragStop={(e, d) => {
                        this.props.component.positionX = d.x;
                        this.props.component.positionY = d.y;
                      }}
                    >
                    {this.selected()}
                    {this.props.component.text}
                </Rnd>
            </div>
        );
    }
}

export default CustomTextfield;