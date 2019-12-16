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
            wireframe: this.props.wireframe,
            components: this.props.wireframe.components,
            currentComponent: {
                key: this.props.wireframe.length,
                text: "",
                fontSize: "",
                backgroundColor: "",
                borderColor: "",
                fontColor: "",
                borderWidth: "",
                borderRadius: "",
            }
        }
    }

    zoomIn = () => {
        this.props.wireframe.zoomPercent *= 2;
        this.setState({
            wireframe: this.props.wireframe
        });
        console.log("New zoomPercent: " + this.props.wireframe.zoomPercent);

    }

    zoomOut = () => {
        this.props.wireframe.zoomPercent /= 2;
        this.setState({
            wireframe: this.props.wireframe
        });
        console.log("New zoomPercent: " + this.props.wireframe.zoomPercent);
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

    setCurrentComponent = (e, comp) => {

        if(comp === "")
        {
            console.log("Setting currentComponent as: ");
            console.log(comp)
    
            this.setState({
                currentComponent: {
                    key: this.props.wireframe.length,
                    text: "",
                    fontSize: "",
                    backgroundColor: "",
                    borderColor: "",
                    fontColor: "",
                    borderWidth: "",
                    borderRadius: "",
                }
            });
        }

        else{
            console.log("Setting currentComponent as: ");
            console.log(comp)
    
            this.setState({
                currentComponent: comp
            });
            e.stopPropagation();
        }
    
    }

    closeFrame = () => {
        this.props.history.push('/');
        return;
    }

    addElement = (item) => {
        var element = {
            key: this.props.wireframe.components.length,
            type: item,
            width: 200,
            height: 100,
            positionX: 0,
            positionY: 0,
            text: "New" + item,
            fontSize: -1,
            background: item === "customButton" ? "#d6d6d6" : item === "customLabel" ? "#ffffff" : "#ffffff",
            borderColor: item === "customLabel" ? "#ffffff" : "#000000",
            fontColor: "#000000",
            borderWidth: 2,
            borderRadius: 3,
        };

        // if (item === "customTextfield")
        // {
        //     element = {
        //         text: "",
        //         fontSize: 12,
        //         backgroundColor: "white",
        //         borderColor: "black",
        //         fontColor: "#fbfbfb",
        //         borderWidth: 2,
        //         borderRadius: 0,
        //         width: 250,
        //         height: 50,
        //         placeholder: "Input",
        //     };
        // }
        // else if(item === "customContainer")
        // {
        //     element = {
        //         text: "",
        //         fontSize: -1,
        //         backgroundColor: "white",
        //         borderColor: "black",
        //         fontColor: "black",
        //         borderWidth: 3,
        //         borderRadius: 0,
        //         width: 70,
        //         height: 50,
        //     };
        // }
        // else if(item === "customLabel")
        // {
        //     element = {
        //         type: "customLabel",
        //         text: "Prompt for Input: ",
        //         fontSize: 12,
        //         backgroundColor: "white",
        //         borderColor: "black",
        //         fontColor: "black",
        //         borderWidth: 2,
        //         borderRadius: 0,
        //         width: 250,
        //         height: 50,
        //         placeholder: "Label",
        //     };
        // }
        // else if(item === "customButton")
        // {
        //     element = {
        //         width: 100,
        //         height: 27.5,
        //         borderWidth: 1.5,
        //         borderRadius: 5,
        //         backgroundColor: "#e6e6e6",
        //         borderColor: "#ffffff",
        //         fontColor: "#ffffff",
        //         fontSize: 12,
        //         borderStyle: "solid",
        //     }
        // }

        this.props.wireframe.components.push(element);

        console.log("Setting currentComponent as: ");
            console.log(element)
    
            this.setState({
                currentComponent: element,
            });
    }

    changeName = (value) => {
        // console.log("Old name: " + this.props.wireframe.name);
        this.props.wireframe.name = value;
        // console.log("New name: " + this.props.wireframe.name);

        this.setState({
            wireframe: this.props.wireframe,
        });
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

    changeBorderWidth = (key, value) => {
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

    duplicateComponent = (e, element) => {
        // e.preventDefault();
        console.log("Duplicating the following element");
        console.log(element);

        var newElement = JSON.parse(JSON.stringify(element));;
        newElement.positionX = element.positionX - 100;
        newElement.positionY = element.positionY - 100;

        this.props.wireframe.components.push(newElement);

        this.setCurrentComponent(e, newElement);
    }

    setComponents = (newComponents) => {
        this.props.wireframe.components = newComponents;

        for (let i = 0; i < this.props.wireframe.components.length; i++) {
            this.props.wireframe.components[i].key = i;
        }

        this.setState({
            wireframe: this.props.wireframe,
            currentComponent: {
                key: this.props.wireframe.length,
                text: "",
                fontSize: "",
                backgroundColor: "",
                borderColor: "",
                fontColor: "",
                borderWidth: "",
                borderRadius: "",
            },
        })
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
                            currentComponent={this.state.currentComponent}
                            zoom={this.props.wireframe.zoomPercent}
                            duplicateComponent={this.duplicateComponent}
                            setComponents={this.setComponents}
                            keys={[]}
                        />
                    </div>

                    <div className="col s3 center">
                        <PropertiesColumn
                            changeName={this.changeName}
                            wireframe={this.props.wireframe}
                            component={this.state.currentComponent}
                            changeText={this.changeText}
                            changeFontSize={this.changeFontSize}
                            changeBackgroundColor={this.changeBackgroundColor}
                            changeBorderColor={this.changeBorderColor}
                            changeFontColor={this.changeFontColor}
                            changeBorderWidth={this.changeBorderWidth}
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