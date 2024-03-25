export default class ReceiptService {
  constructor(http) {
    this.http = http;
  }

  findByMatchId = async (userId) => {
    return this.http.fetch(`/receipt/all/${userId}`, {
      method: 'GET',
    });
  };
}
