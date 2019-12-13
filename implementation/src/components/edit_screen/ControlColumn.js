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
                    <div class="row">
                        <img class="col s12" src={sampleContainer} alt="sampleContainer" />
                        <br />
                        <span class="card-title center">
                            <strong>Container</strong>
                        </span>

                        <br /><br />
                        <div class="col s2" />
                        <img class="col s1 center" style={labelStyle} src={sampleLabel} alt="sampleContainer" />
                        <br />
                        <span class="card-title center">
                            <strong>Label</strong>
                        </span>

                        <br /><br />

                        <div class="col s3" />
                        <img class="col s1 center" style={buttonStyle} src={sampleButton} alt="sampleContainer" />
                        <br />
                        <span class="card-title center">
                            <strong>Button</strong>
                        </span>

                        <br /><br />

                        <img class="col s12" src={sampleTextfield} alt="sampleContainer" />
                        <br />
                        <span class="card-title center">
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