import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button, Grid, Image } from 'semantic-ui-react';
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
                header: address,
                image: '/static/elliot.jpg',
            description: (
                <Link route={`/campaigns/${address}`}>
                    <a>View Campaign</a>
                </Link>
            ),
                fluid: true,

            }
        });

        return <Card.Group items={items} itemsPerRow="3" />
    }

    renderTable() {
        return <Grid columns={3} stretched>
                    <Grid.Column>
                        <Card style={{ height: '100%' }} >
                            <Image  />
                        </Card>
                        <Card style={{ height: '55px' }} />
                        <Card style={{ height: '70px' }} />
                    </Grid.Column>
                    <Grid.Column>
                        <Card style={{ height: '55px' }} />
                        <Card style={{ height: '30px' }} />
                        <Card style={{ height: '70px' }} />
                    </Grid.Column>
                    <Grid.Column>
                        <Card style={{ height: '55px' }} />
                        <Card style={{ height: '70px' }} />
                        <Card style={{ height: '30px' }} />
                    </Grid.Column>
                </Grid>
    }

    render() {
        return (
            <Layout>
                <div>                                        
                    <h3>Open Campaign</h3>
                    
                    <Link route="/campaigns/new">
                        <a>
                            <Button
                                floated="right"
                                content="Create Campaign"
                                icon="add circle"
                                primary
                            />
                        </a>
                    </Link>

                    {/* {this.renderCampaigns()} */}

                    {this.renderCampaigns()}
                    
                </div>
            </Layout>
        );
    }
}

export default CampaignIndex;