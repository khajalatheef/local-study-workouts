import Employee from '../../../models/employee'; //  ../ - IT REPRESENTS UPPER FOLDER
import sequelize from '../../../db'; //  ../ - IT REPRESENTS UPPER FOLDER

export default async function handler(req, res) {
    if (req.method === 'GET') {
        console.log("INSIDE THE GET")
        try {
            const employees = await Employee.findAll();//USED TO FETCH ALL THE RECORDS FROM THE TABLE
            res.status(200).json({ employees });
        } catch (error) {
            res.status(500).json({  error : 'Error fetching employees:' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
