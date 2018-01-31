import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import AreaList from './AreaList';
import axios from 'axios';

class Guide extends React.Component {
    state = { areas: [] }

    componentDidMount() {
        axios.get('/api/areas')
          .then ( res => {
            this.setState({ areas: res.data })
          })
      }

    render() {
        return (
            <Container computer='6'>
                <Header as='h1' textAlign='center'>This is the Guide</Header>
                <AreaList areas={this.state.areas} />
            </Container>
            // <Container computer='10'>
            //     <Header as='h1' textAlign='center'>Area information</Header>
            //     <Area id=selectedArea/>
            // </Container>
        )
    }

}

export default Guide;