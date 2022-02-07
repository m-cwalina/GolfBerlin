puts "Cleaning the database..."
User.destroy_all

puts "Cleaning the database..."
Buddies.destroy_all

puts "Cleaning the database..."
GolfCourses.destroy_all
puts 'Creating 10 fake users...'


user1 = User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(18..100),
  drivers_license: Faker::DrivingLicence.british_driving_licence,
  address: "Berlin",
  email: "user1@users.com",
  password: "123456",
  photo_url: Faker::Avatar.image
)
user2 = User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(18..100),
  drivers_license: Faker::DrivingLicence.british_driving_licence,
  address: "Paris",
  email: "user2@users.com",
  password: "123456",
  photo_url: Faker::Avatar.image
)
user3 = User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(18..100),
  drivers_license: Faker::DrivingLicence.british_driving_licence,
  address: "Toronto",
  email: "user3@users.com",
  password: "123456",
  photo_url: Faker::Avatar.image
)

user4 = User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  age: rand(18..100),
  drivers_license: Faker::DrivingLicence.british_driving_licence,
  address: "Frankfurt",
  email: "user4@users.com",
  password: "123456",
  photo_url: Faker::Avatar.image
  )
