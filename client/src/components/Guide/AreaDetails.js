import React from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';

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

        if ( !area ) {
            return <div> Loading... </div>
        }

        return (
            <Container>
                <Link to='/guide'>San Rafael Swell - North</Link>
                <Header as='h3'>Area Name: {area.name} </Header>
                <Header as='h3'>Area Description: {area.description} </Header>
            </Container>
        )
    }
}

export default withRouter(connect()(AreaDetails));