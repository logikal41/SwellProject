import React from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Header, Button } from 'semantic-ui-react';
import { setHeaders } from '../../../actions/headers';
import { setFlash } from '../../../actions/flash';
import { deleteWall } from '../../../actions/walls';

class WallDetails extends React.Component {
    state ={ area_name: '' };

    // componentDidMount() {
    //     const { dispatch, activeSelection: { area_id } } = this.props;

    //     axios.get(`/api/areaname/${area_id}`)
    //     .then( res => {
    //         this.setState({ area_name: res.data })
    //         dispatch(setHeaders(res.headers));
    //     })
    //     .catch( err => {
    //         dispatch(setFlash('Failed to get area name', 'red'));
    //     }) 

    // }

      renderNavLinks = () => {
          const { dispatch, activeSelection: {area_id} } = this.props;

          return (
            <Container>
                <Link to='/guide'>San Rafael Swell - North > </Link>
                <Link to={`/area/${area_id}`} >
                    AREA ID: {area_id} </Link>
            </Container>
          )
      }

      render() {
        const { dispatch, history, activeSelection } = this.props;

        if ( !activeSelection ) {
            return <div> Loading... </div>
        }

        return (
            <Container>
                {this.renderNavLinks()}
                <Container>
                    <Button onClick={() => dispatch(deleteWall(activeSelection.id, () => history.push(`/area/${activeSelection.area_id}`)))}> Delete </Button>
                    <Button onClick={() => history.push(`/wall/update/${activeSelection.id}`)}>Update</Button>
                    <Header as='h3'>Wall Name: {activeSelection.name} </Header>
                    <Header as='h3'>Wall Description: {activeSelection.description} </Header>
                </Container>
            </Container>
        )
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return { activeSelection }
}

export default withRouter(connect(mapStateToProps)(WallDetails));