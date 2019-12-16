import React from 'react';
import { Rnd } from "react-rnd";

class CustomLabel extends React.Component {

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
            <Rnd 
                default={{
                    x: this.props.component.positionX,
                    y: this.props.component.positionY,
                    width: this.props.component.width,
                    height: this.props.component.height,
                }}
                bounds=".canvas_column"
                className="active center" 
                type="text" 
                onClick={(e) => this.props.setCurrentComponent(e, this.props.component)} 
                style={{width: this.props.component.width,
                    height: this.props.component.height,
                    borderWidth: this.props.component.borderWidth,
                    borderStyle: "solid",
                    borderRadius: this.props.component.borderRadius,
                    backgroundColor: this.props.component.backgroundColor,
                    borderColor: this.props.component.borderColor,
                    color: this.props.component.fontColor,
                    fontSize: this.props.component.fontSize}}
                onResizeStop={(e, direction, ref, delta, position) => {
                    this.props.component.width = ref.style.width;
                    this.props.component.height = ref.style.height;
                }}
                onDragStop={(e, d) => {
                    this.props.component.positionX = d.x;
                    this.props.component.positionY = d.y;
                    }}
                scale={this.props.zoom}
                >
                {this.props.component.text}
                {this.selected()}
            </Rnd>
        );
    }
}

export default CustomLabel;