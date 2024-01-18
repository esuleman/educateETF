import express from 'express';
import * as etfEngine from './engines/etfEngine.mjs';
import * as articleEngine from './engines/articleEngine.mjs';

const router = express.Router();

function sendResponse(responseObject, responseData) {
    responseObject.status(responseData.code).send(JSON.stringify(responseData.response));
}

export default router;