import { Injectable } from '@angular/core';

import { DUMMY_USERS } from '../../dummy-users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  get users() {
    return DUMMY_USERS;
  }

  getUser(id: string) {
    return DUMMY_USERS.find((user) => user.id === id);
  }

  getUserName(id: string) { 
    const user = this.getUser(id);
    return user ? user.name : 'Unknown';
  }
}
