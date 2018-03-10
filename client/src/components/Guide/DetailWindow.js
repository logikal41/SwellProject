import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import AreaDetails from './AreaDetails';
import Comments from './Comments';

class DetailWindow extends React.Component {

    render() {  
        return (
            <Container>
                <Header as='h1' textAlign='center'>Detail Window:</Header>
                <AreaDetails infoType={this.props.infoType}/>
                <Comments />
            </Container>
        )    
    }
}


export default DetailWindow;