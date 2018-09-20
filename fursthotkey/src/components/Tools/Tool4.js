import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import * as Mousetrap from 'mousetrap';

class Tool4 extends Component {
    state = {
        name: 'Press shift+g',
    };

    handleChange = name => event => {
        this.setState({
            name: 'Button pressed: ' + event.key,
        });
        console.log('Tab 1: ' + event.key);
    };

    componentDidMount() {
        Mousetrap.bind('shift+g', this.handleChange())
    }

    componentWillUnmount() {
        Mousetrap.unbind('shift+g')
    }

    render() {
        return (
            <form>
                <div className="row">
                    <div className="col">
                        <TextField
                            id="name"
                            label="Tool 4"
                            value={this.state.name}
                            margin="normal"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default Tool4;