import React from 'react';
import { Modal, Button, Header, Icon, Container } from 'semantic-ui-react';
import MemberForm from './MemberForm';
import MemberList from './MemberList';
import { connect } from 'react-redux';

class MemberTab extends React.Component {
  state = { modalOpen: false };

  handleOpen = (e) => this.setState({ modalOpen: true });

  handleClose = (e) => this.setState({ modalOpen: false });

  render() {
  
    return (
      <Container>
        <Modal
          trigger={
            <Button 
              onClick={this.handleOpen}
            >
              <Icon 
                name='plus'
                color='green'
              />
              Add User
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleClose}
          size='small'
          closeIcon='close'
        >
          <Header icon='browser' content={'Add User'} />
          <Modal.Content>
            <MemberForm modalClose={this.handleClose} />
          </Modal.Content>
        </Modal>
        <br />
        <br />
        <MemberList />
      </Container>
    );
  }
}

export default connect()(MemberTab);