const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');




router.get('/:username', async (req, res) => {
    try {
        //headers for the api
        const headers = {
            'Authorization': process.env.TRACKER_API_KEY,
            'Content-Type': 'application/json;charset=UTF-8',
            
        }

        const { username } = req.params;

        const response = await fetch(`${process.env.TRACKER_API_URL}/users/${username}`, {
            headers
        });

        const data = await response.json();

        if (data.message && data.message.length > 0) {
            return res.status(404).json({
                message: data.message
            });
        }

        res.json(data);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server Error'
        })
    }
});

router.get('/:username/repos', async (req, res) => {
    try {

        //headers for the api
        const headers = {
            'Authorization': process.env.TRACKER_API_KEY,
            'Content-Type': 'application/json;charset=UTF-8',
            
        }


        const { username } = req.params;

        const response = await fetch(`${process.env.TRACKER_API_URL}/users/${username}/repos?page=1&per_page=100`, {
            headers
        });


        const data = await response.json();

        if (data.message && data.message.length > 0) {
            return res.status(404).json({
                message: data.message
            });
        }

        res.json(data);

    } catch (error) {
        console.error(err);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});


module.exports = router;