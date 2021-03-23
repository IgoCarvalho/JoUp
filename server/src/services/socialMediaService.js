const puppeteer = require('puppeteer');
const { LinkedInProfileScraper } = require('linkedin-profile-scraper');

module.exports = {
  async linkedin(username) {
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
  async behance(username) {
    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      await page.goto(`https://www.behance.net/${username}/projects`);
      const data = await page.evaluate(() => {
        let userData = {
          name: '',
          user_avatar: '',
          link: '',
          posts: [],
        };

        const user_avatar = document.querySelector(
          'main .Profile-wrap-3mj .Profile-avatar-aUj img'
        );
        userData.user_avatar = user_avatar.src;

        const user_name = document.querySelector('main .Profile-wrap-3mj h1');
        userData.name = user_name.textContent;

        const posts = document.querySelectorAll(
          '.Profile-profileContents-3cP .e2e-Work .Cover-wrapper-300'
        );

        posts.forEach((p) => {
          const post_cover = p.querySelector('.Cover-content-2R2 > img');

          const post_link = p.querySelector('.Cover-overlay-28e > a');

          const post_title = p.querySelector(
            '.Cover-overlay-28e .ProjectCoverNeue-info-4Ul > span > a'
          );

          const post_stats = p.querySelectorAll(
            '.Cover-overlay-28e .Stats-stats-1iI > span'
          );

          userData.posts.push({
            cover: post_cover.src,
            link: post_link.href,
            title: post_title.textContent,
            likes: post_stats[0].textContent,
            views: post_stats[1].textContent,
          });
        });

        return userData;
      });

      data.link = `https://www.behance.net/${username}/projects`;

      await browser.close();

      return data;
    } catch (error) {
      throw error;
    }
  },
};
