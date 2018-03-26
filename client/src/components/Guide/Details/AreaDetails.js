import React from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Header, Button } from 'semantic-ui-react';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';
import { deleteArea } from '../../../actions/areas';

class AreaDetails extends React.Component {

      render() {
        const { dispatch, history, activeSelection } = this.props;

        if ( !activeSelection ) {
            return <div> Loading... </div>
        }

        return (
            <Container>
                <Link to='/guide'>San Rafael Swell - North</Link>
                <Container>
                    <Button onClick={() => dispatch(deleteArea(activeSelection.id, () => history.push('/guide')))}>Delete</Button>
                    <Button onClick={() => history.push(`/area/update/${activeSelection.id}`)}>Update</Button>
                    <Header as='h3'>Area Name: {activeSelection.name} </Header>
                    <Header as='h3'>Area Description: {activeSelection.description} </Header>
                </Container>
            </Container>
        )
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return { activeSelection }
}

export default withRouter(connect(mapStateToProps)(AreaDetails));