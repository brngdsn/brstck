import {Component} from 'angular2/core';
import {Stck} from './stck';
import {StckEditorComponent} from './stck-editor.component';

@Component({
    selector: 'my-app',
    directives: [StckEditorComponent],
    template: `
    	<h1>{{title}}</h1>
    	<div *ngFor="#_stck of stcks" (click)=onSelect(_stck)>
    		{{_stck.sid}} on {{_stck.date}} <span *ngIf="_stck === stck">***</span>
			</div>
			<stck-editor [stck]=stck></stck-editor>
    `
})

export class AppComponent { 
	title = 'brstck';
	stcks = STCKS;
	stck: Stck;
	onSelect(stck: Stck) {
		this.stck = stck;
	}
}

var STCKS: Stck[] = [{
	sid: 0.0,
	date: new Date(),
	age: 0.0,
	weight: 0.0,
	height: 0.0
},{
	sid: 0.1,
	date: new Date(),
	age: 0.0,
	weight: 0.0,
	height: 0.0
}];