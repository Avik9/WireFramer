import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import CanvasColumn from './CanvasColumn'
import PropertiesColumn from './PropertiesColumn'
import ControlColumn from './ControlColumn'

// import customTextfield from './../customComponents/customTextfield.js'
// import customLabel from './../customComponents/customLabel.js'
// import customButton from './../customComponents/customButton.js'
// import customContainer from './../customComponents/customContainer.js'


class EditScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentComponent: [],
        }
    }

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
        console.log("ID:", this.props.id);
        this.props.firestore.collection('wireframes').doc(this.props.id).update({
            components: this.props.wireframe.components,
            name: this.props.wireframe.name === '' ? "(No Name)" : this.props.wireframe.name,
            zoomPercent: this.props.wireframe.zoomPercent,
        });
        return;

    }

    setCurrentComponent = (comp) => {
        comp = comp ? comp : {
            text: "",
            fontSize: "",
            backgroundColor: "",
            borderColor: "",
            fontColor: "",
            borderThickness: "",
            borderRadius: "",
        }

        this.setState({
            currentComponent: comp
        });
    }

    setCreateComponent = (comp) => {
        // if(comp === "customButton")
        this.setState(
            {
                currentComponent: comp
            });
    }

    closeFrame = () => {
        this.props.history.push('/');
        return;
    }

    // addElement = (item) => {
    //     const x = 
    //     item === "customButton" ? 5 :
    //     item === "customLabel" ? 5 :
    //     item === "customContainer" ? 5 :
    //     item === "customTextField" ? 5 : null
    // }

    render() {
        if (!this.props.auth.uid) {
            return <Redirect to="/login" />;
        }

        console.log("EditScreen: wireframe.id " + this.props.id);

        return (
            <div className="dashboard">
                <div className="row">
                    <div className="col s3 center">
                        <div className="card row card-content text-darken-3 item-card">
                            <span className="col s3 center edit_buttons" onClick={() => this.zoomIn()}><i className="material-icons">zoom_in</i></span>
                            <span className="col s3 center edit_buttons" onClick={() => this.zoomOut()}><i className="material-icons">zoom_out</i></span>
                            <span className="col s3 center edit_buttons" onClick={() => this.saveFrame()}>Save</span>
                            <span className="col s3 center edit_buttons" onClick={() => this.closeFrame()}>Close</span>
                        </div>
                        <ControlColumn createComponent={this.setCreateComponent} addElement={this.addElement}/>
                    </div>

                    <div className="col s6 center">
                        <CanvasColumn wireframe={this.props.wireframe} setCurrentComponent={this.setCurrentComponent}/>
                    </div>

                    <div className="col s3 center">
                        <PropertiesColumn wireframe={this.props.wireframe} component={this.state.currentComponent}/> {/* this.props.wireframe.components[1] this.state.currentComponent*/}
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
        id: id
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'wireframe' },
    ]),
)(EditScreen);