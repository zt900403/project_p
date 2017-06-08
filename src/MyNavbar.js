/**
 * Created by ZT on 2017/6/6.
 */
import React from 'react';
import { Navbar, Nav, FormControl, FormGroup, NavItem, Glyphicon} from 'react-bootstrap';
import './MyNavbar.css'
export default class MyNavbar extends React.Component {

    render() {
        return (
            <Navbar className="my-navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Project-P</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" size="110" placeholder="搜索..." />
                        </FormGroup>
                    </Navbar.Form>
                    <Nav pullRight>
                        <NavItem ><Glyphicon glyph="tags" className="glyph-bigger" /></NavItem>
                        <NavItem ><Glyphicon glyph="user" className="glyph-bigger" /></NavItem>
                        <NavItem ><Glyphicon glyph="envelope" className="glyph-bigger" /></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}