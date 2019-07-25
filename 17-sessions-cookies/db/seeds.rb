# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Instructor.destroy_all
Cookie.destroy_all

Cookie.create([
    {name: 'choc chip'},
    {name: 'white choc chip'},
    {name: 'dark choc chip'},
    {name: 'triple choc'},
    {name: 'coconut'},
    {name: 'vegan'},
    {name: 'shortbread'},
    {name: 'salted caramel'},
    {name: 'oat and raisin'},
    {name: 'm&ms'},
    
])
bc = Cookie.create({name: 'dark chocolate chip from ben\'s cookies'})

Instructor.create(name: 'mani', cookie: bc)

[
    'ian',
    'sam',
    'dan',
    'nico',
    'joe',
    'jo',
    'sarah',
    'lucy',
    'gabe',
    'stu',
    'sofia',
    'ben',
    'wachira',
    'bhav',
    'julia',
    'kaitlyn',
    'tarryn',
    'igor'
].each do |name|
    Instructor.create({ name: name, cookie: Cookie.all.sample })
end