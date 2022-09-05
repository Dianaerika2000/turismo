import { api } from './site.config';

/**
 * Manages login/register functions at the API
 */
class AuthService {
  /**
   * Logs in a user
   * @param user
   * @returns {Promise<AxiosResponse<any>>}
   */
  login(user) {
    return api
      .post('auth/login', {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.success) {
          // storageSave('user', response.data);
        }
        return response.data;
      });
  }
  register(user) {
    return api.post('auth/register', {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
