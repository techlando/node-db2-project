// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'prius',
        milage: 215000,
        title: 'clean',
        transmission: 'manual'

    },
    {
        vin: '2222222222222',
        make: 'toyota',
        model: 'corolla',
        milage: 78321,
        title: 'salvage',
        

    },
    {
        vin: '3333333333333',
        make: 'ford',
        model: 'focus',
        milage: 10000,
       

    }
]

exports.seed = function(knex) {
    return knex('cars').truncate().then(() => {
        knex('cars').insert(cars)
    })
}
