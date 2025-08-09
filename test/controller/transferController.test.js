//Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

//Aplicação
const app = require('../../app');

// Mock
const transferService = require('../../service/transferService')

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

        it('Usando Mocks: Quando informo remetente e destinatario inexistentes recebo 400 ', async  () => {
          // Mocar apenas a função transfer do Service
          const transferServiceMock = sinon.stub(transferService, 'transferValue') 
          transferServiceMock.throws(new Error('Usuário remetente ou destinatário não encontrado.'));

          const resposta = await request(app)
                .post('/transfers')
                .send({
                    from: "mafra",
                    to: "artrur",
                    value: 100

                });
          expect(resposta.status).to.equal(400);
          expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado.')
       
          // Reset do Mock
          sinon.restore();

        });
    });

    describe('GET /transfers', () => {
        
    });
});