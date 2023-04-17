const knex = require("./knex")

class Owner {
    static async create(name){
        try{
            const dbResults = await knex.raw("INSERT INTO owners (name) VALUES (?) RETURNING *", [name])
            return dbResults.rows[0]
        }catch(err){
            console.error(err);
            return null;
        }
    }

    static async list(){
        try {
            const { rows } = await knex.raw(`SELECT * FROM owners`);
            return rows;
          } catch (err) {
            console.error(err);
            return null;
          }
    }

    static async find(id){
        try {
            const query = `SELECT * FROM owners WHERE id = ?`;
            const { rows: [toDo] } = await knex.raw(query, [id]);
            return toDo || null;
          } catch (err) {
            console.error(err);
            return null;
          }
    }

    static async update(id, body){
        try {
            const {name, updated_at} = body
            const query = `UPDATE owners
            SET name = ?, updated_at = ?
            WHERE id = ? returning *`;
            const { rows: [updatedOwner] } = await knex.raw(query, [name, updated_at, id]);
            return updatedOwner || null;
          } catch (err) {
            console.error(err);
            return null;
          }
    }

    static async destroy(id){
        try {
            const query1 = `DELETE FROM pets WHERE owner_id = ?`;
            await knex.raw(query1, [id]);
            const query2 = `DELETE FROM owners WHERE id = ?`;
            const { rowCount } = await knex.raw(query2, [id]);
            return !!rowCount;
          } catch (err) {
            console.error(err);
            return null;
          }
    }
}

module.exports = Owner