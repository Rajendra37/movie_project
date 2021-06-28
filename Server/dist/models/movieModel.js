"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var MovieSchema = new mongoose_1.default.Schema({
    Title: {
        type: String,
    },
    Year: {
        type: String,
    },
    Poster: {
        type: String,
    },
    imdbID: {
        type: String,
        unique: true
    },
    Genre: {
        type: String,
    }
});
var movieModel = mongoose_1.default.model("movie", MovieSchema);
exports.default = movieModel;
