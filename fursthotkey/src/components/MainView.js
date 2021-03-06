import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import * as Mousetrap from 'mousetrap';

import ToolView from './ToolView';
import RowView from './RowView';
import Tab3View from './Tab3View';
import TestSwitch from './Tools/Switch';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        backgroundColor: (64, 70, 70)
    },
});

class MainView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    switchTab = (value) => {
        this.setState({ value });
    }



    componentWillMount() {
        Mousetrap.bind('shift+1', () => this.switchTab(0))
        Mousetrap.bind('shift+2', () => this.switchTab(1))
        Mousetrap.bind('shift+3', () => this.switchTab(2))
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} centered>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><ToolView/></TabContainer>}
                {value === 1 && <TabContainer><RowView/></TabContainer>}
                {
                    value === 2 && 
                    <TabContainer>
                        <div class="row">
                            <div class="col">
                                <Tab3View />
                            </div>
                            <div class="col">
                                <TestSwitch />
                            </div>
                        </div>
                    </TabContainer>
                }
            </div>
        )
    }
}

MainView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainView);