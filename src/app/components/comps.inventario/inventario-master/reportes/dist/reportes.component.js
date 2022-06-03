"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReportesComponent = void 0;
var core_1 = require("@angular/core");
var ReportesComponent = /** @class */ (function () {
    function ReportesComponent(_proveedorService, _productoService) {
        this._proveedorService = _proveedorService;
        this._productoService = _productoService;
        this.options = {};
    }
    ReportesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productoService.listarTodos().subscribe(function (data) {
            console.log(data);
            _this.options = {
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                        type: 'pie',
                        radius: '60%',
                        data: data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
        });
    };
    ReportesComponent = __decorate([
        core_1.Component({
            selector: 'app-reportes',
            templateUrl: './reportes.component.html',
            styleUrls: ['./reportes.component.css']
        })
    ], ReportesComponent);
    return ReportesComponent;
}());
exports.ReportesComponent = ReportesComponent;
