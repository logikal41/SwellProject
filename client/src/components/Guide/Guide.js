import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import AreaList from './AreaList';
import Details from './Details';
import { connect } from 'react-redux';
import { getAreas } from '../../actions/areas';

class Guide extends React.Component {

    componentDidMount() {
        this.props.dispatch(getAreas());
      }

    render() {
        return (
            <div>
                <Container computer='6'>
                    <Header as='h1' textAlign='center'>This is the Guide</Header>
                    <AreaList areas={this.props.areas} />
                </Container>
                <Container computer='10'>
                    <Details />
                </Container>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return { areas: state.areas };
  };

export default connect(mapStateToProps)(Guide);