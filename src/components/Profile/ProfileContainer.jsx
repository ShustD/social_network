import React from 'react';
import { Profile } from './Profile';
import { getProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}


export class ProfileContainer extends React.Component {

    componentDidMount() {
        
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 24296
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile} 
        status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

const mapState = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.userStatus
})

ProfileContainer = compose(connect(mapState, { getProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
