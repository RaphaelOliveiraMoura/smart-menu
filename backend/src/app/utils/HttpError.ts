const defaultErrorMessage = 'Invalid operation';
const defualtStatusCode = 400;

class HttpError extends Error {
  public statusCode: number = defualtStatusCode;

  constructor(errorMessage = defaultErrorMessage) {
    super(errorMessage);
  }

  withStatus(statusCodeError: number): HttpError {
    this.statusCode = statusCodeError;

    return this;
  }
}

export default HttpError;
