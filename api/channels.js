const channels = [
  {
    id: "1",
    name: "Saudi Quran",
    category: "PK | ISLAMIC",
    logo: "https://b1gchlogos.xyz/wp-content/uploads/2023/09/Saudi-Al-Quran.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/1.ts"
  },
  {
    id: "2",
    name: "Saudi Al Sunnah Al Naavi",
    category: "PK | ISLAMIC",
    logo: "https://b1gchlogos.xyz/wp-content/uploads/2023/09/Saudi-Channel.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/2.ts"
  },
  {
    id: "3",
    name: "Quran Tv",
    category: "PK | ISLAMIC",
    logo: "https://play-lh.googleusercontent.com/uxvSu0IoIQMdhYzVOd1aNj_Vr_Ovvx6eoEDyycYqFUBTW5yvU8wDabdyKNxe2NnfYw",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/33756.ts"
  },
  {
    id: "4",
    name: "Paigham TV",
    category: "PK | ISLAMIC",
    logo: "https://paigham.tv/images/Logo_gold.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/3017.ts"
  },
  {
    id: "5",
    name: "Al Ehsan",
    category: "PK | ISLAMIC",
    logo: "https://alehsaan.com/wp-content/uploads/2024/02/CMYK-Logov2-296x300.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/225460.ts"
  },
  {
    id: "6",
    name: "Ary Qtv",
    category: "PK | ISLAMIC",
    logo: "https://b1gchlogos.xyz/wp-content/uploads/2023/09/ARY-QTV.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/7.ts"
  },
  {
    id: "7",
    name: "Madani TV",
    category: "PK | ISLAMIC",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_s1QIH4x4Ru0DufX_CNlWhPvPU3o91ZcA9w&s",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/3.ts"
  },
  {
    id: "8",
    name: "QURAN MAJEED 24/7",
    category: "PK | ISLAMIC",
    logo: "https://logodix.com/logo/1792199.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/144707.m3u8"
  },
  {
    id: "9",
    name: "NAATS 24/7",
    category: "PK | ISLAMIC",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKvHNZPVgxmG5YArVyFJH1Z-yxiZE5V7tRg&s",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/59974.m3u8"
  },
  {
    id: "10",
    name: "Peace TV English HD",
    category: "PK | ISLAMIC",
    logo: "http://b1gchlogos.xyz/wp-content/uploads/2023/09/Peace-TV.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/9.m3u8"
  },
  {
    id: "11",
    name: "Paigham Pashto TV",
    category: "PK | ISLAMIC",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfTLgNNPfcguOU9HFtY_f79smb4PPoYGmhQ&s",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/225461.m3u8"
  },
  {
    id: "12",
    name: "Ary News",
    category: "PK | NEWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Arynews.jpg",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/51.ts"
  },
  {
    id: "13",
    name: "Geo News",
    category: "PK | NEWS",
    logo: "https://a0.pikist.com/pngimg/1208/450/geos-geo-tez-urdu-geo-super-ary-news-geo-news-geo-tv-lyngsat-breaking-news-geo.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/55.ts"
  },
  {
    id: "14",
    name: "Geo Tez",
    category: "PK | NEWS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5nTiccn5jWE8ZC50M3T6L8gj-G988BVpTYw&s",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/56.ts"
  },
  {
    id: "15",
    name: "Express News",
    category: "PK | NEWS",
    logo: "https://images.seeklogo.com/logo-png/39/1/express-news-logo-png_seeklogo-390653.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/54.ts"
  },
  {
    id: "16",
    name: "GTV News",
    category: "PK | NEWS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxLmXR0zv9QoQR9DXDDvU6NVG0Genx31DUw&s",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/58.ts"
  },
  {
    id: "17",
    name: "GNN News",
    category: "PK | NEWS",
    logo: "https://static.wikia.nocookie.net/logopedia/images/5/57/GNN_2018.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/57.ts"
  },
  {
    id: "18",
    name: "AJJ News",
    category: "PK | NEWS",
    logo: "https://www.lyngsat.com/logo/tv/aa/aaj_tv_news.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/48.ts"
  },
  {
    id: "19",
    name: "HUM News",
    category: "PK | NEWS",
    logo: "https://www.mtctutorials.com/wp-content/uploads/2022/01/Hum-news-logo-png-template-mtc-tutorials.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/59.ts"
  },
  {
    id: "20",
    name: "ABN News",
    category: "PK | NEWS",
    logo: "https://www.mjunoon.tv/uploads/categories/logo-ABN.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/50.ts"
  },
  {
    id: "21",
    name: "365 News",
    category: "PK | NEWS",
    logo: "https://d34080pnh6e62j.cloudfront.net/images/channels/new_thumbs/1743087161Untitleddesign.jpg",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/62185.ts"
  },
  {
    id: "22",
    name: "AIK News",
    category: "PK | NEWS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREwDY5jx25F6_BQpxbgqPG7HDeFoYb_ONAgg&s",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/211.ts"
  },
  {
    id: "23",
    name: "ABBTAKK News",
    category: "PK | NEWS",
    logo: "https://mir-s3-cdn-cf.behance.net/projects/404/e8058e57163221.Y3JvcCw1NDYsNDI4LDQ1NywyMDU.jpg",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/49.ts"
  },
  {
    id: "24",
    name: "BOL News",
    category: "PK | NEWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/BOL_Network.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/52.ts"
  },
  {
    id: "25",
    name: "DUNYA News",
    category: "PK | NEWS",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/10/Dunya_News.jpg",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/53.ts"
  },
  {
    id: "26",
    name: "NEO News",
    category: "PK | NEWS",
    logo: "https://d34080pnh6e62j.cloudfront.net/adminpanel/assets/uploads/NewChannelThumbnailPath/b8f1b-neo-news.jpg",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/62.ts"
  },
  {
    id: "27",
    name: "PUBLIC News",
    category: "PK | NEWS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqd3BZ-cx3DuRBheTFsIkY5Q8IqfFtovshaA&s",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/80.ts"
  },
  {
    id: "28",
    name: "7 NEWS",
    category: "PK | NEWS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQGMzNHRsqdNWhMfFeC2zwJwvMObOS-lFJA&s",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/367625.m3u8"
  },
  {
    id: "29",
    name: "92 News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/70.ts"
  },
  {
    id: "30",
    name: "SNN NEWS",
    category: "PK | NEWS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTbP2onzOhqHXK1hU1D_3bnzBVKoCemywig&s",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/367622.m3u8"
  },
  {
    id: "31",
    name: "24 News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/69.ts"
  },
  {
    id: "32",
    name: "METRO 1 News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/61.ts"
  },
  {
    id: "33",
    name: "News ONE",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/63.ts"
  },
  {
    id: "34",
    name: "DAWN News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/76.ts"
  },
  {
    id: "35",
    name: "Digital Pakistan Dispatch",
    category: "PK | NEWS",
    logo: "",
    stream: "https://cdn22lhr.tamashaweb.com:8087/jazzauth/Digital-pak-abr/playlist.m3u8"
  },
  {
    id: "36",
    name: "SUNO News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/79.ts"
  },
  {
    id: "37",
    name: "BBC News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/73.m3u8"
  },
  {
    id: "38",
    name: "TRT World",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/25886.m3u8"
  },
  {
    id: "39",
    name: "ROZE News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/212.ts"
  },
  {
    id: "40",
    name: "CAPITAL News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/95.ts"
  },
  {
    id: "41",
    name: "Sun News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/272964.ts"
  },
  {
    id: "42",
    name: "TV 2 day News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/68.ts"
  },
  {
    id: "43",
    name: "Channel 5 News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/36935.ts"
  },
  {
    id: "44",
    name: "SAMAA News",
    category: "PK | NEWS",
    logo: "https://www.lyngsat.com/logo/tv/ss/samaa-tv-pk.svg",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/141372.ts"
  },
  {
    id: "45",
    name: "Chaupaal News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/292068.ts"
  },
  {
    id: "46",
    name: "LAHORE Rang News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/7079.ts"
  },
  {
    id: "47",
    name: "SUCH News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/67.ts"
  },
  {
    id: "48",
    name: "LAHORE News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/76.ts"
  },
  {
    id: "49",
    name: "PTV News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/64.ts"
  },
  {
    id: "50",
    name: "CITY 41 News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/214.ts"
  },
  {
    id: "51",
    name: "CITY 42 News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/71.ts"
  },
  {
    id: "52",
    name: "CITY 21 News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/215.ts"
  },
  {
    id: "53",
    name: "ROHI TV",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/75.ts"
  },
  {
    id: "54",
    name: "SEE TV",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27074.ts"
  },
  {
    id: "55",
    name: "STAR News",
    category: "PK | NEWS",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/19293.ts"
  },
  {
    id: "56",
    name: "PTV SPORTS",
    category: "PK & IND | SPORTS",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e4/PTV_Sports.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/47588.ts"
  },
  {
    id: "57",
    name: "TEN SPORTS",
    category: "PK & IND | SPORTS",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Ten_Sports_Logo.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/48599.ts"
  },
  {
    id: "58",
    name: "A SPORTS",
    category: "PK & IND | SPORTS",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/A_Sports_Logo.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/48602.m3u8"
  },
  {
    id: "59",
    name: "GEO SUPER",
    category: "PK & IND | SPORTS",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5f/Geo_Super_logo.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/49709.ts"
  },
  {
    id: "60",
    name: "Eurosport",
    category: "PK & IND | SPORTS",
    logo: "https://cdn.broadbandtvnews.com/wp-content/uploads/2015/11/14120517/Eurosport-logo-symbol.png",
    stream: "https://cdn23lhr.tamashaweb.com:8087/jazzauth/Eurosport-abr/playlist.m3u8"
  },
  {
    id: "61",
    name: "SuperSports Cricket",
    category: "PK & IND | SPORTS",
    logo: "https://i.imgur.com/0c5Ox0o.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27267.m3u8"
  },
  {
    id: "62",
    name: "Eurosports IND",
    category: "PK & IND | SPORTS",
    logo: "https://cdn.broadbandtvnews.com/wp-content/uploads/2015/11/14120517/Eurosport-logo-symbol.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/60379.m3u8"
  },
  {
    id: "63",
    name: "Star Sports 2 IND",
    category: "PK & IND | SPORTS",
    logo: "https://www.lyngsat.com/logo/tv/ss/star-sports-2-hk-in.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27249.ts"
  },
  {
    id: "64",
    name: "SuperSports Premier League",
    category: "PK & IND | SPORTS",
    logo: "https://epg.pw/media/images/epg/2025/04/06/20250406040233943557_30.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/28127.m3u8"
  },
  {
    id: "65",
    name: "FAST SPORTS",
    category: "PK & IND | SPORTS",
    logo: "https://b1gchlogos.xyz/wp-content/uploads/2023/08/Fast-Sports.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/197426.ts"
  },
  {
    id: "66",
    name: "DISCOVER PAKISTAN",
    category: "PK & IND | DISCOVERY",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQH2plW4FoejYA/company-logo_200_200/company-logo_200_200/0/1669814581835/discoverpakistanhdtv_logo?e=2147483647&v=beta&t=K6eZes6Oeu5RczvxlGuXD5birbV00xLwMdybiu1chR4",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/268568.ts"
  },
  {
    id: "67",
    name: "DISCOVERY IND",
    category: "PK & IND | DISCOVERY",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSM3nOnr0gTjGWklam0157SKw-RX23CeSobg&s",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/111266.ts"
  },
  {
    id: "68",
    name: "NATIONAL GEO GRAPHIC IND",
    category: "PK & IND | DISCOVERY",
    logo: "https://cdn.freebiesupply.com/logos/large/2x/national-geographic-logo-png-transparent.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/96633.ts"
  },
  {
    id: "69",
    name: "NAT GEO WILD IND",
    category: "PK & IND | DISCOVERY",
    logo: "https://images.seeklogo.com/logo-png/33/2/nat-geo-wild-logo-png_seeklogo-333045.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/103401.ts"
  },
  {
    id: "70",
    name: "ANIMAL PLANET IND",
    category: "PK & IND | DISCOVERY",
    logo: "https://tplicensing.com/wp-content/uploads/2021/02/aplogo.jpg",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/96441.ts"
  },
  {
    id: "71",
    name: "Cartoon Network IND",
    category: "PK & IND | KIDS CARTOON",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/62172.m3u8"
  },
  {
    id: "72",
    name: "IND Nick Jr",
    category: "PK & IND | KIDS CARTOON",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/62177.m3u8"
  },
  {
    id: "73",
    name: "IND Disney Channel",
    category: "PK & IND | KIDS CARTOON",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/62174.m3u8"
  },
  {
    id: "74",
    name: "IND Nick",
    category: "PK & IND | KIDS CARTOON",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/62175.m3u8"
  },
  {
    id: "75",
    name: "IND Pogo",
    category: "PK & IND | KIDS CARTOON",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/62171.m3u8"
  },
  {
    id: "76",
    name: "IND Sony YAY",
    category: "PK & IND | KIDS CARTOON",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/62180.m3u8"
  },
  {
    id: "77",
    name: "IND CN HD+",
    category: "PK & IND | KIDS CARTOON",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/78288.m3u8"
  },
  {
    id: "78",
    name: "IND DISNEY CHANNEL FHD",
    category: "PK & IND | KIDS CARTOON",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/78282.m3u8"
  },
  {
    id: "79",
    name: "IND Sonic Nick",
    category: "PK & IND | KIDS CARTOON",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/62179.m3u8"
  },
  {
    id: "80",
    name: "IND Super Hungama",
    category: "PK & IND | KIDS CARTOON",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/148602.m3u8"
  },
  {
    id: "81",
    name: "IND Discovery Kids",
    category: "PK & IND | KIDS CARTOON",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/129455.m3u8"
  },
  {
    id: "82",
    name: "IND HUNGAMA TV",
    category: "PK & IND | KIDS CARTOON",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/62169.m3u8"
  },
  {
    id: "83",
    name: "Ary Digital",
    category: "PK | ENTERTAINMENT",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GljSfWHiwhPKYBXIsBtZZ2XSlv222lA4AA&s",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/26982.ts"
  },
  {
    id: "84",
    name: "GEO Entertainment",
    category: "PK | ENTERTAINMENT",
    logo: "http://ryzen.one/logos2/geo_entertainment.jpg",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/26985.ts"
  },
  {
    id: "85",
    name: "GEO Kahani",
    category: "PK | ENTERTAINMENT",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lQn8j8i9O9SgokMsZFadDUe2PsJYaJFHcg&s",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27059.ts"
  },
  {
    id: "86",
    name: "Hum TV",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/26988.ts"
  },
  {
    id: "87",
    name: "LTN Family",
    category: "PK | ENTERTAINMENT",
    logo: "https://yt3.googleusercontent.com/OJ_akXrXLvXNFQoj9Pmv4utVVTepdH3JLOuF9VAbraeimqOhZDeQs7ATlu64m1ZKf_rlv1dnZA=s900-c-k-c0x00ffffff-no-rj",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27064.ts"
  },
  {
    id: "88",
    name: "Green Entertainment",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27042.ts"
  },
  {
    id: "89",
    name: "SAB Entertainment",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27048.ts"
  },
  {
    id: "90",
    name: "ANN TV",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27055.ts"
  },
  {
    id: "91",
    name: "Play Tv",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "https://cdn22lhr.tamashaweb.com:8087/jazzauth/play-abr/playlist.m3u8"
  },
  {
    id: "92",
    name: "MUN Tv",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27062.ts"
  },
  {
    id: "93",
    name: "Apna Tv",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/142524.ts"
  },
  {
    id: "94",
    name: "PTV Home",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/36875.m3u8"
  },
  {
    id: "95",
    name: "BOL Entertainment",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27045.ts"
  },
  {
    id: "96",
    name: "Venus Entertainment",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27068.ts"
  },
  {
    id: "97",
    name: "SET Entertainment",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/147419.ts"
  },
  {
    id: "98",
    name: "ARY Zindagi",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27067.ts"
  },
  {
    id: "99",
    name: "TV ONE",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27066.ts"
  },
  {
    id: "100",
    name: "A Plus",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "https://cdn21lhr.tamashaweb.com:8087/jazzauth/Aplus-abr/playlist.m3u8"
  },
  {
    id: "101",
    name: "AJJ Entertainment",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/36871.ts"
  },
  {
    id: "102",
    name: "Express Entertainment",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/36872.ts"
  },
  {
    id: "103",
    name: "Hum Sitaray",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/36873.ts"
  },
  {
    id: "104",
    name: "Aur Life",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27052.ts"
  },
  {
    id: "105",
    name: "Hum Masala",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/36874.ts"
  },
  {
    id: "106",
    name: "ATV",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27065.ts"
  },
  {
    id: "107",
    name: "FILMAX",
    category: "PK | MOVIES",
    logo: "https://www.lyngsat.com/logo/tv/ff/filmax_pk.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27078.ts"
  },
  {
    id: "108",
    name: "A1 Tv",
    category: "PK | MOVIES",
    logo: "https://www.lyngsat.com/logo/tv/aa/a1-tv-pk.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/36870.m3u8"
  },
  {
    id: "109",
    name: "Falak Tv",
    category: "PK | MOVIES",
    logo: "https://www.virgoiptv.com/uploads/logos/1770723421_WhatsApp%20Image%202026-02-10%20at%201.07.04%20AM.jpeg",
    stream: "https://falak.rst.ae/index.m3u8"
  },
  {
    id: "110",
    name: "INPLUS",
    category: "PK | MOVIES",
    logo: "https://www.lyngsat.com/logo/tv/ii/inplus-pakistan-nl-pk.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/146923.ts"
  },
  {
    id: "111",
    name: "RAAVI TV",
    category: "PK | MOVIES",
    logo: "https://www.lyngsat.com/logo/tv/rr/raavi_tv.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27083.ts"
  },
    {
    id: "138",
    name: "HEY TV",
    category: "PK | ENTERTAINMENT",
    logo: "",
    stream: "http://tv8ott.online/live/03215838388/abc@786C/370883.m3u8"
  },
  {
    id: "139",
    name: "Cartoon Network HD",
    category: "PK | KIDS CARTOON",
    logo: "",
    stream: "http://tv8ott.online/live/03215838388/abc@786C/82.m3u8"
  }
},
  {
    id: "113",
    name: "Cartoon Network Lite",
    category: "PK | KIDS CARTOON",
    logo: "https://logos-world.net/wp-content/uploads/2021/09/Cartoon-Network-Symbol.png",
    stream: "https://s3.ideationtec.live/Cartoon_Network/Cartoon_Network.m3u8"
  },
  {
    id: "114",
    name: "Kids Zone FHD",
    category: "PK | KIDS CARTOON",
    logo: "https://animaxxpk.github.io/AnozenX-Tv/kidszone.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/84.ts"
  },
  {
    id: "115",
    name: "Minimax HD",
    category: "PK | KIDS CARTOON",
    logo: "https://animaxxpk.github.io/AnozenX-Tv/minimax.jpg",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/3015.m3u8"
  },
  {
    id: "116",
    name: "Planet Fun FHD",
    category: "PK | KIDS CARTOON",
    logo: "https://www.lyngsat.com/logo/tv/pp/planet-fun-uk.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/85.ts"
  },
  {
    id: "117",
    name: "HOORA Tv HD",
    category: "PK | KIDS CARTOON",
    logo: "https://www.lyngsat.com/logo/tv/hh/hoora-tv-uk.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/87.m3u8"
  },
  {
    id: "118",
    name: "Baby Tv FHD",
    category: "PK | KIDS CARTOON",
    logo: "https://upload.wikimedia.org/wikipedia/fr/4/45/BabyTV.png",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/144607.ts"
  },
  {
    id: "119",
    name: "8XM Music",
    category: "PK | MUSIC",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/185.ts"
  },
  {
    id: "120",
    name: "Jalwa Music",
    category: "PK | MUSIC",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/186.ts"
  },
  {
    id: "121",
    name: "ARY Music",
    category: "PK | MUSIC",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/17.ts"
  },
  {
    id: "122",
    name: "Kashish Tv",
    category: "PK | MUSIC",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27.ts"
  },
  {
    id: "123",
    name: "KTN Entertainment",
    category: "PK | REGIONAL",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27070.ts"
  },
  {
    id: "124",
    name: "KAY 2",
    category: "PK | REGIONAL",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27071.ts"
  },
  {
    id: "125",
    name: "KHYBER Tv",
    category: "PK | REGIONAL",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27072.ts"
  },
  {
    id: "126",
    name: "Pashto One",
    category: "PK | REGIONAL",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27073.m3u8"
  },
  {
    id: "127",
    name: "Filmazia",
    category: "PK | REGIONAL",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27080.ts"
  },
  {
    id: "128",
    name: "Filmazia Punjabi",
    category: "PK | REGIONAL",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27082.ts"
  },
  {
    id: "129",
    name: "Khyber News",
    category: "PK | REGIONAL",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/60.ts"
  },
  {
    id: "130",
    name: "PTV World",
    category: "PK | REGIONAL",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/65.ts"
  },
  {
    id: "131",
    name: "PTV Bolan",
    category: "PK | REGIONAL",
    logo: "",
    stream: "https://cdn23lhr.tamashaweb.com:8087/jazzauth/PTVBolan-abr/live/194H/chunks.m3u8"
  },
  {
    id: "132",
    name: "Sindh News",
    category: "PK | REGIONAL",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/213.ts"
  },
  {
    id: "133",
    name: "K21 News",
    category: "PK | REGIONAL",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/72.ts"
  },
  {
    id: "134",
    name: "KTN News",
    category: "PK | REGIONAL",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/103403.ts"
  },
  {
    id: "135",
    name: "Time News",
    category: "PK | REGIONAL",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/103402.ts"
  },
  {
    id: "136",
    name: "PTV National",
    category: "PK | REGIONAL",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/103402.ts"
  },
  {
    id: "137",
    name: "Sindh Tv",
    category: "PK | REGIONAL",
    logo: "",
    stream: "http://tv8ott.online:80/live/03215838388/abc@786C/27075.ts"
  }
];
