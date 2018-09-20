import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import * as Mousetrap from 'mousetrap';

class Tool3 extends Component {
    state = {
        name: 'Press shift+f',
    };

    handleChange = name => event => {
        this.setState({
            name: 'Button pressed: ' + event.key,
        });
        console.log('Tab 1: ' + event.key);
    };

    componentWillMount() {
        Mousetrap.bind('shift+f', this.handleChange())
    }

    componentWillUnmount() {
        Mousetrap.unbind('shift+f')
    }

    render() {
        return (
            <form>
                <div className="row">
                    <div className="col">
                        <TextField
                            id="name"
                            label="Tool 3"
                            value={this.state.name}
                            margin="normal"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default Tool3;