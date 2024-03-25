export default class UserDataService {
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

  amendBlameData = async (
    userId,
    isChecked1,
    isChecked2,
    isChecked3,
    roomId,
    writerUid
  ) => {
    const data = await fetch(`${this.http}/userdata/blamedata/amend`, {
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

  updatePraiseData = async (
    userId,
    isChecked1,
    isChecked2,
    isChecked3,
    roomId,
    writerUid
  ) => {
    const data = await fetch(`${this.http}/userdata/praisedata`, {
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

  amendPraiseData = async (
    userId,
    isChecked1,
    isChecked2,
    isChecked3,
    roomId,
    writerUid
  ) => {
    const data = await fetch(`${this.http}/userdata/praisedata/amend`, {
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

  updateReview = async (userId, review, roomId, writerUid) => {
    const data = await fetch(`${this.http}/userdata/review`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        review,
        roomId,
        writerUid,
      }),
    });
    return data;
  };

  amendReview = async (userId, reivew, roomId, writerUid) => {
    const data = await fetch(`${this.http}/userdata/reivew/amend`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        reivew,
        roomId,
        writerUid,
      }),
    });
    return data;
  };

  updateBlacklist = async (userId, opponentUserId) => {
    const data = await fetch(`${this.http}/userdata/blacklist`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        opponentUserId,
      }),
    });
    return data;
  };

  removeBlacklist = async (userId, opponentUserId) => {
    const data = await fetch(`${this.http}/userdata/blacklist/remove`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        opponentUserId,
      }),
    });
    return data;
  };
}
