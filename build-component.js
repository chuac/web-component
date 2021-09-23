const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/hello-world/runtime.js',
        './dist/hello-world/polyfills.js',
        './dist/hello-world/main.js'
      ];

      await fs.ensureDir('se-web-elem-output');
      await concat(files, 'se-web-elem-output/se-web-elem-hello-world.js');
}
build();
