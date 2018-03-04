import React from 'react';
import { List } from 'semantic-ui-react';
import { selectArea } from '../../actions/areas';
import { getWalls } from '../../actions/walls';
import { connect } from 'react-redux';

class Area extends React.Component { 

    onSelect = (area) => {
        const { dispatch } = this.props;
        dispatch(selectArea(area));
        dispatch(getWalls(area.id));
    }

    render() {

    const { area } = this.props;

    return ( 
        // Need to change the css so this is obviously a clickable
        <List.Item onClick={() => this.onSelect(area)}>
            {area.name}
        </List.Item>
    )
    }
}

export default connect()(Area);