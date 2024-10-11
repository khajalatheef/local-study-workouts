import Employee from '../../../models/employee'; //  ../ - IT REPRESENTS UPPER FOLDER
import sequelize from '../../../db'; //  ../ - IT REPRESENTS UPPER FOLDER

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        const { id, name, email, contact } = req.body; // GETTING VALUES FROM REQUEST 

        try {
            const employee = await Employee.findByPk(id); // PRE DEFINED FUNCTION USING TO FIND THE DATA BY PRIMARY KEY ID 
            if (!employee) {
                return res.status(404).json({ error: 'Employee not found' });
            }

            employee.name = name;
            employee.email = email;
            employee.contact = contact;
            await employee.save(); // SAVES A DATA WHICH IS UPDATED

            res.status(200).json({ employee });
        } catch (error) {
            res.status(500).json({ error: 'Error updating employee' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
