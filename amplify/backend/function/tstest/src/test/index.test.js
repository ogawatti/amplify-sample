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
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./../index");
describe('TSTest', () => {
    describe('handler', () => {
        const event = {
            key1: 'test1',
            key2: 'test2',
            key3: 'test3',
        };
        it('returns statusCode and body', () => __awaiter(void 0, void 0, void 0, function* () {
            const spy = jest.spyOn(console, 'log').mockImplementation();
            const { statusCode, body } = yield (0, index_1.handler)(event);
            const data = JSON.parse(body);
            expect(statusCode).toBe(200);
            expect(data).toBe('Hello from Lambda!');
            expect(spy).toHaveBeenNthCalledWith(1, expect.stringMatching(/^EVENT: /));
        }));
    });
});
