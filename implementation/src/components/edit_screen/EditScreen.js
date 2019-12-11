import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import CanvasColumn from './CanvasColumn'
import PropertiesColumn from './PropertiesColumn'
import ControlColumn from './ControlColumn'

// var zoomIn = require('./../../images/Zoom_In.png');
// var zoomOut = require('./../../images/Zoom_Out.jpg');

class EditScreen extends Component {

    zoomIn = () => {
        this.props.wireframe.zoomPercent *= 2;
        console.log("New zoomPercent: " + this.props.wireframe.zoomPercent);
        return;

    }

    zoomOut = () => {
        this.props.wireframe.zoomPercent /= 2;
        console.log("New zoomPercent: " + this.props.wireframe.zoomPercent);
        return;
    }

    saveFrame = () => {
        // Update the database
        console.log("ID:", this.props.wireframe.id);
        this.props.firestore.collection('wireframes').doc(this.props.wireframe.id).update({
            components: this.props.wireframe.components,
            zoomPercent:this.props.wireframe.zoomPercent,
        });
        return;

    }

    closeFrame = () => {
        this.props.history.push('/');
        return;
    }

    render() {
        if (!this.props.auth.uid) {
            return <Redirect to="/login" />;
        }

        const wireframe = this.props.wireframe;
        console.log("EditScreen: wireframe.id " + wireframe.id);

        return (
            <div className="dashboard">
                {/* Create 3 sections and each of them will be distributed into colums 3-6-3. */}
                <div className="row">
                    <div className="col s3 center">
                        <div className="card row card-content text-darken-3 item-card">
                            <span className="col s3 center edit_buttons" onClick={this.zoomIn}>A</span>
                            <span className="col s3 center edit_buttons" onClick={this.zoomOut}>B</span>
                            <span className="col s3 center edit_buttons" onClick={this.saveFrame}>Save</span>
                            <span className="col s3 center edit_buttons" onClick={this.closeFrame}>Close</span>
                        </div>
                        <ControlColumn />
                    </div>

                    <div className="col s6 center">
                        <CanvasColumn />
                    </div>

                    <div className="col s3 center">
                        <PropertiesColumn wireframe={this.props.wireframe}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params; //wireframe;
    const { wireframes } = state.firestore.data;
    const wireframe = wireframes ? wireframes[id] : null;

    return {
        wireframe: wireframe,
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'wireframe' },
    ]),
)(EditScreen);