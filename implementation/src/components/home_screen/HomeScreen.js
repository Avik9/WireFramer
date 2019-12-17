import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import WireframeLinks from './WireframeLinks'

class HomeScreen extends Component {
    handleNewList = () => {
        var wireframe = {
            components: [],
            name: '(No Name)',
            owner: this.props.auth.uid,
            timestamp: this.props.firestore.FieldValue.serverTimestamp(),
            zoomPercent: 1,
            width: 750,
            height: 750,
        }
        this.props.firestore.collection('wireframes').add(wireframe).then(ref => {
            this.props.history.push('/wireframe/' + ref.id);
        });

        console.log("Current User: " + this.props.auth.uid);
    }

    updateTimeStamp = (id) => {
        console.log("Opened: " + id);
        this.props.firestore.collection('wireframes').doc(id).update({
            timestamp: this.props.firestore.FieldValue.serverTimestamp(),
        });
    };

    deleteList = (e, listId) => {
        console.log("Delete list:", listId);
        this.props.firestore.collection('wireframes').doc(listId).delete();
        e.preventDefault();
        e.stopPropagation();
        return;
    }

    render() {
        if (!this.props.auth.uid) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="dashboard">
                <div className="row">
                    <div className="col m4">
                        <WireframeLinks deleteList={this.deleteList} updateTime={this.updateTimeStamp} />
                    </div>

                    <div className="col s1" />

                    <div className="col s7 center">
                        <div className="banner">
                            Wireframer
                        </div>

                        <div className="home_new_list_container">
                            <button className="home_new_list_button" onClick={this.handleNewList}>
                                Create a New Wireframe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'wireframes', orderBy: ['timestamp', 'desc'] },
    ]),
)(HomeScreen);