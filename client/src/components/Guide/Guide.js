import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import AreaList from './Lists/AreaList';
import WallList from './Lists/WallList';
import RouteList from './Lists/RouteList';
import DetailWindow from './DetailWindow';

class Guide extends React.Component {

    renderList = () => {
        switch(this.props.match.path){
            case '/guide': {
                return <AreaList />
            }
            case '/area/:id': {
                return <WallList />
            }
            case '/wall/:id': {
                return <RouteList />
            }
            default: {
                return <div>Select a group!!!</div>
            }
        }
    }

    render() {
      
        return (
            <Container>
                <Grid>
                    <Grid.Column width={4}>
                        {this.renderList()}
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <DetailWindow />
                    </Grid.Column>
                </Grid>
            </Container>
        )
        
    }
}

export default Guide;