import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button, Grid, Image,Divider } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';


class CampaignIndex extends Component {
    static async getInitialProps() {

        console.dir(factory.methods.getDeployedCampaigns())

        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    };

    renderCampaigns() {
        const items = this.props.campaigns.map( (address, index) => {
            
            return {
                header: address,
                image: '/static/elliot.jpg',
                href:'/campaigns/'+address,
                description: 'View Campaign',
                fluid: true,
                extra: true,
                
            }
        });

        return <Card.Group items={items} itemsPerRow="3" />
    }

    render() {
        return (
            
            <Layout>
                <Divider />
                <div>                                        
                    <h3>Open Campaign</h3>

                    {this.renderCampaigns()}
                    
                </div>
            </Layout>
        );
    }
}

export default CampaignIndex;