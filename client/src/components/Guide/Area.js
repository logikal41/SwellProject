import React from 'react';
import { List, Container } from 'semantic-ui-react';

const Area = ({ name, description }) => {
    return ( 
        <Container>
            <List>
                <List.Item>
                    <List.Header>{name}</List.Header>
                </List.Item>
            </List>
        </Container>
    )
}

export default Area;