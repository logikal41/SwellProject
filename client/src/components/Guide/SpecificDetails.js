import React from 'react';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectArea, deleteArea } from '../../actions/areas';
import { selectWall, deleteWall } from '../../actions/walls';


class specificDetails extends React.Component {

    clearBoth = () => {
        const { dispatch } = this.props;
        dispatch(selectArea(null));
        dispatch(selectWall(null));
    }

    renderNavLinks = (type) => {
        const { dispatch, dataList } = this.props;

        switch(type){
            case 'Area': {
                return (
                    <Container>
                        <List>
                            <List.Item>
                                <Link to='/guide' onClick={() => dispatch(selectArea(null))}>
                                    {this.props.selectedGroup.name}</Link>
                            </List.Item>
                            <List.Item>
                                {/* line break */}
                            </List.Item>
                            <List.Item>
                                <Button onClick={()=>dispatch(deleteArea(dataList.id))}>Delete</Button>
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
                                <Link to={`/area/${this.props.selectedArea.id}`} onClick={() => dispatch(selectWall(null))}>
                                    {this.props.selectedArea.name}</Link>
                            </List.Item>
                            <List.Item>
                                {/* line break */}
                            </List.Item>
                            <List.Item>
                                <Button onClick={()=>dispatch(deleteWall(dataList.id))}>Delete</Button>
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


export default connect(mapStateToProps)(specificDetails);