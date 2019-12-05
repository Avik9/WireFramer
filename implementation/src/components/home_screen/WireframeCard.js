import React from 'react';

class WireframeCard extends React.Component {

    render() {
        const { wireframe } = this.props;
        console.log("WireframeCard, wireframe.id: " + wireframe.id);
        return (
            <div className="card z-depth-0 todo-list-link">
                <div className="card-content grey-text text-darken-3 item-card">
                    <span className="card-title">{wireframe.name}</span>
                </div>
            </div>
        );
    }
}
export default WireframeCard;