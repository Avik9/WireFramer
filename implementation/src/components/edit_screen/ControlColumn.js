import React from 'react';

class ControlColumn extends React.Component {

    render() {
        return (
            <div className="card z-depth-0">
                <div className="card-content grey-text text-darken-3 item-card">
                    <div class="row">
                        <div class="col s12">

                        </div>
                        <span class="card-title center">
                            <strong>Container</strong>
                        </span>

                        <div class="col s12">
                            <p class="center">Prompt for Input:</p>
                        </div>
                        <span class="card-title center">
                            <strong>Label</strong>
                        </span>

                        <div class="col s12">

                        </div>
                        <span class="card-title center">
                            <strong>Button</strong>
                        </span>

                        <div class="col s12">

                        </div>
                        <span class="card-title center">
                            <strong>Textfield</strong>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
export default ControlColumn;