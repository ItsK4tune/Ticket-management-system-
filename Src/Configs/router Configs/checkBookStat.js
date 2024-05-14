import checkLocationStats from '../../Model/Seat Model/checkLocationStats'

let checkBookStat = async(req, res, next) => {
    const {Location} = req.body;

    if (!Location) {
        return res.status(401).json({ error: 'No request' });
    }

    try {   
        const {Username} = await checkLocationStats(Location);

        if (Username == req.user) {
            return res.send("You had booked this seat slot previously");
        }

        if (Username) {
            return res.send("This seat slot is unavailable");
        }

        next();
    } 
    catch (error) {
        return res.status(401).json({ error: 'Un' });
    }
}

module.exports = checkBookStat