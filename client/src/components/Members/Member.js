import React from 'react';
import { Table } from 'semantic-ui-react'

const Member = ({id, name, role, email }) => {
    return(
        <Table.Row key={id}>
            <Table.Cell textAlign='center'>
                {name}
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {role}
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {email}
            </Table.Cell>
        </Table.Row>
    );

}

export default Member;