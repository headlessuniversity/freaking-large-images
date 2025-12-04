import { readFileSync, writeFileSync } from 'fs';
import { gzipSync, brotliCompressSync, constants } from 'zlib';
import { resolve } from 'path';

// Read the source HTML and CSS
const htmlContent = readFileSync('public/landing-pages/space-camp_1.html', 'utf-8');
const cssContent = readFileSync('public/landing-pages/space-camp.css', 'utf-8');

// Replace the CSS link with inline style tag
const htmlWithInlineCSS = htmlContent.replace(
  /<link rel="stylesheet" href="space-camp\.css" \/>/,
  `<style>${cssContent}</style>`
);

// Write the new HTML file with inline CSS
const outputPath = 'public/landing-pages/space-camp_2.html';
writeFileSync(outputPath, htmlWithInlineCSS);

// Create Buffer from the HTML content
const htmlBuffer = Buffer.from(htmlWithInlineCSS, 'utf-8');

// Create gzip compressed version
const gzipped = gzipSync(htmlBuffer, { level: 9 });
writeFileSync(outputPath + '.gz', gzipped);

// Create brotli compressed version (even better compression)
const brotli = brotliCompressSync(htmlBuffer, {
  params: {
    [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MAX_QUALITY
  }
});
writeFileSync(outputPath + '.br', brotli);

console.log('✅ Generated space-camp_2.html with inline CSS');
console.log(`   Original HTML: ${htmlWithInlineCSS.length.toLocaleString()} bytes`);
console.log(`   Gzipped:       ${gzipped.length.toLocaleString()} bytes (${((gzipped.length / htmlWithInlineCSS.length) * 100).toFixed(1)}%)`);
console.log(`   Brotli:        ${brotli.length.toLocaleString()} bytes (${((brotli.length / htmlWithInlineCSS.length) * 100).toFixed(1)}%)`);
console.log('');
console.log('Files created:');
console.log(`   - ${outputPath}`);
console.log(`   - ${outputPath}.gz`);
console.log(`   - ${outputPath}.br`);

