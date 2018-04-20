import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button, Grid, Image,Divider } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';


class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    };

    renderCampaigns() {
        const items = this.props.campaigns.map( address => {
            
            return {
                description: address.substring(0,15) + "...",
                image: '/static/elliot.jpg',
                href:'/campaigns/'+address,                
                fluid: true,
            }
        });

        return <Card.Group items={items} itemsPerRow="3" />
    }

    render() {
        return (
            
            <Layout>
                <Divider />
                <div>                                        
                    <h3>Project List</h3>

                    {this.renderCampaigns()}
                    
                </div>
            </Layout>
        );
    }
}

export default CampaignIndex;