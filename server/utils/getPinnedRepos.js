const request = require("request-promise");

const getPinnedRepos = async (username) => {
    return request(
        `https://gh-pinned-repos.egoist.dev/?username=${username}`
    )
        .then((data) => {
            return JSON.parse(data);
        })
        .then((parsedData) => {
            return parsedData;
        })
        .catch((error) => {
            return error;
        });
};

// getPinnedRepos("itsAndrewM").then((data) => {
//     console.log(data)
// })

module.exports = { getPinnedRepos };
