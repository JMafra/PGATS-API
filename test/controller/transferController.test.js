const request = require('supertest');
const sinon = require('sinon');
const app = require('../../app');
const { expect } = require('chai');

describe('Transfer Controller', () => {
    describe('POST /transfers', () => {
        it('Quando informo remetente e destinatario inexistentes recebo 400 ', async  () => {
            const resposta = await request(app)
                .post('/transfers')
                .send({
                    from: "mafra",
                    to: "artrur",
                    value: 100

                });
          expect(resposta.status).to.equal(400);
          expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado.')
        });
    });

    describe('GET /transfers', () => {
        
    });
});