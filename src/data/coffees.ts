export interface CoffeeGrade {
  id: string;
  name: string;
  species: 'Arabica' | 'Robusta';
  grade: string;
  origin: string;
  altitude: string;
  screenSize: string;
  process: string;
  moisture: string;
  scaScore?: string;
  harvestWindow: string;
  cupProfile: string;
  tastingNotes: string[];
  packaging: string;
  minimumOrder: string;
  description: string;
  badge?: string;
}

export const coffeeGrades: CoffeeGrade[] = [
  {
    id: 'bugisu-aa',
    name: 'Mount Elgon Bugisu AA',
    species: 'Arabica',
    grade: 'Grade AA (Specialty Export)',
    origin: 'Mount Elgon Slopes, Eastern Uganda (Sipi Falls & Kapchorwa)',
    altitude: '1,600 to 2,200 MASL',
    screenSize: 'Screen 17 / 18 (Retained 90%+)',
    process: 'Fully Washed, Sun-Dried on Raised African Beds',
    moisture: '10.8% to 11.5%',
    scaScore: '84.5 to 86.0',
    harvestWindow: 'Main: September to February | Fly: May to July',
    cupProfile: 'Bright phosphoric citrus acidity, blackcurrant, dark chocolate, velvety syrupy mouthfeel, and sweet floral jasmine finish.',
    tastingNotes: ['Blackcurrant', 'Meyer Lemon', 'Dark Chocolate', 'Jasmine'],
    packaging: '60kg GrainPro lined jute bags, vacuum pack available on request',
    minimumOrder: '1 x 20ft FCL (19.2 MT / 320 bags) or sample LCL',
    description: 'The pinnacle of East African Arabica. Cultivated in volcanic soil on the high slopes of Mount Elgon by multi-generational family smallholders. Each lot undergoes selective hand-picking, double fermentation washing, and meticulous optical color sorting in our Kampala export mill.',
    badge: 'Specialty Flagship'
  },
  {
    id: 'bugisu-a',
    name: 'Mount Elgon Bugisu A',
    species: 'Arabica',
    grade: 'Grade A (Premium Export)',
    origin: 'Mount Elgon Region, Eastern Uganda (Mbale & Manafwa)',
    altitude: '1,500 to 1,950 MASL',
    screenSize: 'Screen 15 / 16',
    process: 'Fully Washed, Central Wet Mill Fermentation',
    moisture: '11.0% to 11.8%',
    scaScore: '82.5 to 84.0',
    harvestWindow: 'October to February',
    cupProfile: 'Clean sweet cup with notes of red apple, brown sugar caramel, roasted hazelnut, and balanced medium acidity.',
    tastingNotes: ['Red Apple', 'Brown Sugar', 'Hazelnut', 'Caramel'],
    packaging: '60kg jute bags with GrainPro barrier',
    minimumOrder: '1 x 20ft FCL (320 bags)',
    description: 'A versatile high-altitude washed Arabica prized by commercial specialty roasters worldwide for its balance, consistent bean density, and exceptional roasting uniformity across medium and dark profiles.',
  },
  {
    id: 'peaberry',
    name: 'Bugisu Peaberry (PB)',
    species: 'Arabica',
    grade: 'Grade PB (Rare Micro-Lot)',
    origin: 'Mount Elgon Highlands, Eastern Uganda',
    altitude: '1,750 to 2,200 MASL',
    screenSize: 'Screen PB (Round Oval Bean)',
    process: 'Fully Washed, Hand Separated',
    moisture: '11.0% to 11.4%',
    scaScore: '85.0 to 86.5',
    harvestWindow: 'November to January',
    cupProfile: 'Concentrated vibrancy, red cherry sweetness, tangerine zest, wild honey, and persistent cocoa finish.',
    tastingNotes: ['Red Cherry', 'Tangerine', 'Wild Honey', 'Cacao'],
    packaging: '60kg GrainPro jute bags',
    minimumOrder: '5 to 10 MT or combined container load',
    description: 'Occurring in less than 5 percent of the coffee harvest, peaberry forms when only a single round seed develops inside the cherry. This concentrates organic acids and soluble sugars into an intensely aromatic, dynamic cup.',
    badge: 'Limited Micro-Lot'
  },
  {
    id: 'rwenzori-natural',
    name: 'Rwenzori Mountains of the Moon Natural',
    species: 'Arabica',
    grade: 'Specialty Micro-Lot (Grade 1)',
    origin: 'Rwenzori Mountain Foothills, Kasese District, Western Uganda',
    altitude: '1,700 to 2,300 MASL',
    screenSize: 'Screen 16+',
    process: 'Slow Natural, 28-day Raised Bed Drying with Constant Raking',
    moisture: '10.5% to 11.2%',
    scaScore: '86.5 to 88.0',
    harvestWindow: 'September to January',
    cupProfile: 'Opulent tropical fruit aromatics, passionfruit, dried fig, dark grape, melted milk chocolate, and sweet lingering winey finish.',
    tastingNotes: ['Passionfruit', 'Dried Fig', 'Concord Grape', 'Cacao Nibs'],
    packaging: '30kg or 60kg GrainPro hermetic export bags',
    minimumOrder: '1 MT sample pallet up to full FCL',
    description: 'Sourced from the legendary snowcapped Rwenzori Mountains. Cherries are hand-harvested at peak brix maturity and slowly dried under controlled shade and sun conditions, delivering explosive fruit complexity sought after by premier third-wave roasters.',
    badge: 'SCA 86.5+'
  },
  {
    id: 'robusta-18',
    name: 'Uganda Screen 18 Washed & Natural Robusta',
    species: 'Robusta',
    grade: 'Grade Screen 18 (Extra Large FAQ)',
    origin: 'Lake Victoria Basin & Central Plateau (Masaka, Mubende, Luwero)',
    altitude: '1,150 to 1,450 MASL',
    screenSize: 'Screen 18 (7.14mm, retained 92%+)',
    process: 'Sun-Dried Natural & Polished / Washed Available',
    moisture: '11.5% to 12.5%',
    scaScore: 'Fine Robusta 81.0+',
    harvestWindow: 'Year-Round (Bimodal: Nov-Feb and May-Aug)',
    cupProfile: 'Exceptionally clean cup, dense crema structure, roasted dark cocoa, toasted cedar, hazelnut cream, with zero earthy astringency.',
    tastingNotes: ['Roasted Cacao', 'Malted Grain', 'Dense Crema', 'Toasted Cedar'],
    packaging: 'Standard 60kg export jute bags',
    minimumOrder: '1 x 20ft FCL (19.2 MT / 320 bags)',
    description: 'Uganda is the indigenous home of wild Coffea canephora (Robusta). Our Screen 18 represents the top grade of bold-sized beans with high density, offering international espresso blenders unmatched crema generation, body, and clean neutrality.',
    badge: 'Global Benchmark'
  },
  {
    id: 'robusta-15',
    name: 'Uganda Screen 15 Standard Export Robusta',
    species: 'Robusta',
    grade: 'Grade Screen 15 (FAQ Commercial Export)',
    origin: 'Central & Western Uganda Coffee Belts',
    altitude: '1,100 to 1,350 MASL',
    screenSize: 'Screen 15 (6.00mm)',
    process: 'Traditional Natural Sun-Dried, Machine Polished',
    moisture: '12.0% to 12.5%',
    harvestWindow: 'Year-Round Harvest',
    cupProfile: 'Robust body, bittersweet chocolate, toasted nut, strong caffeine punch, and neutral clean aftertaste.',
    tastingNotes: ['Dark Cocoa', 'Roasted Walnut', 'Molasses', 'Toasted Barley'],
    packaging: '60kg new jute bags',
    minimumOrder: '1 x 20ft FCL (19.2 MT / 320 bags)',
    description: 'The workhorse of commercial coffee roasting and soluble coffee extraction worldwide. Milled, optically sorted, and screened in strict compliance with Uganda Coffee Development Authority export regulations.',
  },
  {
    id: 'organic-origins',
    name: 'Certified Organic Bugisu & Robusta',
    species: 'Arabica',
    grade: 'EU & USDA NOP Certified Organic',
    origin: 'Mount Elgon & Western Rainforest Buffer Zones',
    altitude: '1,650 to 2,100 MASL',
    screenSize: 'Screen 17/18 (Arabica) & Screen 18 (Robusta)',
    process: 'Organic Eco-Pulped & Certified Shade Dried',
    moisture: '11.0% to 11.5%',
    scaScore: '84.0 to 86.0',
    harvestWindow: 'October to February',
    cupProfile: 'Brown sugar, candied orange peel, baking spices, clean cocoa nib finish, and balanced malic acidity.',
    tastingNotes: ['Candied Citrus', 'Brown Sugar', 'Cinnamon', 'Dark Chocolate'],
    packaging: '60kg GrainPro certified organic barrier bags',
    minimumOrder: '1 x 20ft FCL (19.2 MT)',
    description: 'Fully traceable organic lots certified by accredited international bodies. Produced under regenerative agroforestry systems without chemical inputs, with polygon mapping that fully complies with European Union Deforestation Regulation (EUDR) requirements.',
    badge: 'EUDR Ready'
  }
];

