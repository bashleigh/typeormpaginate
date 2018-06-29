import {createConnection, Connection} from "typeorm";
import { expect } from 'chai';
import 'mocha';
import Paginate, {
  PaginationOptions, 
  PaginationInterface,
};

const testingConnections = async (): Promise<Connection> => {
  return await createConnection("mysql");
}

let connection;

async () => {
  connection = await testingConnections();
};

describe('Should return a pagination object', async () => {
  
  //TODO create repository

  //TODO create entities
  
  //TODO results 
  const results = await Paginate(repository, {
    page: 1,
    limit: 10,
  });

  expect(results).to.instanceof(PaginationInterface);

});

describe('Should return last 5 items of 25', async () => {
  //TODO check that data key contains 5 objects
});


describe('Should return last 20 items', async () => {
  //TODO check that data key contains 20 objects
});


describe('Pages key should equal 5', async () => {
  //TODO check that pages equals 5 when limit is 5
});