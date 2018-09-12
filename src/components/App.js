import React, { Component } from 'react';
import Flexi from "./Flexi";
const flexiconfig = {
    items: [
        {
            "name": "Person Name",
            "label": "Person's Name",
            "type": "TextField",
        },
        {
            "name": "States",
            "label": "States",
            "type": "DropDown",
            "values": [
                "Maharashtra",
                "Kerala",
                "Tamilnadu",
            ]
        }

    ]
};

class App extends Component {
    onFlexiSubmit = (resultObject) => {
        console.log(resultObject);
    }
    render() {
        return (
            <Flexi onSubmit={this.onFlexiSubmit} config={flexiconfig} />
        )
    }
}

export default App;