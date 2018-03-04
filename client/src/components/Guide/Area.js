import React from 'react';
import { List, Container } from 'semantic-ui-react';
import { deleteArea, selectArea } from '../../actions/areas';
import { getWalls } from '../../actions/walls';
import { connect } from 'react-redux';

class Area extends React.Component { 

    // this causes an infinite loop... why??

    // onSelect = (id) => {
    //     this.props.dispatch(selectArea(id));
    //     this.props.dispatch(getWalls(this.props.selectedArea));
    // }

    render() {

    const { area, dispatch } = this.props;

    return ( 
        // Need to change the css so this is obviously a clickable
        <List.Item onClick={() => dispatch(selectArea(area))} key={area.id}>
            {area.name}
        </List.Item>
    )
    }
}

export default connect()(Area);