export default class UserService {
  constructor(http) {
    this.http = http;
  }
  updateName = async (uid, name) => {
    return await fetch(`${this.http}/auth/updatename`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uid, name }),
    });
  };
}
