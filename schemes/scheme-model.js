const db = require("../data/dbConfig.js");
module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes');
}


function findById(id) {
    return db("schemes")
      .where({ id })
      .first();
  }

function findSteps(id) {
    return db("schemes as sc")
        .join("steps as s", "s.scheme_id", "sc.id")
        .select("sc.id", "sc.scheme_name", "s.step_number", "s.instructions" )
        .where("scheme_id", id)
}

function add(scheme) {
    return db("schemes").insert(scheme, "id");
  }


  function update(id, changes) {
    return db("schemes")
      .where({ id })
      .update(changes);
  }

  
function remove(id) {
    return db("schemes")
      .where({ id })
      .del();
  }