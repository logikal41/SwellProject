import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Header, Button } from 'semantic-ui-react';
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
          const { activeSelection: {area_id} } = this.props;

          return (
            <Container>
                <Link className='nav-text-color' to='/guide'>San Rafael Swell - North > </Link>
                <Link className='nav-text-color-selected' to={`/area/${area_id}`}}>
                    {this.state.area_name} </Link>
            </Container>
          )
      }

      render() {
        const { dispatch, history, activeSelection } = this.props;

        if ( !activeSelection ) {
            return <div> Loading... </div>
        }

        return (
            <Container className='comments-container'>
                <Header className='details-header'> Wall: {wall.name} 
                    <Button basic={true} onClick={() => dispatch(deleteWall(wall.id, () => history.push(`/area/${wall.area_id}`)))}> Delete </Button>
                    <Button basic={true} >Update</Button>
                </Header>
                
            <Container className='black-container'>
                {this.renderNavLinks()}
            </Container>
                <Container>
                    <Button onClick={() => dispatch(deleteWall(activeSelection.id, () => history.push(`/area/${activeSelection.area_id}`)))}> Delete </Button>
                    <Button onClick={() => history.push(`/wall/update/${activeSelection.id}`)}>Update</Button>
                    <Header className='description-header' >Wall Name: {activeSelection.name} </Header>
                    <Header className='description-body' >Wall Description: {activeSelection.description} </Header>
                </Container>
            </Container>
            
        )
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return { activeSelection }
}

export default withRouter(connect(mapStateToProps)(WallDetails));