var ghpages = require('gh-pages');

const repo = 'git@github.com:avil13/avil13.github.com.git';

ghpages.publish('dist', {
    repo,
    branch: 'master'
}, function (err) {
    if (err) {
        console.error(err);
    }

    console.log(`OK: ${repo}\n\n`);
});
