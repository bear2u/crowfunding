import React from 'react';
import { Menu,Button,Divider } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu secondary style={{ marginTop: '10px' }}>
            <Link route="/">
                <a className="item">
                    <h1>BlockChaing CrowdFunding</h1>
                </a>    
            </Link>   
            <Menu.Menu position="right">
                <Link route="/campaigns/new">
                    <Button negative>New Project</Button>
                </Link>
            </Menu.Menu>
        </Menu>    
        
    );
}