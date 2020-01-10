const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/ng-shared-components/runtime-es2015.js',
        './dist/ng-shared-components/polyfills-es2015.js',
        './dist/ng-shared-components/vendor-es2015.js',
        './dist/ng-shared-components/scripts.js',
        './dist/ng-shared-components/main-es2015.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/shared-components.js');
    // await fs.copyFile('./dist/ng-shared-components/styles.css', 'elements/styles.css')
    // await fs.copy('./dist/ng-shared-components/assets/', 'elements/assets/' )

})()
