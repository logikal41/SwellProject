import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import AreaList from './AreaList';
import WallList from './WallList';
import RouteList from './RouteList';
import DetailWindow from './DetailWindow';

class Guide extends React.Component {

    renderList = () => {
        const { path, params } = this.props.match;
        switch(path){
            case '/guide': {
                return <AreaList />
            }
            case '/area/:id': {
                return <WallList area_id={params.id} />
            }
            case '/wall/:id': {
                return <RouteList wall_id={params.id} />
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
                        <DetailWindow infoType={this.props.match.path}/>
                    </Grid.Column>
                </Grid>
            </Container>
        )
        
    }
}

export default Guide;