import {Component} from 'angular2/core';
import {
	RouteConfig,
	ROUTER_DIRECTIVES,
	ROUTER_PROVIDERS
} from 'angular2/router';
import {StcksService} from './stcks.service';
import {StcksComponent} from './stcks.component';

@RouteConfig([{
	path: '/stcks',
	name: 'Stcks',
	component: StcksComponent
}])

@Component({
	selector: 'app',
	providers: [
		ROUTER_PROVIDERS,
		StcksService],
	directives: [
		ROUTER_DIRECTIVES,
		StcksComponent
	],
	template: `
		<h1>{{title}}</h1>
		<a [routerLink]="['Stcks']">stcks</a>
		<router-outlet></router-outlet>
	`
})

export class AppComponent {
	title = 'brstck';
	constructor(private _stcksService: StcksService) {}
}