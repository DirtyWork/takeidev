import { LightningElement, track } from 'lwc';

const PAGES = ['home', 'blog', 'cv'];

export default class App extends LightningElement {
    @track currentPage = 'home';

    connectedCallback() {
        if (!window.location.hash) window.location.hash = 'home';
        window.onhashchange = () => {
            if (window.location.hash.length > 1) {
                const param = window.location.hash.substring(1);
                if (this.allowedPage(param)) {
                    this.currentPage = param;
                } else {
                    window.location.hash = 'home';
                }
            }
        };
    }

    allowedPage(param) {
        return PAGES.includes(param);
    }

    get isHome() {
        return this.currentPage === 'home';
    }
    get isBlog() {
        return this.currentPage === 'blog';
    }
    get isCv() {
        return this.currentPage === 'cv';
    }
}
