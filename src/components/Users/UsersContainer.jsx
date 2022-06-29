import React from "react"
import { connect } from "react-redux"
import { follow, unfollow, getUsers } from "../../redux/usersReducer"
import { Users } from "./Users"
import { Preloader } from "../../common/Preloader/Preloader"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "redux"
import { getUserCount, getTotalCount, getCurrentPage, getFollowInProgress, getUsersReselect } from "../selectors/userSelector"


export class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersCount)
    }

    onChangePage = (page) => {
        this.props.getUsers(page, this.props.usersCount)

    }
   
    render() {
        
        return  <>
            {this.props.isFetching === true ? <Preloader /> :
                <Users onChangePage={this.onChangePage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    totalCount={this.props.totalCount}
                    usersCount={this.props.usersCount}
                    currentPage={this.props.currentPage}
                    state={this.props.state}
                    followInProgress={this.props.followInProgress}
                    />}
                </>
    }
}

const mapState = (state) => {

    return {
        state: getUsersReselect(state) ,
        totalCount: getTotalCount(state),
        usersCount: getUserCount(state) ,
        currentPage: getCurrentPage(state),
        followInProgress: getFollowInProgress(state),
    }
}

UsersContainer = compose(connect(mapState, {getUsers, follow, unfollow}),
    withAuthRedirect
)(UsersContainer)


