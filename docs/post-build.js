const fs = require('fs');

/* Add google console tag */
const indexPath = 'build/index.html';
const index = fs.readFileSync(indexPath).toString();
const withGoogleConsole = index.replace(
  '<head>',
  '<head>\n<meta name="google-site-verification" content="OVdCorlkGdaEo3iAodtFprKQ458Nxig5qLBfJpxlHsk" />'
);
fs.writeFileSync(indexPath, withGoogleConsole);

/* Remove existing gh clone */
const ghPath = '.docusaurus/transloco-gh-pages';
if (fs.existsSync(ghPath)) {
  fs.rmdirSync(ghPath, { recursive: true });
}
