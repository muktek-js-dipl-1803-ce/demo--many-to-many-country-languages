const IdFactory = function(arg = 0){
  this._id = arg || 0,
  this.genId = function(){
    let newId = this._id + 1
    this._id = newId
    return this._id
  }
}

const idFactory = new IdFactory()

const publisherSeeds = [
  {id: idFactory.genId(), name: 'Woj Publishers'},
  {id: idFactory.genId(), name: 'Mischer House'},
  {id: idFactory.genId(), name: 'Mustang Group'}
]

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('publishers').del()
    .then(function () {
      // Inserts seed entries
      return knex('publishers').insert(publisherSeeds);
    });
};
