"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
function runtime(app) {
    app.use(express_1.default.static("public_html", { extensions: ["html"] }));
    app.get("*", (_req, res) => res.sendFile(path_1.default.resolve("./public_html/index.html")));
}
exports.default = runtime;
//# sourceMappingURL=static.js.map