/// <reference path="typings/tsd.d.ts" />
System.register(["classnames"], function(exports_1) {
    "use strict";
    var classNames;
    var Greeter, el, greeter;
    return {
        setters:[
            function (classNames_1) {
                classNames = classNames_1;
            }],
        execute: function() {
            Greeter = (function () {
                function Greeter(element) {
                    this.element = element;
                    this.p1 = document.createElement('p');
                    this.element.appendChild(this.p1);
                    this.p2 = document.createElement('p');
                    this.element.appendChild(this.p2);
                    this.p3 = document.createElement('p');
                    this.element.appendChild(this.p3);
                    this.tryAllowSyntheticDefaultImports = true;
                    if (this.tryAllowSyntheticDefaultImports) {
                        try {
                            this.classNamesResult = classNames(["allowSyntheticDefaultImports", "is", "here"]);
                        }
                        catch (e) {
                            this.classNamesResult = classNames.default(["Error:", e.message.split(" ")]);
                        }
                    }
                    else {
                        this.classNamesResult = classNames.default(["works", "but", "explicit", "default", "reference", "required"]);
                    }
                }
                Greeter.prototype.start = function () {
                    this.p1.innerHTML = "The classNames result with: ";
                    this.p2.innerHTML = "tryAllowSyntheticDefaultImports = [" + this.tryAllowSyntheticDefaultImports + "] ";
                    this.p3.innerHTML = "is: [" + this.classNamesResult + "]";
                };
                return Greeter;
            }());
            exports_1("Greeter", Greeter);
            el = document.getElementById('content');
            greeter = new Greeter(el);
            greeter.start();
        }
    }
});
//# sourceMappingURL=app.js.map