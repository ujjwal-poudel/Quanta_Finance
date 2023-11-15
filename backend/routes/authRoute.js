const {Router} = require('express');
const router = Router();

const jwt = require('jsonwebtoken');
require('dotenv').config();

router.get(
    '/api/signup'
)