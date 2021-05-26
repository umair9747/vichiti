class UnableToFetchUserDataError extends Error {
  constructor(message) {
    super(message);
  }

  static fromUsername(username) {
    return new this(`An error occured while fetching data for user ${username}. Maybe this user does not exist ?`);
  }
}

module.exports = UnableToFetchUserDataError;
