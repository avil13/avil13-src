var ghpages = require('gh-pages');
const origin = require('remote-origin-url');

const repo = origin.sync();

ghpages.publish('dist', {
    repo
}, function (err) {
    if (err) {
        console.error(err);
    }

    console.log(`OK: ${repo}\n\n`);
});
