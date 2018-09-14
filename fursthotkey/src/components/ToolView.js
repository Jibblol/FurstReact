import React, { Component } from 'react';
import Tool1 from './Tool1';
import Tool2 from './Tool2';
import Tool3 from './Tool3';
import Tool4 from './Tool4';

class ToolView extends Component {
    render() {
        return(
            <div>
                <h1>Hello</h1>
                <div className="row">
                    <div className="col">
                        <Tool1 />
                    </div>
                    <div className="col">
                        <Tool2 />   
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Tool3 />   
                    </div>
                    <div className="col">
                        <Tool4 />   
                    </div>
                </div>
            </div>
        )
    }
}

export default ToolView;