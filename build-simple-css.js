import { build } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs/promises';
import { gzipSync, brotliCompressSync, constants } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create temporary directory
const tempDir = resolve(__dirname, '.temp-build');
await fs.mkdir(tempDir, { recursive: true });

// Copy our actual HTML to the temp dir so Tailwind can scan it
const actualHTML = await fs.readFile(resolve(__dirname, 'public/simple/step-1.html'), 'utf-8');
await fs.writeFile(resolve(tempDir, 'step-1.html'), actualHTML);

// Create a CSS input file
const cssInput = `@import "tailwindcss";`;
await fs.writeFile(resolve(tempDir, 'input.css'), cssInput);

// Create an HTML file that imports the CSS
const tempHTML = `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="./input.css">
</head>
<body></body>
</html>`;

await fs.writeFile(resolve(tempDir, 'index.html'), tempHTML);

// Build
await build({
  root: tempDir,
  plugins: [
    tailwindcss({
      content: [resolve(tempDir, '**/*.html')]
    })
  ],
  build: {
    outDir: resolve(__dirname, '.temp-output'),
    rollupOptions: {
      input: resolve(tempDir, 'index.html'),
    }
  }
});

// Extract and copy the generated CSS
const outputDir = resolve(__dirname, '.temp-output');
const assetsDir = resolve(outputDir, 'assets');
const files = await fs.readdir(assetsDir);
const cssFile = files.find(f => f.endsWith('.css'));

if (cssFile) {
  const cssContent = await fs.readFile(resolve(assetsDir, cssFile), 'utf-8');
  const cssBuffer = Buffer.from(cssContent, 'utf-8');
  const outputPath = resolve(__dirname, 'public/simple/step-1.css');
  
  // Write the minified CSS
  await fs.writeFile(outputPath, cssContent);
  
  // Create gzip compressed version
  const gzipped = gzipSync(cssBuffer, { level: 9 });
  await fs.writeFile(outputPath + '.gz', gzipped);
  
  // Create brotli compressed version (even better compression)
  const brotli = brotliCompressSync(cssBuffer, {
    params: {
      [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MAX_QUALITY
    }
  });
  await fs.writeFile(outputPath + '.br', brotli);
  
  console.log('✅ Generated step-1.css');
  console.log(`   Original: ${cssContent.length.toLocaleString()} bytes`);
  console.log(`   Gzipped:  ${gzipped.length.toLocaleString()} bytes (${((gzipped.length / cssContent.length) * 100).toFixed(1)}%)`);
  console.log(`   Brotli:   ${brotli.length.toLocaleString()} bytes (${((brotli.length / cssContent.length) * 100).toFixed(1)}%)`);
}

// Cleanup
await fs.rm(tempDir, { recursive: true, force: true });
await fs.rm(outputDir, { recursive: true, force: true });

