import { Observable } from 'rxjs/Observable';
import {Action} from '@ngrx/store';

import {ActionWithPayload, UserActions} from '../actions';
import {User} from '../../../model';

export function user(state: any = null, action: ActionWithPayload<User>): User {
  switch (action.type) {
    case UserActions.LOGOFF:
      return null;
    case UserActions.LOGIN_SUCCESS:
    case UserActions.ADD_USER_WITH_ROLES:
      return action.payload;
    default:
      return state;
  }
}
