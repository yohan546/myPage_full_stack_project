# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
ApplicationRecord.connection.reset_pk_sequence!('users')
Friendship.delete_all
ApplicationRecord.connection.reset_pk_sequence!('friendships')


user1 = User.create!(
    name: 'Jon Snow',
    email: 'jonsnow@gameofthrones.com',
    password: 'password',
    friendlist: [2,3,4]
)

user2 = User.create!(
    name: 'Jamie Lanister',
    email: 'jamielanister@gameofthrones.com',
    password: 'password',
    friendlist: [1,3]
)

user3 = User.create!(
    name: 'Robb Stark',
    email: 'robbstark@gameofthrones.com',
    password: 'password',
    friendlist: [1,2,4]
)

user4 = User.create!(
    name: 'Arya Stark',
    email: 'aryastark@gameofthrones.com',
    password: 'password',
    friendlist: [3]
)

user1.friendships.create(friend: user2)
user2.friendships.create(friend: user1)

user1.friendships.create(friend: user3)
user3.friendships.create(friend: user1)

user1.friendships.create(friend: user4)
user4.friendships.create(friend: user1)

user2.friendships.create(friend: user3)
user3.friendships.create(friend: user2)

user3.friendships.create(friend: user4)
user4.friendships.create(friend: user3)

