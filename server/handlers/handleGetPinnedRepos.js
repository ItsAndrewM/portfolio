const { getPinnedRepos } = require("../utils/getPinnedRepos");


const handleGetPinnedRepos = async (req, res) => {
    const { params } = req;
    console.log(params.username)
    try {
        const pinned = await getPinnedRepos(params.username);
        console.log(pinned)
        if (pinned.length !== 0) {
            res.status(200).json({
                status: 200,
                message: `${pinned.length} repos retrieved successfully`,
                data: pinned,
            });
        } else {
            res.status(404).json({
                status: 404,
                message: "something went wrong, pinned repos were not retrieved",
                error: pinned,
            });
        }
    } catch (error) {
        return `ERROR: ${error}`;
    }
};

module.exports = { handleGetPinnedRepos };
