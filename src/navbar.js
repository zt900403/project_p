/**
 * Created by ZT on 2017/6/6.
 */
import React from 'react';
import { Navbar, Nav, FormControl, FormGroup, NavItem, Glyphicon} from 'react-bootstrap';
import './navbar.css'
export default class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Project-P</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullLeft>
                        <Navbar.Form >
                            <FormGroup>
                                <FormControl type="text" placeholder="搜索" />
                            </FormGroup>
                        </Navbar.Form>
                    </Nav>
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