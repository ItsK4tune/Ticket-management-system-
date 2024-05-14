import bookSeat from '../../Model/Seat Model/bookSeat.js'

let Book = async (req, res) => {
    try {
        const {Location} = req.body;
        const user = req.user;

        await bookSeat(Location, user);
        
        return res.send(`Success book seat at location: ${Location}`);
    }
    catch (error) {
        console.error('Error fetching data from server:', error);
        res.status(500)
    }
}

module.exports = Book