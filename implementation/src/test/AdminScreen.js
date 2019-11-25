import React from 'react'
import { connect } from 'react-redux';
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
                timestamp: fireStore.FieldValue.serverTimestamp(),
            }).then(() => {
                console.log("DATABASE RESET");
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClear}>Clear Database</button>
                <button onClick={this.handleReset}>Reset Database</button>
            </div>)
    }
}

const mapStateToProps = function (state) {
    return {
        auth: state.firebase.auth,
        firebase: state.firebase
    };
}

export default connect(mapStateToProps)(AdminScreen);