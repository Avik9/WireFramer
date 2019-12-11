import React from 'react';

class PropertiesColumn extends React.Component {

    render() {
        return (
            <div className="card z-depth-0 wireframe-list-link">
                <div className="card-content grey-text text-darken-3 item-card">
                    <span className="card-title center">Properties</span>
                    {console.log(this.props.wireframe.name)}
                    <input className="active" type="text" onChange={this.handleChange} defaultValue={this.props.wireframe.components.type} ref="name" />
                </div>
            </div>
        );
    }
}
export default PropertiesColumn;