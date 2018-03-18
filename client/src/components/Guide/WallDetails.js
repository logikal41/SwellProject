import React from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';
import { selectWall } from '../../actions/walls';
import { clearRoutes } from '../../actions/routes';
import { selectArea } from '../../actions/areas';

class WallDetails extends React.Component {
    state={ wall: {}, area_name: '' };

    componentDidMount() {
        const { dispatch } = this.props;
        const { id } = this.props.match.params;
       
        axios.get(`/api/walls/${id}`)
        .then( res => {
          this.setState({ wall: res.data.wall});
          
            axios.get(`/api/areaname/${res.data.wall.area_id}`)
            .then ( res => {
                this.setState({ area_name: res.data });
            })
            .catch( err => { 
                dispatch(setFlash('Failed to get area name', 'red'));
            })

          dispatch(setHeaders(res.headers));
        })
        .catch( err => {
          dispatch(setFlash('Failed to get wall', 'red'));
        })
      }

      clearWall = () => {
          const { dispatch } = this.props;
          dispatch(selectWall(null));
          dispatch(clearRoutes());
      }

      clearAll = () => {
        const { dispatch } = this.props;
        dispatch(selectArea(null));
        dispatch(selectWall(null));
        dispatch(clearRoutes());
      }

      renderNavLinks = () => {
          const { area_id } = this.state.wall;

          return (
            <Container>
                <Link to='/guide' onClick={() => this.clearAll()}>San Rafael Swell - North > </Link>
                <Link to={`/area/${area_id}`} onClick={() => this.clearWall()}>
                    {this.state.area_name} </Link>
            </Container>
          )
      }

      render() {
        const { wall } = this.state;

        if ( !wall ) {
            return <div> Loading... </div>
        }

        return (
            <Container>
                {this.renderNavLinks()}
                <Header as='h3'>Wall Name: {wall.name} </Header>
                <Header as='h3'>Wall Description: {wall.description} </Header>
            </Container>
        )
    }
}

export default withRouter(connect()(WallDetails));