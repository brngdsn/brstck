import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Stck} from './stck';
import {StcksService} from './stcks.service';

@Component({
	selector: 'dashboard',
	template: `
		<h3>dashboard</h3>
		<span>top three: </span>
		<br /><br />
  	<span *ngIf=!stcks.length>Acquiring data...</span>
  	<div *ngFor="#_stck of stcks" (click)=gotoStckEditor(_stck)>
  		{{_stck.sid}} on {{_stck.date}} <span *ngIf="_stck === stck">***</span>
		</div>
	`
})

export class DashboardComponent implements OnInit {

	stcks: Stck[] = [];

	constructor(
		private _router: Router,
		private _stcksService: StcksService
	) {}

	ngOnInit() {
		this._stcksService.getStcks().then(stcks => this.stcks = stcks.slice(1,4));
	}

	gotoStckEditor(stck: Stck) {
		let link = ['StckEditor', {sid:stck.sid}];
		this._router.navigate(link);
	}
}