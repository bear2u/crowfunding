import web3 from './web3';
import CampaignFactory from './build/ProjectFactory';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x72274410e9E02A6abA391B896a7497b2478E288C'
);
//0x72274410e9E02A6abA391B896a7497b2478E288C
//'0xFD338D0f5Fb2d29A856942bb5c0208cf74bA0E4a'

export default instance;
