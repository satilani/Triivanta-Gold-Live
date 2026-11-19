export interface SanctionedPlot {
  plotNo: string;
  sizeMeters: string;
  areaSqm: number;
  areaSqft: number;
  category: 'compact' | 'standard' | 'grand' | 'signature';
  frontageRoad: '18m Main Road' | '9m Internal Road';
}

export const RERA_DETAILS = {
  regNumber: 'UPRERAPRJ180628/11/2026',
  projectName: 'TRIIVANTA GOLD',
  locality: 'Vill. - Nizampur, Gosainganj',
  tehsil: 'Mohanlalganj',
  districtState: 'Lucknow / Uttar Pradesh',
  shortLocation: 'Sultanpur Road, Gosainganj, Lucknow',
  fullProjectAddress:
    'Vill. - Nizampur, Gosainganj, Tehsil Mohanlalganj, Lucknow, Uttar Pradesh',
  registrationDate: '17-11-2026',
  proposedCompletionDate: '26-08-2029',
  validityPeriod: '2 Years 9 Months 21 Days (17-11-2026 to 26-08-2029)',
  promoterName: 'KSGSK INFRA PROJECTS PRIVATE LIMITED',
  promoterOffice: 'A-52, Indira Nagar, Lucknow-226016',
  authorityName: 'Uttar Pradesh Real Estate Regulatory Authority (U.P. RERA)',
  authorityShort: 'U.P. RERA',
  authorityUrl: 'https://www.up-rera.in',
  authorityDisplayUrl: 'www.up-rera.in',
  qrImagePath: '/assets/rera-qr.png',
  certificatePdfPath: '/assets/aistudio/Triivanta_Gold_RERA_Certificate_390a9448.pdf',
  coordinates: '26°47\'31.6"N, 81°07\'57.3"E',
  specificationsImagePath: '/assets/aistudio/image_1299d13a.png',
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

const sqmToSqft = (sqm: number) => Math.round(sqm * 10.7639);

const categorizePlot = (sqm: number): SanctionedPlot['category'] => {
  if (sqm < 185) return 'compact';
  if (sqm < 250) return 'standard';
  if (sqm < 350) return 'grand';
  return 'signature';
};

const RAW_PLOTS: Array<[string, string, number, '18m Main Road' | '9m Internal Road']> = [
  ['01', '14.63m × 28.71m', 420.02, '18m Main Road'],
  ['02', '13.61m × 28.71m', 390.74, '18m Main Road'],
  ['03', '14.63m × 28.71m', 420.02, '18m Main Road'],
  ['04', '10.51m × 19.86m', 208.72, '9m Internal Road'],
  ['05', '9.14m × 19.86m', 181.52, '9m Internal Road'],
  ['06', '14.50m × 14.30m', 207.35, '9m Internal Road'],
  ['07', '14.26m × 14.47m', 206.34, '18m Main Road'],
  ['08', '9.15m × 19.81m', 181.26, '9m Internal Road'],
  ['09', '12.19m × 19.81m', 241.48, '9m Internal Road'],
  ['10', '12.19m × 19.81m', 241.48, '9m Internal Road'],
  ['11', '9.15m × 19.81m', 181.26, '9m Internal Road'],
  ['12', '9.15m × 19.81m', 181.26, '18m Main Road'],
  ['13', '10.97m × 27.20m', 298.38, '18m Main Road'],
  ['14', '9.25m × 19.81m', 183.24, '9m Internal Road'],
  ['15', '9.90m × 19.81m', 196.11, '9m Internal Road'],
  ['16', '9.90m × 19.81m', 196.11, '9m Internal Road'],
  ['17', '12.19m × 19.81m', 241.48, '18m Main Road'],
  ['18', '12.19m × 19.81m', 241.48, '18m Main Road'],
  ['19', '9.90m × 19.81m', 196.11, '9m Internal Road'],
  ['20', '9.90m × 19.81m', 196.11, '9m Internal Road'],
  ['21', '11.15m × 19.81m', 220.88, '9m Internal Road'],
  ['22', '10.97m × 16.76m', 183.85, '9m Internal Road'],
  ['23', '9.14m × 16.76m', 153.18, '9m Internal Road'],
  ['24', '9.14m × 16.76m', 153.18, '9m Internal Road'],
  ['25', '9.14m × 16.76m', 153.18, '9m Internal Road'],
  ['26', '11.18m × 12.29m', 137.4, '9m Internal Road'],
  ['27', '13.33m × 12.30m', 163.95, '9m Internal Road'],
  ['28', '9.14m × 16.76m', 153.18, '9m Internal Road'],
  ['29', '9.14m × 16.76m', 153.18, '9m Internal Road'],
  ['30', '9.14m × 16.76m', 153.18, '9m Internal Road'],
  ['31', '10.97m × 16.76m', 183.85, '18m Main Road'],
  ['32', '12.19m × 24.38m', 297.19, '18m Main Road'],
  ['33', '12.19m × 24.38m', 297.19, '18m Main Road'],
  ['34', '12.19m × 24.38m', 297.19, '18m Main Road'],
  ['35', '12.19m × 24.38m', 297.19, '18m Main Road'],
  ['36', '12.19m × 24.38m', 297.19, '18m Main Road'],
  ['A-1', '19.39m × 18.50m', 358.71, '18m Main Road'],
  ['A-2', '19.49m × 20.74m', 404.22, '18m Main Road'],
];

export const SANCTIONED_PLOTS: SanctionedPlot[] = RAW_PLOTS.map(
  ([plotNo, sizeMeters, areaSqm, frontageRoad]) => ({
    plotNo,
    sizeMeters,
    areaSqm,
    areaSqft: sqmToSqft(areaSqm),
    category: categorizePlot(areaSqm),
    frontageRoad,
  })
);
