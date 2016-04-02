import {Component, OnInit} from 'angular2/core';
import {Stck} from './stck';
import {StckEditorComponent} from './stck-editor.component';
import {StckService} from './stck.service';

@Component({
    selector: 'my-app',
    providers: [StckService],
    directives: [StckEditorComponent],
    template: `
    	<h1>{{title}}</h1>
    	<div *ngFor="#_stck of stcks" (click)=onSelect(_stck)>
    		{{_stck.sid}} on {{_stck.date}} <span *ngIf="_stck === stck">***</span>
			</div>
			<stck-editor [stck]=stck></stck-editor>
    `
})

export class AppComponent implements OnInit { 

	title = 'brstck';

	stcks: Stck[];
	stck: Stck;

	constructor(private _stckService: StckService) {}

	ngOnInit() {
		this.getStcks();
	}

	onSelect(stck: Stck) {
		this.stck = stck;
	}

	getStcks() {
		this._stckService.getStcks().then(stcks => this.stcks = stcks);
	}

}