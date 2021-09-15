const dbsql = require('../utils/dbsql')

const users = {
    // Insert user on DDBB SQL
    insertUser: async (name, email, hashedPassword) => {
        console.log('DATA EN USERS');
        let client, result;
        //const { name, email, hashedPassword } = data;
        try {
            client = await dbsql.connect(); // Espera a abrir conexion
            const sql_query = `INSERT INTO users(name,email,password) VALUES ($1,$2,$3);`
            result = await client.query(sql_query, [name, email, hashedPassword])
        }
        catch (e) {
            console.log(e);
            throw e;
        }
        finally {
            client.release();
        }
        //return result
    },
    //Login user
    getUser: async (email) => {
        let client, result;
        try {
            client = await dbsql.connect();
            result = await dbsql.query('SELECT * FROM users WHERE email=$1', [email])
            //console.log(result.rows);
            return result.rows
        } catch (e) {
            console.log(e);
            throw e;
        }
        finally {
            client.release();
        }
    },
    getUserId: async (id_user) => {
        let client, result;
        try {
            client = await dbsql.connect();
            result = await dbsql.query('SELECT * FROM users WHERE id_user=$1', [id_user])
            //console.log(result.rows);
            return result.rows
        } catch (e) {
            console.log(e);
            throw e;
        }
        finally {
            client.release();
        }
    }

}
module.exports = users