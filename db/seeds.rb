puts "Destroy all USERS..."
User.destroy_all

puts "Kill the BUDDIES..."
Buddy.destroy_all

puts "NOOO not the GOLFCOURSES..."
GolfCourse.destroy_all

puts 'Creating more users (phew)...'

#Adding Golf Courses to database

pebble_beach = GolfCourse.create!(
  location: "Pebble Beach Resorts, 17-Mile Drive, Pebble Beach, CA 93953",
  name: "Pebble Beach",
  par: 72,
  latitude: 36.5725,
  longitude: 121.9486
)

spy_glass = GolfCourse.create!(
  location: "3206 Stevenson Dr, Pebble Beach, CA 93953, USA",
  name: "Spy Glass",
  par: 72,
  latitude: 36.5824,
  longitude: 121.9583
)

edgewood = GolfCourse.create!(
  location: "180 Lake Pkwy, Stateline, NV 89449, USA",
  name: "Edgewood Tahoe",
  par: 72,
  latitude: 38.9662,
  longitude: 119.9482
)

coyote_moon = GolfCourse.create!(
  location: "10685 Northwoods Blvd, Truckee, CA 96161, USA",
  name: "Coyote Moon",
  par: 71,
  latitude: 39.3333,
  longitude: 120.2112
)

olympic_club = GolfCourse.create!(
  location: "599 Skyline Blvd., San Francisco, CA 94132",
  name: "Olympic CLub",
  par: 72,
  latitude: 37.7086,
  longitude: 122.4933
)

riviera = GolfCourse.create!(
  location: "1250 Capri Dr, Pacific Palisades, CA 90272, USA",
  name: "Riviera Country Club",
  par: 71,
  latitude: 26.1155,
  longitude: 81.7357
)

# Adding Users to database

user1 = User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(12..90),
  handicap: rand(0..30),
  email: "tomkiller@gmail.com",
  password: 123456,
  address: "1511 Wildrose Drive, Garndernville, NV 89410, United States",
  golf_course: edgewood
)

user2 = User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(12..90),
  handicap: rand(0..30),
  email: "threeput@gmail.com",
  password: 123456,
  address: "8452 Sunkist Cirlce, Huntington Beach, CA 92646, United States",
  golf_course: riviera
)

user3 = User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(12..90),
  handicap: rand(0..30),
  email: "eaglebaby@gmail.com",
  password: 123456,
  address: "27 N 6th St, San Jose, CA 95112, United States",
  golf_course: pebble_beach
)

# Adding Buddies to database

friend1 = Buddy.create!(
  user: user1,
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(12..90),
  handicap: rand(0..30),
  address: Faker::Address.full_address,
  golf_course: pebble_beach
)

friend2 = Buddy.create!(
  user: user1,
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(12..90),
  handicap: rand(0..30),
  address: Faker::Address.full_address,
  golf_course: spy_glass
)

friend3 = Buddy.create!(
  user: user1,
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(12..90),
  handicap: rand(0..30),
  address: Faker::Address.full_address,
  golf_course: edgewood
)

friend4 = Buddy.create!(
  user: user1,
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(12..90),
  handicap: rand(0..30),
  address: Faker::Address.full_address,
  golf_course: coyote_moon
)

friend5 = Buddy.create!(
  user: user1,
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(12..90),
  handicap: rand(0..30),
  address: Faker::Address.full_address,
  golf_course: olympic_club
)

friend6 = Buddy.create!(
  user: user1,
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(12..90),
  handicap: rand(0..30),
  address: Faker::Address.full_address,
  golf_course: riviera
)
