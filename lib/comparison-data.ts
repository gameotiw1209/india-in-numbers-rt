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
]

export type Indicator = {
  id: string
  name: string
  tooltip: string
  unit: string // e.g. "" for rank, "%" for percentages
  format: "rank" | "percent" | "number"
  higherIsBetter: boolean
  source: string
  // india value + per-country values keyed by country code
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
        india: 5,
        values: { us: 1, cn: 2, jp: 4, de: 3, gb: 6, fr: 7, br: 9, ru: 11, ca: 10, au: 14, kr: 13, id: 16, za: 33, sg: 34, ae: 32 },
      },
      {
        id: "gdp-growth",
        name: "GDP Growth Rate",
        tooltip: "Annual real GDP growth rate (higher is better).",
        unit: "%",
        format: "percent",
        higherIsBetter: true,
        source: "IMF",
        india: 6.8,
        values: { us: 2.5, cn: 5.0, jp: 1.0, de: 0.2, gb: 0.5, fr: 0.9, br: 2.9, ru: 3.6, ca: 1.2, au: 1.5, kr: 2.2, id: 5.1, za: 0.6, sg: 2.7, ae: 3.4 },
      },
      {
        id: "inflation",
        name: "Inflation Rate",
        tooltip: "Annual consumer price inflation (lower is better).",
        unit: "%",
        format: "percent",
        higherIsBetter: false,
        source: "IMF",
        india: 4.9,
        values: { us: 3.1, cn: 0.7, jp: 2.8, de: 3.2, gb: 4.0, fr: 3.5, br: 4.5, ru: 7.4, ca: 3.4, au: 4.1, kr: 3.1, id: 2.8, za: 5.9, sg: 3.7, ae: 2.3 },
      },
      {
        id: "unemployment",
        name: "Unemployment Rate",
        tooltip: "Share of the labour force that is unemployed (lower is better).",
        unit: "%",
        format: "percent",
        higherIsBetter: false,
        source: "World Bank",
        india: 4.2,
        values: { us: 3.7, cn: 5.1, jp: 2.6, de: 3.1, gb: 4.2, fr: 7.3, br: 7.8, ru: 3.0, ca: 5.8, au: 3.9, kr: 2.9, id: 5.3, za: 32.1, sg: 2.0, ae: 2.7 },
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
        india: 93,
        values: { us: 24, cn: 76, jp: 16, de: 9, gb: 20, fr: 20, br: 104, ru: 141, ca: 12, au: 14, kr: 32, id: 115, za: 83, sg: 5, ae: 26 },
      },
      {
        id: "ease-business",
        name: "Ease of Doing Business",
        tooltip: "Historical World Bank Ease of Doing Business rank (lower is better).",
        unit: "",
        format: "rank",
        higherIsBetter: false,
        source: "World Bank",
        india: 63,
        values: { us: 6, cn: 31, jp: 29, de: 22, gb: 8, fr: 32, br: 124, ru: 28, ca: 23, au: 14, kr: 5, id: 73, za: 84, sg: 2, ae: 16 },
      },
      {
        id: "govt-effectiveness",
        name: "Govt. Effectiveness",
        tooltip: "World Bank government effectiveness percentile (higher is better).",
        unit: "",
        format: "number",
        higherIsBetter: true,
        source: "World Bank",
        india: 66,
        values: { us: 89, cn: 74, jp: 93, de: 92, gb: 88, fr: 87, br: 47, ru: 52, ca: 95, au: 94, kr: 84, id: 60, za: 63, sg: 100, ae: 90 },
      },
      {
        id: "press-freedom",
        name: "Press Freedom Rank",
        tooltip: "Reporters Without Borders World Press Freedom rank (lower is better).",
        unit: "",
        format: "rank",
        higherIsBetter: false,
        source: "RSF",
        india: 159,
        values: { us: 55, cn: 172, jp: 68, de: 21, gb: 26, fr: 24, br: 82, ru: 162, ca: 14, au: 39, kr: 62, id: 108, za: 38, sg: 129, ae: 145 },
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
        india: 40,
        values: { us: 3, cn: 12, jp: 13, de: 8, gb: 4, fr: 11, br: 49, ru: 51, ca: 15, au: 24, kr: 6, id: 61, za: 59, sg: 5, ae: 32 },
      },
      {
        id: "internet-users",
        name: "Internet Penetration",
        tooltip: "Share of population using the internet (higher is better).",
        unit: "%",
        format: "percent",
        higherIsBetter: true,
        source: "ITU",
        india: 52,
        values: { us: 92, cn: 76, jp: 83, de: 93, gb: 96, fr: 93, br: 84, ru: 90, ca: 93, au: 96, kr: 98, id: 66, za: 72, sg: 96, ae: 100 },
      },
      {
        id: "rd-spend",
        name: "R&D Spend (% GDP)",
        tooltip: "Gross domestic expenditure on R&D as a share of GDP (higher is better).",
        unit: "%",
        format: "percent",
        higherIsBetter: true,
        source: "UNESCO",
        india: 0.7,
        values: { us: 3.5, cn: 2.4, jp: 3.3, de: 3.1, gb: 2.9, fr: 2.2, br: 1.2, ru: 1.0, ca: 1.7, au: 1.8, kr: 4.9, id: 0.3, za: 0.6, sg: 2.2, ae: 1.5 },
      },
      {
        id: "startups",
        name: "Unicorn Startups",
        tooltip: "Number of privately held startups valued over $1 billion (higher is better).",
        unit: "",
        format: "number",
        higherIsBetter: true,
        source: "CB Insights",
        india: 118,
        values: { us: 656, cn: 168, jp: 8, de: 36, gb: 52, fr: 30, br: 20, ru: 3, ca: 21, au: 8, kr: 14, id: 12, za: 2, sg: 15, ae: 4 },
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
        india: 76,
        values: { us: 99, cn: 97, jp: 99, de: 99, gb: 99, fr: 99, br: 94, ru: 100, ca: 99, au: 99, kr: 98, id: 96, za: 95, sg: 97, ae: 98 },
      },
      {
        id: "universities",
        name: "Top 500 Universities",
        tooltip: "Number of institutions ranked in the QS World Top 500 (higher is better).",
        unit: "",
        format: "number",
        higherIsBetter: true,
        source: "QS Rankings",
        india: 11,
        values: { us: 88, cn: 41, jp: 24, de: 30, gb: 51, fr: 20, br: 8, ru: 15, ca: 20, au: 24, kr: 18, id: 6, za: 6, sg: 4, ae: 5 },
      },
      {
        id: "education-spend",
        name: "Education Spend (% GDP)",
        tooltip: "Government expenditure on education as a share of GDP (higher is better).",
        unit: "%",
        format: "percent",
        higherIsBetter: true,
        source: "World Bank",
        india: 4.5,
        values: { us: 6.0, cn: 3.6, jp: 3.4, de: 4.7, gb: 5.5, fr: 5.5, br: 6.1, ru: 3.7, ca: 5.2, au: 5.1, kr: 4.7, id: 3.5, za: 6.6, sg: 2.9, ae: 3.9 },
      },
      {
        id: "tertiary-enrollment",
        name: "Tertiary Enrollment",
        tooltip: "Gross enrollment ratio in tertiary education (higher is better).",
        unit: "%",
        format: "percent",
        higherIsBetter: true,
        source: "UNESCO",
        india: 32,
        values: { us: 88, cn: 64, jp: 64, de: 70, gb: 66, fr: 68, br: 55, ru: 87, ca: 75, au: 120, kr: 98, id: 42, za: 24, sg: 91, ae: 52 },
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
  // Lower is better for non-rank metrics (inflation, unemployment).
  const invA = 1 / Math.max(a, 0.01)
  const invB = 1 / Math.max(b, 0.01)
  return Math.round((invA / (invA + invB)) * 100)
}
