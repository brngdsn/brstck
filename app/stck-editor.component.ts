import {Component, Input} from 'angular2/core';
import {Stck} from './stck';

@Component({
	selector: 'stck-editor',
	template: `
		<div *ngIf=stck>
    	<h2>{{stck.sid}} on {{stck.date}}</h2>
			<h4>profile</h4>

			age: <input [(ngModel)]=stck.age type=number placeholder=0.0 /><br/>
			weight: <input [(ngModel)]=stck.weight type=number placeholder=0.0 />k/lb<br/>
			height: <input [(ngModel)]=stck.height type=number placeholder=0.0 />in/cm<br/>

			<h4>spec</h4>

			exercise: <input type=text placeholder=Barbell /><br/>
			mass: <input type=number placeholder=0.0 /><br/>
			reps: <input type=number placeholder=0 /><br/>
			duration: <input type=number placeholder=0.0 />seconds<br/>
			set: <input type=number placeholder=0 /><br/>

			<h4>meta</h4>

			circuit: <input type=number placeholder=0 /><br/>
			tags: <input type=text placeholder=Blue /><br/>
		</div>
	`
})

export class StckEditorComponent {

	@Input() stck: Stck;

}