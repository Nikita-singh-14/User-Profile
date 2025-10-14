const Hotels = [
  {
    "id": "h101",
    "name": "The Santorini Retreat",
    "location": "Oia, Santorini, Greece",
    "price": 15000,
    "rating": 4.9,
    "type": "Villa",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/461914647.jpg?k=01e1fe46a4a7f0c3d7626137babc2f222752022415c38b130418b31244e4d186&o=",
    "details": "Iconic white cave house with panoramic sunset views."
  },
  {
    "id": "h102",
    "name": "Cozy Cabin in the Woods",
    "location": "Asheville, North Carolina, USA",
    "price": 7500,
    "rating": 4.7,
    "type": "Cabin",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/276520738.jpg?k=ae91714e00ffcf81ecfcdfea412f1a22868616a3347bb802fc20c6a1d5511626&o=",
    "details": "Secluded, rustic retreat perfect for nature lovers."
  },
  {
    "id": "h103",
    "name": "Modern Downtown Loft",
    "location": "Manhattan, New York, USA",
    "price": 22000,
    "rating": 4.8,
    "type": "Apartment",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/539914575.jpg?k=5643d932a587d26182308a5c905d5c6b47e359c61c2a59356ff66f34a46ac572&o=",
    "details": "Chic, industrial loft with city skyline views."
  },
  {
    "id": "h104",
    "name": "Bali Beachfront Bungalow",
    "location": "Ubud, Bali, Indonesia",
    "price": 9500,
    "rating": 4.6,
    "type": "Bungalow",
    "imageUrl": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?fit=crop&w=400&q=80",
    "details": "Private access to the beach and infinity pool."
  },
  
  {
    "id": "h106",
    "name": "Riverside Treehouse",
    "location": "Portland, Oregon, USA",
    "price": 8500,
    "rating": 4.5,
    "type": "Treehouse",
    "imageUrl": "https://images.getaroom-cdn.com/image/upload/s--iKFERdDS--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1749933044/8ab4ef905bac1dea3b47e19610c00e22526bd359?_a=BACAEuDL&atc=e7cd1cfa",
    "details": "Unique stay nestled high above the river."
  },
  {
    "id": "h107",
    "name": "Desert Glamping Dome",
    "location": "Moab, Utah, USA",
    "price": 6000,
    "rating": 4.8,
    "type": "Tent",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/489160436.jpg?k=9d00f1011d2aa9877eed2befc5386e173e0fa8d36e3b67d160310eca4d482d46&o=",
    "details": "Stargazing and tranquility in a geodesic dome."
  },
  {
    "id": "h108",
    "name": "Luxury Ski Chalet",
    "location": "Zermatt, Valais, Switzerland",
    "price": 35000,
    "rating": 4.9,
    "type": "Chalet",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/449614531.jpg?k=dd46f04cc6b99907f5a32d7d77a2fa983ae11484c0b213aa6e11af0be219c9f3&o=",
    "details": "Ski-in/ski-out access with a private sauna."
  },
  {
    "id": "h109",
    "name": "Tokyo Capsule Apartment",
    "location": "Shinjuku, Tokyo, Japan",
    "price": 4500,
    "rating": 4.3,
    "type": "Studio",
    "imageUrl": "https://images.getaroom-cdn.com/image/upload/s--wp4qhWUu--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1749933044/31140f7d40d58ec3319ae62659e1a884d9f28f97?_a=BACAEuDL&atc=e7cd1cfa",
    "details": "Minimalist stay in the heart of the city."
  },
  {
    "id": "h110",
    "name": "Coastal Lighthouse Keeper's Quarters",
    "location": "Big Sur, California, USA",
    "price": 18000,
    "rating": 4.9,
    "type": "Unique",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321337646.jpg?k=b228d6b51cd0ff88e7c4f402fdb6837dd03b2b6826130b800da449734507e0ad&o=",
    "details": "Stay in a genuine, retired lighthouse."
  },
  {
    "id": "h111",
    "name": "Tuscan Farmhouse Estate",
    "location": "Florence, Tuscany, Italy",
    "price": 12000,
    "rating": 4.7,
    "type": "Farmhouse",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321337662.jpg?k=87b624adba33e296b69bb25b91972e59768ecdfe5d6778a8fbe28a3f1b781958&o=",
    "details": "Private vineyard and cooking classes on-site."
  },
  {
    "id": "h112",
    "name": "Miami Art Deco Studio",
    "location": "South Beach, Miami, USA",
    "price": 11000,
    "rating": 4.6,
    "type": "Studio",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321336886.jpg?k=a942e839301a7f2f50908881c3663aa98be4069c4c8ccfca96e6183c6d12ce5d&o=",
    "details": "Vibrant and stylish, steps from the beach."
  },
  {
    "id": "h113",
    "name": "Himalayan View Cottage",
    "location": "Manali, Himachal Pradesh, India",
    "price": 4000,
    "rating": 4.4,
    "type": "Cottage",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321337354.jpg?k=5b9d3ff5a9e2fce07839c8e36ad3c0c1a827c5228971903d82b2e170d427eb2c&o=",
    "details": "Stunning views of the Dhauladhar Range."
  },
  {
    "id": "h114",
    "name": "Floating Houseboat",
    "location": "Amsterdam, Netherlands",
    "price": 10500,
    "rating": 4.7,
    "type": "Houseboat",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321336143.jpg?k=0c556de5be24ce930cd741c3559707a3788a76752c92c035b2a7a84699ce607c&o=",
    "details": "Quaint home on the canal with a roof deck."
  },
  {
    "id": "h115",
    "name": "Luxury Safari Tent",
    "location": "Maasai Mara, Kenya",
    "price": 28000,
    "rating": 5.0,
    "type": "Tent",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/490967684.jpg?k=f737841b074841939b25b74729df65be3f1b9dd252508f066e346d00aa228e99&o=",
    "details": "Game drives included, luxury amenities."
  },
  {
    "id": "h116",
    "name": "Rustic Chilean Dome",
    "location": "Patagonia, Chile",
    "price": 9000,
    "rating": 4.5,
    "type": "Dome",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/490967666.jpg?k=a2b296c671d93a94e0862da4cfccf386bc1559043f4f8476963222247fcc9dcf&o=",
    "details": "Basecamp for trekking, surrounded by mountains."
  },
  {
    "id": "h117",
    "name": "Coastal Croatian Apartment",
    "location": "Split, Dalmatia, Croatia",
    "price": 6500,
    "rating": 4.6,
    "type": "Apartment",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/205513700.jpg?k=b58b8549e76974a83378d4d489e83154595d1fa94b0ff0607559d6ebb0569d2f&o=",
    "details": "Overlooks the Adriatic Sea, near Diocletian's Palace."
  },
  {
    "id": "h118",
    "name": "A-Frame Forest House",
    "location": "Olympic Peninsula, Washington, USA",
    "price": 7000,
    "rating": 4.8,
    "type": "Cabin",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/490967642.jpg?k=38f91f3a20a4638168918499b679573efdcd119274f6ece07bfc3a2ddbe8448a&o=",
    "details": "Classic A-frame design, perfect for rain and cozy evenings."
  },
  {
    "id": "h119",
    "name": "Sydney Harbour View",
    "location": "The Rocks, Sydney, Australia",
    "price": 25000,
    "rating": 4.9,
    "type": "Penthouse",
    "imageUrl":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/201422121.jpg?k=9df83496a9e3a312f492b5fd3ece047ce5c8c3d6c26cc627f7045da609805c2a&o=https://images.unsplash.com/photo-1503614467023-e2213d508f75?fit=crop&w=400&q=80",
    "details": "Direct views of the Opera House and Harbour Bridge."
  },
  {
    "id": "h120",
    "name": "Old Quebec City Loft",
    "location": "Quebec City, Quebec, Canada",
    "price": 8000,
    "rating": 4.5,
    "type": "Loft",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/310337221.jpg?k=67fd32bcd33b1adf2b57d6010cb9f4b3ba0d590369e2dccd7a19e567e02a274b&o=",
    "details": "European charm in the historic district."
  },
  {
    "id": "h121",
    "name": "Maldives Overwater Villa",
    "location": "Baa Atoll, Maldives",
    "price": 45000,
    "rating": 5.0,
    "type": "Villa",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/571092698.jpg?k=a6b00c4e35c0083b629fd2d131d9cb6e5be169f670464bf76703d03faa5ecccb&o=",
    "details": "Glass floor, private deck, direct ocean access."
  },
  {
    "id": "h122",
    "name": "Mexican Cenote House",
    "location": "Tulum, Quintana Roo, Mexico",
    "price": 16000,
    "rating": 4.8,
    "type": "House",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321344473.jpg?k=003af8364c318b9bc24da831c1acedea72e3913aca2128c4a2536a6bff0bb733&o=",
    "details": "Eco-friendly stay with a private natural pool."
  },
  {
    "id": "h123",
    "name": "Berlin Warehouse Studio",
    "location": "Kreuzberg, Berlin, Germany",
    "price": 6800,
    "rating": 4.4,
    "type": "Studio",
    "imageUrl": "https://images.unsplash.com/photo-1540541338287-41700207dee6?fit=crop&w=400&q=80",
    "details": "Industrial aesthetic near the city's nightlife."
  },
  {
    "id": "h124",
    "name": "Kyoto Traditional Machiya",
    "location": "Gion, Kyoto, Japan",
    "price": 13000,
    "rating": 4.7,
    "type": "House",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/201422128.jpg?k=9255102c63e0f57412be6f4a77ac25c6c0f5df773c67de6239589b068296047c&o=",
    "details": "Authentic wooden townhouse with a Zen garden."
  },
  {
    "id": "h125",
    "name": "Moroccan Riad with Courtyard",
    "location": "Marrakech, Morocco",
    "price": 10000,
    "rating": 4.9,
    "type": "Riad",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321337629.jpg?k=0b73fb0016a59e61f49ff94c11f14ff01ef84cd294207bef33122e62d51d082e&o=",
    "details": "A peaceful oasis in the bustling Medina."
  },
  {
    "id": "h126",
    "name": "South African Vineyard Stay",
    "location": "Stellenbosch, Western Cape, SA",
    "price": 19000,
    "rating": 4.6,
    "type": "Farmhouse",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/589021289.jpg?k=98c78078ed5f6252250b006af285c6dde9bb7775e2b6f034d2de4d6ca186bd97&o=",
    "details": "Wine tasting and mountain biking trails."
  },
  {
    "id": "h127",
    "name": "Canadian Rockies Log Cabin",
    "location": "Banff, Alberta, Canada",
    "price": 14000,
    "rating": 4.8,
    "type": "Cabin",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/592672461.jpg?k=553dadd4ca21a0e9af579e784188a3d3d7a2fb94240c1249fc979ddf95935750&o=",
    "details": "Fireplace, hot tub, and stunning mountain views."
  },
  {
    "id": "h128",
    "name": "Iguazu Jungle Lodge",
    "location": "Puerto Iguazú, Argentina",
    "price": 11500,
    "rating": 4.5,
    "type": "Lodge",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/562292930.jpg?k=fcf487649681205292881c2aedad419b0a86834b6b63e69b4f10a112fec663f7&o=",
    "details": "Close proximity to the famous waterfalls."
  },
  {
    "id": "h129",
    "name": "Vienna Opera House Apartment",
    "location": "Innere Stadt, Vienna, Austria",
    "price": 17000,
    "rating": 4.7,
    "type": "Apartment",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/498595533.jpg?k=1bad01dfb4bf34051d41c2001c1dd03a87950ab52cb628efa48764881774488a&o=",
    "details": "Elegant and spacious, ideal for culture lovers."
  },
  {
    "id": "h130",
    "name": "Thai Island Getaway",
    "location": "Koh Lanta, Krabi, Thailand",
    "price": 5500,
    "rating": 4.3,
    "type": "Bungalow",
    "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/271031117.jpg?k=6704b43bb0e7c3ef0b73ba999168a30a3728e314c2b3a9717c9d2a918ed66e7f&o=",
    "details": "Simple, beachfront hut with a hammock."
  }
]

module.exports = Hotels;
