const { update } = require("../../controllers/owners");
const knex = require("./knex")

class Pet {
    static async create(body){
        let {name, species, owner_id}  = body
        try {
            const query = `INSERT INTO pets (name, species, owner_id)
            values (?, ?, ?) returning *`;
            const { rows: [newPet] } = await knex.raw(query, [name, species, owner_id]);
            return newPet;
          } catch (err) {
            console.error(err);
            return null;
          }
    }

    static async list(){
        try {
            const query = `SELECT * FROM pets`;
            const { rows } = await knex.raw(query);
            return rows;
          } catch (err) {
            console.error(err);
            return [];
          }
    }

    static async find(id){
        try {
            const query = `SELECT * FROM pets WHERE id = ?`;
            const { rows: [pet] } = await knex.raw(query, [id]);
            return pet || null;
          } catch (err) {
            console.error(err);
            return null;
          }
    }

    static async update(id, body){
        const {name, species, owner_id} = body
        body["updated_at"] = new Date(Date.now());
        try {
            const query1 = `SELECT * FROM pets WHERE id = ?`;
            const { rows: [pet] } = await knex.raw(query1, [id]);
            const newPet = Object.assign(pet, body)
            const {name, species, owner_id, updated_at} = newPet
            const query2 = `UPDATE pets
            SET name = ?, species = ?, owner_id = ?, updated_at = ?
            WHERE id = ? returning *`;
            const { rows: [updatedPet] } = await knex.raw(query2, [name, species, owner_id, updated_at, id]);
            return updatedPet || null;
          } catch (err) {
            console.error(err);
            return null;
          }
    }

    static async destroy(id){
        try {
            const query = `DELETE FROM pets WHERE id = ?`;
            const { rowCount } = await knex.raw(query, [id]);
            return !!rowCount;
          } catch (err) {
            console.error(err);
            return null;
          }
    }

    static async findByOwner(ownerId){
        try {
            const query = `SELECT * FROM pets WHERE owner_id = ?`;
            const { rows } = await knex.raw(query, [ownerId]);
            return rows
          } catch (err) {
            console.error(err);
            return [];
          }
    }
}

module.exports = Pet