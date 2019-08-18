import { LightningElement, track } from 'lwc';

const PAGES = ['home', 'blog', 'cv'];

const addEvent = function(object, type, callback) {
    if (object == null || typeof object == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent('on' + type, callback);
    } else {
        object['on' + type] = callback;
    }
};

export default class App extends LightningElement {
    @track currentPage = 'home';
    @track windowSize;

    connectedCallback() {
        if (window.innerWidth > 1200) this.windowSize = 'large';
        else if (window.innerWidth > 600) this.windowSize = 'medium';
        else this.windowSize = 'small';

        if (!window.location.hash) window.location.hash = 'home';
        this.handleHash();

        window.onhashchange = () => {
            this.handleHash();
        };

        addEvent(window, 'resize', () => {
            const windowSize = this.windowSize;
            if (window.innerWidth < 601 && windowSize !== 'small') {
                this.windowSize = 'small';
            } else if (window.innerWidth > 600 && windowSize !== 'medium') {
                this.windowSize = 'medium';
            } else if (window.innerWidth > 1200 && windowSize !== 'large') {
                this.windowSize = 'large';
            }
        });
    }

    handleHash() {
        if (window.location.hash.length > 1) {
            const param = window.location.hash.substring(1);
            if (this.allowedPage(param)) {
                this.currentPage = param;
            } else {
                window.location.hash = 'home';
            }
        }
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
