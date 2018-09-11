import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import * as Mousetrap from 'mousetrap';

class Tool1 extends Component {
    state = {
        name: 'Press button S',
    };

    handleChange = name => event => {
        this.setState({
            name: 'Button pressed: ' + event.key,
        });
        console.log(event.key);
    };

    componentDidMount() {
        Mousetrap.bind(['s'], this.handleChange);
    }

    componentWillUnmount() {
        Mousetrap.unbind(['s'], this.handleChange);
    }

    render() {
        return (
            <form>
                <div class="row">
                    <div class="col">
                        <TextField
                            autoFocus
                            id="name"
                            label="Name"
                            value={this.state.name}
                            onKeyDown={this.handleChange('name')}
                            margin="normal"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default Tool1;