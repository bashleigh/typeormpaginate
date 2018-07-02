import {createConnection, Connection} from "typeorm";
import { expect } from 'chai';
import 'mocha';
import {
  Test,
} from './entities';
import Paginate, {
  PaginationOptions, 
  PaginationInterface,
} from './../src';

const testingConnections = async (): Promise<Connection> => {
  return await createConnection("mysql");
}

//TODO do schema

const setupSchema = async (connection: Connection) => {
  await connection.createQueryRunner().createSchema('./entities');
}

//TODO create entities 

describe('Should return a pagination object', async () => {
  
  const connection = await testingConnections();
  await setupSchema(connection);

  //TODO create repository

  const repository = connection.getRepository(Test);

  //TODO create entities

  for (let i = 25; i >= 0; i--) {
    await repository.save(repository.create({
      test: `test_${i}`,
    }));
  }
  
  //TODO results 
  const results = await Paginate(repository, {
    page: 1,
    limit: 10,
  });

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