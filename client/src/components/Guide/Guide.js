import React from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import AreaList from './AreaList';
import Details from './Details';

class Guide extends React.Component {

    render() {
        return (
            <Container>
                <Grid>
                    <Grid.Column width={4}>
                        <Header as='h1' textAlign='center'>Area List</Header>
                        <AreaList />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Details />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default Guide;