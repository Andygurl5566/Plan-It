# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all


lucy = User.create(name: "Lucy", password: "password", username:"lucy")

lucy.avatar.attach(
    io: File.open("./public/avatars/meet-me.png"),
    filename: "meet-me.png",
    content_type: "application/png"
)