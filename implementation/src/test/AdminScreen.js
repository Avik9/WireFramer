import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
// import { firestoreConnect } from 'react-redux-firebase';
import WireFrameJson from './WireFramerData.json'
import { getFirestore } from 'redux-firestore';
// import { firestore } from 'firebase';

class AdminScreen extends React.Component {

    // NOTE, BY KEEPING THE DATABASE PUBLIC YOU CAN
    // DO THIS ANY TIME YOU LIKE WITHOUT HAVING
    // TO LOG IN
    handleClear = () => {
        const fireStore = getFirestore();
        fireStore.collection('wireframes').get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log("deleting " + doc.id);
                fireStore.collection('wireframes').doc(doc.id).delete();
            })
        });
    }

    handleReset = () => {
        const fireStore = getFirestore();
        WireFrameJson.WireFrames.forEach(wireFrameJson => {
            fireStore.collection('wireframes').add({
                name: wireFrameJson.name,
                owner: wireFrameJson.owner,
                zoomPercent: wireFrameJson.zoomPercent,
                components: wireFrameJson.components,
                timestamp: fireStore.FieldValue.serverTimestamp(),
            }).then(() => {
                console.log("DATABASE RESET");
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    render() {
        // Cannot work because props is not ready before render.

        // console.log("isAdmin: " + this.props.isAdmin);
        // if(this.props.firebase.profile.isAdmin)
        // {
        //     console.log("AdminScreen: Hello Admin!");
        // }
        // else
        // {
        //     return <Redirect to="/login" />;
        // }
        
        return (
            <div>
                {/* {console.log("AdminScreen: " + this.props.firebase.profile.isAdmin)}
                {this.props.firebase.profile.isAdmin ? console.log("AdminScreen: Hello Admin!") : <Redirect to="/login" />} }

                {console.log("AdminScreen: " + this.props.isAdmin)}
                {this.props.isAdmin ? console.log("AdminScreen: Hello Admin!") : <Redirect to="/login" /> */}

                <button onClick={this.handleClear}>Clear Database</button>
                <button onClick={this.handleReset}>Reset Database</button>
            </div>)
    }
}

const mapStateToProps = function (state) {
    return {
        auth: state.firebase.auth,
        firebase: state.firebase,
        isAdmin: state.firebase.profile.isAdmin,
    };
};

export default compose(connect(mapStateToProps))(AdminScreen);