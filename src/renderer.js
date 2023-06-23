/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 */

import './render/styles/main.scss';
import './render/styles/background.scss';
import './common/util';
import './render/app.jsx';

console.log('👋 This message is being logged by "renderer.js", included via webpack');