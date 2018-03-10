import React from 'react';
import { Container, Table, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getMembers } from '../../actions/members';
import Member from './Member';

const userOptions = [{text: 'All', value: 'all'}, {text: 'Administrator', value: 'admin'}, {text: 'User', value: 'user'}];

class MemberList extends React.Component {
    state = { role: 'all', members: [] }

    // does the members list need to be a part of the redux store or can this just be a component state

    componentDidMount() {
        this.props.dispatch(getMembers());
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ members: nextProps.members });
    }

    roleChange = (e, data) => {
        const { members } = this.props;
        if (data.value !== 'all') { 
            const selectedMembers = members.filter( member => member.role === data.value)
            this.setState({role: data.value, members: selectedMembers })
        } else {
            this.setState({role: data.value, members})
        }
    }

    render() {
        const { role, members } = this.state;

        if (members.length === 0 ) {
            return <h3>Loading...</h3>
        }else {
            return(
                <div>
                    <Container>
                        <Form>
                            <Form.Select
                                label='User Role'
                                placeholder='Select User Role' 
                                options={userOptions} 
                                name='Role'
                                value={role}
                                onChange={(e, data) => this.roleChange(e, data)}
                            />
                        </Form>
                        <Table celled padded>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'>Name</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Role</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Email</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {members.map( member => {
                                    return (
                                        <Member
                                            key={member.id}
                                            name={member.name}
                                            role={member.role}
                                            email={member.email}
                                        />
                                    )   
                                })}
                            </Table.Body>
                        </Table>
                    </Container>
                </div>
            )
        }
    }

}

const mapStateToProps = ({ members }) => {
    return { members };
  }
  
  export default connect(mapStateToProps)(MemberList);