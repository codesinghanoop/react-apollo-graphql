import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import { graphql } from 'react-apollo';
import queries from '@config/githubGraphQueries.queries'
import SearchInput from '@components/SearchInput'
import UserList from '@components/UserList'
import { PROFILE_DETAILS_SCREEN } from '@constants/Screens'
import { PLACEHOLDER, EMPTY_LIST_TITLE, DISCOVER_EMPTY_LIST_SUBTITLE } from '@constants/Text'

import styles from './style'

class ProfileList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    static navigationOptions = {
        header: null
    }

    searchQuery = (text) => {
        this.setState({
            searchTerm: text
        })
    }

    goToProfileDetails = (userData) => {
        const { navigation: { navigate } } = this.props
        navigate(PROFILE_DETAILS_SCREEN, { userData })
    }

    render() {
        const { searchTerm } = this.state
        return (
            <View style={styles.container}>
                <SearchInput style={styles.input} onChangeText={this.searchQuery} placeholder={PLACEHOLDER} />
                {searchTerm ? <UserListFrag searchQuery={searchTerm} navigate={this.goToProfileDetails} emptyTitle={EMPTY_LIST_TITLE} emptySubTitle={DISCOVER_EMPTY_LIST_SUBTITLE}  /> : null}
            </View>
        )
    }
}

const UserListFrag = graphql(
    queries.searchUser,
    {
      options: ({ searchQuery }) => ({ variables: { query: searchQuery } }), // compute query variable from prop
      notifyOnNetworkStatusChange: true
    }
)(UserList)

export default ProfileList
