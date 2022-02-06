import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import { withNavigationFocus } from "react-navigation";
import { getItem } from '@utils/localDB'
import { PROFILE_DETAILS_SCREEN } from '@constants/Screens'
import { EMPTY_LIST_TITLE, FAVORITE_EMPTY_LIST_SUBTITLE } from '@constants/Text'
import FavListComponent from '@components/UserList'
import styles from './style'

class FavList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favList: []
        }
    }

    static navigationOptions = {
        header: null
    }

    async componentDidMount() {
        this.setState({
            favList: await getItem('favList')
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isFocused !== this.props.isFocused && this.props.isFocused) {
          this.refreshList()
        }
    }

    refreshList = async () => {
        this.setState({
            favList: await getItem('favList')
        })
    }

    getFakeObj = () => {
        const { favList } = this.state
        return {
            error: false,
            loading: false,
            favList,
            fromFav: true,
            refetch: this.refreshList
        }
    }

    goToProfileDetails = (userData) => {
        const { navigation: { navigate } } = this.props
        navigate(PROFILE_DETAILS_SCREEN, { userData })
    }

    render() {
        return (
            <View style={styles.container}>
                <FavListComponent data={this.getFakeObj()} navigate={this.goToProfileDetails} emptyTitle={EMPTY_LIST_TITLE} emptySubTitle={FAVORITE_EMPTY_LIST_SUBTITLE}  />
            </View>
        )
    }
}

export default withNavigationFocus(FavList)
