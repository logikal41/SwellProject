import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import WallList from './Lists/WallList';
import AreaDetails from './Details/AreaDetails';
import Comments from './Comments';

import { getArea } from '../../actions/areas';


class Guide extends Component {

    componentDidMount() {
        const { dispatch, match } = this.props;
        dispatch(getArea(match.params.id));
    }

    render() {
      
        return (
            <Container>
                <Grid>
                    <Grid.Column width={4}>
                        <WallList />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <AreaDetails />
                        <Comments />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default connect()(Guide);