import React from 'react';
import { connect } from 'react-redux';
import { Header, Container } from 'semantic-ui-react';
import AreaDetails from './AreaDetails';
import RouteDetails from './RouteDetails';
import Comments from './Comments';

class DetailWindow extends React.Component {

    renderDetails = infoType => {
        if ( this.props.selectedRoute ){
            return <RouteDetails />
        } else {
            return <AreaDetails infoType={this.props.infoType} />
        }
    }

    render() {  
        return (
            <Container>
                <Header as='h1' textAlign='center'>Detail Window:</Header>
                {this.renderDetails(this.props.infoType)}
                <Comments />
            </Container>
        )    
    }
}

const mapStateToProps = ({ selectedRoute }) => {
    return { selectedRoute }
}

export default connect(mapStateToProps)(DetailWindow);