import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import * as Mousetrap from 'mousetrap';

class Tool1 extends Component {
    state = {
        name: 'Press shift+s',
    };

    handleChange = name => event => {
        this.setState({
            name: 'Button pressed: ' + event.key,
        });
        console.log(event.key);
    };

    componentWillMount() {
        Mousetrap.bind('shift+s', this.handleChange())
    }
    componentWillUnmount() {
        Mousetrap.unbind('shift+s')
    }

    render() {
        return (
            <form>
                <div className="row">
                    <div className="col">
                        <TextField
                            id="name"
                            label="Tool 1"
                            value={this.state.name}
                            margin="normal"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default Tool1;