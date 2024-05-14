import deleteSeat from '../../Model/Seat Model/deleteSeat'

let Delete = async (req, res) => {
    try {
        const {Location} = req.body;

        await deleteSeat(Location);
        
        return res.send(`Success unbook seat at location: ${Location}`);
    }
    catch (error) {
        console.error('Error fetching data from server:', error);
        res.status(500)
    }
}

module.exports = Delete