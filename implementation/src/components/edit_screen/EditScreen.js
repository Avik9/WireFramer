import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import CanvasColumn from './CanvasColumn'
import PropertiesColumn from './PropertiesColumn'
import ControlColumn from './ControlColumn'


class EditScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentComponent: [],
            wireframe: this.props.wireframe,
        }
    }

    zoomIn = () => {
        this.props.wireframe.zoomPercent *= 2;
        console.log("New zoomPercent: " + this.props.wireframe.zoomPercent);
        document.getElementsByClassName("canvas_column").style = {
            // transform: scale(this.props.wireframe.zoomPercent/100),
        }
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
            key: this.props.wireframe.components.length + 1,
            text: "",
            fontSize: "",
            backgroundColor: "",
            borderColor: "",
            fontColor: "",
            borderWidth: "",
            borderRadius: "",
        }

        this.setState({
            currentComponent: comp
        });
    }

    closeFrame = () => {
        this.props.history.push('/');
        return;
    }

    addElement = (item) => {

        var element = {}
        element.type = item;
        element.x = 50;
        element.y = 50;

        this.props.wireframe.components.push(element);

        this.setCurrentComponent(element);
    }

    changeText = (key, value) => {
        // console.log("Old text: " + this.props.wireframe.components[key].text);
        this.props.wireframe.components[key].text = value;
        // console.log("New text: " + this.props.wireframe.components[key].text);

        this.setState({
            wireframe: this.props.wireframe,
            currentComponent: this.props.wireframe.components[key],
        });
    }

    changeFontSize = (key, value) => {
        // console.log("Old font size: " + this.props.wireframe.components[key].fontSize);
        this.props.wireframe.components[key].fontSize = parseInt(value);
        // console.log("New font size: " + this.props.wireframe.components[key].fontSize);

        this.setState({
            wireframe: this.props.wireframe,
            currentComponent: this.props.wireframe.components[key],
        });
    }

    changeBackgroundColor = (key, value) => {
        // console.log("Old background color: " + this.props.wireframe.components[key].backgroundColor);
        this.props.wireframe.components[key].backgroundColor = value;
        // console.log("New background color: " + this.props.wireframe.components[key].backgroundColor);

        this.setState({
            wireframe: this.props.wireframe,
            currentComponent: this.props.wireframe.components[key],
        });
    }

    changeBorderColor = (key, value) => {
        // console.log("Old border color: " + this.props.wireframe.components[key].backgroundColor);
        this.props.wireframe.components[key].borderColor = value;
        // console.log("New border color: " + this.props.wireframe.components[key].backgroundColor);

        this.setState({
            wireframe: this.props.wireframe,
            currentComponent: this.props.wireframe.components[key],
        });
    }

    changeFontColor = (key, value) => {
        // console.log("Old font color: " + this.props.wireframe.components[key].fontColor);
        this.props.wireframe.components[key].fontColor = value;
        // console.log("New font color: " + this.props.wireframe.components[key].fontColor);

        this.setState({
            wireframe: this.props.wireframe,
            currentComponent: this.props.wireframe.components[key],
        });
    }

    changeborderWidth = (key, value) => {
        // console.log("Old border thickness: " + this.props.wireframe.components[key].borderWidth);
        this.props.wireframe.components[key].borderWidth = parseInt(value);
        // console.log("New border thickness: " + this.props.wireframe.components[key].borderWidth);

        this.setState({
            wireframe: this.props.wireframe,
            currentComponent: this.props.wireframe.components[key],
        });
    }

    changeBorderRadius = (key, value) => {
        // console.log("Old border radius: " + this.props.wireframe.components[key].borderRadius);
        this.props.wireframe.components[key].borderRadius = parseInt(value);
        // console.log("New border radius: " + this.props.wireframe.components[key].borderRadius);

        this.setState({
            wireframe: this.props.wireframe,
            currentComponent: this.props.wireframe.components[key],
        });
    }

    updateElement = (oldElement, newElement) => {
        var pos = this.state.wireframe.components.indexOf(oldElement);
        newElement.key = pos;
        pos ? this.state.wireframe.components.splice(pos, 1, newElement) : console.log("Did not replace " + oldElement + " with " + newElement);
    }

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
                        <ControlColumn
                            addElement={this.addElement}
                        />
                    </div>

                    <div className="col s6 center">
                        <CanvasColumn
                            wireframe={this.props.wireframe}
                            setCurrentComponent={this.setCurrentComponent}
                            updateElement={this.updateElement}
                        />
                    </div>

                    <div className="col s3 center">
                        <PropertiesColumn
                            wireframe={this.props.wireframe}
                            component={this.state.currentComponent}
                            changeText={this.changeText}
                            changeFontSize={this.changeFontSize}
                            changeBackgroundColor={this.changeBackgroundColor}
                            changeBorderColor={this.changeBorderColor}
                            changeFontColor={this.changeFontColor}
                            changeborderWidth={this.changeborderWidth}
                            changeBorderRadius={this.changeBorderRadius}

                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
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