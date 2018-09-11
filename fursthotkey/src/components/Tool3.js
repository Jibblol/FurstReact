import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


class Tool3 extends Component {
    state = {
        name: 'Cat in the Hat',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <form>
                <div class="row">
                    <div class="col">
                        <TextField
                            id="name"
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default Tool3;