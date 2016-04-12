System.register(['angular2/core', 'angular2/router', './stck', './stcks.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, stck_1, stcks_service_1;
    var StckEditorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (stck_1_1) {
                stck_1 = stck_1_1;
            },
            function (stcks_service_1_1) {
                stcks_service_1 = stcks_service_1_1;
            }],
        execute: function() {
            StckEditorComponent = (function () {
                function StckEditorComponent(_stcksService, _routeParams) {
                    this._stcksService = _stcksService;
                    this._routeParams = _routeParams;
                }
                StckEditorComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var sid = +this._routeParams.get('sid');
                    this._stcksService.getStck(sid)
                        .then(function (stck) { return _this.stck = stck; });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', stck_1.Stck)
                ], StckEditorComponent.prototype, "stck", void 0);
                StckEditorComponent = __decorate([
                    core_1.Component({
                        selector: 'stck-editor',
                        template: "\n\t\t<span *ngIf=!stck>Acquiring data...</span>\n\t\t<div *ngIf=stck>\n    \t<h2>{{stck.sid}} on {{stck.date}}</h2>\n\t\t\t<h4>profile</h4>\n\n\t\t\tage: <input [(ngModel)]=stck.age type=number placeholder=0.0 /><br/>\n\t\t\tweight: <input [(ngModel)]=stck.weight type=number placeholder=0.0 />k/lb<br/>\n\t\t\theight: <input [(ngModel)]=stck.height type=number placeholder=0.0 />in/cm<br/>\n\n\t\t\t<h4>spec</h4>\n\n\t\t\texercise: <input type=text placeholder=Barbell /><br/>\n\t\t\tmass: <input type=number placeholder=0.0 /><br/>\n\t\t\treps: <input type=number placeholder=0 /><br/>\n\t\t\tduration: <input type=number placeholder=0.0 />seconds<br/>\n\t\t\tset: <input type=number placeholder=0 /><br/>\n\n\t\t\t<h4>meta</h4>\n\n\t\t\tcircuit: <input type=number placeholder=0 /><br/>\n\t\t\ttags: <input type=text placeholder=Blue /><br/>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [stcks_service_1.StcksService, router_1.RouteParams])
                ], StckEditorComponent);
                return StckEditorComponent;
            }());
            exports_1("StckEditorComponent", StckEditorComponent);
        }
    }
});
//# sourceMappingURL=stck-editor.component.js.map