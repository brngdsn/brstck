import {STCKS} from './mock-stcks';
import {Injectable} from 'angular2/core';
import {Stck} from './stck';

@Injectable()
export class StckService {

	getStcks() {
		//return Promise.resolve(STCKS);
		return new Promise<Stck[]>(resolve => 
			setTimeout(() => resolve(STCKS), 1000)
		);
	}

}