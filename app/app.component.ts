import {Component} from 'angular2/core';
import {
	RouteConfig,
	ROUTER_DIRECTIVES,
	ROUTER_PROVIDERS
} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';
import {StcksService} from './stcks.service';
import {StcksComponent} from './stcks.component';
import {StckEditorComponent} from './stck-editor.component';

@RouteConfig([{
	path: '/dashboard',
	name: 'Dashboard',
	component: DashboardComponent,
	useAsDefault: true
},{
	path: '/stcks',
	name: 'Stcks',
	component: StcksComponent
},{
	path: '/stcks/:sid/editor',
	name: 'StckEditor',
	component: StckEditorComponent
}])

@Component({
	selector: 'app',
	providers: [
		ROUTER_PROVIDERS,
		StcksService
	],
	directives: [
		ROUTER_DIRECTIVES
	],
	template: `
		<h1>{{title}}</h1>
		<a [routerLink]="['Dashboard']">dashboard</a>
		<a [routerLink]="['Stcks']">stcks</a>
		<br />
		<br />
		<router-outlet></router-outlet>
	`
})

export class AppComponent {
	title = 'brstck';
	constructor(private _stcksService: StcksService) {}
}