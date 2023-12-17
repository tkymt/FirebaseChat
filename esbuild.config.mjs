import { build } from 'esbuild';

const result = build({
  entryPoints: ['src/index.js', 'src/chat.js'],
  bundle: true,
  outdir: 'dist',
  minify: true,
  sourcemap: 'linked',
});

import { copyFile } from 'node:fs';

copyFile('src/index.html', 'dist/index.html', (err) => {
  if (err) throw err;
  console.log('src/index.html was copied to dist/index.html');
});

copyFile('src/404.html', 'dist/404.html', (err) => {
  if (err) throw err;
  console.log('src/404.html was copied to dist/404.html');
});