import { API_BASE_URL } from '../config';
import axios from 'axios';

export const getSkills = async() =>
  await axios({
    method: 'get',
    url: `${API_BASE_URL}/api/skills`,
    headers: {
      'Content-Type': 'application/json'
    }
  });

export const getProjects = async() =>
  await axios({
    method: 'get',
    url: `${API_BASE_URL}/api/projects`,
    headers: {
      'Content-Type': 'application/json'
    }
  });

export const getAbout = async() =>
  await axios({
    method: 'get',
    url: `${API_BASE_URL}/api/about`,
    headers: {
      'Content-Type': 'application/json'
    }
  });
