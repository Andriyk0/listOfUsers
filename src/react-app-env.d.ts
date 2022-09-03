/// <reference types="react-scripts" />

interface User {
  'id': number,
  'name': string,
  'username': string,
  'email': string,
  'address': Address,
}

interface Address {
  'street': string,
  'suite': string,
  'city': string,
  'zipcode': string,
  'geo': {
    'lat': string,
    'lng': string
  }
}

interface Post {
  'userId': number,
  'id': number,
  'title': string,
  'body': string
}

interface Album {
  'userId': number,
  'id': number,
  'title': string
}

interface State {
  users: User[],
  userPosts: Post[],
  userAlboms: Album[],
  selectUser: User | undefined,
}
