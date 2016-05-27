/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
//import Link from '../Link';
//import Navigation from '../Navigation';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const darkMuiTheme = getMuiTheme(darkBaseTheme);

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle(event) {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        var handle = this.handleToggle.bind(this);
        var set = (open, reason) => this.setState({
            open
        })
        return (
            <MuiThemeProvider muiTheme={darkMuiTheme}>
                <div>
                    <AppBar 
                        title="Title" 
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={handle}
                        onTitleTouchTap={handle}
                    />
                    <Drawer docked={false} open={this.state.open} onRequestChange={set}>
                        <MenuItem>Menu Item</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(s)(Header);