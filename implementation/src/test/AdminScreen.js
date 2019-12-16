import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import WireFrameJson from './WireFramerData.json'
import { getFirestore } from 'redux-firestore';

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
                width: wireFrameJson.width,
                height: wireFrameJson.height,
                timestamp: fireStore.FieldValue.serverTimestamp(),
            }).then(() => {
                console.log("DATABASE RESET");
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    render() {
        console.log(this.props);

        if(!this.props || this.props.isAdmin === undefined) {
            return <React.Fragment />
        } else {
            if(this.props.isAdmin){
                return (
                    <div>
                        <button onClick={this.handleClear}>Clear Database</button>
                        <button onClick={this.handleReset}>Reset Database</button>
                    </div>
                )
            }
            else {
                return <Redirect to="/" />
            }
        }
    }
}

const mapStateToProps = function (state) {
    
    return {
        auth: state.firebase.auth,
        firebase: state.firebase,
        isAdmin: state.firebase.profile.isAdmin,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'users'}
    ])
)(AdminScreen);