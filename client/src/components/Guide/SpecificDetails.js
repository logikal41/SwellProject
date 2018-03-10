import React from 'react';
import { Header, Container } from 'semantic-ui-react';

class specificDetails extends React.Component {
    render() {
        const { type, dataList } = this.props;
        if ( !dataList ) {
            return <div> Loading... </div>
        } else {
            return (
                <Container>
                    <Header as='h3'>{type} Name: {dataList.name} </Header>
                    <Header as='h3'>{type} Description: {dataList.description} </Header>
                </Container>
            )
        }
    }
}

export default specificDetails;