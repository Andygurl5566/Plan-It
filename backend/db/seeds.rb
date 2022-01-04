# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all


issa = User.create(name: "Issa Rae", password: "12345ABC!", username:"test", bio: "Crafty mc crafterson crafting it up.", image: "https://i.imgur.com/sYPhGOM.jpg")
eddy = User.create(name: "Eddy", password: "54321ABC!", username:"test2", bio: "I like pina-coladas and getting caught in the rain", image: "https://i.imgur.com/5RnsuiY.jpg")

issa.avatar.attach(
    io: File.open("./public/avatars/meet-me.png"),
    filename: "meet-me.png",
    content_type: "application/png"
)

project1 = Project.create(title:"Events", user_id: issa.id, image:"https://o.aolcdn.com/images/dims?quality=80&thumbnail=1200%2C630&image_uri=https%3A%2F%2Fs-i.huffpost.com%2Fgen%2F4449166%2Fimages%2Fn-MIC-628x314.jpg&client=cbc79c14efcebee57402&signature=64ae37b1cc031958e3d4a072d8f871843d7c09c1", tag:"Activity", start_date:"N/A", due_date:"N/A")
project3 = Project.create(title:"Fraternize with the Public", user_id: issa.id, image:"https://img.nbc.com/sites/nbcunbc/files/images/2017/12/22/171222_3640325_Issa_Rae_and_Tiffany_Haddish_Invited_Themsel_anvver_2.jpg", tag:"Hobby", start_date:"N/A", due_date:"N/A")
project4 = Project.create(title:"Film Ideas", user_id: issa.id, image:"https://i1.wp.com/www.potentash.com/wp-content/uploads/2018/11/African-stock-video-of-a-black-man-typing-on-a-laptop-computer-.jpg?fit=630%2C354&ssl=1", tag:"Work", start_date:"N/A", due_date:"N/A")
project5 = Project.create(title:"Film Season Finale for HBO", user_id: issa.id, image:"https://heavy.com/wp-content/uploads/2017/07/gettyimages-815306218-e1501462447774.jpg?quality=65&strip=all", tag:"Film", start_date:"N/A", due_date:"N/A")
project6 = Project.create(title:"VACATION!", user_id: issa.id, image:"https://media.cntraveler.com/photos/589df60a9b67416638b3bf66/master/w_1200,c_limit/luxury-retreats-cr-courtesy.jpg?mbid=social_retweet", tag:"Personal", start_date:"N/A", due_date:"N/A")
project6 = Project.create(title:"Wedding Stuff <3", user_id: issa.id, image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F07%2F26%2Fissa-rae-wedding-5.jpg", tag:"Personal", start_date:"N/A", due_date:"N/A")

project2 = Project.create(title:"Tiny Home Remodel",user_id: eddy.id, image:"http://images.huffingtonpost.com/2016-08-09-1470757977-4233983-image6.jpg", tag:"Other", due_date:"")


entry1 = Entry.create(title:" Girls's Night In", date: " ", details:"This Friday!", due_date: "2022-01-07T02:12", tag: "Friday ", project_id: project1.id, image:"https://compote.slate.com/images/1ab7ebca-14df-43b6-b373-c4397e69c3ea.jpg?width=840")

entry2 = Entry.create(title:"Mic Night", date: " ", details:"At Lulu's Coffee Hub", due_date: "2022-02-18T02:12", tag: "Saturday",  project_id: project1.id, image: "https://mediafeed.org/wp-content/uploads/2020/09/iStock-1155922952.original-9.jpg")

entry3 = Entry.create(title:"Contact contractor ", date: " ", details:"ASAP", due_date: "2022-01-03T02:12", tag: "Remodel",  project_id: project2.id, image: "http://tinyhouseblog.com/wp-content/uploads/2016/09/CedarMountain-tinyhouse-NewFrontier12.jpg")

