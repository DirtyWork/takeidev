import { buildCustomElementConstructor } from 'lwc';
import XyzApp from 'xyz/app';

customElements.define('xyz-app', buildCustomElementConstructor(XyzApp));
