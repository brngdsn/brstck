import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
  provide(APP_BASE_HREF, {useValue: '/'})
]);
