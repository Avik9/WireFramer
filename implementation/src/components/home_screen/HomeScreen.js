import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

class HomeScreen extends Component {
    handleNewList = () => {
        var todoList = {
            items: [],
            name: '(No Name)',
            owner: '(No Owner)',
            timestamp: this.props.firestore.FieldValue.serverTimestamp(),
            isIncreasing: false,
        }
        this.props.firestore.collection('todoLists').add(todoList).then(ref => {
            this.props.history.push('/todoList/' + ref.id);
        });
    }

    updateTimeStamp = (id) => {
        console.log("Opened: " + id);
        this.props.firestore.collection('todoLists').doc(id).update({
            timestamp: this.props.firestore.FieldValue.serverTimestamp(),
        });
    };

    render() {
        if (!this.props.auth.uid) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="dashboard">
                <div className="row">
                    <div className="col m4">
                        {/* <TodoListLinks updateTime={this.updateTimeStamp} /> */}
                    </div>

                    <div className="col s8">
                        <div className="banner">
                            @todo<br />
                            List Maker
                        </div>

                        <div className="home_new_list_container">
                            <button className="home_new_list_button" onClick={this.handleNewList}>
                                Create a New To Do List
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
        { collection: 'todoLists', orderBy: ['timestamp', 'desc'] },
    ]),
)(HomeScreen);