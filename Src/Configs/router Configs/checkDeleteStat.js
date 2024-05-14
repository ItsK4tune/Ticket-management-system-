import checkLocationStats from '../../Model/Seat Model/checkLocationStats'

let checkDeleteStat = async(req, res, next) => {
    const {Location} = req.body;

    if (!Location) {
        return res.status(401).json({ error: 'No request' })
    }

    try {   
        const {Username} = await checkLocationStats(Location);

        if (!Username) {
            return res.send("Cannot delete the slot because it aint being booked");
        }

        if (Username != req.user) {
            return res.send("This seat slot is not belonged to you")
        }

        next();
    } 
    catch (error) {
        return res.status(401).json({ error: 'Un' });
    }
}

module.exports = checkDeleteStat