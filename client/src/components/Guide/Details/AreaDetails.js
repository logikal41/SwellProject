import React from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Header, Button } from 'semantic-ui-react';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';
import { deleteArea } from '../../../actions/areas';

class AreaDetails extends React.Component {
    state={ area: {} };

    componentDidMount() {
        const { dispatch } = this.props;
        const { id } = this.props.match.params;
        axios.get(`/api/areas/${id}`)
        .then( res => {
          this.setState({ area: res.data.area});
          dispatch(setHeaders(res.headers));
        })
        .catch( err => {
          dispatch(setFlash('Failed to get area', 'red'));
        })
      }

      render() {
        const { area } = this.state;
        const { dispatch, history } = this.props;

        if ( !area ) {
            return <div> Loading... </div>
        }

        return (
            <Container className='comments-container'>
                <Header className='details-header'> Area: {area.name} 
                <Button floated='right' basic={true} onClick={() => dispatch(deleteArea(area.id, () => history.push('/guide')))}>Delete</Button>
                <Button floated='right' basic={true} onClick={`/area/update/${area.id}`}>Update</Button>
                </Header>
                <Container className='black-container'>
                    <Link className='nav-text-color-selected' to='/guide'>San Rafael Swell - North</Link>
                    </Container>
                    <Container>
                        <Header className='description-header'>DESCRIPTION </Header>
                        <Header className='description-body'> {area.description} </Header>
                    </Container>
                </Container>
        )
    }
}

export default withRouter(connect()(AreaDetails));