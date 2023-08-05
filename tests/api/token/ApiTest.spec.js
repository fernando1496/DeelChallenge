const { test, expect, request } = require('@playwright/test');
require('dotenv').config();
import { allure } from 'allure-playwright';
import * as variables from './data/jsonData.js';



let apiContext;

//Setting conf for all the tests before the excution
test.beforeAll(async ({}) => {
  //Set the headers for all the request to do, the auhtorization is done here



  apiContext = await request.newContext({
    //Get token here
    //baseURL: process.env.ENV_URL,
    extraHTTPHeaders: {
      //Authorization: 'Bearer ' + process.env.ZEAMZTER_API_TOKEN,
      'Content-Type': 'application/json'
    }
  });
});

//Setting conf to do after the excution of all the tests
test.afterAll(async ({}) => {
  //Dispose all responses
  await apiContext.dispose();
});


test.describe('Test suite name', () => {
  
  test('Test api name ', async ({}) => {
    allure.description('Allure desc');
    
    //Hit the endpoint and wait for the request
    
    const response = await apiContext.post(process.env.APIURL + '/clients/session', { data: variables.validUser });

    //Obtain response body
    const responseBody = JSON.parse(await response.text());

    //Assertion of the status code directly from the server
    expect(response.status()).toEqual(200);

    //Assertion of the status code on the response
    console.log(responseBody.access)
    //expect(responseBody.access).toEqual(201);

  });
});
