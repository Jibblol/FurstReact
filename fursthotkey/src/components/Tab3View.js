import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import * as Mousetrap from 'mousetrap';

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

class Tab3View extends Component {
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
        Mousetrap.bind('shift+4', () => this.switchTab(0))
        Mousetrap.bind('shift+5', () => this.switchTab(1))
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
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>Item one</TabContainer>}
                {value === 1 && <TabContainer>Item two</TabContainer>}
            </div>
        )
    }
}

Tab3View.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tab3View);