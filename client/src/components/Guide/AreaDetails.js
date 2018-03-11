import React from 'react';
import { connect } from 'react-redux';
import { Header, Container, Button } from 'semantic-ui-react';
import SpecificDetails from './SpecificDetails';

class AreaDetails extends React.Component {

    renderDetails = () => {
        const { infoType, selectedGroup, selectedArea, selectedWall } = this.props;
        switch(infoType){
            case '/guide': {
                return <SpecificDetails type='Group' dataList={selectedGroup} />
            }
            case '/area/:id': {
                return <SpecificDetails type='Area' dataList={selectedArea} />
            }
            case '/wall/:id': {
                return <SpecificDetails type='Wall' dataList={selectedWall} />
            }
            default: {
                return <div>Select a group!!!</div>
            }
        }
    }

    render() {
        return (
            <Container>
                {this.renderDetails()}
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        selectedGroup: state.selectedGroup,
        selectedArea: state.selectedArea,
        selectedWall: state.selectedWall,
    }
}

export default connect(mapStateToProps)(AreaDetails);