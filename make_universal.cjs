const fs = require('fs');

let html = fs.readFileSync('dist/index.html', 'utf8');

// Extract the script tag and its contents
const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let scripts = [];

while ((match = scriptRegex.exec(html)) !== null) {
  let content = match[1];
  
  // Remove the modulepreload polyfill which calls fetch() and breaks on file:/// protocol
  content = content.replace(/\(function\(\)\{const e=document\.createElement\("link"\)\.relList;[\s\S]*?fetch\(A\.href,l\)\}\}\)\(\);?/g, '');
  
  scripts.push(content);
}

if (scripts.length > 0) {
  // Remove all existing script tags
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  
  // Combine scripts into a single clean script placed right before </body>
  const combinedScript = `<script>\n${scripts.join('\n')}\n</script>\n</body>`;
  html = html.replace('</body>', combinedScript);
}

// Remove any remaining crossorigin attributes
html = html.replace(/ crossorigin=""/gi, '');
html = html.replace(/ crossorigin/gi, '');

fs.writeFileSync('dist/index.html', html);
fs.writeFileSync('portfolio.html', html);
console.log('Successfully updated portfolio.html and dist/index.html without modulepreload fetch');
