/**
 * Created by ZT on 2017/6/6.
 */
import React from 'react';
import { Navbar, Nav, FormControl, FormGroup, NavItem} from 'react-bootstrap';

export default class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">爱看图</a>
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
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}