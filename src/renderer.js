/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 */
import './render/styles/element.scss';
import './render/styles/layout.scss';
import './render/styles/text.scss';
import './render/styles/background.scss';

import './common/util';
import './render/app';

console.log('👋 This message is being logged by "renderer.js", included via webpack');