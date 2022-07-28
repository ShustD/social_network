import React from 'react';
import { Profile } from './Profile';
import { getProfile, getStatus, updateStatus, onChangePhoto } from '../../redux/profileReducer';
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
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            
            userId = this.props.userId
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} 
                status={this.props.status} updateStatus={this.props.updateStatus}
                isOwner={this.props.match.params.userId} onChangePhoto={this.props.onChangePhoto}/>
    }
}

const mapState = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.userStatus,
    userId: state.auth.userId
})

ProfileContainer = compose(connect(mapState, { getProfile, getStatus, updateStatus, onChangePhoto }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
