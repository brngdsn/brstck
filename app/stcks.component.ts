import {Component, OnInit} from 'angular2/core';
import {Stck} from './stck';
import {StckEditorComponent} from './stck-editor.component';
import {StcksService} from './stcks.service';

@Component({
    selector: 'stcks',
    directives: [StckEditorComponent],
    template: `
    	<span *ngIf=!stcks>Acquiring data...</span>
    	<div *ngFor="#_stck of stcks" (click)=onSelect(_stck)>
    		{{_stck.sid}} on {{_stck.date}} <span *ngIf="_stck === stck">***</span>
			</div>
			<stck-editor [stck]=stck></stck-editor>
    `
})

export class StcksComponent implements OnInit { 

	stcks: Stck[];
	stck: Stck;

	constructor(private _stcksService: StcksService) {}

	ngOnInit() {
		this.getStcks();
	}

	onSelect(stck: Stck) {
		this.stck = stck;
	}

	getStcks() {
		this._stcksService.getStcks().then(stcks => this.stcks = stcks);
	}

}