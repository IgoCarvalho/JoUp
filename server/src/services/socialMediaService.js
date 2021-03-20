const { LinkedInProfileScraper } = require('linkedin-profile-scraper');

module.exports = {
  async getLinkedinData(username) {
    try {
      const scraper = new LinkedInProfileScraper({
        sessionCookieValue: la,
        keepAlive: false,
      });

      await scraper.setup();

      const result = await scraper.run(
        `https://www.linkedin.com/in/${username}`
      );

      return result;
    } catch (error) {
      throw error;
    }
  },
};
