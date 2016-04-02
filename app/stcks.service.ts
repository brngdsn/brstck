import {STCKS} from './mock-stcks';
import {Injectable} from 'angular2/core';
import {Stck} from './stck';

@Injectable()

export class StcksService {

	getStcks() {
		return new Promise<Stck[]>(resolve => 
			setTimeout(() => resolve(STCKS), 1000)
		);
	}

	getStck(sid: number) {
		return new Promise<Stck>(resolve => 
			setTimeout(() => resolve(STCKS.filter(stck => stck.sid === sid)[0]), 1000)
		);
	}

}