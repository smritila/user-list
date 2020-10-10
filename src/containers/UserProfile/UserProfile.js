import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import classes from './UserProfile.module.css';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';
import ProfileDetails from '../../components/Profile/ProfileDetails/ProfileDetails';
import ComingSoon from '../../components/static/ComingSoon/ComingSoon';
import ChatPopup from '../../components/UI/ChatPopup/ChatPopup';

class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navItems: [],
            activeUserDetail: {},
            showChatPopup: false
        };
    }

    componentDidMount() {
        const { match: { params, url } } = this.props;
        let activeUserDetail = this.getActiveUserDetail(params.id);
        this.setState({
            activeUserDetail,
            navItems: [
                { name: 'Profile', link: `${url}/profile-details` },
                { name: 'Posts', link: `${url}/posts` },
                { name: 'Gallery', link: `${url}/gallery` },
                { name: 'ToDo', link: `${url}/todo` }
            ]
        });
    }

    componentDidUpdate() {
        const { match: { params, url } } = this.props;
        let activeUserDetail = this.getActiveUserDetail(params.id);
        if(this.state.activeUserDetail.id !== activeUserDetail.id) {
            this.setState({
                activeUserDetail,
                navItems: [
                    { name: 'Profile', link: `${url}/profile-details` },
                    { name: 'Posts', link: `${url}/posts` },
                    { name: 'Gallery', link: `${url}/gallery` },
                    { name: 'ToDo', link: `${url}/todo` }
                ]
            });
        }
    }

    getActiveUserDetail(userId) {
        let activeUserDetail = this.props.users.filter(user => user.id === parseInt(userId));
        activeUserDetail = activeUserDetail.length ? activeUserDetail[0] : {};
        return activeUserDetail;
    }

    toggleChatPopup = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                showChatPopup: !prevState.showChatPopup
            };
        });
    }

    render() {
        const { match: { path, url } } = this.props;

        return <div className={classes.UserDetails}>
            <div className={classes.UserDetails__nav}>
                <NavigationItems navItems={this.state.navItems} />
            </div>
            <div className={classes.UserDetails__header}>
                <ProfileHeader detail={this.state.activeUserDetail} />
            </div>
            <div className={classes.UserDetails__body}>
                <Switch>
                    <Route exact path={path}>
                        <Redirect to={`${url}/profile-details`} />
                    </Route>
                    <Route exact path={`${path}/profile-details`}>
                        <ProfileDetails detail={this.state.activeUserDetail} />
                    </Route>
                    <Route path={`${path}/:page`} component={ComingSoon} />
                </Switch>
                <ChatPopup 
                    users={this.props.users.filter(user => user.id !== this.state.activeUserDetail.id)} 
                    show={this.state.showChatPopup} 
                    toggle={this.toggleChatPopup} 
                />
            </div>
        </div>
    }
}

export default withRouter(UserDetails);