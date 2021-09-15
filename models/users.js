const dbsql = require('../utils/dbsql')

const users = {
    // Insert user
    insertUser: async (data) => {
        console.log('DATA EN USERS', data);
        let client, result;
        const { name, email, password } = data;
        try {
            client = await dbsql.connect(); // Espera a abrir conexion
            const sql_query = `INSERT INTO users(name,email,password) VALUES ($1,$2,$3);`
           
            result = await client.query(sql_query, [name, email, password])
        
            
        }
        catch (e) {
            console.log(e);
            throw e;
        }
        finally {
            client.release();
        }
         //return result

    }
}
module.exports = users