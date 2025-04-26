/**
 * Executes a callback function within the repository directory and restores the original working directory
 * @param {string} repoName - The name of the repository in the tmp directory
 * @param {Function} callback - The function to execute in the repository directory
 * @returns {Promise<any>} - The result of the callback function
 */
async function withRepoDir(repoName, callback) {
  const initialCwd = process.cwd();
  const repoPath = `${initialCwd}/tmp/${repoName}`;

  try {
    process.chdir(repoPath);
    const result = await callback();
    return result;
  } finally {
    process.chdir(initialCwd);
  }
}

module.exports = withRepoDir;
