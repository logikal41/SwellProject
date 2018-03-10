import React from 'react';
import { Header, Container } from 'semantic-ui-react';

class Comments extends React.Component {
    render() {
        return (
            <Container>
                <div></div> {/* spacer */}
                <Header as='h1' textAlign='center'> Comments Container </Header>
            </Container>
        )
    }
}

export default Comments;