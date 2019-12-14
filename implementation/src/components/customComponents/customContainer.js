import React from 'react';
import { Rnd } from "react-rnd";

class CustomContainer extends React.Component {

    render() {
        const containerStyle = {
            background: "white",
            border: "2pt solid black",
            height: "150px",
            width: "200px",
        }

        return (
            
            <Rnd default={{
                x: 100,
                y: 100,
                width: 320,
                height: 200,
            }} style={containerStyle}>
                {console.log("CustomContainer: ")}
                {console.log(this.props.component)}
                <div onClick={() => this.props.setCurrentComponent(this.props.component)} onBlur={() => this.props.setCurrentComponent()} />

            </Rnd>
        );
    }
}

export default CustomContainer;