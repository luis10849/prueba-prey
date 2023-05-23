import request from "supertest";

import app from "../../src/app";
import { IInstruction } from "../../src/models/Instruction";

describe("POST /api/instruction/send", () => {
    it('should return 201 & valid response to authorization with Credencials request', async () => {
        const payload: IInstruction = {action: 'alert', options: { alert_message: "Informacion: " } };
        const res = await request(app)
                    .post('/api/instruction/send')
                    .auth("1234","1234")
                    .send(payload)
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
        expect(res.body).toMatchObject({'message': 'Instruction sent successfully'})
    
    })

    it('should return 401 & valid eror response to invalid authorization credencials', async () => {
        const payload: IInstruction = {action: 'alert', options: { alert_message: "Informacion: " } };
        const res = await request(app)
                    .post('/api/instruction/send')
                    .auth("12345","12345")
                    .send(payload)
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
        expect(res.body).toMatchObject({message: 'Invalid Authentication Credentials'})    
    })

    it('should return 401 & valid eror response if authorization header field is missed', async () => {
        const payload: IInstruction = {action: 'alert', options: { alert_message: "Informacion: " } };
        const res = await request(app)
                    .post('/api/instruction/send')
                    .send(payload)
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
        expect(res.body).toMatchObject({message: "Missing Authorization Header"})    
    })

    it('should return 401 & invalid body resquest', async () => {
        const payload = {actions: 'alert', options: { alert_message: "Informacion: " } };
        await request(app)
                    .post('/api/instruction/send')
                    .send(payload)
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
                    .expect(401)
    })
});