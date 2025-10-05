export interface Publication {
  id: string;
  title: string;
  year: number;
  mission: string;
  subject: string[];
  impact: string[];
  summary: string;
  fullSummary: string;
  organisms: string[];
  keyFindings: string[];
  implications: string[];
  relatedStudies: string[];
}

export const mockPublications: Publication[] = [
  {
    id: "1",
    title: "Bone Density Loss in Microgravity: ISS Long-Duration Study",
    year: 2022,
    mission: "ISS",
    subject: ["Human"],
    impact: ["Moon", "Mars"],
    summary: "12-month ISS study reveals 1.5% monthly bone density loss in astronauts, with targeted exercise protocols showing 40% mitigation.",
    fullSummary: "This comprehensive 12-month study aboard the International Space Station examined bone density changes in astronauts during extended missions. Using advanced DEXA scanning technology, researchers documented an average bone density loss of 1.5% per month, particularly in load-bearing bones. The study also evaluated countermeasure effectiveness, finding that a combination of resistance exercise and pharmaceutical interventions reduced bone loss by approximately 40%.",
    organisms: ["Humans"],
    keyFindings: [
      "1.5% monthly bone density loss in microgravity",
      "Load-bearing bones most affected",
      "Exercise protocols reduce loss by 40%",
      "Recovery takes 3-4 months post-mission"
    ],
    implications: [
      "Critical for Mars mission planning (6-9 month transit)",
      "Exercise protocols must be enhanced for long-duration missions",
      "Pharmaceutical countermeasures may be necessary"
    ],
    relatedStudies: ["2", "7", "12"]
  },
  {
    id: "2",
    title: "Plant Growth Systems for Lunar Habitats: LED Spectrum Optimization",
    year: 2023,
    mission: "Ground-based",
    subject: ["Plant"],
    impact: ["Moon", "Earth"],
    summary: "Optimized LED spectrum increases lettuce and tomato yields by 35% in simulated lunar regolith, enabling sustainable food production.",
    fullSummary: "This groundbreaking study developed optimized LED lighting spectra for growing food crops in lunar habitat conditions. Researchers tested various light wavelength combinations on lettuce, tomatoes, and peppers grown in simulated lunar regolith. The optimized spectrum, emphasizing red and blue wavelengths with strategic far-red supplementation, achieved a 35% yield increase compared to standard white LEDs.",
    organisms: ["Lettuce", "Tomatoes", "Bell Peppers"],
    keyFindings: [
      "35% yield increase with optimized LED spectrum",
      "Red and blue wavelengths most effective",
      "Far-red supplementation improves plant morphology",
      "Successful growth in lunar regolith simulant"
    ],
    implications: [
      "Enables sustainable food production on Moon",
      "Reduces resupply mission requirements",
      "Applicable to vertical farming on Earth"
    ],
    relatedStudies: ["3", "15", "18"]
  },
  {
    id: "3",
    title: "Microbial Resistance to Radiation in Space Environment",
    year: 2021,
    mission: "ISS",
    subject: ["Microbe"],
    impact: ["Mars", "Earth"],
    summary: "Certain bacteria develop enhanced radiation resistance aboard ISS, with potential applications for Mars surface survival.",
    fullSummary: "This multi-year study examined how various bacterial strains respond to the space environment aboard the ISS. Researchers discovered that Deinococcus radiodurans and several other extremophiles developed enhanced radiation resistance after extended exposure to space conditions. These adaptations could inform strategies for detecting life on Mars and protecting astronauts from radiation.",
    organisms: ["Deinococcus radiodurans", "Bacillus subtilis", "E. coli"],
    keyFindings: [
      "Enhanced radiation resistance in space-exposed bacteria",
      "Genetic adaptations occur within 6 months",
      "Potential biomarkers for Mars life detection",
      "Applications for radiation shielding"
    ],
    implications: [
      "Informs Mars sample return protocols",
      "Potential for bio-based radiation protection",
      "Implications for planetary protection policies"
    ],
    relatedStudies: ["5", "9", "14"]
  },
  {
    id: "4",
    title: "Cardiovascular Adaptation During Extended Spaceflight",
    year: 2022,
    mission: "ISS",
    subject: ["Human"],
    impact: ["Mars"],
    summary: "Heart function changes significantly during 6+ month missions, requiring enhanced cardiovascular monitoring for Mars expeditions.",
    fullSummary: "Longitudinal cardiovascular monitoring of astronauts during extended ISS missions revealed significant structural and functional changes in the heart. The study documented decreased cardiac mass, altered left ventricular function, and changes in blood pressure regulation. These findings highlight the need for enhanced cardiovascular countermeasures for Mars missions.",
    organisms: ["Humans"],
    keyFindings: [
      "12% decrease in cardiac mass over 6 months",
      "Altered autonomic nervous system regulation",
      "Blood pressure dysregulation during re-adaptation",
      "Incomplete recovery 6 months post-flight"
    ],
    implications: [
      "Critical for Mars mission medical planning",
      "Need for advanced cardiovascular monitoring",
      "Potential contraindications for some crew members"
    ],
    relatedStudies: ["1", "8", "11"]
  },
  {
    id: "5",
    title: "Fungal Biofilm Formation on Spacecraft Surfaces",
    year: 2023,
    mission: "ISS",
    subject: ["Microbe"],
    impact: ["Moon", "Mars"],
    summary: "Fungi form persistent biofilms on ISS surfaces, requiring new antimicrobial strategies for long-duration missions.",
    fullSummary: "This study characterized fungal species found on ISS surfaces and their biofilm-forming capabilities in microgravity. Several species, including Aspergillus and Penicillium, showed enhanced biofilm formation compared to Earth conditions. The research identified novel antimicrobial strategies effective against these space-adapted biofilms.",
    organisms: ["Aspergillus niger", "Penicillium chrysogenum", "Rhodotorula mucilaginosa"],
    keyFindings: [
      "Enhanced biofilm formation in microgravity",
      "Increased antifungal resistance in space-adapted strains",
      "Novel antimicrobial coatings show 85% effectiveness",
      "Material degradation concerns for long missions"
    ],
    implications: [
      "Habitat design considerations for Moon/Mars bases",
      "Development of new antimicrobial surfaces",
      "Crew health monitoring protocols"
    ],
    relatedStudies: ["3", "6", "13"]
  },
  {
    id: "6",
    title: "Sleep Patterns and Circadian Disruption in Microgravity",
    year: 2021,
    mission: "ISS",
    subject: ["Human"],
    impact: ["Moon", "Mars"],
    summary: "Astronauts experience significant sleep disruption during space missions, impacting cognitive performance and health.",
    fullSummary: "Comprehensive sleep monitoring revealed that astronauts average only 6 hours of sleep per night during ISS missions, compared to 7-8 hours on Earth. Circadian rhythm disruption, noise, and environmental factors contribute to poor sleep quality. The study evaluated various countermeasures including blue-light filtering and melatonin supplementation.",
    organisms: ["Humans"],
    keyFindings: [
      "Average 6 hours sleep vs 8 hours pre-flight",
      "30% reduction in REM sleep quality",
      "Circadian rhythm shifts by 1-2 hours",
      "Cognitive performance declines 15-20%"
    ],
    implications: [
      "Critical for Mars mission crew performance",
      "Habitat design must prioritize sleep environment",
      "Pharmacological interventions may be necessary"
    ],
    relatedStudies: ["4", "10", "16"]
  },
  {
    id: "7",
    title: "Muscle Atrophy Prevention: Resistance Exercise Protocols",
    year: 2023,
    mission: "ISS",
    subject: ["Human"],
    impact: ["Mars"],
    summary: "Novel resistance exercise protocols reduce muscle loss by 50% during extended spaceflight missions.",
    fullSummary: "This study developed and tested advanced resistance exercise protocols for preventing muscle atrophy during long-duration spaceflight. Using MRI and ultrasound measurements, researchers tracked muscle mass changes in astronauts following different exercise regimens. The optimized protocol, combining high-intensity resistance training with flywheel technology, reduced muscle loss by approximately 50%.",
    organisms: ["Humans"],
    keyFindings: [
      "50% reduction in muscle atrophy with new protocols",
      "Flywheel technology more effective than traditional resistance",
      "Lower extremity muscles most vulnerable",
      "2-3 hours daily exercise optimal"
    ],
    implications: [
      "Essential for Mars transit and surface operations",
      "Equipment requirements for deep space missions",
      "Individual variation requires personalized programs"
    ],
    relatedStudies: ["1", "4", "17"]
  },
  {
    id: "8",
    title: "Immune System Response to Long-Duration Spaceflight",
    year: 2022,
    mission: "ISS",
    subject: ["Human"],
    impact: ["Mars"],
    summary: "Extended spaceflight causes significant immune system alterations, increasing infection risk for Mars missions.",
    fullSummary: "Comprehensive immunological profiling of astronauts during 6-12 month ISS missions revealed significant changes in immune function. T-cell populations shifted, natural killer cell activity decreased, and inflammatory markers increased. These changes persist for several months post-flight and could increase infection risk during Mars missions.",
    organisms: ["Humans"],
    keyFindings: [
      "T-cell population shifts toward less effective types",
      "25% decrease in NK cell activity",
      "Increased inflammatory markers",
      "Viral reactivation more common"
    ],
    implications: [
      "Increased infection risk for Mars crew",
      "Need for enhanced medical capabilities",
      "Potential for immunomodulatory interventions"
    ],
    relatedStudies: ["4", "6", "19"]
  },
  {
    id: "9",
    title: "Water Recovery from Urine: Advanced Filtration Systems",
    year: 2023,
    mission: "ISS",
    subject: ["Engineering"],
    impact: ["Moon", "Mars"],
    summary: "Next-generation water recovery system achieves 98% efficiency, crucial for sustainable Moon and Mars habitats.",
    fullSummary: "This engineering study developed and tested an advanced water recovery system aboard the ISS. The system uses multi-stage filtration, including reverse osmosis and catalytic oxidation, to recover potable water from urine with 98% efficiency. This represents a significant improvement over previous systems and is essential for long-duration missions.",
    organisms: ["N/A"],
    keyFindings: [
      "98% water recovery efficiency",
      "Eliminates 99.99% of contaminants",
      "Reduced energy consumption by 30%",
      "Minimal maintenance requirements"
    ],
    implications: [
      "Reduces resupply mass for Mars missions by 40%",
      "Enables sustainable lunar base operations",
      "Cost savings of $10M+ per Mars mission"
    ],
    relatedStudies: ["2", "15", "20"]
  },
  {
    id: "10",
    title: "Algae-Based Air Revitalization for Closed-Loop Life Support",
    year: 2021,
    mission: "Ground-based",
    subject: ["Plant"],
    impact: ["Mars"],
    summary: "Spirulina-based system efficiently converts CO2 to oxygen while producing edible biomass for long-duration missions.",
    fullSummary: "This study developed and tested an algae-based air revitalization system using Spirulina. The system efficiently converts CO2 exhaled by crew members into oxygen through photosynthesis, while simultaneously producing edible protein-rich biomass. Testing in closed-loop simulation chambers demonstrated the system could support one crew member's oxygen needs with just 10 square meters of cultivation area.",
    organisms: ["Spirulina platensis", "Chlorella vulgaris"],
    keyFindings: [
      "10m² cultivation area supports one crew member's O2 needs",
      "Produces 20g protein per person per day",
      "Removes 95% of CO2 from test chamber",
      "Requires minimal maintenance and resources"
    ],
    implications: [
      "Enables true closed-loop life support for Mars",
      "Reduces food resupply requirements",
      "Provides psychological benefits through bio-regenerative system"
    ],
    relatedStudies: ["2", "9", "15"]
  },
  {
    id: "11",
    title: "Radiation Shielding: Water-Based Multi-Layer Systems",
    year: 2022,
    mission: "Ground-based",
    subject: ["Engineering"],
    impact: ["Moon", "Mars"],
    summary: "Innovative water-based radiation shielding reduces crew exposure by 65%, using mission-essential water supplies.",
    fullSummary: "This engineering study designed and tested a novel radiation shielding concept that uses stored water as a dual-purpose resource. By positioning water storage tanks strategically around sleeping quarters and high-occupancy areas, the system provides excellent radiation protection while serving the crew's water needs. Computer simulations and experimental validation showed 65% reduction in radiation exposure.",
    organisms: ["N/A"],
    keyFindings: [
      "65% reduction in radiation exposure",
      "Uses mission-essential water supplies",
      "Adaptable configuration for different habitat designs",
      "Cost-effective compared to dedicated shielding"
    ],
    implications: [
      "Reduces cancer risk for Mars mission crew",
      "Enables longer surface missions",
      "Applicable to lunar base design"
    ],
    relatedStudies: ["1", "3", "8"]
  },
  {
    id: "12",
    title: "Vision Changes in Astronauts: Intracranial Pressure Study",
    year: 2023,
    mission: "ISS",
    subject: ["Human"],
    impact: ["Mars"],
    summary: "60% of astronauts experience vision changes due to increased intracranial pressure; new countermeasures show promise.",
    fullSummary: "This comprehensive ophthalmological study examined vision changes in astronauts during extended ISS missions. Using advanced imaging techniques, researchers documented structural changes in the eye and optic nerve, linked to increased intracranial pressure in microgravity. The study tested various countermeasures, including lower body negative pressure therapy and specialized exercise protocols.",
    organisms: ["Humans"],
    keyFindings: [
      "60% of long-duration crew experience vision changes",
      "Optic disc edema in 30% of cases",
      "Changes persist 6-12 months post-flight",
      "Lower body negative pressure reduces symptoms by 40%"
    ],
    implications: [
      "May limit crew selection for Mars missions",
      "Requires enhanced pre-flight screening",
      "Countermeasure equipment needed for Mars transit"
    ],
    relatedStudies: ["1", "4", "6"]
  }
];

export const impactData = {
  moonReadiness: [
    { category: "Life Support", progress: 85, gap: 15 },
    { category: "Human Health", progress: 72, gap: 28 },
    { category: "Food Production", progress: 68, gap: 32 },
    { category: "Radiation Protection", progress: 75, gap: 25 },
  ],
  marsReadiness: [
    { category: "Life Support", progress: 65, gap: 35 },
    { category: "Human Health", progress: 58, gap: 42 },
    { category: "Food Production", progress: 55, gap: 45 },
    { category: "Radiation Protection", progress: 60, gap: 40 },
  ],
  subjectDistribution: [
    { name: "Human", value: 45 },
    { name: "Plant", value: 25 },
    { name: "Microbe", value: 20 },
    { name: "Engineering", value: 10 },
  ],
  yearlyPublications: [
    { year: 2018, count: 45 },
    { year: 2019, count: 52 },
    { year: 2020, count: 68 },
    { year: 2021, count: 85 },
    { year: 2022, count: 102 },
    { year: 2023, count: 118 },
  ],
};

export const knowledgeGraphData = {
  nodes: [
    { id: "1", name: "Bone Density Loss", type: "study", category: "human" },
    { id: "2", name: "Plant Growth", type: "study", category: "plant" },
    { id: "3", name: "Radiation Resistance", type: "study", category: "microbe" },
    { id: "4", name: "Cardiovascular", type: "study", category: "human" },
    { id: "7", name: "Muscle Atrophy", type: "study", category: "human" },
    { id: "8", name: "Immune System", type: "study", category: "human" },
    { id: "moon", name: "Moon Mission", type: "mission" },
    { id: "mars", name: "Mars Mission", type: "mission" },
    { id: "exercise", name: "Exercise Protocol", type: "intervention" },
    { id: "nutrition", name: "Nutrition", type: "intervention" },
  ],
  links: [
    { source: "1", target: "moon", value: 2 },
    { source: "1", target: "mars", value: 3 },
    { source: "1", target: "exercise", value: 4 },
    { source: "2", target: "moon", value: 3 },
    { source: "2", target: "nutrition", value: 2 },
    { source: "3", target: "mars", value: 4 },
    { source: "4", target: "mars", value: 3 },
    { source: "4", target: "exercise", value: 2 },
    { source: "7", target: "1", value: 2 },
    { source: "7", target: "exercise", value: 4 },
    { source: "8", target: "4", value: 2 },
    { source: "8", target: "mars", value: 3 },
  ],
};
