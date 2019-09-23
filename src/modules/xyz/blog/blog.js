import { LightningElement } from 'lwc';

export default class Blog extends LightningElement {
    connectedCallback() {
        window.location.replace('http://blog.takei.dev');
    }
}
