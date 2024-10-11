import Employee from '../../../models/employee'; //  ../ - IT REPRESENTS UPPER FOLDER
import sequelize from '../../../db'; //  ../ - IT REPRESENTS UPPER FOLDER

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const { id } = req.body;

        try {
            const employee = await Employee.findByPk(id);
            if (!employee) {
                return res.status(404).json({ error: 'Employee not found' });
            }

            await employee.destroy(); // DELETING BY ID 
            res.status(200).json({ message: 'Employee deleted' });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting Employee' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
