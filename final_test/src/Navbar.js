import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const Navbar = ({ activeTab, onSelectTab }) => {

    return (
        <Nav variant="tabs"  >
            <Nav.Item>
                <Button
                    name='All'
                    variant="light"
                    onClick={() => onSelectTab('All')}
                    active={activeTab === 'All'}
                >All</Button>
            </Nav.Item>
            <Nav.Item>
                <Button
                    name='Active'
                    variant="light"
                    onClick={() => onSelectTab('Active')}
                    active={activeTab === 'Active'}
                >Active</Button>
            </Nav.Item>
            <Nav.Item>
                <Button
                    name='Completed'
                    variant="light"
                    onClick={() => onSelectTab('Completed')}
                    active={activeTab === 'Completed'}
                >Completed</Button>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;