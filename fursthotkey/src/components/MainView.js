import React, { Component } from 'react';
import Tool1 from './Tool1';
import Tool2 from './Tool2';
import Tool3 from './Tool3';
import Tool4 from './Tool4';

class MainView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <div class="row">
                    <div class="col">
                        <Tool1 />
                    </div>
                    <div class="col">
                        <Tool2 />   
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <Tool3 />   
                    </div>
                    <div class="col">
                        <Tool4 />   
                    </div>
                </div>
            </div>
        )
    }
}

export default MainView;