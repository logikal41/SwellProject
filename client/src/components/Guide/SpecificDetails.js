import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectArea } from '../../actions/areas';
import { selectWall } from '../../actions/walls';


class specificDetails extends React.Component {

    clearBoth = () => {
        const { dispatch } = this.props;
        dispatch(selectArea(null));
        dispatch(selectWall(null));
    }

    renderNavLinks = (type) => {
        const { id, name } = this.props.dataList;
        const { dispatch } = this.props;

        switch(type){
            case 'Group': {
                return <Link to='/guide'>{name}</Link>
            }
            case 'Area': {
                return (
                    <Container>
                        <Link to='/guide' onClick={() => dispatch(selectArea(null))}>
                            {this.props.selectedGroup.name} > </Link>
                        <Link to={`/area/${id}`}>{name}</Link>
                    </Container>
                )
            }
            case 'Wall': {
                return (
                    <Container>
                        <Link to='/guide' onClick={() => this.clearBoth()}>
                            {this.props.selectedGroup.name} > </Link>
                        <Link to={`/area/${this.props.selectedArea.id}`} onClick={() => dispatch(selectWall(null))}>
                            {this.props.selectedArea.name} > </Link>
                        <Link to={`/wall/${id}`}>{name}</Link>
                    </Container>
                )
            }
            default: {
                return <div>Select a group!!!</div>
            }
        }
    }


    render() {
        const { type, dataList } = this.props;

        if ( !dataList ) {
            return <div> Loading... </div>
        } else {
            return (
                <Container>
                    {this.renderNavLinks(type)}
                    <Header as='h3'>{type} Name: {dataList.name} </Header>
                    <Header as='h3'>{type} Description: {dataList.description} </Header>
                </Container>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        selectedGroup: state.selectedGroup,
        selectedArea: state.selectedArea,
        selectedWall: state.selectedWall,
    }
}


export default connect(mapStateToProps)(specificDetails);