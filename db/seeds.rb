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

# Adding Buddies to database
friend1 = Buddy.create!(
  user: user1,
  golf_course: 'Pebble Beach'
)

friend2 = Buddy.create!(
  user: user1,
  golf_course: 'Spy Glass'
)

friend3 = Buddy.create!(
  user: user1,
  golf_course: 'Edgewood'
)

friend4 = Buddy.create!(
  user: user1,
  golf_course: 'Coyote Moon'
)

friend5 = Buddy.create!(
  user: user1,
  golf_course: 'Olympic Club'
)

friend6 = Buddy.create!(
  user: user1,
  golf_course: 'Riveria Country Club'
)
