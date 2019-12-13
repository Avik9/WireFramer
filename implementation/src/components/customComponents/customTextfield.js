import React from 'react';

class customTextfield extends React.Component {
    render() {
        return (
            <div>
                <input class="active center custom_container" type="text" placeholder="Input" defaultValue="Avik Kadakia" />
                <span>Avik Kadakia</span>
            </div>
        );
    }
}

export default customTextfield;