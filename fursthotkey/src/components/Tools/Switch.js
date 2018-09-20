import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import * as Mousetrap from 'mousetrap';

class TestSwitch extends Component {
    state = {
        checkedA: false,
        checkedB: false,
    };

    handleChange = name => event => {
        if (event.key == 'S') {
            this.setState({
                checkedA: true,
            })
        } else if (event.key == 'D') {
            this.setState({
                checkedB: true,
            })
        }
        // this.setState({ [name]: event.target.checked });
        console.log(event.key)
    };

    componentDidMount() {
        Mousetrap.bind('shift+s', this.handleChange('checkedA'))
        Mousetrap.bind('shift+d', this.handleChange('checkedb'))
    }

    render() {
        return (
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Switch
                            checked={this.state.checkedA}
                            onChange={this.handleChange('checkedA')}
                            value="checkedA"
                        />
                    }
                    label="Secondary"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={this.state.checkedB}
                            onChange={this.handleChange('checkedB')}
                            value="checkedB"
                            color="primary"
                        />
                    }
                    label="Primary"
                />
            </FormGroup>
        )
    }
}

export default TestSwitch;