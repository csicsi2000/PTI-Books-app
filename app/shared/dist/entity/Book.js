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
exports.Book = void 0;
var BuyLink_1 = require("./BuyLink");
var typeorm_1 = require("typeorm");
var Review_1 = require("./Review");
var BookList_1 = require("./BookList");
var Book = exports.Book = /** @class */ (function () {
    function Book() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Book.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return BookList_1.BookList; }, function (bookList) { return bookList.books; }),
        __metadata("design:type", Array)
    ], Book.prototype, "book_lists", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Review_1.Review; }, function (review) { return review.book; }),
        __metadata("design:type", Array)
    ], Book.prototype, "reviews", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return BuyLink_1.BuyLink; }, function (buyLink) { return buyLink.book; }),
        __metadata("design:type", Array)
    ], Book.prototype, "buy_links", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "age_group", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "amazon_product_url", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "article_chapter_link", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "author", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "book_image", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Book.prototype, "book_image_width", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Book.prototype, "book_image_height", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "book_review_link", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "contributor", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "contributor_note", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Book.prototype, "created_date", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "first_chapter_link", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "price", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "primary_isbn10", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "primary_isbn13", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "book_uri", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "publisher", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Book.prototype, "rank", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Book.prototype, "rank_last_week", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "sunday_review_link", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Book.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Book.prototype, "updated_date", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Book.prototype, "weeks_on_list", void 0);
    Book = __decorate([
        (0, typeorm_1.Entity)()
    ], Book);
    return Book;
}());
//# sourceMappingURL=Book.js.map