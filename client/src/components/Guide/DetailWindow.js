import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Container } from 'semantic-ui-react';
import GroupDetails from './GroupDetails';
import AreaDetails from './AreaDetails';
import WallDetails from './WallDetails';
import RouteDetails from './RouteDetails';
import Comments from './Comments';

class DetailWindow extends React.Component {

    renderDetails = () => {
        const { path } = this.props.match;
        
        if ( this.props.selectedRoute ){
            return <RouteDetails />
        }

        switch(path) {
            case '/guide':
                return <GroupDetails />;
            case '/area/:id':
                return <AreaDetails />;
            case '/wall/:id': 
                return <WallDetails />;
            default:
                <div> FAILURE IN THE DETAIL WINDOW SWITCH! </div>
        }
    }

    render() {  
        return (
            <Container>
                <Header as='h1' textAlign='center'>Detail Window:</Header>
                {this.renderDetails()}

                <Comments />
            </Container>
        )    
    }
}

const mapStateToProps = ({ selectedRoute }) => {
    return { selectedRoute }
}

export default withRouter(connect(mapStateToProps)(DetailWindow));