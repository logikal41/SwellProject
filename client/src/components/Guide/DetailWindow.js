import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Container } from 'semantic-ui-react';
import GroupDetails from './Details/GroupDetails';
import AreaDetails from './Details/AreaDetails';
import WallDetails from './Details/WallDetails';
import RouteDetails from './Details/RouteDetails';
import Comments from './Comments';

class DetailWindow extends React.Component {

    renderDetails = () => {
        if ( this.props.selectedRoute ){
            return <RouteDetails />
        }
        switch(this.props.match.path) {
            case '/guide':
                return <GroupDetails />;
            case '/area/:id':
                return <AreaDetails />;
            case '/wall/:id': 
                return <WallDetails />;
            default:
                return <div> Improper url path! </div>
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