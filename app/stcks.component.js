System.register(['angular2/core', './stck-editor.component', './stcks.service'], function(exports_1, context_1) {
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
    var core_1, stck_editor_component_1, stcks_service_1;
    var StcksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (stck_editor_component_1_1) {
                stck_editor_component_1 = stck_editor_component_1_1;
            },
            function (stcks_service_1_1) {
                stcks_service_1 = stcks_service_1_1;
            }],
        execute: function() {
            StcksComponent = (function () {
                function StcksComponent(_stcksService) {
                    this._stcksService = _stcksService;
                }
                StcksComponent.prototype.ngOnInit = function () {
                    this.getStcks();
                };
                StcksComponent.prototype.onSelect = function (stck) {
                    this.stck = stck;
                };
                StcksComponent.prototype.getStcks = function () {
                    var _this = this;
                    this._stcksService.getStcks().then(function (stcks) { return _this.stcks = stcks; });
                };
                StcksComponent = __decorate([
                    core_1.Component({
                        selector: 'stcks',
                        directives: [stck_editor_component_1.StckEditorComponent],
                        template: "\n    \t<span *ngIf=!stcks>Acquiring data...</span>\n    \t<div *ngFor=\"#_stck of stcks\" (click)=onSelect(_stck)>\n    \t\t{{_stck.sid}} on {{_stck.date}} <span *ngIf=\"_stck === stck\">***</span>\n\t\t\t</div>\n\t\t\t<stck-editor [stck]=stck></stck-editor>\n    "
                    }), 
                    __metadata('design:paramtypes', [stcks_service_1.StcksService])
                ], StcksComponent);
                return StcksComponent;
            }());
            exports_1("StcksComponent", StcksComponent);
        }
    }
});
//# sourceMappingURL=stcks.component.js.map