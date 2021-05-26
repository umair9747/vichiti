module.exports = {
  /**
   * @param string
   * @return string
   */
  normalizeUrl: (string) => {
    if (!string.match(/instagram\.com\/[^\/]*/)) {
      string = `https://www.instagram.com/${string}`;
    }
    return string += '/?__a=1';
  },

  /**
   * @param string
   * @return string
   */
  normalizePostUrl: (string) => {
    if (!string.match(/instagram\.com\/p\/[^\/]*/)) {
      string = `https://www.instagram.com/p/${string}`;
    }
    return string += '/?__a=1';
  },
};
