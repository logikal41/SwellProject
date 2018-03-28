import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import AreaList from './Lists/AreaList';
import WallList from './Lists/WallList';
import RouteList from './Lists/RouteList';
import DetailWindow from './DetailWindow';

import { getGroup } from '../../actions/groups';
import { getArea } from '../../actions/areas';
import { getWall } from '../../actions/walls';

class Guide extends React.Component {

    renderList = () => {
        const { dispatch, match }= this.props;

        switch(match.path){
            case '/guide': {
                dispatch(getGroup());
                return <AreaList />
            }
            case '/area/:id': {
                dispatch(getArea(match.params.id));
                return <WallList />
            }
            case '/wall/:id': {
                dispatch(getWall(match.params.id));
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

export default connect()(Guide);