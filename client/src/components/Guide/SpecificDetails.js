import React from 'react';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectArea, deleteArea } from '../../actions/areas';
import { selectWall, deleteWall } from '../../actions/walls';
import { clearRoutes } from '../../actions/routes';


class specificDetails extends React.Component {

    clearBoth = () => {
        const { dispatch } = this.props;
        dispatch(selectArea(null));
        dispatch(selectWall(null));
        dispatch(clearRoutes());
    }

    clearArea = () => {
        const { dispatch } = this.props;
        dispatch(selectArea(null));
        dispatch(clearRoutes());
    }

    clearWall = () => {
        const { dispatch } = this.props;
        dispatch(selectWall(null));
        dispatch(clearRoutes());
    }

    renderNavLinks = (type) => {
        const { dispatch, dataList, history } = this.props;

        switch(type){
            case 'Area': {
                return (
                    <Container>
                        <List>
                            <List.Item>
                                <Link to='/guide' onClick={() => dispatch(this.clearArea())}>
                                    {this.props.selectedGroup.name}</Link>
                            </List.Item>
                            <List.Item>
                                {/* line break */}
                            </List.Item>
                            <List.Item>
                                <Button onClick={()=>dispatch(deleteArea(dataList.id, () => history.push('/guide') ))}>Delete</Button>
                            </List.Item>
                        </List>
                    </Container>
                )
            }
            case 'Wall': {
                return (
                    <Container>
                        <List>
                            <List.Item>
                                <Link to='/guide' onClick={() => this.clearBoth()}>
                                    {this.props.selectedGroup.name} > </Link>
                                <Link to={`/area/${this.props.selectedArea.id}`} onClick={() => dispatch(this.clearWall())}>
                                    {this.props.selectedArea.name}</Link>
                            </List.Item>
                            <List.Item>
                                {/* line break */}
                            </List.Item>
                            <List.Item>
                                <Button onClick={()=>dispatch(deleteWall(dataList.id, () => history.push(`/area/${this.props.selectedArea.id}`)))}>Delete</Button>
                            </List.Item>
                        </List>

                    </Container>
                )
            }
            default: {
                return <div></div>
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


export default withRouter(
    connect(mapStateToProps)(specificDetails)
);