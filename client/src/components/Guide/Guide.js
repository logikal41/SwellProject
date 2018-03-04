import React from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import AreaList from './AreaList';
import Details from './Details';
import UpdateForm from './UpdateForm';

class Guide extends React.Component {
    state = { updateForm: false };

    toggleUpdate = () => {
        this.setState({updateForm: !this.state.updateForm})
    }

    render() {
        if(this.state.updateForm === false ) {
            return (
                <Container>
                    <Grid>
                        <Grid.Column width={4}>
                            <Header as='h1' textAlign='center'>Area List</Header>
                            <AreaList toggleUpdate={this.toggleUpdate} />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Details toggleUpdate={this.toggleUpdate} />
                        </Grid.Column>
                    </Grid>
                </Container>
            )
        } else {
            return (
                <Container>
                    <Grid>
                        <Grid.Column width={4}>
                            <Header as='h1' textAlign='center'>Area List</Header>
                            <AreaList toggleUpdate={this.toggleUpdate} />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <UpdateForm toggleUpdate={this.toggleUpdate} />
                        </Grid.Column>
                    </Grid>
                </Container>
            )
        }
    }
}

export default Guide;