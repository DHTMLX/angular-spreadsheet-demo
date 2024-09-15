import { Spreadsheet } from "@dhx/trial-spreadsheet";
import { getData } from "./data";
import {
    Component,
    ElementRef,
    OnInit,
    OnDestroy,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'spreadsheet',
    styleUrls: ['./spreadsheet.component.css'],
    template: `<div #container class="widget"></div>`
})

export class SpreadsheetComponent implements OnInit, OnDestroy {
    @ViewChild('container', { static: true }) spreadsheet_container!: ElementRef;

    private _spreadsheet!: Spreadsheet;

    ngOnInit() {
        let data = getData();
        this._spreadsheet = new Spreadsheet( this.spreadsheet_container.nativeElement, {});

        this._spreadsheet.parse(data);
    }

    ngOnDestroy() {
        this._spreadsheet.destructor();
    }
}
