import gql from 'graphql-tag'

const queries = {
  // All github queries used in our app
  //Search user
  searchUser: gql`
  query searchUser($query: String!){
    __typename
    search(type: USER, query: $query, first: 100) {
      userCount
      __typename
    	edges {
        __typename
        node {
          __typename
        	... on User {
            __typename
            login
            id
            name
            email
            avatarUrl
            location
            anyPinnableItems
          }
        }
      }
    }
  }`,

  //Find pinned repositories
  pinnedRepos: gql`
  query pinnedRepos($query: String!) {
    user(login: $query) {
      __typename
    	pinnedItems(first: 10) {
        totalCount
        __typename
        edges {
          node {
            ... on Repository {
              name
              description
              object(expression:"master") {
                ... on Commit {
                  history {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    }
  }`
}

export default queries
