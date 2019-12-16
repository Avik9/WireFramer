import React from 'react';
var sampleContainer = require('./../../images/sampleContainer.png');
var sampleLabel = require('./../../images/sampleLabel.png');
var sampleTextfield = require('./../../images/sampleTextfield.png');
var sampleButton = require('./../../images/sampleButton.png');

class ControlColumn extends React.Component {

    render() {
        let buttonStyle = {
            width: "3cm",
        }
        let labelStyle = {
            width: "4cm",
        }
        return (
            <div className="card z-depth-0">
                <div className="card-content grey-text text-darken-3 item-card">
                    <div className="row">
                        <img className="col s12" src={sampleContainer} alt="customContainer" onDoubleClick={() => this.props.addElement("customContainer")}/>
                        <br />
                        <span className="card-title center">
                            <strong>Container</strong>
                        </span>

                        <br /><br />
                        <div className="col s2" />
                        <img className="col s1 center" style={labelStyle} src={sampleLabel} alt="customLabel" onDoubleClick={() => this.props.addElement("customLabel")}/>
                        <br />
                        <span className="card-title center">
                            <strong>Label</strong>
                        </span>

                        <br /><br />

                        <div className="col s3" />
                        <img className="col s1 center" style={buttonStyle} src={sampleButton} alt="customButton" onDoubleClick={() => this.props.addElement("customButton")}/>
                        <br />
                        <span className="card-title center">
                            <strong>Button</strong>
                        </span>

                        <br /><br />

                        <img className="col s12" src={sampleTextfield} alt="customTextfield" onDoubleClick={() => this.props.addElement("customTextfield")}/>
                        <br />
                        <span className="card-title center">
                            <strong>Textfield</strong>
                        </span>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}
export default ControlColumn;