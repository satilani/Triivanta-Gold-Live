export type PlotType =
  | 'Classic'
  | 'Executive'
  | 'Premium'
  | 'Special'
  | 'Grand'
  | 'Elite'
  | 'Shape';

export type PlotFacing = 'East' | 'West' | 'North';

export interface SanctionedPlot {
  plotNo: string;
  plotType: PlotType;
  sizeMeters: string;
  dimensionsFeet: string;
  areaSqm: number;
  areaSqft: number;
  facing: PlotFacing;
  category: 'compact' | 'standard' | 'grand' | 'signature';
  frontageRoad: '18m (60 Ft.) Main Boulevard' | '9m (30 Ft.) Internal Road';
}

const BASE_URL = import.meta.env.BASE_URL;

export const RERA_DETAILS = {
  regNumber: 'UPRERAPRJ180628/11/2026',
  projectName: 'TRIIVANTA GOLD',
  locality: 'Vill. - Nizampur, Gosainganj',
  tehsil: 'Mohanlalganj',
  districtState: 'Lucknow / Uttar Pradesh',
  shortLocation: 'Sultanpur Road Corridor, Gosainganj, Lucknow',
  fullProjectAddress:
    'Vill. - Nizampur, Gosainganj, Tehsil Mohanlalganj, Lucknow, Uttar Pradesh',
  registrationDate: '17-11-2026',
  proposedCompletionDate: '26-08-2029',
  validityPeriod: '2 Years 9 Months 21 Days (17-11-2026 to 26-08-2029)',
  promoterName: 'KSGSK INFRA PROJECTS PRIVATE LIMITED',
  promoterOffice: 'Indira Nagar, Lucknow-226016',
  authorityName: 'Uttar Pradesh Real Estate Regulatory Authority (U.P. RERA)',
  authorityShort: 'U.P. RERA',
  authorityUrl: 'https://www.up-rera.in',
  authorityDisplayUrl: 'www.up-rera.in',
  helplineDisplay: '+91 93696 13002',
  helplineHref: 'tel:+919369613002',
  email: 'info@triivantagold.com',
  websiteDisplay: 'www.triivantagold.com',
  websiteUrl: 'https://www.triivantagold.com',
  qrImagePath: `${BASE_URL}assets/rera-qr.png`,
  certificatePdfPath: `${BASE_URL}assets/aistudio/Triivanta_Gold_RERA_Certificate_390a9448.pdf`,
  coordinates: '26°47\'31.6"N, 81°07\'57.3"E',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=26.792111,81.132583',
  specificationsImagePath: `${BASE_URL}assets/aistudio/image_1299d13a.png`,
} as const;

export const TOWNSHIP_VISION = {
  grandVisionAcres: 45,
  phaseOneAcresLabel: 'Phase 1 · ~5 Acres',
  entranceWidthFt: '100 Ft.',
  mainBoulevardLabel: '60 Ft. (18m)',
  internalRoadLabel: '30 Ft. (9m)',
  centralParkSqftLabel: '30,000 Sq.Ft.',
  openAreaPercentLabel: '52.75%',
  positioningTiers: [
    {
      label: 'Internal Avenue Plots',
      subtitle: 'Classic · Executive · Premium',
      note: 'Serene 30 Ft. (9m) internal sector roads',
    },
    {
      label: 'Park & Corner Advantage',
      subtitle: 'Grand · Elite · Special · Park-Front',
      note: 'Central Park & corner vantage plots',
    },
    {
      label: 'Signature Boulevard Frontage',
      subtitle: 'Plots A-1 & A-2',
      note: 'Direct 60 Ft. (18m) main boulevard frontage',
    },
  ],
} as const;

export const AREA_STATEMENT = {
  totalLandSqm: 19689,
  totalLandHectares: 1.9689,
  totalAcres: 4.87,
  roadWideningSqm: 971.72,
  netLandAreaSqm: 18714.28,
  amenitiesAreaSqm: 934.86,
  amenitiesPercent: '4.99%',
  plottedAreaSqm: 8842.53,
  plottedPercent: '47.25%',
  greenAreaSqm: 2807.59,
  greenPercent: '15.00%',
  parkOneSqm: 2716.19,
  parkTwoSqm: 91.4,
  roadAreaSqm: 6129.3,
  roadPercent: '32.75%',
  boundaryWallLengthM: 746.13,
  boundaryWallHeightM: 2.1,
  boundaryWallAreaSqm: 1566.87,
  totalPlots: 38,
} as const;

const categorizePlot = (sqft: number): SanctionedPlot['category'] => {
  if (sqft <= 1980) return 'compact';
  if (sqft <= 2600) return 'standard';
  if (sqft <= 3300) return 'grand';
  return 'signature';
};

type RawPlotTuple = [
  string, // plotNo
  PlotType, // plotType
  string, // dimensionsFeet
  string, // sizeMeters
  number, // areaSqft
  number, // areaSqm
  PlotFacing, // facing
  '18m (60 Ft.) Main Boulevard' | '9m (30 Ft.) Internal Road',
];

const RAW_PLOTS: RawPlotTuple[] = [
  ['A-1', 'Shape', 'As per shape', '19.39m × 18.50m', 3861, 358.71, 'West', '18m (60 Ft.) Main Boulevard'],
  ['A-2', 'Shape', 'As per shape', '19.49m × 20.74m', 4351, 404.22, 'West', '18m (60 Ft.) Main Boulevard'],
  ['01', 'Shape', 'As per shape', '14.63m × 28.71m', 4589, 420.02, 'North', '18m (60 Ft.) Main Boulevard'],
  ['02', 'Shape', 'As per shape', '13.61m × 28.71m', 4219, 390.74, 'North', '18m (60 Ft.) Main Boulevard'],
  ['03', 'Shape', 'As per shape', '14.63m × 28.71m', 4534, 420.02, 'North', '18m (60 Ft.) Main Boulevard'],
  ['04', 'Shape', 'As per shape', '10.51m × 19.86m', 2372, 208.72, 'West', '9m (30 Ft.) Internal Road'],
  ['05', 'Executive', "30' × 65'", '9.14m × 19.86m', 1950, 181.52, 'West', '9m (30 Ft.) Internal Road'],
  ['06', 'Executive', "30' × 65'", '14.50m × 14.30m', 1950, 207.35, 'West', '9m (30 Ft.) Internal Road'],
  ['07', 'Executive', "30' × 59'", '14.26m × 14.47m', 1775, 206.34, 'East', '18m (60 Ft.) Main Boulevard'],
  ['08', 'Executive', "30' × 65'", '9.15m × 19.81m', 1950, 181.26, 'East', '9m (30 Ft.) Internal Road'],
  ['09', 'Grand', "40' × 65'", '12.19m × 19.81m', 2600, 241.48, 'East', '9m (30 Ft.) Internal Road'],
  ['10', 'Grand', "40' × 65'", '12.19m × 19.81m', 2600, 241.48, 'West', '9m (30 Ft.) Internal Road'],
  ['11', 'Executive', "30' × 65'", '9.15m × 19.81m', 1950, 181.26, 'West', '9m (30 Ft.) Internal Road'],
  ['12', 'Executive', "30' × 65'", '9.15m × 19.81m', 1950, 181.26, 'West', '18m (60 Ft.) Main Boulevard'],
  ['13', 'Shape', 'As per shape', '10.97m × 27.20m', 3264, 298.38, 'West', '18m (60 Ft.) Main Boulevard'],
  ['14', 'Shape', 'As per shape', '9.25m × 19.81m', 2012, 183.24, 'East', '9m (30 Ft.) Internal Road'],
  ['15', 'Premium', "32'-6\" × 65'", '9.90m × 19.81m', 2112, 196.11, 'East', '9m (30 Ft.) Internal Road'],
  ['16', 'Premium', "32'-6\" × 65'", '9.90m × 19.81m', 2112, 196.11, 'East', '9m (30 Ft.) Internal Road'],
  ['17', 'Grand', "40' × 65'", '12.19m × 19.81m', 2600, 241.48, 'East', '18m (60 Ft.) Main Boulevard'],
  ['18', 'Grand', "40' × 65'", '12.19m × 19.81m', 2600, 241.48, 'West', '18m (60 Ft.) Main Boulevard'],
  ['19', 'Premium', "32'-6\" × 65'", '9.90m × 19.81m', 2112, 196.11, 'West', '9m (30 Ft.) Internal Road'],
  ['20', 'Premium', "32'-6\" × 65'", '9.90m × 19.81m', 2112, 196.11, 'West', '9m (30 Ft.) Internal Road'],
  ['21', 'Shape', 'As per shape', '11.15m × 19.81m', 2234, 220.88, 'West', '9m (30 Ft.) Internal Road'],
  ['22', 'Special', "36' × 55'", '10.97m × 16.76m', 1980, 183.85, 'East', '9m (30 Ft.) Internal Road'],
  ['23', 'Classic', "30' × 55'", '9.14m × 16.76m', 1650, 153.18, 'East', '9m (30 Ft.) Internal Road'],
  ['24', 'Classic', "30' × 55'", '9.14m × 16.76m', 1650, 153.18, 'East', '9m (30 Ft.) Internal Road'],
  ['25', 'Classic', "30' × 55'", '9.14m × 16.76m', 1650, 153.18, 'East', '9m (30 Ft.) Internal Road'],
  ['26', 'Shape', 'As per shape', '11.18m × 12.29m', 1181, 137.4, 'East', '9m (30 Ft.) Internal Road'],
  ['27', 'Shape', 'As per shape', '13.33m × 12.30m', 1582, 163.95, 'West', '9m (30 Ft.) Internal Road'],
  ['28', 'Classic', "30' × 55'", '9.14m × 16.76m', 1650, 153.18, 'West', '9m (30 Ft.) Internal Road'],
  ['29', 'Classic', "30' × 55'", '9.14m × 16.76m', 1650, 153.18, 'West', '9m (30 Ft.) Internal Road'],
  ['30', 'Classic', "30' × 55'", '9.14m × 16.76m', 1650, 153.18, 'West', '9m (30 Ft.) Internal Road'],
  ['31', 'Special', "36' × 55'", '10.97m × 16.76m', 1980, 183.85, 'West', '18m (60 Ft.) Main Boulevard'],
  ['32', 'Elite', "40' × 80'", '12.19m × 24.38m', 3200, 297.19, 'North', '18m (60 Ft.) Main Boulevard'],
  ['33', 'Elite', "40' × 80'", '12.19m × 24.38m', 3200, 297.19, 'North', '18m (60 Ft.) Main Boulevard'],
  ['34', 'Elite', "40' × 80'", '12.19m × 24.38m', 3200, 297.19, 'North', '18m (60 Ft.) Main Boulevard'],
  ['35', 'Elite', "40' × 80'", '12.19m × 24.38m', 3200, 297.19, 'North', '18m (60 Ft.) Main Boulevard'],
  ['36', 'Elite', "40' × 80'", '12.19m × 24.38m', 3200, 297.19, 'North', '18m (60 Ft.) Main Boulevard'],
];

export const SANCTIONED_PLOTS: SanctionedPlot[] = RAW_PLOTS.map(
  ([
    plotNo,
    plotType,
    dimensionsFeet,
    sizeMeters,
    areaSqft,
    areaSqm,
    facing,
    frontageRoad,
  ]) => ({
    plotNo,
    plotType,
    dimensionsFeet,
    sizeMeters,
    areaSqft,
    areaSqm,
    facing,
    category: categorizePlot(areaSqft),
    frontageRoad,
  })
);
