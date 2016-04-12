System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
            describe('Stck', function () {
                it('has sid', function () {
                    var stck = { sid: 0, date: new Date(), age: 0, weight: 0, height: 0 };
                    expect(stck.sid).toEqual(0);
                });
            });
        }
    }
});
//# sourceMappingURL=stck.spec.js.map