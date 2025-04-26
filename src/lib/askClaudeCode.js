const { execSync } = require('child_process');

const queryClaude = require('./scripts/queryClaude');
const exampleRepo = require("./scripts/exampleRepo");

async function askClaudeCode(query) {
  return queryClaude(exampleRepo.repo, query);
}

module.exports = askClaudeCode;
