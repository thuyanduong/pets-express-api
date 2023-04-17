/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries and reset their autoincrement to 1
  await knex.raw('TRUNCATE TABLE pets RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE TABLE owners RESTART IDENTITY CASCADE')
  await knex('owners').insert([
    {name: 'Reuben'},
    {name: 'Maya'},
  ]);
  await knex('pets').insert([
    {name: 'Khalo', species: 'dog', owner_id: 2},
    {name: 'Juan Pablo', species: 'dog', owner_id: 1},
    {name: 'Frida', species: 'dog', owner_id: 2},
  ]);
};
