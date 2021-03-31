"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./startup/database");
const logging_1 = require("./startup/logging");
const settings_1 = require("./startup/settings");
// Startup logging
logging_1.startupLogging();
// Config dotenv
dotenv_1.default.config();
// Startup setting
settings_1.startupSettings();
// Connect to database
database_1.startupDB();
const app = express_1.default();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
