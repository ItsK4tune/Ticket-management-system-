let HomePage = (req, res) => {
    // Get time
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    // Render home page
    res.render("Home", {Day: day, Month: month, Year: year});
}

module.exports = HomePage;
