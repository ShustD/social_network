import React from 'react';
import { Profile } from './Profile';
import { getProfile } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }


export class ProfileContainer extends React.Component {
    
    componentDidMount() {
        
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
       this.props.getProfile(userId)
    }
    
    render() {
      
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapState = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

ProfileContainer = compose(connect (mapState, {getProfile}),
    withRouter,
    withAuthRedirect 
)(ProfileContainer)
