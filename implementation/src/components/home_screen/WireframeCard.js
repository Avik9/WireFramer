import React from 'react';

class WireframeCard extends React.Component {

    render() {
        const { wireframe } = this.props;
        console.log("WireframeCard, wireframe.id: " + wireframe.id);
        return (
            <div className="card z-depth-0 wireframe-list-link">
                <div className="card-content grey-text text-darken-3 item-card">
                    <h6>
                        {wireframe.name}
                        <button className="right" onClick={(e) => this.props.deleteList(e, wireframe.id)}>X</button>
                    </h6>
                </div>
            </div>
        );
    }
}
export default WireframeCard;