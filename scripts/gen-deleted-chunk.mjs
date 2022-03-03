
import fs from 'fs-extra';
import { fileURLToPath, URL } from 'node:url';
import dedent from 'dedent';
import ps from 'path';

(async () => {
    const outputRoot = fileURLToPath(new URL('../src/delete-accepted-module', import.meta.url).href);

    await fs.ensureDir(outputRoot);
    await fs.emptyDir(outputRoot);

    let importerSource = '';
    let dependencySource = '';
    const genDep = process.argv.includes('+');

    importerSource = dedent`
        import { notifyExecution, notifyDispose, notifyInvokeSelfAcceptErrorHandler } from '../util';
        ${ genDep ? `import './dependency';` : ''}

        notifyExecution(import.meta.url);
        import.meta.webpackHot.dispose(() => notifyDispose(import.meta.url));

        import.meta.webpackHot.accept((err) => {
            notifyInvokeSelfAcceptErrorHandler(import.meta.url, err);
        });
        `;

    if (genDep) {
        dependencySource = dedent`
            import { notifyExecution, notifyDispose } from '../util';

            notifyExecution(import.meta.url);
            import.meta.webpackHot.dispose(() => notifyDispose(import.meta.url));
            `;
    }

    await fs.outputFile(ps.join(outputRoot, 'importer.js'), importerSource);

    if (dependencySource) {
        await fs.outputFile(ps.join(outputRoot, 'dependency.js'), dependencySource);
    }
})();