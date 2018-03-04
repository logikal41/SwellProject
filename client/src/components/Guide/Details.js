import React from 'react';
import { connect } from 'react-redux';
import { List, Header, Container } from 'semantic-ui-react';
import { getWalls } from '../../actions/walls';

class Details extends React.Component {

    // i need this to update everytime the selecedArea prop changes

    // this causes an infinite loop... why??

    // componentDidUpdate() {
    //     this.props.dispatch(getWalls(this.props.selectedArea));
    // };

    render() {
        const { selectedArea } = this.props;
    
        if(selectedArea == null) {
            return <Header as='h1' textAlign='center'>Welcome to the San Rafael Swell Guide</Header>
        } else {
            return (
                <Container>
                    <List>
                        <List.Item>
                            <Header as='h1' textAlign='center'>Area Name: {selectedArea.name}</Header>
                        </List.Item>
                        <List.Item>
                            {selectedArea.description}
                        </List.Item>
                    </List>
                </Container>
            )
        }
    }
}

const mapStateToProps = state => {
    return { 
        selectedArea: state.selectedArea,
        walls: state.walls, 
    };
  };


export default connect(mapStateToProps)(Details);