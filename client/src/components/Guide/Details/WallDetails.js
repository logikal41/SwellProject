import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Header, Button } from 'semantic-ui-react';
import { deleteWall } from '../../../actions/walls';

class WallDetails extends Component {

      renderNavLinks = () => {
          const { activeSelection: {area_id} } = this.props;

          return (
            <Container>
                <Link className='nav-text-color' to='/guide'>San Rafael Swell - North > </Link>
                <Link className='nav-text-color-selected' to={`/area/${area_id}`}>
                    AREA {area_id} </Link>
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
                <Header className='details-header'> Wall: {activeSelection.name} 
                    <Button basic={true} 
                        onClick={() => dispatch(deleteWall(activeSelection.id, () => history.push(`/area/${activeSelection.area_id}`)))}> 
                        Delete 
                    </Button>
                    <Button basic={true} onClick={() => history.push(`/wall/update/${activeSelection.id}`)}>Update</Button>
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