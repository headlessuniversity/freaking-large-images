import { readFileSync, writeFileSync } from 'fs';

// Process step-1-alt.html
const step1 = readFileSync('public/simple/step-1-alt.html', 'utf-8');
const step1Replaced = step1.replace(
  /<style>[\s\S]*?<\/style>/,
  `<!-- Deferred CSS loading using media print trick -->
    <link rel="stylesheet" href="/simple/step-1.css" media="print" onload="this.media='all'">
    <noscript><link rel="stylesheet" href="/simple/step-1.css"></noscript>`
);
writeFileSync('public/simple/step-1-alt.html', step1Replaced);

// Process step-6-alt.html  
const step6 = readFileSync('public/simple/step-6-alt.html', 'utf-8');
const step6Replaced = step6.replace(
  /<style>[\s\S]*?<\/style>/,
  `<!-- Deferred CSS loading using media print trick -->
    <link rel="stylesheet" href="/simple/step-1.css" media="print" onload="this.media='all'">
    <noscript><link rel="stylesheet" href="/simple/step-1.css"></noscript>`
);
// Update title for step-6-alt
const step6Final = step6Replaced.replace(
  'Step 6: Contentful CDN Optimization',
  'Step 6 ALT: Contentful CDN with Deferred CSS'
).replace(
  'Step 6: Contentful CDN with WebP',
  'Step 6 ALT: Deferred CSS + WebP'
);
writeFileSync('public/simple/step-6-alt.html', step6Final);

console.log('✅ Created step-1-alt.html and step-6-alt.html with deferred CSS');

