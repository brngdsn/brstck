System.register(['angular2/core', 'angular2/router', './stcks.service'], function(exports_1, context_1) {
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
    var core_1, router_1, stcks_service_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (stcks_service_1_1) {
                stcks_service_1 = stcks_service_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_router, _stcksService) {
                    this._router = _router;
                    this._stcksService = _stcksService;
                    this.stcks = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._stcksService.getStcks().then(function (stcks) { return _this.stcks = stcks.slice(1, 4); });
                };
                DashboardComponent.prototype.gotoStckEditor = function (stck) {
                    var link = ['StckEditor', { sid: stck.sid }];
                    this._router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        template: "\n\t\t<h3>dashboard</h3>\n\t\t<span>top three: </span>\n\t\t<br /><br />\n  \t<span *ngIf=!stcks.length>Acquiring data...</span>\n  \t<div *ngFor=\"#_stck of stcks\" (click)=gotoStckEditor(_stck)>\n  \t\t{{_stck.sid}} on {{_stck.date}} <span *ngIf=\"_stck === stck\">***</span>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, stcks_service_1.StcksService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map