import { store } from './store';
import authActions from './auth/actions';
export default function Boot() {
  return new Promise(() => {
    store.dispatch(authActions.checkAuthorization());
  });
}
