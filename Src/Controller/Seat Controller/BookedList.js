import getSeatBook from '../../Model/Seat Model/getSeatBook'

let BookedList = async (req, res) => {
    try {
        const user = req.user;

        const data =  await getSeatBook(user);
        
        return res.send(data);
    }
    catch (error) {
        console.error('Error fetching data from server:', error);
        res.status(500)
    }
}

module.exports = BookedList