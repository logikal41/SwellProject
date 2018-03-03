import React from 'react';
import { List, Container } from 'semantic-ui-react';
import { deleteArea, selectArea } from '../../actions/areas';

const Area = ({ id, name, description, dispatch }) => {
    return ( 
        // Need to change the css so this is obviously a clickable
        <List.Item onClick={() => dispatch(selectArea(id))} key={id}>
            <List.Header>{name}</List.Header>
            {description}
        </List.Item>
    )
}

export default Area;