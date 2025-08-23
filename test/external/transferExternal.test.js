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
            const resposta = await request('http://localhost:3000')
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
    
});