import getSeatStat from '../../Model/Seat Model/getSeatStat'

let List = async (req, res) => {
    try {
        console.log(1);        
        return res.send(data);
    }
    catch (error) {
        console.error('Error fetching data from server:', error);
        res.status(500)
    }
}

module.exports = List