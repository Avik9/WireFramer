import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import CanvasColumn from './CanvasColumn'
import PropertiesColumn from './PropertiesColumn'
import ControlColumn from './ControlColumn'

class EditScreen extends Component {

    zoomIn(){
        this.props.wireframe.zoomPercent *= 2;
        // Rerender the CanvasColumn

    }

    zoomOut(){
        this.props.wireframe.zoomPercent /= 2;
        // Rerender the CanvasColumn
    }

    saveFrame(){
        // Update the database

    }

    closeFrame(){
        return <Redirect to="/"/>;
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
                <h1>Welcome to the EditScreen</h1>
                <div className="row">
                    <div className="col s2 m2 center">
                        <ControlColumn />
                    </div>

                    <div className="col s8 m8 center">
                        <CanvasColumn />
                    </div>

                    <div className="col s2 m2 center">
                        <PropertiesColumn />
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
        wireframe,
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'wireframe' },
    ]),
)(EditScreen);