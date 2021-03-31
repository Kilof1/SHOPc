"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startupDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function startupDB() {
    const { MONGO_USER } = process.env;
    const { MONGO_PASSWORD } = process.env;
    const { MONGO_DB } = process.env;
    const url = MONGO_USER
        ? `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cc-forum.4k1nv.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`
        : 'mongodb://localhost/playground';
    mongoose_1.default
        .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => 'Connected to MongoDB')
        .catch((e) => console.error(e));
}
exports.startupDB = startupDB;
