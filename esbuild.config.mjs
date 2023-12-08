import * as esbuild from 'esbuild';

const result = await esbuild.build({
  entryPoints: ['src/index.js','src/chat.js'],
  bundle: true,
  outdir: 'dist',
  minify: true,
  sourcemap: 'linked',
});
console.log(result);
