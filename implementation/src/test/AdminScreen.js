import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import WireFrameJson from './WireFramerData.json'
import { getFirestore } from 'redux-firestore';
import { firebaseConnect } from 'react-redux-firebase';

class AdminScreen extends React.Component {

    constructor(props)
    {
        super(props);

        while(!this.props.profile)
        {
            console.log("Profile: " + this.props.profile);
        }
    }

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

        if(!this.props){
            return <React.Fragment />
        }
        else
        {
            const users = this.props.users;
            const currentUser = this.props.auth.email;

            for(let key in users){
                if(users[key].email === currentUser && !users[key].isAdmin){
                    return <Redirect to="/" />
                }
            }

            return(
                <div>
                    <button onClick={this.handleClear}>Clear Database</button>
                    <button onClick={this.handleReset}>Reset Database</button>
                </div>
            )
        }
    }
}

const mapStateToProps = function (state) {
    const users = state.firestore.data.Users;
    return {
        auth: state.firebase.auth,
        firebase: state.firebase,
        users: users,
    };
};

export default compose(
    connect(mapStateToProps),
    firebaseConnect([
        {collection: 'users'}
    ])
)(AdminScreen);