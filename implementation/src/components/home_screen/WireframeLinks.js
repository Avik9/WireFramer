import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import WireframeCard from './WireframeCard';

class WireframeLinks extends React.Component {
    render() {
        const wireframes = this.props.wireframes;
        console.log("Wireframes: " + wireframes);
        return (
            <div className="wireframe-lists section">
                {wireframes && wireframes.map(wireframe => ( wireframe.owner === this.props.auth.uid ?
                    <Link to={'/wireframe/' + wireframe.id} key={wireframe.id} wireframe={wireframe} onClick={() => this.props.updateTime(wireframe.id)}>
                        <WireframeCard wireframe={wireframe} deleteList={this.props.deleteList} />
                    </Link> : null
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        wireframes: state.firestore.ordered.wireframes,
        auth: state.firebase.auth,
    };
};

export default compose(connect(mapStateToProps))(WireframeLinks);