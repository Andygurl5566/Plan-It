# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all


nia = User.create(name: "Issa Rae", password: "12345ABC!", username:"test", bio: "Crafty mc crafterson crafting it up.", image: "https://kdaniellesmedia.com/wp-content/uploads/2018/10/Issa-Rae-to-Star-In-The-New-Rom-Com-American-Princess.jpg")
ben = User.create(name: "Eddy", password: "54321ABC!", username:"test2", bio: "I like pina-coladas and getting caught in the rain", image: "https://i.imgur.com/5RnsuiY.jpg")

nia.avatar.attach(
    io: File.open("./public/avatars/meet-me.png"),
    filename: "meet-me.png",
    content_type: "application/png"
)

project1 = Project.create(title:"Glassblowing", user_id: nia.id, image:"https://www.sinacastudios.org/wp-content/uploads/2016/08/glassblowing2-copy.jpg", tag:"Hobby", start_date:"N/A", due_date:"N/A")
project3 = Project.create(title:"Workouts", user_id: nia.id, image:"https://www.sinacastudios.org/wp-content/uploads/2016/08/glassblowing2-copy.jpg", tag:"Hobby", start_date:"N/A", due_date:"N/A")
project4 = Project.create(title:"Robotics", user_id: nia.id, image:"https://www.sinacastudios.org/wp-content/uploads/2016/08/glassblowing2-copy.jpg", tag:"Work", start_date:"N/A", due_date:"N/A")
project5 = Project.create(title:"Baking", user_id: nia.id, image:"https://www.sinacastudios.org/wp-content/uploads/2016/08/glassblowing2-copy.jpg", tag:"School", start_date:"N/A", due_date:"N/A")
project6 = Project.create(title:"3D Printing", user_id: nia.id, image:"https://www.sinacastudios.org/wp-content/uploads/2016/08/glassblowing2-copy.jpg", tag:"Personal", start_date:"N/A", due_date:"N/A")

project2 = Project.create(title:"Tiny Home Remodel",user_id: ben.id, image:"http://images.huffingtonpost.com/2016-08-09-1470757977-4233983-image6.jpg", tag:"Other", start_date:"12/15/21", due_date:"TBD")


entry1 = Entry.create(title:" Make  glass pumpkin", date: "thursday ", details:"gegaga ", start_date: " ageg", due_date: "ageg ", tag: "ageg ", project_id: project1.id, image:"https://bloximages.newyork1.vip.townnews.com/tulsaworld.com/content/tncms/assets/v3/editorial/b/64/b64cb7ac-dd47-5f18-88a9-741dd927a931/5b9c0add30ba2.image.jpg")

entry2 = Entry.create(title:"Glass ornaments", date: " ", details:"ebebe ", start_date: " ", due_date: " ", tag: " ",  project_id: project1.id, image: "")

entry3 = Entry.create(title:"Contact contractore ", date: " ", details:"ebbentkt ", start_date: " ", due_date: " ", tag: " ",  project_id: project2.id, image: "http://tinyhouseblog.com/wp-content/uploads/2016/09/CedarMountain-tinyhouse-NewFrontier12.jpg")

entry2 = Entry.create(title:" Glassblowing plate, joint project", date: " ", details:" wfwf", start_date: " ", due_date: " ", tag: " ",  project_id: project1.id, image: "https://www.elev8premier.com/wp-content/uploads/2020/11/Glassblowing-Class-101-Liquid-Arts-2.jpg")