export default class ReceiptService {
  constructor(http) {
    this.http = http;
  }

  getTexiHistorys = async (userId) => {
    return await fetch(`${this.http}/receipt/all/${userId}`, {
      method: 'GET',
    });
  };
}
