export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  summary: string;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: 'uganda-coffee-export-report-european-demand',
    title: 'Uganda Coffee Export Overview: European Demand and Supply Chain Dynamics',
    category: 'Market Intelligence',
    date: 'October 24, 2026',
    author: 'Demo Coffee Exporters Trade Desk',
    readTime: '5 min read',
    summary: 'An analysis of recent Uganda Coffee Development Authority export figures, freight logistics through Mombasa, and changing buyer specifications across European roasters.',
    content: [
      'According to recent trade publications from the Uganda Coffee Development Authority (UCDA), coffee export volumes from Uganda continue to set benchmarks in the East African corridor. Increased appetite from traditional importers in Italy, Germany, Spain, and emerging Asian roasters highlights the strategic importance of Ugandan origins.',
      'Ugandan Robusta retains its status as a critical component in worldwide espresso formulation, while high-altitude Bugisu and Rwenzori Arabica varieties command premiums in the specialty single-origin sector.',
      'Logistical performance along the Northern Transport Corridor connecting Kampala dry mills to the Port of Mombasa has stabilized, with transit times averaging five to seven days under standard bonded freight arrangements.',
      'Our processing facility at Plot 45 Industrial Area operates dedicated container stuffing bays to ensure containers are sealed immediately after optical color sorting, preserving moisture levels under 12 percent throughout ocean voyages.'
    ]
  },
  {
    slug: 'eudr-deforestation-compliance-traceability',
    title: 'EUDR Compliance in Uganda: Polygon Mapping and Farm-Level Traceability',
    category: 'Regulatory & Sustainability',
    date: 'September 18, 2026',
    author: 'Agronomy and Sustainability Team',
    readTime: '6 min read',
    summary: 'A detailed review of how Demo Coffee Exporters has implemented GPS polygon mapping across partner cooperatives to ensure seamless European Union Deforestation Regulation compliance.',
    content: [
      'The European Union Deforestation Regulation (EUDR) establishes rigorous due diligence requirements for green coffee importers entering EU member states. Importers must demonstrate that coffee is deforestation-free, produced in accordance with local legislation, and covered by a verified Due Diligence Statement with precise geographic coordinates.',
      'At Demo Coffee Exporters, field agronomy teams have systematically mapped thousands of smallholder farm plots across Mount Elgon and the Rwenzori foothills. Each plot over four hectares is recorded with complete polygon boundary coordinates, while plots under four hectares utilize single-point geolocations verified against historical satellite imagery dating prior to December 31, 2020.',
      'Our centralized digital trade portal attaches verified coordinates directly to shipping documentation, enabling European procurement managers to upload compliant data packages straight to the EU Information System without administrative friction.'
    ]
  },
  {
    slug: 'fine-robusta-screen-18-specialty-renaissance',
    title: 'The Specialty Evolution of Fine Robusta Screen 18',
    category: 'Sensory & Processing',
    date: 'August 12, 2026',
    author: 'Quality Control Laboratory',
    readTime: '4 min read',
    summary: 'Why international espresso blenders and specialty micro-roasters are sourcing washed and polished Screen 18 Ugandan Robusta for its crema and sensory balance.',
    content: [
      'For decades, commercial Robusta was viewed primarily as a price buffer in generic supermarket blends. Today, refined harvest practices and central wet mill processing in Uganda are transforming how the global coffee community views fine Robusta.',
      'Coffea canephora is indigenous to the equatorial forests surrounding Lake Victoria. When grown at altitudes between 1,200 and 1,450 meters in nutrient-rich soils, hand-picked at peak red maturity, and carefully processed, Robusta reveals an entirely distinct flavor spectrum.',
      'Our Screen 18 lots undergo multi-tier mechanical screening, gravity separation, and optical sorting. The resulting cup displays dense hazelnut crema, dark bittersweet cacao notes, and a clean, buttery finish devoid of astringency. For espresso roasters looking for crema elasticity and low acidity, it remains an indispensable origin.'
    ]
  },
  {
    slug: 'mount-elgon-bugisu-harvest-forecast',
    title: 'Mount Elgon Bugisu Harvest Forecast: Weather Patterns and Cup Characteristics',
    category: 'Harvest Updates',
    date: 'July 05, 2026',
    author: 'Field Operations Department',
    readTime: '5 min read',
    summary: 'Field observations from Kapchorwa, Sipi, and Mbale regarding rainfall distribution, cherry maturation, and expected yields for Bugisu AA and Peaberry crops.',
    content: [
      'Flowering across the eastern slopes of Mount Elgon began under favorable rainfall distribution during the first quarter of the year. High-altitude zones between 1,800 and 2,200 meters experienced prolonged cherry maturation periods, which agronomists identify as an indicator of dense cell structure and elevated sugar concentration.',
      'Initial wet mill samples tested in our Kampala sensory lab demonstrate hallmark Bugisu attributes: prominent notes of red currants, bright malic apple acidity, clean caramelization, and syrupy body.',
      'Export allocations for both Grade AA and limited-edition Peaberry micro-lots are now open for international contract booking, with primary container dispatches scheduled from Mombasa between November and March.'
    ]
  }
];

