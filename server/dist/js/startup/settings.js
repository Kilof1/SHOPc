"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startupSettings = void 0;
function startupSettings() {
    console.log(process.env.JWT_PRIVATE_KEY);
    const jwtPritavetKey = process.env.JWT_PRIVATE_KEY;
    if (!jwtPritavetKey) {
        throw new Error('JWT Private Key is not defined');
    }
}
exports.startupSettings = startupSettings;
