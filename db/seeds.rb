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
  longitude: -121.9486,
  logo: 'https://www.pebblebeach.com/content/uploads/pb-golf-links-01.png',
)

spy_glass = GolfCourse.create!(
  location: "3206 Stevenson Dr, Pebble Beach, CA 93953, USA",
  name: "Spy Glass",
  par: 72,
  latitude: 36.5824,
  longitude: -121.9583,
  logo: 'https://www.cfmco.org/wp-content/uploads/2021/07/DigitalPNG-Spyglass-Hill-Golf-Course-Logo-300x148.png',
)

edgewood = GolfCourse.create!(
  location: "180 Lake Pkwy, Stateline, NV 89449, USA",
  name: "Edgewood Tahoe",
  par: 72,
  latitude: 38.9662,
  longitude: -119.9482,
  logo: 'https://tahoe.com/sites/default/files/styles/ob_very_large/public/business/32440/logo/edg_logo_color.jpg?itok=CjnGIIos',
)

coyote_moon = GolfCourse.create!(
  location: "10685 Northwoods Blvd, Truckee, CA 96161, USA",
  name: "Coyote Moon",
  par: 71,
  latitude: 39.3333,
  longitude: -120.2112,
  logo: 'https://expertgolf-logbook-files.s3.amazonaws.com/tfss-3f9429cb-dfcd-4be9-8e15-4c21df889d1a-CA_Coyote_Moon.png',
)

olympic_club = GolfCourse.create!(
  location: "599 Skyline Blvd., San Francisco, CA 94132",
  name: "Olympic CLub",
  par: 72,
  latitude: 37.7086,
  longitude: -122.4933,
  logo: 'https://toppng.com/uploads/preview/olympic-club-rugby-logo-11548794798orvjittmbr.png',
)

riviera = GolfCourse.create!(
  location: "1250 Capri Dr, Pacific Palisades, CA 90272, USA",
  name: "Riviera",
  par: 71,
  latitude: 26.1155,
  longitude: -81.7357,
  logo: 'https://cdn.allsquaregolf.com/pictures/pictures/000/100/146/large/unknown_picture.jpg',
)

candlewood = GolfCourse.create!(
  location: "14000 Telegraph Rd, Whittier, CA 90604, USA",
  name: "Candlewood",
  par: 71,
  latitude: 26.1155,
  longitude: -81.7357,
  logo: 'http://2.bp.blogspot.com/-UUzhN3CPc1E/Uo23YHAER2I/AAAAAAAAAPs/EfwJzZp9gqc/s1600/gtc.jpg',
)

pga_west = GolfCourse.create!(
  location: "56-150 Pga Blvd, La Quinta, CA 92253, USA",
  name: "PGA West",
  par: 72,
  latitude: 33.6431,
  longitude: -116.2665,
  logo: 'https://www.pgawest.com/Images/Library/PgaWestLogo.JPG',
)

pelican_hills = GolfCourse.create!(
  location: "22701 S Pelican Hill Rd, Newport Coast, CA 92657, USA",
  name: "Pelican Hill",
  par: 72,
  latitude: 33.5882,
  longitude: -117.8440,
  logo: 'https://agriturfdistributing.com/wp-content/uploads/2018/08/Pelican-Hill-Logo.jpg',
)

codo_de_caza = GolfCourse.create!(
  location: "25291 Vista Del Verde, Coto De Caza, CA 92679, USA",
  name: "Coto de Caza",
  par: 72,
  latitude: 33.5951,
  longitude: -117.5907,
  logo: 'https://www.cui.edu/portals/0/assets/giving/events/eagles-golf-classic/Coto-de-Caza-Golf-and-racquet-club-logo.png',
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
