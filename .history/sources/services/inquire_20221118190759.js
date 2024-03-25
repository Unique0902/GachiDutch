export default class InquireService {
  constructor(http) {
    this.http = http;
  }

  createInquiry = async (title, content, userId) => {
    const data = await fetch(`${this.http}/inquire`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        userId,
      }),
    });
    return data;
  };
}
