import { LightningElement, api, track } from 'lwc';

export default class CvSection extends LightningElement {
    @api header = '';
    @api openOnStart = false;
    @track svgURL = '';
    @track isOpen = false;

    connectedCallback() {
        this.isOpen = this.openOnStart;
        this.setSVG();
    }

    toggleContainer() {
        this.isOpen = !this.isOpen;
        this.setSVG();
    }

    setSVG() {
        if (!this.isOpen) this.svgURL = '/resources/icons/plus.svg#plus';
        else this.svgURL = '/resources/icons/minus.svg#minus';
    }
}
