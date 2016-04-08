import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {APP_BASE_HREF} from 'angular2/router';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
  provide(APP_BASE_HREF, {useValue: '/'})
]);
