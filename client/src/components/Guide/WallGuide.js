import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Header } from 'semantic-ui-react';
import RouteList from './Lists/RouteList';
import WallDetails from './Details/WallDetails';
import RouteDetails from './Details/RouteDetails';
import Comments from './Comments';

import { getWall } from '../../actions/walls';

class Guide extends Component {

    componentDidMount() {
        const { dispatch, match } = this.props;
        dispatch(getWall(match.params.id));
    }

    render() {
        const { activeSelection } = this.props;

        if (!activeSelection) {
            return <Header as='h1' textAlign='center'>Loading...</Header>
        }
      
        return (
            <Container>
                <Grid>
                    <Grid.Column width={4}>
                        <RouteList />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {activeSelection.wall_id ? <RouteDetails /> : <WallDetails />}
                        <Comments />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return { activeSelection }
}

export default connect(mapStateToProps)(Guide);