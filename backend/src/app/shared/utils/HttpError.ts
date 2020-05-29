const defaultErrorMessage = 'Invalid operation';
const defaultStatusCode = 400;

class HttpError extends Error {
  public statusCode: number = defaultStatusCode;

  constructor(errorMessage = defaultErrorMessage) {
    super(errorMessage);
  }

  withStatus(statusCodeError: number): HttpError {
    this.statusCode = statusCodeError;

    return this;
  }
}

export default HttpError;
