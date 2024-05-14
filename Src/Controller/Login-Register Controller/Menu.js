let MenuPage = async(req, res) => {  

    const user = req.user;
    // Render menu page  
    res.render('Menu', { User: user});
}

module.exports = MenuPage;
