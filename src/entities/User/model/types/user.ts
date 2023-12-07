export interface User {
  id: string
  username: string
}

export interface UserSchema {
  _initialized: boolean
  authData?: User
}
