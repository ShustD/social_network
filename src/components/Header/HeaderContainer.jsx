import React from 'react';
import { connect } from 'react-redux';
import { getAuthUsers } from '../../redux/authReducer';
import { Header } from './Header';



export class HeaderContainer extends React.Component {
   
    componentDidMount() {
            this.props.getAuthUsers()
    }

    render() {
         return (<Header {...this.props}/>)
    }
}

const mapState = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email
    })

HeaderContainer = connect (mapState, {getAuthUsers}) (HeaderContainer)