"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
const imageFolderPath = path_1.default.join(__dirname, '../public/images');
router.get('/:name', (req, res) => {
    const { name } = req.params;
    const imagePath = path_1.default.join(imageFolderPath, `${name.toLowerCase()}.png`);
    res.sendFile(imagePath, err => {
        if (err) {
            res.status(404).json({ error: 'Изображение не найдено' });
        }
    });
});
exports.default = router;
//# sourceMappingURL=getImg.js.map