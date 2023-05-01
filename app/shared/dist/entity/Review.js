"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Book_1 = require("./Book");
var Review = exports.Review = /** @class */ (function () {
    function Review() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Review.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }),
        (0, typeorm_1.JoinColumn)({ name: "userId" }),
        __metadata("design:type", User_1.User)
    ], Review.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Book_1.Book; }),
        (0, typeorm_1.JoinColumn)({ name: "bookId" }),
        __metadata("design:type", Book_1.Book)
    ], Review.prototype, "book", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Review.prototype, "comment", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Review.prototype, "rating", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Review.prototype, "date", void 0);
    Review = __decorate([
        (0, typeorm_1.Entity)()
    ], Review);
    return Review;
}());
//# sourceMappingURL=Review.js.map