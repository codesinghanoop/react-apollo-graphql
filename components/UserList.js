import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import UserListItem from './UserListItem'
import EmptyComponent from './EmptyComponent'

const UserList = ({
    data: { loading, error, search, networkStatus, refetch, fromFav, favList },
    navigate,
    searchQuery,
    emptyTitle,
    emptySubTitle
}) => {
  if(!error){
    if(loading){
      return <Text>fetching Users... </Text>
    }else {
      const responseData = fromFav ? favList : search.edges
      return (
        <FlatList
          style={{ marginBottom: 8 }}
          data={responseData}
          refreshing={networkStatus === 4}
          onRefresh={() => refetch()}
          onEndReachedThreshold={0.5}
          keyExtractor = {(item) => item.id}
          renderItem={({item, index}) =>(
            <UserListItem key={item.node.id} item={item} navigate={navigate} />
          )}
          ListEmptyComponent={<EmptyComponent title={emptyTitle} subTitle={emptySubTitle} />}
        />
      )
    }
  }else return <Text> Error Fetching users</Text>
}

UserList.defaultProps = {

}

export default UserList
