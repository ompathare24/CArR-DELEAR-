const IMG = {
  alto:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Maruti_Suzuki_Alto_K10_-_front.jpg",
  swift:"https://stimg.cardekho.com/images/cms/carnewsimages/editorimages/67251c46c2fe5.jpg",
  baleno:"https://commons.wikimedia.org/wiki/Special:Redirect/file/2022_Maruti_Suzuki_Baleno_Alpha_(India)_front_view.jpg",
  fronx:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Suzuki_Fronx_(front).jpg",
  brezza:"https://commons.wikimedia.org/wiki/Special:Redirect/file/2022_Suzuki_Brezza_ZXi%2B_front.jpg",
  grandvitara:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Maruti_Suzuki_Grand_Vitara_2022.jpg",
  ertiga:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Maruti_Suzuki_Ertiga_2022.jpg",
  xl6:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Maruti_Suzuki_XL6_(front).jpg",
  wagonr:"https://commons.wikimedia.org/wiki/Special:Redirect/file/2020_Maruti_Suzuki_Wagon_R_VXi_(O)_(India)_front_view.png",
  dzire:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Maruti_Suzuki_Dzire_VXi_VVT.JPG",
  venue:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Hyundai_Venue_1.6_GLS_Premium_2025_(2).jpg",
  exter:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Hyundai_Exter.jpg",
  creta:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Hyundai_Creta_1.5_GLS_Premium_2025_(8).jpg",
  verna:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Hyundai_Verna_2023.jpg",
  alcazar:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Hyundai_Alcazar_2024.jpg",
  i20:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Hyundai_i20_2020.jpg",
  grandioni:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Hyundai_Grand_i10_Nios.jpg",
  aura:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Hyundai_Aura.jpg",
  cretaev:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Hyundai_Creta_Electric.jpg",
  punch:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Tata_Punch_Adventure_2021.jpg",
  nexon:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Tata_Nexon_facelift.jpg",
  harrier:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Tata_Harrier_XZA%2B_2021.jpg",
  nexonev:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Tata_Nexon_EV.jpg",
  curvv:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Tata_Curvv.jpg",
  safari:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Tata_Safari_2021.jpg",
  tiago:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Tata_Tiago_2020.jpg",
  tigor:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Tata_Tigor_2020.jpg",
  xuv3xo:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Mahindra_XUV_3XO_2025.jpg",
  scorpio:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Mahindra_Scorpio-N_2022.jpg",
  thar:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Mahindra_Thar_2020.jpg",
  xuv700:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Mahindra_XUV700_2021.jpg",
  bolero:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Mahindra_Bolero.jpg",
  seltos:"https://commons.wikimedia.org/wiki/Special:Redirect/file/2023_Kia_Seltos_GT_Line_1.5_Front.jpg",
  sonet:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Kia_Sonet_01.jpg",
  carens:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Kia_Carens_2024_Model.jpg",
  innova:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Toyota_Innova_Hycross.jpg",
  fortuner:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Toyota_Fortuner_India.jpg",
  glanza:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Toyota_Glanza.jpg",
  city:"https://commons.wikimedia.org/wiki/Special:Redirect/file/HondaCityIndiaAsia.jpg",
  amaze:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Honda_Amaze_India_Side_View.jpg",
  elevate:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Honda_Elevate.jpg",
  kushaq:"https://commons.wikimedia.org/wiki/Special:Redirect/file/2021_%C5%A0koda_Kushaq_%28India%29_front_view.png",
  slavia:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Skoda_Slavia.jpg",
  taigun:"https://commons.wikimedia.org/wiki/Special:Redirect/file/VW_Taigun_India_2021_103844.jpg",
  virtus:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Volkswagen_Virtus_India.jpg",
  astor:"https://commons.wikimedia.org/wiki/Special:Redirect/file/MG_Astor.jpg",
  hector:"https://commons.wikimedia.org/wiki/Special:Redirect/file/MG_Hector.jpg",
  windsor:"https://commons.wikimedia.org/wiki/Special:Redirect/file/MG_Windsor_EV.jpg",
  magnite:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Nissan_Magnite.jpg",
  kiger:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Renault_Kiger.jpg"
};

const cars=[
{id:"alto",brand:"MARUTI SUZUKI",name:"Alto K10",type:"Hatchback",year:"2022+",price:3.699,fuel:"Petrol / CNG",trans:"5MT / AMT",engine:"1.0L",seats:5,drive:"FWD",features:["Compact city car","CNG option","AMT"],img:IMG.alto},
{id:"swift",brand:"MARUTI SUZUKI",name:"Swift",type:"Hatchback",year:"2024+",price:5.789,fuel:"Petrol / CNG",trans:"5MT / AMT",engine:"1.2L",seats:5,drive:"FWD",features:["Sporty hatchback","CNG option","6 airbags"],img:IMG.swift},
{id:"baleno",brand:"MARUTI SUZUKI",name:"Baleno",type:"Hatchback",year:"2022+",price:6.61,fuel:"Petrol / CNG",trans:"5MT / AMT",engine:"1.2L",seats:5,drive:"FWD",features:["Premium hatchback","HUD","360° camera"],img:IMG.baleno},
{id:"fronx",brand:"MARUTI SUZUKI",name:"Fronx",type:"Compact SUV",year:"2023+",price:6.85,fuel:"Petrol / CNG",trans:"5MT / AT / AGS",engine:"1.0T / 1.2L",seats:5,drive:"FWD",features:["Turbo option","CNG option","SUV coupe design"],img:IMG.fronx},
{id:"brezza",brand:"MARUTI SUZUKI",name:"Brezza",type:"SUV",year:"2022+",price:8.69,fuel:"Petrol / CNG",trans:"5MT / AT",engine:"1.5L",seats:5,drive:"FWD",features:["Sunroof","6 airbags","CNG option"],img:IMG.brezza},
{id:"grandvitara",brand:"MARUTI SUZUKI",name:"Grand Vitara",type:"SUV",year:"2022+",price:10.77,fuel:"Petrol / Hybrid",trans:"5MT / 6AT / e-CVT",engine:"1.5L",seats:5,drive:"FWD / AWD",features:["Strong hybrid","AWD option","Panoramic sunroof"],img:IMG.grandvitara},
{id:"ertiga",brand:"MARUTI SUZUKI",name:"Ertiga",type:"MPV",year:"2022+",price:8.84,fuel:"Petrol / CNG",trans:"5MT / 6AT",engine:"1.5L",seats:7,drive:"FWD",features:["7 seats","CNG option","Family MPV"],img:IMG.ertiga},
{id:"xl6",brand:"MARUTI SUZUKI",name:"XL6",type:"MPV",year:"2022+",price:11.61,fuel:"Petrol / CNG",trans:"5MT / 6AT",engine:"1.5L",seats:6,drive:"FWD",features:["Captain seats","6 seats","Premium MPV"],img:IMG.xl6},
{id:"wagonr",brand:"MARUTI SUZUKI",name:"WagonR",type:"Hatchback",year:"2022+",price:5.79,fuel:"Petrol / CNG",trans:"5MT / AMT",engine:"1.0L / 1.2L",seats:5,drive:"FWD",features:["Tall-boy cabin","CNG option","City friendly"],img:IMG.wagonr},
{id:"dzire",brand:"MARUTI SUZUKI",name:"Dzire",type:"Sedan",year:"2024+",price:6.79,fuel:"Petrol / CNG",trans:"5MT / AMT",engine:"1.2L",seats:5,drive:"FWD",features:["Compact sedan","Large boot","CNG option"],img:IMG.dzire},

{id:"venue",brand:"HYUNDAI",name:"Venue",type:"SUV",year:"2025+",price:7.999,fuel:"Petrol / Diesel",trans:"MT / AT / DCT",engine:"1.2L / 1.0T / 1.5D",seats:5,drive:"FWD",features:["Connected tech","6 airbags","Turbo options"],img:IMG.venue},
{id:"exter",brand:"HYUNDAI",name:"Exter",type:"Micro SUV",year:"2026",price:5.806,fuel:"Petrol / CNG",trans:"5MT / AMT",engine:"1.2L",seats:5,drive:"FWD",features:["Dashcam","Sunroof","CNG option"],img:IMG.exter},
{id:"creta",brand:"HYUNDAI",name:"Creta",type:"SUV",year:"2025+",price:10.907,fuel:"Petrol / Diesel",trans:"MT / IVT / AT / DCT",engine:"1.5L",seats:5,drive:"FWD",features:["Panoramic sunroof","ADAS","Connected tech"],img:IMG.creta},
{id:"verna",brand:"HYUNDAI",name:"Verna",type:"Sedan",year:"2026",price:10.992,fuel:"Petrol",trans:"MT / IVT / DCT",engine:"1.5L / 1.5T",seats:5,drive:"FWD",features:["Turbo option","ADAS","Ventilated seats"],img:IMG.verna},
{id:"alcazar",brand:"HYUNDAI",name:"Alcazar",type:"SUV",year:"2026",price:14.507,fuel:"Petrol / Diesel",trans:"MT / AT / DCT",engine:"1.5L",seats:"6/7",drive:"FWD",features:["6/7 seats","R18 alloys","ADAS"],img:IMG.alcazar},
{id:"i20",brand:"HYUNDAI",name:"i20",type:"Hatchback",year:"2026",price:7.04,fuel:"Petrol",trans:"5MT / IVT",engine:"1.2L",seats:5,drive:"FWD",features:["Premium hatch","Sunroof option","6 airbags"],img:IMG.i20},
{id:"grandioni",brand:"HYUNDAI",name:"Grand i10 NIOS",type:"Hatchback",year:"2026",price:5.98,fuel:"Petrol / CNG",trans:"5MT / AMT",engine:"1.2L",seats:5,drive:"FWD",features:["CNG option","AMT","City friendly"],img:IMG.grandioni},
{id:"aura",brand:"HYUNDAI",name:"Aura",type:"Sedan",year:"2026",price:6.0,fuel:"Petrol / CNG",trans:"5MT / AMT",engine:"1.2L",seats:5,drive:"FWD",features:["Compact sedan","CNG option","6 airbags"],img:IMG.aura},
{id:"cretaev",brand:"HYUNDAI",name:"Creta Electric",type:"Electric SUV",year:"2026",price:18.022,fuel:"Electric",trans:"Automatic",engine:"EV",seats:5,drive:"FWD",features:["Fast charging","EV powertrain","ADAS"],img:IMG.cretaev},

{id:"punch",brand:"TATA MOTORS",name:"Punch",type:"SUV",year:"2025+",price:6.13,fuel:"Petrol / CNG",trans:"5MT / AMT",engine:"1.2L",seats:5,drive:"FWD",features:["High ground clearance","CNG option","5-star safety heritage"],img:IMG.punch},
{id:"nexon",brand:"TATA MOTORS",name:"Nexon",type:"SUV",year:"2025+",price:8.0,fuel:"Petrol / Diesel / CNG",trans:"MT / AMT / DCT",engine:"1.2T / 1.5D",seats:5,drive:"FWD",features:["Turbo options","Sunroof","Connected tech"],img:IMG.nexon},
{id:"harrier",brand:"TATA MOTORS",name:"Harrier",type:"SUV",year:"2025+",price:14.0,fuel:"Diesel",trans:"MT / AT",engine:"2.0L",seats:5,drive:"FWD",features:["ADAS","Panoramic sunroof","Large SUV"],img:IMG.harrier},
{id:"nexonev",brand:"TATA MOTORS",name:"Nexon EV",type:"Electric SUV",year:"2025+",price:12.49,fuel:"Electric",trans:"Automatic",engine:"EV",seats:5,drive:"FWD",features:["Long-range EV","Fast charging","V2L"],img:IMG.nexonev},
{id:"curvv",brand:"TATA MOTORS",name:"Curvv",type:"SUV Coupe",year:"2025+",price:9.99,fuel:"Petrol / Diesel / Electric",trans:"MT / DCT / AT",engine:"1.2T / 1.5D / EV",seats:5,drive:"FWD",features:["SUV coupe","EV option","ADAS"],img:IMG.curvv},
{id:"safari",brand:"TATA MOTORS",name:"Safari",type:"SUV",year:"2025+",price:15.49,fuel:"Diesel",trans:"MT / AT",engine:"2.0L",seats:"6/7",drive:"FWD",features:["6/7 seats","ADAS","Panoramic sunroof"],img:IMG.safari},
{id:"tiago",brand:"TATA MOTORS",name:"Tiago",type:"Hatchback",year:"2025+",price:5.0,fuel:"Petrol / CNG",trans:"5MT / AMT",engine:"1.2L",seats:5,drive:"FWD",features:["CNG option","AMT","City hatch"],img:IMG.tiago},
{id:"tigor",brand:"TATA MOTORS",name:"Tigor",type:"Sedan",year:"2025+",price:6.0,fuel:"Petrol / CNG",trans:"5MT / AMT",engine:"1.2L",seats:5,drive:"FWD",features:["Compact sedan","CNG option","Large boot"],img:IMG.tigor},

{id:"xuv3xo",brand:"MAHINDRA",name:"XUV 3XO",type:"Compact SUV",year:"2024+",price:8.394,fuel:"Petrol / Diesel",trans:"MT / AT",engine:"1.2T / 1.5D",seats:5,drive:"FWD",features:["Panoramic sunroof","ADAS","Turbo engines"],img:IMG.xuv3xo},
{id:"scorpio",brand:"MAHINDRA",name:"Scorpio-N",type:"SUV",year:"2025+",price:13.49,fuel:"Petrol / Diesel",trans:"MT / AT",engine:"2.0T / 2.2D",seats:7,drive:"RWD / 4WD",features:["Body-on-frame","4XPLOR 4WD","7 seats"],img:IMG.scorpio},
{id:"thar",brand:"MAHINDRA",name:"Thar",type:"SUV",year:"2025+",price:11.5,fuel:"Petrol / Diesel",trans:"MT / AT",engine:"1.5D / 2.0T / 2.2D",seats:"4/5",drive:"RWD / 4WD",features:["4X4 option","Off-road focused","Iconic design"],img:IMG.thar},
{id:"xuv700",brand:"MAHINDRA",name:"XUV700",type:"SUV",year:"2025+",price:14.49,fuel:"Petrol / Diesel",trans:"MT / AT",engine:"2.0T / 2.2D",seats:"5/7",drive:"FWD / AWD",features:["ADAS","Panoramic sunroof","7 seats"],img:IMG.xuv700},
{id:"bolero",brand:"MAHINDRA",name:"Bolero",type:"SUV",year:"2025+",price:9.79,fuel:"Diesel",trans:"Manual",engine:"1.5D",seats:7,drive:"RWD",features:["Rugged utility","7 seats","High durability"],img:IMG.bolero},

{id:"seltos",brand:"KIA",name:"Seltos",type:"SUV",year:"2025+",price:11.13,fuel:"Petrol / Diesel",trans:"MT / AT / DCT",engine:"1.5L / 1.5T",seats:5,drive:"FWD",features:["ADAS","Panoramic sunroof","Connected tech"],img:IMG.seltos},
{id:"sonet",brand:"KIA",name:"Sonet",type:"Compact SUV",year:"2025+",price:7.99,fuel:"Petrol / Diesel",trans:"MT / AT / DCT",engine:"1.2L / 1.0T / 1.5D",seats:5,drive:"FWD",features:["Ventilated seats","ADAS","Compact SUV"],img:IMG.sonet},
{id:"carens",brand:"KIA",name:"Carens",type:"MPV",year:"2025+",price:10.6,fuel:"Petrol / Diesel",trans:"MT / AT / DCT",engine:"1.5L",seats:"6/7",drive:"FWD",features:["6/7 seats","Family MPV","Turbo option"],img:IMG.carens},

{id:"innova",brand:"TOYOTA",name:"Innova HyCross",type:"MPV",year:"2025+",price:19.17,fuel:"Petrol / Hybrid",trans:"CVT / e-CVT",engine:"2.0L",seats:"7/8",drive:"FWD",features:["Strong hybrid","7/8 seats","Premium MPV"],img:IMG.innova},
{id:"fortuner",brand:"TOYOTA",name:"Fortuner",type:"SUV",year:"2025+",price:34.16,fuel:"Petrol / Diesel",trans:"MT / AT",engine:"2.7P / 2.8D",seats:7,drive:"RWD / 4WD",features:["4WD option","7 seats","Body-on-frame"],img:IMG.fortuner},
{id:"glanza",brand:"TOYOTA",name:"Glanza",type:"Hatchback",year:"2025+",price:6.9,fuel:"Petrol / CNG",trans:"5MT / AMT",engine:"1.2L",seats:5,drive:"FWD",features:["CNG option","Premium hatch","City friendly"],img:IMG.glanza},

{id:"city",brand:"HONDA",name:"City",type:"Sedan",year:"2025+",price:12.28,fuel:"Petrol / Hybrid",trans:"MT / CVT",engine:"1.5L",seats:5,drive:"FWD",features:["Hybrid option","Honda Sensing","Large boot"],img:IMG.city},
{id:"amaze",brand:"HONDA",name:"Amaze",type:"Sedan",year:"2025+",price:8.0,fuel:"Petrol",trans:"MT / CVT",engine:"1.2L",seats:5,drive:"FWD",features:["Compact sedan","CVT","Family focused"],img:IMG.amaze},
{id:"elevate",brand:"HONDA",name:"Elevate",type:"SUV",year:"2025+",price:11.91,fuel:"Petrol",trans:"MT / CVT",engine:"1.5L",seats:5,drive:"FWD",features:["Honda Sensing","Large boot","SUV stance"],img:IMG.elevate},

{id:"kushaq",brand:"SKODA",name:"Kushaq",type:"SUV",year:"2025+",price:10.99,fuel:"Petrol",trans:"MT / AT",engine:"1.0T / 1.5T",seats:5,drive:"FWD",features:["Turbo petrol","European dynamics","6 airbags"],img:IMG.kushaq},
{id:"slavia",brand:"SKODA",name:"Slavia",type:"Sedan",year:"2025+",price:10.69,fuel:"Petrol",trans:"MT / AT",engine:"1.0T / 1.5T",seats:5,drive:"FWD",features:["Turbo petrol","Large boot","European dynamics"],img:IMG.slavia},

{id:"taigun",brand:"VOLKSWAGEN",name:"Taigun",type:"SUV",year:"2025+",price:11.7,fuel:"Petrol",trans:"MT / AT",engine:"1.0T / 1.5T",seats:5,drive:"FWD",features:["Turbo petrol","German engineering","6 airbags"],img:IMG.taigun},
{id:"virtus",brand:"VOLKSWAGEN",name:"Virtus",type:"Sedan",year:"2025+",price:11.56,fuel:"Petrol",trans:"MT / AT",engine:"1.0T / 1.5T",seats:5,drive:"FWD",features:["Turbo petrol","Large boot","German engineering"],img:IMG.virtus},

{id:"astor",brand:"MG",name:"Astor",type:"SUV",year:"2025+",price:10.0,fuel:"Petrol",trans:"MT / CVT",engine:"1.5L / 1.3T",seats:5,drive:"FWD",features:["ADAS","AI assistant","Panoramic sunroof"],img:IMG.astor},
{id:"hector",brand:"MG",name:"Hector",type:"SUV",year:"2025+",price:11.99,fuel:"Petrol / Diesel",trans:"MT / CVT",engine:"1.5T / 2.0D",seats:5,drive:"FWD",features:["Large infotainment","ADAS","Panoramic sunroof"],img:IMG.hector},
{id:"windsor",brand:"MG",name:"Windsor EV",type:"Electric Crossover",year:"2025+",price:14.0,fuel:"Electric",trans:"Automatic",engine:"EV",seats:5,drive:"FWD",features:["EV","Premium cabin","Connected tech"],img:IMG.windsor},

{id:"magnite",brand:"NISSAN",name:"Magnite",type:"Compact SUV",year:"2025+",price:6.0,fuel:"Petrol",trans:"MT / AMT / CVT",engine:"1.0L / 1.0T",seats:5,drive:"FWD",features:["Turbo option","Compact SUV","Value focused"],img:IMG.magnite},
{id:"kiger",brand:"RENAULT",name:"Kiger",type:"Compact SUV",year:"2025+",price:6.0,fuel:"Petrol",trans:"MT / AMT / CVT",engine:"1.0L / 1.0T",seats:5,drive:"FWD",features:["Turbo option","Compact SUV","Large boot"],img:IMG.kiger}
];


// Expanded India catalogue — indicative specs/budgets for demo purposes.
// Replace prices/specs with dealer/manufacturer feeds before commercial launch.
const extraCars=[
{id:"celerio",brand:"MARUTI SUZUKI",name:"Celerio",type:"Hatchback",year:"2025+",price:5.64,fuel:"Petrol / CNG",trans:"5MT / AMT",engine:"1.0L",seats:5,drive:"FWD",features:["CNG option","AMT","City friendly"],img:IMG.swift},
{id:"ignis",brand:"MARUTI SUZUKI",name:"Ignis",type:"Hatchback",year:"2025+",price:5.35,fuel:"Petrol",trans:"5MT / AMT",engine:"1.2L",seats:5,drive:"FWD",features:["Compact footprint","AMT","Tall seating"],img:IMG.baleno},
{id:"spresso",brand:"MARUTI SUZUKI",name:"S-Presso",type:"Hatchback",year:"2025+",price:3.49,fuel:"Petrol / CNG",trans:"5MT / AMT",engine:"1.0L",seats:5,drive:"FWD",features:["High seating","CNG option","Easy city driving"],img:IMG.alto},
{id:"jimny",brand:"MARUTI SUZUKI",name:"Jimny",type:"SUV",year:"2025+",price:12.76,fuel:"Petrol",trans:"5MT / 4AT",engine:"1.5L",seats:4,drive:"4WD",features:["4WD","Ladder frame","Off-road focused"],img:IMG.brezza},
{id:"invicto",brand:"MARUTI SUZUKI",name:"Invicto",type:"MPV",year:"2025+",price:24.79,fuel:"Hybrid",trans:"e-CVT",engine:"2.0L Hybrid",seats:7,drive:"FWD",features:["7 seats","Hybrid","Premium MPV"],img:IMG.ertiga},
{id:"evitara",brand:"MARUTI SUZUKI",name:"e Vitara",type:"Electric SUV",year:"2026",price:15.99,fuel:"Electric",trans:"Automatic",engine:"EV",seats:5,drive:"FWD / AWD",features:["Electric SUV","Fast charging","Connected tech"],img:IMG.grandvitara},
{id:"victoris",brand:"MARUTI SUZUKI",name:"VictorIS",type:"SUV",year:"2025+",price:10.49,fuel:"Petrol / Hybrid",trans:"MT / AT / e-CVT",engine:"1.5L",seats:5,drive:"FWD / AWD",features:["Hybrid option","Panoramic roof","ADAS"],img:IMG.grandvitara},
{id:"i20n",brand:"HYUNDAI",name:"i20 N Line",type:"Hatchback",year:"2025+",price:9.2,fuel:"Petrol",trans:"6MT / 7DCT",engine:"1.0 Turbo",seats:5,drive:"FWD",features:["Turbo engine","Sporty styling","DCT option"],img:IMG.i20},
{id:"venue_n",brand:"HYUNDAI",name:"Venue N Line",type:"Compact SUV",year:"2025+",price:12.0,fuel:"Petrol",trans:"6MT / 7DCT",engine:"1.0 Turbo",seats:5,drive:"FWD",features:["Turbo","Sport suspension","Connected tech"],img:IMG.venue},
{id:"ioniq5",brand:"HYUNDAI",name:"IONIQ 5",type:"Electric SUV",year:"2025+",price:46.05,fuel:"Electric",trans:"Automatic",engine:"EV",seats:5,drive:"RWD / AWD",features:["800V charging","Flat floor","Premium EV"],img:IMG.cretaev},
{id:"tiagoev",brand:"TATA MOTORS",name:"Tiago EV",type:"Electric Hatchback",year:"2025+",price:7.99,fuel:"Electric",trans:"Automatic",engine:"EV",seats:5,drive:"FWD",features:["City EV","Fast charging","Multiple battery options"],img:IMG.tiago},
{id:"altroz",brand:"TATA MOTORS",name:"Altroz",type:"Hatchback",year:"2025+",price:6.89,fuel:"Petrol / CNG / Diesel",trans:"MT / AMT",engine:"1.2L / 1.5D",seats:5,drive:"FWD",features:["Premium hatch","CNG option","6 airbags"],img:IMG.tiago},
{id:"altrozev",brand:"TATA MOTORS",name:"Altroz EV",type:"Electric Hatchback",year:"2026",price:12.0,fuel:"Electric",trans:"Automatic",engine:"EV",seats:5,drive:"FWD",features:["Electric hatchback","Fast charging","Connected tech"],img:IMG.nexonev},
{id:"tiagocng",brand:"TATA MOTORS",name:"Tiago iCNG",type:"Hatchback",year:"2025+",price:6.0,fuel:"CNG",trans:"5MT",engine:"1.2L",seats:5,drive:"FWD",features:["Factory CNG","Large cabin","City focused"],img:IMG.tiago},
{id:"sierra",brand:"TATA MOTORS",name:"Sierra",type:"SUV",year:"2026",price:11.0,fuel:"Petrol / Diesel / Electric",trans:"MT / AT / Automatic",engine:"1.5L / EV",seats:5,drive:"FWD",features:["New-generation SUV","Panoramic roof","Multiple powertrains"],img:IMG.harrier},
{id:"harrierev",brand:"TATA MOTORS",name:"Harrier EV",type:"Electric SUV",year:"2025+",price:21.49,fuel:"Electric",trans:"Automatic",engine:"EV",seats:5,drive:"RWD / AWD",features:["Dual-motor option","ADAS","Fast charging"],img:IMG.harrier},
{id:"tharroxx",brand:"MAHINDRA",name:"Thar Roxx",type:"SUV",year:"2025+",price:12.99,fuel:"Petrol / Diesel",trans:"MT / AT",engine:"2.0T / 2.2D",seats:5,drive:"RWD / 4WD",features:["5-door SUV","4WD option","ADAS"],img:IMG.thar},
{id:"scorpioclassic",brand:"MAHINDRA",name:"Scorpio Classic",type:"SUV",year:"2025+",price:13.62,fuel:"Diesel",trans:"6MT",engine:"2.2L",seats:7,drive:"RWD",features:["Body-on-frame","7 seats","Rugged SUV"],img:IMG.scorpio},
{id:"boleroneo",brand:"MAHINDRA",name:"Bolero Neo",type:"SUV",year:"2025+",price:9.95,fuel:"Diesel",trans:"5MT",engine:"1.5L",seats:7,drive:"RWD",features:["7 seats","Rugged build","Rear-wheel drive"],img:IMG.bolero},
{id:"be6",brand:"MAHINDRA",name:"BE 6",type:"Electric SUV",year:"2025+",price:18.9,fuel:"Electric",trans:"Automatic",engine:"EV",seats:5,drive:"RWD",features:["Born-electric","Fast charging","ADAS"],img:IMG.xuv700},
{id:"xev9e",brand:"MAHINDRA",name:"XEV 9e",type:"Electric SUV",year:"2025+",price:21.9,fuel:"Electric",trans:"Automatic",engine:"EV",seats:5,drive:"RWD",features:["Premium EV","Large displays","Fast charging"],img:IMG.xuv700},
{id:"syros",brand:"KIA",name:"Syros",type:"Compact SUV",year:"2025+",price:9.0,fuel:"Petrol / Diesel",trans:"MT / AT",engine:"1.0T / 1.5D",seats:5,drive:"FWD",features:["Boxy design","Panoramic roof","Connected tech"],img:IMG.sonet},
{id:"carensclavis",brand:"KIA",name:"Carens Clavis",type:"MPV",year:"2025+",price:11.5,fuel:"Petrol / Diesel",trans:"MT / AT / DCT",engine:"1.5L",seats:7,drive:"FWD",features:["7 seats","Premium MPV","ADAS"],img:IMG.carens},
{id:"ev6",brand:"KIA",name:"EV6",type:"Electric Crossover",year:"2025+",price:65.0,fuel:"Electric",trans:"Automatic",engine:"EV",seats:5,drive:"RWD / AWD",features:["800V charging","Performance EV","Premium interior"],img:IMG.seltos},
{id:"ev9",brand:"KIA",name:"EV9",type:"Electric SUV",year:"2025+",price:70.0,fuel:"Electric",trans:"Automatic",engine:"EV",seats:"6/7",drive:"RWD / AWD",features:["3-row EV","Luxury cabin","Fast charging"],img:IMG.carens},
{id:"rumion",brand:"TOYOTA",name:"Rumion",type:"MPV",year:"2025+",price:10.44,fuel:"Petrol / CNG",trans:"5MT / 6AT",engine:"1.5L",seats:7,drive:"FWD",features:["7 seats","CNG option","Family MPV"],img:IMG.innova},
{id:"hyryder",brand:"TOYOTA",name:"Urban Cruiser Hyryder",type:"SUV",year:"2025+",price:11.34,fuel:"Petrol / Hybrid / CNG",trans:"MT / AT / e-CVT",engine:"1.5L",seats:5,drive:"FWD / AWD",features:["Strong hybrid","AWD option","Panoramic roof"],img:IMG.grandvitara},
{id:"camry",brand:"TOYOTA",name:"Camry",type:"Sedan",year:"2025+",price:48.0,fuel:"Hybrid",trans:"e-CVT",engine:"2.5L Hybrid",seats:5,drive:"FWD",features:["Hybrid sedan","Premium cabin","ADAS"],img:IMG.city},
{id:"vellfire",brand:"TOYOTA",name:"Vellfire",type:"MPV",year:"2025+",price:120.0,fuel:"Hybrid",trans:"e-CVT",engine:"2.5L Hybrid",seats:7,drive:"FWD",features:["Luxury MPV","Captain seats","Hybrid"],img:IMG.innova},
{id:"hilux",brand:"TOYOTA",name:"Hilux",type:"Pickup",year:"2025+",price:30.4,fuel:"Diesel",trans:"6MT / 6AT",engine:"2.8L",seats:5,drive:"4WD",features:["4WD","Pickup bed","Off-road capable"],img:IMG.fortuner},
{id:"cityehev",brand:"HONDA",name:"City e:HEV",type:"Sedan",year:"2025+",price:19.0,fuel:"Hybrid",trans:"e-CVT",engine:"1.5L Hybrid",seats:5,drive:"FWD",features:["Strong hybrid","ADAS","Premium sedan"],img:IMG.city},
{id:"kodiaq",brand:"SKODA",name:"Kodiaq",type:"SUV",year:"2025+",price:46.0,fuel:"Petrol",trans:"7DSG",engine:"2.0 TSI",seats:7,drive:"AWD",features:["7 seats","AWD","Premium SUV"],img:IMG.kushaq},
{id:"kylaq",brand:"SKODA",name:"Kylaq",type:"Compact SUV",year:"2025+",price:7.89,fuel:"Petrol",trans:"6MT / 6AT",engine:"1.0 TSI",seats:5,drive:"FWD",features:["Turbo petrol","Compact SUV","European platform"],img:IMG.kushaq},
{id:"superb",brand:"SKODA",name:"Superb",type:"Sedan",year:"2025+",price:54.0,fuel:"Petrol",trans:"7DSG",engine:"2.0 TSI",seats:5,drive:"FWD",features:["Executive sedan","Large cabin","Premium features"],img:IMG.slavia},
{id:"tiguan",brand:"VOLKSWAGEN",name:"Tiguan",type:"SUV",year:"2025+",price:46.0,fuel:"Petrol",trans:"7DSG",engine:"2.0 TSI",seats:5,drive:"FWD / AWD",features:["Premium SUV","DSG","Connected features"],img:IMG.taigun},
{id:"cometev",brand:"MG",name:"Comet EV",type:"Electric Hatchback",year:"2025+",price:7.0,fuel:"Electric",trans:"Automatic",engine:"EV",seats:4,drive:"RWD",features:["Ultra compact EV","City focused","Connected tech"],img:IMG.windsor},
{id:"zsev",brand:"MG",name:"ZS EV",type:"Electric SUV",year:"2025+",price:18.98,fuel:"Electric",trans:"Automatic",engine:"EV",seats:5,drive:"FWD",features:["Electric SUV","Fast charging","Premium cabin"],img:IMG.windsor},
{id:"gloster",brand:"MG",name:"Gloster",type:"SUV",year:"2025+",price:41.0,fuel:"Diesel",trans:"8AT",engine:"2.0 Twin Turbo",seats:7,drive:"4WD",features:["7 seats","4WD","ADAS"],img:IMG.hector},
{id:"m9",brand:"MG",name:"M9 EV",type:"Electric MPV",year:"2025+",price:69.0,fuel:"Electric",trans:"Automatic",engine:"EV",seats:7,drive:"FWD",features:["Luxury EV MPV","Captain seats","Premium cabin"],img:IMG.windsor},
{id:"xtrail",brand:"NISSAN",name:"X-Trail",type:"SUV",year:"2025+",price:49.92,fuel:"Petrol",trans:"CVT",engine:"1.5 Turbo",seats:7,drive:"FWD / AWD",features:["7 seats","Hybrid technology","Premium SUV"],img:IMG.magnite},
{id:"kwid",brand:"RENAULT",name:"Kwid",type:"Hatchback",year:"2025+",price:4.7,fuel:"Petrol",trans:"5MT / AMT",engine:"1.0L",seats:5,drive:"FWD",features:["Compact city car","AMT","High ground clearance"],img:IMG.kiger},
{id:"triber",brand:"RENAULT",name:"Triber",type:"MPV",year:"2025+",price:6.0,fuel:"Petrol",trans:"5MT / AMT",engine:"1.0L",seats:7,drive:"FWD",features:["7 seats","Flexible seating","Compact MPV"],img:IMG.kiger},
{id:"duster",brand:"RENAULT",name:"Duster",type:"SUV",year:"2025+",price:10.0,fuel:"Petrol / Hybrid",trans:"MT / CVT / Automatic",engine:"1.3T / Hybrid",seats:5,drive:"FWD / AWD",features:["SUV heritage","Hybrid option","AWD option"],img:IMG.kiger}
];
cars.push(...extraCars);

const brands=[
{key:"maruti",name:"MARUTI SUZUKI",logo:"https://cdn.simpleicons.org/suzuki/0b1220",ids:["alto","swift","baleno","fronx","brezza","grandvitara","ertiga","xl6","wagonr","dzire","celerio","ignis","spresso","jimny","invicto","evitara","victoris"]},
{key:"hyundai",name:"HYUNDAI",logo:"https://cdn.simpleicons.org/hyundai/0b1220",ids:["venue","exter","creta","verna","alcazar","i20","grandioni","aura","cretaev","i20n","venue_n","ioniq5"]},
{key:"tata",name:"TATA MOTORS",logo:"https://cdn.simpleicons.org/tata/0b1220",ids:["punch","nexon","harrier","nexonev","curvv","safari","tiago","tigor","tiagoev","altroz","altrozev","tiagocng","sierra","harrierev"]},
{key:"mahindra",name:"MAHINDRA",logo:"https://cdn.simpleicons.org/mahindra/0b1220",ids:["xuv3xo","scorpio","thar","xuv700","bolero","tharroxx","scorpioclassic","boleroneo","be6","xev9e"]},
{key:"kia",name:"KIA",logo:"https://cdn.simpleicons.org/kia/0b1220",ids:["seltos","sonet","carens","syros","carensclavis","ev6","ev9"]},
{key:"toyota",name:"TOYOTA",logo:"https://cdn.simpleicons.org/toyota/0b1220",ids:["innova","fortuner","glanza","rumion","hyryder","camry","vellfire","hilux"]},
{key:"honda",name:"HONDA",logo:"https://cdn.simpleicons.org/honda/0b1220",ids:["city","amaze","elevate","cityehev"]},
{key:"skoda",name:"SKODA",logo:"https://cdn.simpleicons.org/skoda/0b1220",ids:["kushaq","slavia","kodiaq","kylaq","superb"]},
{key:"volkswagen",name:"VOLKSWAGEN",logo:"https://cdn.simpleicons.org/volkswagen/0b1220",ids:["taigun","virtus","tiguan"]},
{key:"mg",name:"MG",logo:"https://cdn.simpleicons.org/mg/0b1220",ids:["astor","hector","windsor","cometev","zsev","gloster","m9"]},
{key:"nissan",name:"NISSAN",logo:"https://cdn.simpleicons.org/nissan/0b1220",ids:["magnite","xtrail"]},
{key:"renault",name:"RENAULT",logo:"https://cdn.simpleicons.org/renault/0b1220",ids:["kiger","kwid","triber","duster"]}
];

function moneyLakh(v){return "₹"+Number(v).toFixed(2)+" Lakh"}
function getCar(id){return cars.find(c=>c.id===id)||cars[0]}

const orbit=document.querySelector("#brandOrbit");
const orbitWrap=document.querySelector("#brands");
const hover=document.querySelector("#brandHover");
const hoverImg=document.querySelector("#brandHoverImg");
const hoverName=document.querySelector("#brandHoverName");

if(orbit){
  brands.forEach(b=>{
    const t=document.createElement("div");
    t.className="brand-tile";
    t.dataset.brand=b.key;
    t.innerHTML=`<img src="${b.logo}" alt="${b.name} logo"><span class="brand-label">${b.name}</span>`;
    t.addEventListener("click",()=>location.href=`brand.html?brand=${encodeURIComponent(b.key)}`);
    orbit.appendChild(t);
  });
  const tiles=[...orbit.querySelectorAll(".brand-tile")];
  let angle=0,dir=1,boost=0,target=0,hot=null;

  function renderBrands(){
    const w=orbit.clientWidth,h=orbit.clientHeight,rx=w*.45,ry=h*.29;
    boost+=(target-boost)*.08;
    angle+=(.0028+boost)*dir;
    tiles.forEach((t,i)=>{
      const a=i/tiles.length*Math.PI*2+angle,s=Math.sin(a),c=Math.cos(a),d=(s+1)/2;
      const scale=.74+d*.27+(hot===t?.14:0);
      t.style.transform=`translate3d(${c*rx}px,${s*ry}px,0) rotate(${s*5}deg) scale(${scale})`;
      t.style.zIndex=1000+Math.round(d*1000)+(hot===t?5000:0);
    });
    requestAnimationFrame(renderBrands);
  }
  renderBrands();

  orbitWrap.addEventListener("pointermove",e=>{
    const r=orbitWrap.getBoundingClientRect(),x=(e.clientX-r.left)/r.width;
    dir=x<.5?1:-1;
    target=.0015+Math.abs(x-.5)*.008;
  });
  orbitWrap.addEventListener("pointerleave",()=>{
    target=0;hot=null;hover.classList.remove("show");
  });
  orbit.addEventListener("pointerover",e=>{
    const t=e.target.closest(".brand-tile"); if(!t)return;
    const b=brands.find(x=>x.key===t.dataset.brand); if(!b)return;
    hot=t; hoverImg.src=b.logo; hoverName.textContent=b.name; hover.classList.add("show");
  });
  orbit.addEventListener("pointerout",e=>{
    const t=e.target.closest(".brand-tile"),n=e.relatedTarget?.closest?.(".brand-tile");
    if(t&&t!==n){hot=null;hover.classList.remove("show")}
  });
}

/* Featured car grid */
const carGrid=document.querySelector("#carGrid");
if(carGrid){
  const featured=["swift","fronx","creta","nexon","xuv3xo","seltos","innova","city","kushaq","taigun","nexonev","windsor"];
  featured.map(getCar).forEach(c=>{
    const el=document.createElement("article");
    el.className="car-card";
    el.innerHTML=`<div class="car-photo"><img src="${c.img}" alt="${c.brand} ${c.name}" loading="lazy"><span class="tag">${c.type.toUpperCase()}</span></div>
      <div class="car-info"><div class="brandline">${c.brand}</div><h3>${c.name}</h3>
      <div class="price">From ${moneyLakh(c.price)}*</div><div class="meta">${c.year} • ${c.fuel} • ${c.trans}</div>
      <button data-open="${c.id}">VIEW DETAILS →</button></div>`;
    carGrid.appendChild(el);
  });
}

/* Modal */
const modal=document.querySelector("#modal");
if(modal){
  const modalImg=document.querySelector("#modalImg"),modalBrand=document.querySelector("#modalBrand"),modalName=document.querySelector("#modalName"),modalPrice=document.querySelector("#modalPrice"),modalSpecs=document.querySelector("#modalSpecs");
  function openModal(car){
    modalImg.src=car.img;modalBrand.textContent=car.brand;modalName.textContent=car.name;modalPrice.textContent=moneyLakh(car.price)+"*";
    modalSpecs.textContent=`${car.year} • ${car.type} • ${car.fuel} • ${car.trans} • ${car.engine} • ${car.seats} seats • ${car.drive}. ${car.features.join(" • ")}`;
    modal.classList.add("open");document.body.style.overflow="hidden";
  }
  function closeModal(){modal.classList.remove("open");document.body.style.overflow=""}
  document.querySelector("#closeModal").onclick=closeModal;
  modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
  if(carGrid)carGrid.addEventListener("click",e=>{const b=e.target.closest("[data-open]");if(b)openModal(getCar(b.dataset.open))});
}

/* Calculator */
const oldCar=document.querySelector("#oldCar"),newCar=document.querySelector("#newCar");
if(oldCar&&newCar){
  cars.forEach(c=>{
    oldCar.insertAdjacentHTML("beforeend",`<option value="${c.id}">${c.brand} — ${c.name}</option>`);
    newCar.insertAdjacentHTML("beforeend",`<option value="${c.id}">${c.brand} — ${c.name}</option>`);
  });
  oldCar.value="swift";newCar.value="venue";
  function calc(){
    const old=getCar(oldCar.value),fresh=getCar(newCar.value);
    const year=Math.min(2026,Math.max(2005,Number(document.querySelector("#oldYear").value)||2019));
    const km=Math.max(0,Number(document.querySelector("#oldKm").value)||0);
    const condition=Number(document.querySelector("#condition").value),cityFactor=Number(document.querySelector("#city").value);
    const age=Math.max(0,2026-year),ageFactor=Math.max(.18,Math.pow(.82,age)),kmFactor=Math.max(.72,1-Math.max(0,km-30000)/350000);
    const oldValue=Math.max(.35,old.price*ageFactor*kmFactor*condition),onRoad=fresh.price*cityFactor,gap=Math.max(0,onRoad-oldValue);
    document.querySelector("#resultImg").src=fresh.img;document.querySelector("#resultName").textContent=fresh.name;
    document.querySelector("#oldValue").textContent=moneyLakh(oldValue);document.querySelector("#roadValue").textContent=moneyLakh(onRoad);document.querySelector("#gapValue").textContent=moneyLakh(gap);
  }
  document.querySelector("#calculate").addEventListener("click",calc);calc();
}
