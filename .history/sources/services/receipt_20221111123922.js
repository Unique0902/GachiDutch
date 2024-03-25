export default class ReceiptService {
  constructor(http) {
    this.http = http;
  }

  getTexiHistorys = async (userId) => {
    return this.http.fetch(`/receipt/all/${userId}`, {
      method: 'GET',
    });
  };
}
