import axios from 'axios';
import {callsUrl} from './constants'
//const axios = require('axios'); // legacy way

// Make a request for a user with a given ID
export const getCalls = axios.get(callsUrl)
  