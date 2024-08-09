"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const getImg_1 = __importDefault(require("./routes/getImg"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/get-icon', getImg_1.default);
app.get('/', (req, res) => {
    return res.send('server work!');
});
app.listen(3000, () => {
    console.log('http://localhost:3000');
});
//# sourceMappingURL=server.js.map