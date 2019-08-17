import { LightningElement, api } from 'lwc';

export default class Nav extends LightningElement {
    @api currentPage;
    @api windowSize;
    navTo(evt) {
        window.location.hash = evt.target.dataset.page;
    }

    get navForMobile() {
        return this.windowSize === 'small';
    }
    get homeActive() {
        if (this.currentPage === 'home') return 'active';
        return '';
    }
    get blogActive() {
        if (this.currentPage === 'blog') return 'active';
        return '';
    }
    get cvActive() {
        if (this.currentPage === 'cv') return 'active';
        return '';
    }
}
