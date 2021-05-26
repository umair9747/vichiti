class UnableToFetchPostDataError extends Error {
  constructor(shortcode) {
    super(shortcode);
  }

  static fromShortcode(shortcode) {
    return new this(`An error occured while fetching post data for shortcode ${shortcode}. Maybe this post does not exist ?`);
  }
}

module.exports = UnableToFetchPostDataError;
