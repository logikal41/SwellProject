import React from 'react';
import { connect } from 'react-redux';
import { List, Header, Container } from 'semantic-ui-react';
import { getWalls } from '../../actions/walls';

class Details extends React.Component {

    // i need this to update everytime the selecedArea prop changes
    componentWillMount() {
        this.props.dispatch(getWalls(this.props.selectedArea));
    };

    render() {
        const { selectedArea } = this.props;
    
        return (
            <Container>
                 <Header as='h1' textAlign='center'>Area Name: {selectedArea}</Header>
                <List>
                </List>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return { 
        selectedArea: state.selectedArea,
        walls: state.walls, 
    };
  };


export default connect(mapStateToProps)(Details);