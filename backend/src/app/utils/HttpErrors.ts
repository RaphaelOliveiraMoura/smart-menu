export interface IHttpError {
  message: string;
  status: number;
}

class HttpErrors {
  private message: string;

  constructor(httpMessage = '') {
    this.message = httpMessage;
  }

  400(): IHttpError {
    return {
      message: this.message || 'Invalid params',
      status: 400,
    };
  }
}

export default HttpErrors;
