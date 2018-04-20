import React from 'react';
import { Menu,Button,Divider, Label } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu inverted  style={{ marginTop: '10px' }}>
            <Link route="/">
                <a>
                <Label size='huge' color='black'>
                    <h1>BlockChaing CrowdFunding</h1>
                </Label>
                </a>    
            </Link>   
            <Menu.Menu position="right">
                
                <Link route="/campaigns/new">
                <a style={{color:'white'}}>
                    <Label size='huge' color='black'>
                        <h1>New Project</h1>
                    </Label>
                    </a>

                    
                    
                </Link>
                <Label color='black'>
                </Label>
                <Label color='black'>
                </Label>
                <Label color='black'>
                </Label>
            </Menu.Menu>
        </Menu>    
        
    );
}