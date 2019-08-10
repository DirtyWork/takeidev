import { LightningElement } from 'lwc';

export default class Nav extends LightningElement {
    navTo(evt){
        // const url = new URL(window.location.href);
        // url.searchParams.set('page', evt.target.dataset.page);
        // this.dispatchEvent(new CustomEvent('nav',{detail : evt.target.dataset.page}));
        // window.history.pushState('', '', url);
        window.location.hash = evt.target.dataset.page;
    }
}
