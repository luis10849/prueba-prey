"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
describe("POST /api/instruction/send", () => {
    it('should return 201 & valid response to authorization with Credencials request', () => __awaiter(void 0, void 0, void 0, function* () {
        const payload = { action: 'alert', options: { alert_message: "Informacion: " } };
        const res = yield (0, supertest_1.default)(app_1.default)
            .post('/api/instruction/send')
            .auth("1234", "1234")
            .send(payload)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        console.log(res.body);
        expect(res.body).toMatchObject({ 'message': 'Instruction sent successfully' });
    }));
});
