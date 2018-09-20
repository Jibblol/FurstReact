import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import * as Mousetrap from 'mousetrap';

class Tool2 extends Component {
    state = {
        name: 'Press shift+d',
    };

    handleChange = name => event => {
        this.setState({
            name: 'Button pressed: ' + event.key,
        });
        console.log('Tab 1: ' + event.key);
    };

    componentDidMount() {
        Mousetrap.bind('shift+d', this.handleChange())
    }

    componentWillUnmount() {
        Mousetrap.unbind('shift+d')
    }

    render() {
        return (
            <form>
                <div className="row">
                    <div className="col">
                        <TextField
                            id="name"
                            label="Tool 2"
                            value={this.state.name}
                            margin="normal"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default Tool2;