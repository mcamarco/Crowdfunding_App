const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    // TODO Get all projects and include user data
 

    // TODO Serialize data so the template can read it
    

    // TODO Pass serialized data and session flag into template

});

router.get('/project/:id', async (req, res) => {
    // TODO Get a project by id and include user data
 

    // TODO Serialize data so the template can read it
    

    // TODO Pass serialized data and session flag into template

});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  
    // TODO Find the logged in user based on the session ID

    // TODO Serialize data so the template can read it
    
    // TODO Pass serialized data and session flag into template

});

router.get('/login', (req, res) => {
  // TODO If the user is already logged in, redirect the request to the profile route
  
  // TODO Otherwise render login template
  
});

module.exports = router;
