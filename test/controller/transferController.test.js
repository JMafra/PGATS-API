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

     /*   it('Usando Mocks: Quando informo valores validos eu tenho sucesso com 201 CREATED ', async  () => {
          // Mocar apenas a função transfer do Service
          const transferServiceMock = sinon.stub(transferService, 'transferValue') 
          transferServiceMock.returns({
            success: true,
            transfer: {
              from: "mafra",
              to: "arthur",
              value: 100,
              date: new Date().toISOString()
            }
          });

          const resposta = await request(app)
            .post('/transfers')
            .send({
              from: "mafra",
              to: "arthur",
              value: 100
            });
          expect(resposta.status).to.equal(201);
          expect(resposta.body).to.have.property('success', true);
          expect(resposta.body).to.have.property('transfer');
          expect(resposta.body.transfer).to.include({
            from: 'mafra',
            to: 'arthur',
            value: 100
          });
          // Reset do Mock
          sinon.restore();
        }); */
    });

    
});