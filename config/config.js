const PROD_CONFIG = "./config-prod.js";
const DEFAULT_CONFIG = "./config-default.js";
const TEST_CONFIG = "./config-test.js";

const fs = require("fs");

var config = null;
if (process.env.NODE_ENV === "test") {
    console.log("Load ${TEST_CONFIG}")
    config = require(TEST_CONFIG);
} else {
    console.log(`Load ${DEFAULT_CONFIG}...`);
    config = require(DEFAULT_CONFIG);
    try {
        if (fs.statSync(PROD_CONFIG).isFile()) {
            console.log(`Load ${PROD_CONFIG}...`);
            config = Object.assign(config, require(PROD_CONFIG));
        }
    } catch (err) {
        console.log(`Cannot load ${PROD_CONFIG}.`);
    }

}

module.exports = config;