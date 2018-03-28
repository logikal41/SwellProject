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
        const { activeSelection, match } = this.props;

        if (activeSelection.wall_id) {
            return <RouteDetails />
        }

        switch(match.path) {
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
                {this.renderDetails()}

                <Comments />
            </Container>
        )    
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return { activeSelection }
}

export default withRouter(connect(mapStateToProps)(DetailWindow));