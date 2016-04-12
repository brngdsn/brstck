System.register(['./mock-stcks', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_stcks_1, core_1;
    var StcksService;
    return {
        setters:[
            function (mock_stcks_1_1) {
                mock_stcks_1 = mock_stcks_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StcksService = (function () {
                function StcksService() {
                }
                StcksService.prototype.getStcks = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_stcks_1.STCKS); }, 1000);
                    });
                };
                StcksService.prototype.getStck = function (sid) {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_stcks_1.STCKS.filter(function (stck) { return stck.sid === sid; })[0]); }, 1000);
                    });
                };
                StcksService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], StcksService);
                return StcksService;
            }());
            exports_1("StcksService", StcksService);
        }
    }
});
//# sourceMappingURL=stcks.service.js.map