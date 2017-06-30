/**
 * Created by lolwuz on 6/30/2017.
 */
import React, { Component } from 'react';
import { Navbar, NavItem, Icon} from 'react-materialize';

class Navigation extends Component {
    render() {
        return (
            <Navbar className='blue' brand='lolwuz.com' right>
                <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
                <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
                <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
            </Navbar>
        );
    }
}

export default Navigation;