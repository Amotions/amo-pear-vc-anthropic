const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

async function cloneRepo(githubUsername, repoName) {
  const projectRoot = process.cwd();

  const tmpDirPath = path.join(projectRoot, "tmp");

  if (!fs.existsSync(tmpDirPath)) {
    fs.mkdirSync(path.join(projectRoot, "tmp"));
    console.log(`Created ${tmpDirPath} to store repo`)
  }

  const repoPath = path.join(tmpDirPath, repoName);

  if (!fs.existsSync(repoPath)) {
    const repoUrl = `https://github.com/${githubUsername}/${repoName}.git`;

    console.log(`Cloning ${repoUrl} to ${repoPath}...`);
    try {
      execSync(`git clone ${repoUrl} ${repoPath}`, { stdio: 'inherit' });
      console.log(`Successfully cloned ${repoName} repository`);
    } catch (error) {
      console.error(`Failed to clone repository: ${error.message}`);
      throw error;
    }
  }
}

module.exports = cloneRepo;
