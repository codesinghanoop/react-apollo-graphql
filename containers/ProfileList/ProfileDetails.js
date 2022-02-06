import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native'
import { graphql } from 'react-apollo';
import { APP_NAME, LOGIN_BUTTON, SIGNUP_BUTTON } from '@constants/Text'
import { PROFILE_LIST_SCREEN } from '@constants/Screens'
import Button from '@components/Button'
import queries from '@config/githubGraphQueries.queries'
import { setItem, checkExist, getItem, unsetFavId, findIndex, unsetFavList } from '@utils/localDB'
import { USER_FAVORITE, USER_UN_FAVORITE } from '@constants/Icon'
import styles from './style'


class ProfileDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favIds: []
        };
    }

    getDetailsSection = (detailType, detailValue) => {
        return (
            <View style={styles.detailsSection}>
                <Text style={styles.fieldName} >{detailType}: </Text>
                <Text>{detailValue || 'N/A'}</Text>
            </View>
        )
    }

    getRepoItem = (node) => {
        return (
            <View style={styles.repoItemContainer}>
                <View style={styles.repoDetails}>
                    <Text style={styles.fieldName}>Name: </Text>
                    <Text>{node.name}</Text>
                </View>
                <View style={styles.repoDetails}>
                    <Text style={styles.fieldName}>Description: </Text>
                    <Text style={{ width: '70%' }} numberOfLines={4} >{node.description}</Text>
                </View>
                <View style={styles.repoDetails}>
                    <Text style={styles.fieldName}>Total commits: </Text>
                    <Text style={{ width: '70%' }} numberOfLines={4} >{node.object.history.totalCount}</Text>
                </View>
            </View>
        )
    }

    getRepoDetails = ({ error, loading, user }) => {
        if(!error){
            if(loading){
              return <Text>fetching Users... </Text>
            }else {
                return (
                    <View style={styles.repoContainer}>
                      <Text style={styles.repoField}>Pinned Repositories: </Text>
                      {user.pinnedItems.edges.map((ele, i) => {
                          return this.getRepoItem(ele.node)
                      })}
                    </View>
                )
            }
        } else return <Text>Error Fetching Repositories</Text>
    }

    addToLocal = async (node) => {
        const { favIds } = this.state
        
        if(checkExist(favIds, node.node.id)) {
            await unsetFavId(node.node.id, 'favIds')
            await unsetFavList(node.node.id, 'favList')
            const index = findIndex(favIds, node.node.id)
            favIds.splice(index, 1)
        } else {
            await setItem(node, 'favList');
            await setItem(node.node.id, 'favIds');
            favIds.push(node.node.id)
        }
        this.setState({
            favIds
        })
    }

    async componentDidMount() {
        this.setState({
            favIds: await getItem('favIds') || []
        })
    }

    render() {
        const { navigation: { state: { params: { userData } } }, data } = this.props
        const { avatarUrl, email, location, name, login, PinnedItems, id } = userData
        const { favIds } = this.state
        return (
            <View style={styles.profileContainer}>
              <ScrollView>
                <Image style={styles.coverPic} source={{ uri: avatarUrl }} />
                <Button onPress={() => this.addToLocal({node: userData})} style={styles.button} text={'FAV'} iconConfig={{ icon: checkExist(favIds, id) ? USER_FAVORITE : USER_UN_FAVORITE, show: true }} />
                <View style={styles.detailsContainer}>
                    {this.getDetailsSection('Name', name)}
                    {this.getDetailsSection('Email', email)}
                    {this.getDetailsSection('UserName', login)}
                    {this.getDetailsSection('Location', location)}
                </View>
                {this.getRepoDetails(data)}
              </ScrollView>
            </View>
        )
    }
}

export default graphql(
    queries.pinnedRepos,
    {
      options: (props) => ({ variables: { query: props.navigation.state.params.userData.login } }), // compute query variable from prop
      notifyOnNetworkStatusChange: true
    }
)(ProfileDetails)
