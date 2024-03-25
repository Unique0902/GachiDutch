export default class ReportService {
  constructor(http) {
    this.http = http;
  }

  createReport = async (type, content, userId, opponentUserId, roomId) => {
    const data = await fetch(`${this.http}/report`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type,
        content,
        userId,
        opponentUserId,
        roomId,
      }),
    });
    return data;
  };
}
