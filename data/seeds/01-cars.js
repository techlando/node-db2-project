// STRETCH
const cars = [
    {
        vin: 'JH4DA1741HS010452',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'

    },
    {
        vin: 'JT6HF10U3Y0133607',
        make: 'toyota',
        model: 'corolla',
        mileage: 78321,
        title: 'salvage',
        

    },
    {
        vin: '1FAFP58S11A177991',
        make: 'ford',
        model: 'focus',
        mileage: 10000,
        
       

    }
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed =  async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
    
}


