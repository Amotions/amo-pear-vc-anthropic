const { execSync } = require('child_process');
const withRepoDir = require('./withRepoDir');

/**
 * Executes Claude Code in a specific repository with a provided query
 * @param {string} repoName - The name of the repository in the tmp directory
 * @param {string} query - The query to pass to Claude Code
 * @returns {string} - The output from Claude Code
 */
async function queryClaude(repoName, query) {
  return withRepoDir(repoName, () => {
    try {
      const output = execSync(`npx claude -p "${query}"`).toString();
      return output;
    } catch (error) {
      console.error('Error executing Claude Code:', error.message);
      throw error;
    }
  });
}

module.exports = queryClaude;
