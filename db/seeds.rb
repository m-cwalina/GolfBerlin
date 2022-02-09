puts "Destroy all USERS..."
User.destroy_all

puts "Kill the BUDDIES..."
Buddy.destroy_all

puts "NOOO not the GOLFCOURSES..."
GolfCourse.destroy_all

puts 'Creating more users (phew)...'

# Adding Users to database

user1 = User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(12..90),
  handicap: rand(0..30),
  email: "tomkiller@gmail.com",
  password: 123456,
  address: "1511 Wildrose Drive, Garndernville, NV 89410, United States"
)

user2 = User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(12..90),
  handicap: rand(0..30),
  email: "threeput@gmail.com",
  password: 123456,
  address: "8452 Sunkist Cirlce, Huntington Beach, CA 92646, United States"
)

user3 = User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(12..90),
  handicap: rand(0..30),
  email: "eaglebaby@gmail.com",
  password: 123456,
  address: "27 N 6th St, San Jose, CA 95112, United States"
)

#Adding Golf Courses to database

pebble_beach = GolfCourse.create!(
  location: "Pebble Beach Resorts, 17-Mile Drive, Pebble Beach, CA 93953",
  name: "Pebble Beach",
  par: 72,
)

spy_glass = GolfCourse.create!(
  location: "3206 Stevenson Dr, Pebble Beach, CA 93953, USA",
  name: "Spy Glass",
  par: 72,
)

edgewood = GolfCourse.create!(
  location: "180 Lake Pkwy, Stateline, NV 89449, USA",
  name: "Edgewood Tahoe",
  par: 72,
)

coyote_moon = GolfCourse.create!(
  location: "10685 Northwoods Blvd, Truckee, CA 96161, USA",
  name: "Coyote Moon",
  par: 71,
)

olympic_club = GolfCourse.create!(
  location: "599 Skyline Blvd., San Francisco, CA 94132",
  name: "Olympic CLub",
  par: 72,
)

riviera = GolfCourse.create!(
  location: "1250 Capri Dr, Pacific Palisades, CA 90272, USA",
  name: "Riviera Country Club",
  par: 71,
)
# Adding Buddies to database

friend1 = Buddy.create!(
  user: user1,
  golf_course: pebble_beach
)

friend2 = Buddy.create!(
  user: user1,
  golf_course: spy_glass
)

friend3 = Buddy.create!(
  user: user1,
  golf_course: edgewood
)

friend4 = Buddy.create!(
  user: user1,
  golf_course: coyote_moon
)

friend5 = Buddy.create!(
  user: user1,
  golf_course: olympic_club
)

friend6 = Buddy.create!(
  user: user1,
  golf_course: riviera
)
