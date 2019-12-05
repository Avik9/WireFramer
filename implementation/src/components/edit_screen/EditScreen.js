import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class EditScreen extends Component {

    render() {
        const wireframe = this.props.wireframe;
        console.log("EditScreen: wireframe.id " + wireframe.id);
        return (
            <div className="section">
                <p>{console.log(wireframe)}</p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const wireframe = ownProps.wireframe;
    console.log("wireframe: " + wireframe);
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