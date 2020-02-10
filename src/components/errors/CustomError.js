class CustomError extends Error{
  detail;

  constructor(message, detail) {
    super(message);
    this.detail = detail;
  }
}

export default CustomError
