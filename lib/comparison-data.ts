export type CountryCode = string

export type Country = {
  code: CountryCode // ISO 3166-1 alpha-2, lowercase (used for flag images)
  name: string
}

export const INDIA: Country = { code: "in", name: "India" }

export const COUNTRIES: Country[] = [
  { code: "us", name: "United States" },
  { code: "cn", name: "China" },
  { code: "jp", name: "Japan" },
  { code: "de", name: "Germany" },
  { code: "gb", name: "United Kingdom" },
  { code: "fr", name: "France" },
  { code: "br", name: "Brazil" },
  { code: "ru", name: "Russia" },
  { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" },
  { code: "kr", name: "South Korea" },
  { code: "id", name: "Indonesia" },
  { code: "za", name: "South Africa" },
  { code: "sg", name: "Singapore" },
  { code: "ae", name: "United Arab Emirates" },
  { code: "pk", name: "Pakistan" },
  { code: "bd", name: "Bangladesh" },
  { code: "np", name: "Nepal" },
  { code: "lk", name: "Sri Lanka" },
  { code: "bt", name: "Bhutan" },
  { code: "mm", name: "Myanmar" },
  { code: "af", name: "Afghanistan" },
  { code: "it", name: "Italy" },
  { code: "es", name: "Spain" },
  { code: "nl", name: "Netherlands" },
  { code: "se", name: "Sweden" },
  { code: "ch", name: "Switzerland" },
  { code: "nz", name: "New Zealand" },
  { code: "mx", name: "Mexico" },
  { code: "sa", name: "Saudi Arabia" },
  { code: "tr", name: "Turkey" },
  { code: "eg", name: "Egypt" },
  { code: "ng", name: "Nigeria" },
  { code: "ke", name: "Kenya" },
  { code: "il", name: "Israel" },
  { code: "vn", name: "Vietnam" },
  { code: "th", name: "Thailand" },
  { code: "my", name: "Malaysia" },
  { code: "ph", name: "Philippines" },
  { code: "ar", name: "Argentina" },
]

export type Indicator = {
  id: string
  name: string
  tooltip: string
  unit: string 
  format: "rank" | "percent" | "number"
  higherIsBetter: boolean
  source: string
  sourceUrl: string 
  india: number
  values: Record<CountryCode, number>
}

export type Category = {
  id: string
  label: string
  indicators: Indicator[]
}

// Illustrative figures compiled from public global indices for demonstration.
export const CATEGORIES: Category[] = [
  {
    id: "economy",
    label: "Economy · GDP",
    indicators: [
      {
        id: "gdp-rank",
        name: "GDP Rank",
        tooltip: "Global ranking by nominal Gross Domestic Product (lower is better).",
        unit: "",
        format: "rank",
        higherIsBetter: false,
        source: "World Bank",
        sourceUrl: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD",
        india: 5,
        values: {  us: 1, cn: 2, jp: 4, de: 3, gb: 6, fr: 7, br: 9, ru: 11, ca: 10, au: 14, kr: 13, id: 16, za: 33, sg: 34, ae: 32,
                   pk: 42, bd: 35, np: 100, lk: 68, bt: 165, mm: 72, af: 105,
                   it: 8, es: 15, nl: 18, se: 24, ch: 20, nz: 51,
                   mx: 12, sa: 17, tr: 19, eg: 41, ng: 31, ke: 62, il: 28, vn: 34, th: 26, my: 36, ph: 30, ar: 25},
      },
      {
        id: "gdp-growth",
        name: "GDP Growth Rate",
        tooltip: "Annual real GDP growth rate (higher is better).",
        unit: "%",
        format: "percent",
        higherIsBetter: true,
        source: "IMF",
        sourceUrl:"https://www.imf.org/en/Publications/WEO",
        india: 6.8,
        values: { us: 2.5, cn: 5.0, jp: 1.0, de: 0.2, gb: 0.5, fr: 0.9, br: 2.9, ru: 3.6, ca: 1.2, au: 1.5, kr: 2.2, id: 5.1, za: 0.6, sg: 2.7, ae: 3.4,
                  pk: 2.4, bd: 5.8, np: 4.2, lk: 3.5, bt: 4.9, mm: 1.8, af: 1.2,
                  it: 0.7, es: 2.1, nl: 0.6, se: 0.9, ch: 1.3, nz: 1.1,
                  mx: 1.8, sa: 2.7, tr: 3.2, eg: 3.8, ng: 3.1, ke: 5.0, il: 2.0, vn: 6.2, th: 2.6, my: 4.3, ph: 5.5, ar: 3.9 },
      },
      {
        id: "inflation",
        name: "Inflation Rate",
        tooltip: "Annual consumer price inflation (lower is better).",
        unit: "%",
        format: "percent",
        higherIsBetter: false,
        source: "IMF",
        sourceUrl:"https://www.imf.org/en/publications/weo",
        india: 4.9,
        values: {us: 3.1, cn: 0.7, jp: 2.8, de: 3.2, gb: 4.0, fr: 3.5, br: 4.5, ru: 7.4, ca: 3.4, au: 4.1, kr: 3.1, id: 2.8, za: 5.9, sg: 3.7, ae: 2.3,
                 pk: 11.8, bd: 9.5, np: 6.8, lk: 4.2, bt: 5.5, mm: 24.5, af: 8.9,
                 it: 2.9, es: 3.0, nl: 3.4, se: 2.3, ch: 1.4, nz: 3.0,
                 mx: 4.7, sa: 2.1, tr: 44.4, eg: 21.3, ng: 22.9, ke: 6.8, il: 3.3, vn: 3.4, th: 1.2, my: 2.4, ph: 3.9, ar: 140.0 },
      },
      {
        id: "unemployment",
        name: "Unemployment Rate",
        tooltip: "Share of the labour force that is unemployed (lower is better).",
        unit: "%",
        format: "percent",
        higherIsBetter: false,
        source: "World Bank",
        sourceUrl:"https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS",
        india: 4.2,
        values: {  us: 3.7, cn: 5.1, jp: 2.6, de: 3.1, gb: 4.2, fr: 7.3, br: 7.8, ru: 3.0, ca: 5.8, au: 3.9, kr: 2.9, id: 5.3, za: 32.1, sg: 2.0, ae: 2.7,
                   pk: 6.3, bd: 4.2, np: 11.0, lk: 4.7, bt: 4.8, mm: 4.0, af: 14.0,
                   it: 7.5, es: 11.8, nl: 3.6, se: 7.4, ch: 2.0, nz: 4.0,
                   mx: 2.8, sa: 4.6, tr: 9.4, eg: 7.3, ng: 4.1, ke: 5.7, il: 3.4, vn: 2.0, th: 1.0, my: 3.3, ph: 4.5, ar: 6.2},
      },
    ],
  },
  {
    id: "governance",
    label: "Governance",
    indicators: [
      {
        id: "corruption",
        name: "Corruption Perceptions Rank",
        tooltip: "Rank on Transparency International's Corruption Perceptions Index (lower is better).",
        unit: "",
        format: "rank",
        higherIsBetter: false,
        source: "Transparency Intl.",
        sourceUrl:"https://www.transparency.org/en/cpi",
        india: 93,
        values: { us: 24, cn: 76, jp: 16, de: 9, gb: 20, fr: 20, br: 104, ru: 141, ca: 12, au: 14, kr: 32, id: 115, za: 83, sg: 5, ae: 26,
    pk: 133, bd: 149, np: 108, lk: 79, bt: 26, mm: 162, af: 162,
    it: 41, es: 36, nl: 8, se: 6, ch: 7, nz: 3,
    mx: 126, sa: 54, tr: 115, eg: 108, ng: 145, ke: 126, il: 30, vn: 83, th: 108, my: 57, ph: 115, ar: 98},
      },
      {
        id: "ease-business",
        name: "Ease of Doing Business",
        tooltip: "Historical World Bank Ease of Doing Business rank (lower is better).",
        unit: "",
        format: "rank",
        higherIsBetter: false,
        source: "World Bank",
        sourceUrl:"https://archive.doingbusiness.org/en/rankings",
        india: 63,
        values: { us: 6, cn: 31, jp: 29, de: 22, gb: 8, fr: 32, br: 124, ru: 28, ca: 23, au: 14, kr: 5, id: 73, za: 84, sg: 2, ae: 16,
    pk: 108, bd: 168, np: 94, lk: 99, bt: 89, mm: 165, af: 173,
    it: 58, es: 30, nl: 42, se: 10, ch: 36, nz: 1,
    mx: 60, sa: 62, tr: 33, eg: 114, ng: 131, ke: 56, il: 35, vn: 70, th: 21, my: 12, ph: 95, ar: 126 },
      },
      {
        id: "govt-effectiveness",
        name: "Govt. Effectiveness",
        tooltip: "World Bank government effectiveness percentile (higher is better).",
        unit: "",
        format: "number",
        higherIsBetter: true,
        source: "World Bank",
        sourceUrl:"https://www.worldbank.org/en/publication/worldwide-governance-indicators",
        india: 66,
        values: {  us: 89, cn: 74, jp: 93, de: 92, gb: 88, fr: 87, br: 47, ru: 52, ca: 95, au: 94, kr: 84, id: 60, za: 63, sg: 100, ae: 90,
    pk: 32, bd: 40, np: 30, lk: 45, bt: 58, mm: 15, af: 5,
    it: 66, es: 74, nl: 96, se: 98, ch: 97, nz: 99,
    mx: 55, sa: 78, tr: 58, eg: 42, ng: 25, ke: 44, il: 80, vn: 50, th: 62, my: 76, ph: 48, ar: 43},
      },
      {
        id: "press-freedom",
        name: "Press Freedom Rank",
        tooltip: "Reporters Without Borders World Press Freedom rank (lower is better).",
        unit: "",
        format: "rank",
        higherIsBetter: false,
        source: "RSF",
        sourceUrl:"https://rsf.org/en/index",
        india: 159,
        values: {  us: 55, cn: 172, jp: 68, de: 21, gb: 26, fr: 24, br: 82, ru: 162, ca: 14, au: 39, kr: 62, id: 108, za: 38, sg: 129, ae: 145,
    pk: 152, bd: 165, np: 74, lk: 135, bt: 90, mm: 171, af: 178,
    it: 46, es: 31, nl: 9, se: 4, ch: 8, nz: 13,
    mx: 128, sa: 166, tr: 158, eg: 170, ng: 123, ke: 102, il: 97, vn: 174, th: 87, my: 107, ph: 132, ar: 40 },
      },
    ],
  },
  {
    id: "technology",
    label: "Technology & Innovation",
    indicators: [
      {
        id: "innovation-rank",
        name: "Global Innovation Rank",
        tooltip: "WIPO Global Innovation Index rank (lower is better).",
        unit: "",
        format: "rank",
        higherIsBetter: false,
        source: "WIPO",
        sourceUrl:"https://www.wipo.int/en/web/global-innovation-index",
        india: 40,
        values: { us: 3, cn: 12, jp: 13, de: 8, gb: 4, fr: 11, br: 49, ru: 51, ca: 15, au: 24, kr: 6, id: 61, za: 59, sg: 5, ae: 32,
    pk: 88, bd: 102, np: 111, lk: 95, bt: 124, mm: 116, af: 133,
    it: 26, es: 29, nl: 9, se: 2, ch: 1, nz: 25,
    mx: 56, sa: 47, tr: 37, eg: 86, ng: 109, ke: 78, il: 14, vn: 44, th: 43, my: 33, ph: 53, ar: 73 },
      },
      {
        id: "internet-users",
        name: "Internet Penetration",
        tooltip: "Share of population using the internet (higher is better).",
        unit: "%",
        format: "percent",
        higherIsBetter: true,
        source: "ITU",
        sourceUrl:"https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx",
        india: 52,
        values: { us: 92, cn: 76, jp: 83, de: 93, gb: 96, fr: 93, br: 84, ru: 90, ca: 93, au: 96, kr: 98, id: 66, za: 72, sg: 96, ae: 100,
    pk: 36, bd: 41, np: 34, lk: 47, bt: 58, mm: 45, af: 18,
    it: 88, es: 94, nl: 97, se: 96, ch: 98, nz: 95,
    mx: 78, sa: 100, tr: 84, eg: 72, ng: 55, ke: 42, il: 90, vn: 79, th: 88, my: 97, ph: 73, ar: 87},
      },
      {
        id: "rd-spend",
        name: "R&D Spend (% GDP)",
        tooltip: "Gross domestic expenditure on R&D as a share of GDP (higher is better).",
        unit: "%",
        format: "percent",
        higherIsBetter: true,
        source: "UNESCO",
        sourceUrl:"https://data.uis.unesco.org",
        india: 0.7,
        values: {us: 3.5, cn: 2.4, jp: 3.3, de: 3.1, gb: 2.9, fr: 2.2, br: 1.2, ru: 1.0, ca: 1.7, au: 1.8, kr: 4.9, id: 0.3, za: 0.6, sg: 2.2, ae: 1.5,
    pk: 0.2, bd: 0.1, np: 0.3, lk: 0.1, bt: 0.1, mm: 0.1, af: 0.0,
    it: 1.5, es: 1.4, nl: 2.3, se: 3.4, ch: 3.2, nz: 1.4,
    mx: 0.3, sa: 0.8, tr: 1.4, eg: 0.7, ng: 0.2, ke: 0.8, il: 5.4, vn: 0.5, th: 1.3, my: 1.4, ph: 0.3, ar: 0.5},
      },
      {
        id: "startups",
        name: "Unicorn Startups",
        tooltip: "Number of privately held startups valued over $1 billion (higher is better).",
        unit: "",
        format: "number",
        higherIsBetter: true,
        source: "CB Insights",
        sourceUrl:"https://www.cbinsights.com/research-unicorn-companies",
        india: 118,
        values: {us: 656, cn: 168, jp: 8, de: 36, gb: 52, fr: 30, br: 20, ru: 3, ca: 21, au: 8, kr: 14, id: 12, za: 2, sg: 15, ae: 4,
    pk: 1, bd: 0, np: 0, lk: 0, bt: 0, mm: 0, af: 0,
    it: 3, es: 8, nl: 8, se: 9, ch: 6, nz: 1,
    mx: 8, sa: 4, tr: 4, eg: 1, ng: 3, ke: 1, il: 30, vn: 4, th: 3, my: 2, ph: 1, ar: 12},
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    indicators: [
      {
        id: "literacy",
        name: "Adult Literacy Rate",
        tooltip: "Share of adults aged 15+ who are literate (higher is better).",
        unit: "%",
        format: "percent",
        higherIsBetter: true,
        source: "UNESCO",
        sourceUrl:"https://data.uis.unesco.org",
        india: 76,
        values: {  us: 99, cn: 97, jp: 99, de: 99, gb: 99, fr: 99, br: 94, ru: 100, ca: 99, au: 99, kr: 98, id: 96, za: 95, sg: 97, ae: 98,
    pk: 60, bd: 75, np: 68, lk: 92, bt: 71, mm: 76, af: 37,
    it: 99, es: 98, nl: 99, se: 99, ch: 99, nz: 99,
    mx: 96, sa: 97, tr: 97, eg: 74, ng: 62, ke: 82, il: 98, vn: 95, th: 94, my: 95, ph: 98, ar: 99 },
      },
      {
        id: "universities",
        name: "Top 500 Universities",
        tooltip: "Number of institutions ranked in the QS World Top 500 (higher is better).",
        unit: "",
        format: "number",
        higherIsBetter: true,
        source: "QS Rankings",
        sourceUrl:"https://www.topuniversities.com/world-university-rankings",
        india: 11,
        values: { us: 88, cn: 41, jp: 24, de: 30, gb: 51, fr: 20, br: 8, ru: 15, ca: 20, au: 24, kr: 18, id: 6, za: 6, sg: 4, ae: 5,
    pk: 2, bd: 1, np: 0, lk: 0, bt: 0, mm: 0, af: 0,
    it: 10, es: 12, nl: 13, se: 8, ch: 9, nz: 6,
    mx: 4, sa: 8, tr: 6, eg: 3, ng: 1, ke: 1, il: 7, vn: 1, th: 3, my: 6, ph: 2, ar: 5 },
      },
      {
        id: "education-spend",
        name: "Education Spend (% GDP)",
        tooltip: "Government expenditure on education as a share of GDP (higher is better).",
        unit: "%",
        format: "percent",
        higherIsBetter: true,
        source: "World Bank",
        sourceUrl:"https://data.worldbank.org/indicator/SE.XPD.TOTL.GD.ZS",
        india: 4.5,
        values: {us: 6.0, cn: 3.6, jp: 3.4, de: 4.7, gb: 5.5, fr: 5.5, br: 6.1, ru: 3.7, ca: 5.2, au: 5.1, kr: 4.7, id: 3.5, za: 6.6, sg: 2.9, ae: 3.9,
    pk: 2.5, bd: 1.5, np: 4.1, lk: 2.1, bt: 6.5, mm: 2.2, af: 3.2,
    it: 4.1, es: 4.3, nl: 5.0, se: 7.6, ch: 5.0, nz: 6.1,
    mx: 4.3, sa: 4.8, tr: 4.3, eg: 2.4, ng: 1.9, ke: 4.8, il: 6.1, vn: 4.2, th: 3.8, my: 4.1, ph: 3.6, ar: 5.5},
      },
      {
        id: "tertiary-enrollment",
        name: "Tertiary Enrollment",
        tooltip: "Gross enrollment ratio in tertiary education (higher is better).",
        unit: "%",
        format: "percent",
        higherIsBetter: true,
        source: "UNESCO",
        sourceUrl:"https://data.uis.unesco.org",
        india: 32,
        values: {  us: 88, cn: 64, jp: 64, de: 70, gb: 66, fr: 68, br: 55, ru: 87, ca: 75, au: 120, kr: 98, id: 42, za: 24, sg: 91, ae: 52,
    pk: 12, bd: 21, np: 17, lk: 24, bt: 14, mm: 17, af: 10,
    it: 68, es: 92, nl: 89, se: 78, ch: 65, nz: 84,
    mx: 44, sa: 71, tr: 116, eg: 39, ng: 12, ke: 12, il: 67, vn: 36, th: 49, my: 45, ph: 36, ar: 90 },
      },
    ],
  },
]

export function formatValue(value: number, indicator: Indicator): string {
  if (indicator.format === "rank") return `#${value}`
  if (indicator.format === "percent") return `${value}%`
  return value.toLocaleString("en-US")
}

// Returns true when India leads the comparison country on this indicator.
export function indiaLeads(indicator: Indicator, countryCode: CountryCode): boolean {
  const other = indicator.values[countryCode]
  if (other === undefined) return false
  return indicator.higherIsBetter ? indicator.india > other : indicator.india < other
}

// India's share of the bar (0-100) representing relative standing on the metric.
export function indiaShare(indicator: Indicator, countryCode: CountryCode): number {
  const other = indicator.values[countryCode] ?? indicator.india
  const a = indicator.india
  const b = other
  if (indicator.format === "rank") {
    // Lower rank is better -> invert so the better rank gets the larger share.
    const invA = 1 / a
    const invB = 1 / b
    return Math.round((invA / (invA + invB)) * 100)
  }
  if (indicator.higherIsBetter) {
    const total = a + b
    return total === 0 ? 50 : Math.round((a / total) * 100)
  }
  const invA = 1 / Math.max(a, 0.01)
  const invB = 1 / Math.max(b, 0.01)
  return Math.round((invA / (invA + invB)) * 100)
}
