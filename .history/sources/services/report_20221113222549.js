export default class ReportService {
  constructor(http) {
    this.http = http;
  }

  getBlameData = async (userId) => {
    return await fetch(`${this.http}/userdata/blamedata/${userId}`, {
      method: 'GET',
    });
  };

  getPraiseData = async (userId) => {
    return await fetch(`${this.http}/userdata/praisedata/${userId}`, {
      method: 'GET',
    });
  };

  getReview = async (userId) => {
    return await fetch(`${this.http}/userdata/review/${userId}`, {
      method: 'GET',
    });
  };

  getBlacklist = async (userId) => {
    return await fetch(`${this.http}/userdata/blacklist/${userId}`, {
      method: 'GET',
    });
  };

  updateBlameData = async (
    userId,
    isChecked1,
    isChecked2,
    isChecked3,
    roomId,
    writerUid
  ) => {
    const data = await fetch(`${this.http}/userdata/blamedata`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        isChecked1,
        isChecked2,
        isChecked3,
        roomId,
        writerUid,
      }),
    });
    return data;
  };
}
