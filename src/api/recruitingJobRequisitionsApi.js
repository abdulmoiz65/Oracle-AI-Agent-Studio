/**
 * Oracle HCM Recruiting Job Requisitions API
 * Endpoints for creating and fetching job requisitions
 */

const axios = require('axios');

const BASE_URL = process.env.ORACLE_HCM_BASE_URL || 'https://fa-esll-dev43-saasfademo1.ds-fa.oraclepdemos.com';
const API_VERSION = '11.13.18.05';
const RESOURCE_PATH = `/hcmRestApi/resources/${API_VERSION}/recruitingJobRequisitions`;

// Helper to get auth headers
const getAuthHeaders = () => ({
  'Authorization': `Bearer ${process.env.ORACLE_HCM_TOKEN}`,
  'Content-Type': 'application/json'
});

/**
 * Create a new job requisition (POST)
 * @param {Object} requisitionData - Job requisition details
 * @returns {Promise<Object>} Created requisition with ID
 */
async function createJobRequisition(requisitionData) {
  try {
    const response = await axios.post(
      `${BASE_URL}${RESOURCE_PATH}`,
      requisitionData,
      { headers: getAuthHeaders() }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create job requisition: ${error.message}`);
  }
}

/**
 * Get job requisition by ID (GET)
 * @param {string} requisitionId - Job requisition ID
 * @returns {Promise<Object>} Job requisition details
 */
async function getJobRequisition(requisitionId) {
  try {
    const response = await axios.get(
      `${BASE_URL}${RESOURCE_PATH}/${requisitionId}`,
      { headers: getAuthHeaders() }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch job requisition: ${error.message}`);
  }
}

/**
 * Get all job requisitions (GET)
 * @returns {Promise<Object>} List of job requisitions
 */
async function getAllJobRequisitions() {
  try {
    const response = await axios.get(
      `${BASE_URL}${RESOURCE_PATH}`,
      { headers: getAuthHeaders() }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch job requisitions: ${error.message}`);
  }
}

module.exports = {
  createJobRequisition,
  getJobRequisition,
  getAllJobRequisitions,
  BASE_URL,
  RESOURCE_PATH
};
