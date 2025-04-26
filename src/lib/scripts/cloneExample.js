const fs = require("fs");
const path = require("path");

const cloneRepo = require("./cloneRepo");
const exampleRepo = require("./exampleRepo");

cloneRepo(exampleRepo.user, exampleRepo.repo);
