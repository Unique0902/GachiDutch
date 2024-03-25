export default class UserService {
  constructor(http) {
    this.http = http;
  }

  updateName = async (uid, name) => {
    return await fetch(`${this.http}/auth/updatename`, {
      method: 'POST',
      body: JSON.stringify({ uid, name }),
    });
  };
}
