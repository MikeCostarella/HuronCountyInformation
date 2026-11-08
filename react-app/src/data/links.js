// Huron County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-11-08
//
// Every URL below was fetched and its content checked against the organization
// it claims to be. Nothing here was guessed from a naming pattern.
//
// THE HAZARD HERE IS THE NAME "HURON" — AND THE CITY OF HURON IS NOT IN IT
//
// The CITY of Huron, Ohio (BGSU Firelands, Huron City Schools, WKFM) and the
// village of Milan (Edison Birthplace) are in ERIE County. Both show up in every
// search for "Huron County" and both are excluded; the county's own "Cities &
// Villages" page even lists Milan. "Huron County" is also a county in Michigan
// (huroncountyparks.com and huroncounty.com are Michigan) and a city in South
// Dakota. Norwalk is also a city in Connecticut, Iowa and California:
//
//   norwalkchamber.org     -> Norwalk, IOWA chamber
//   norwalkchamber.com     -> Norwalk, CALIFORNIA chamber
//   norwalkpl.org          -> Norwalk, CONNECTICUT library
//   ymca.org Norwalk Branch -> Norwalk, CONNECTICUT (there is no YMCA in Norwalk or Willard, Ohio)
//   monroevillelibrary.org -> Monroeville, PENNSYLVANIA
//   willardlibin.*         -> Willard, INDIANA
//
// Bellevue straddles the Huron–Sandusky line and Plymouth the Huron–Richland
// line; both are included and flagged. Three Bellevue-address attractions are
// NOT in the county: Sorrowful Mother Shrine and Seneca Caverns are in Seneca
// County. Historic Lyme Village (also a Bellevue address) IS in Lyme Township.
//
// THINGS THAT ARE OUT OF DATE EVERYWHERE ELSE:
//
//   * The Huron County Chamber of Commerce, Huron County Development Council
//     (hcdc.net) and Norwalk Economic Development Corp. merged in April 2024
//     into the Huron County Growth Partnership (huroncountyohio.com). The
//     Norwalk Area Visitors Bureau is staffed by it.
//   * The Huron County Board of Mental Health & Addiction Services merged in
//     July 2026 into the five-county North Central Behavioral Health Board
//     (ncbhb.org). hcbmhas.org redirects there; huroncountymhas.org is a stale
//     orphan still listed by OACBHA — do not use it.
//   * The Bellevue Hospital became Firelands Health The Bellevue Hospital in
//     2025; bellevuehospital.com redirects to firelands.com.
//   * Willard Memorial Library now operates as the Huron County Community
//     Library (huroncolib.org); Greenwich, North Fairfield and Wakeman are its
//     branches, not independent libraries.
//   * Stein Hospice and Hospice of the Western Reserve became Reserve Care.
//     Its Sandusky center is in Erie County and its site does not claim Huron
//     County, so it is left out.
//   * NCAT bus service left Huron County in January 2026; Senior Express
//     (60+) is the only county-level transportation that could be verified.
//   * The Sheriff is at huroncountysheriff.com; the .org redirects.
//   * The Clerk's CaseLook disclaimer still names a former Clerk; the county's
//     elected-officials page and the Engineer's own site disagree on who the
//     Engineer is (the Engineer's site is used).
//   * The Bellevue Gazette closed in 2016. No evidence the Willard Times-Junction
//     still publishes. No TV station is licensed to a Huron County community.
//
// GEOGRAPHY WORTH KNOWING:
//
//   * Only Lyme Township has its own website. The other 18 townships are
//     covered by the county's single Township Trustees directory page.
//   * The Coroner has no web page; the county's Elected Officials page is the
//     only place its address appears, which is why that page is listed.
//   * Norwalk Municipal Court covers the whole county except Lyme and Sherman
//     townships, which fall under Bellevue Municipal Court (Sandusky County).
//   * 9-1-1 is coordinated by the EMA, not a separate agency.
//   * EHOVE (Milan) and North Point ESC (Sandusky) are in Erie County but serve
//     Huron County's districts, so both are included and flagged.
//
// LEFT OUT rather than listed unverified: hccommissioners.com (blocks fetching;
// the county portal is used), the Beacon search's direct URLs and the
// Recorder's PAX document search (errors on fetch; reachable from the Auditor
// and Recorder sites), Probate e-services (blocks fetching), Norwalk Area
// Visitors Bureau (norwalkareavb.com blocks fetching), Bellevue Area Chamber
// (empty directory listing), Willard Area Chamber (no website), Huron County
// Family & Children First Council (no website), Bellevue Historical Society
// (page returned no content), WLRD 96.9 (blocks fetching), the Norwalk and
// Willard food banks (Facebook only), Huron County Regional Planning
// Commission (no such body — planning sits with the Commissioners).

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Huron County Auditor Real Estate Search (Beacon)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Huron County, Ohio", category: "Government", subcategory: "County", url: "https://www.huroncounty-oh.gov/", description: "Official county portal for Huron County (county seat Norwalk), with department, court and agency listings." },
  { name: "Huron County Board of Commissioners", category: "Government", subcategory: "County", url: "https://www.huroncounty-oh.gov/departments/commissioners/index.php", description: "Three-member board with offices at 180 Milan Ave., Suite 7 in Norwalk; agendas and minutes are posted on the page." },
  { name: "Huron County Elected Officials", category: "Government", subcategory: "County", url: "https://www.huroncounty-oh.gov/departments/elected_officials.php", description: "Directory of every county elected office with its address — including the Coroner at 180 Milan Ave., Suite 9 in Norwalk, which has no page of its own." },
  { name: "Huron County Employment Opportunities", category: "Government", subcategory: "County", url: "https://www.huroncounty-oh.gov/departments/human_resources/employment.php", description: "County Human Resources page listing current county job postings and the application form." },
  { name: "Huron County Job and Family Services", category: "Government", subcategory: "County", url: "https://www.huroncountydjfs.com/", description: "County agency at 185 Shady Lane Dr. in Norwalk running public assistance, child support and children services, and operating the OhioMeansJobs Huron County center." },
  { name: "Huron County Board of Developmental Disabilities", category: "Government", subcategory: "County", url: "https://hurondd.org/", description: "County board of developmental disabilities at 306 South Norwalk Road in Norwalk." },
  { name: "Huron County Auditor", category: "Government", subcategory: "Auditor", url: "https://huroncountyauditor.org/", description: "Office of Auditor Roland Tkach at 12 East Main St., Suite 300 in Norwalk, with links to the Beacon property search and map." },
  { name: "Huron County Auditor Real Estate Search", category: "Government", subcategory: "GIS", url: "https://huronoh-auditor.schneidergis.com/", description: "The Auditor's property search and parcel mapping portal, hosted by Schneider Geospatial (Beacon) — the service this project's parcel data is built from." },
  { name: "Huron County Treasurer", category: "Government", subcategory: "Treasurer", url: "https://www.huroncountytreasurer.org/", description: "Office of Treasurer Megan Bursley at 16 East Main St. in Norwalk, with tax due dates, parcel lookup and online payment." },
  { name: "Huron County Recorder", category: "Government", subcategory: "Recorder", url: "https://huronrecorder.org/", description: "Office of Recorder Jan M. Tkach at 12 E. Main St., Suite 100 in Norwalk, with recording requirements and a link to the public document search." },
  { name: "Huron County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.huron.boe.ohio.gov/", description: "County elections office in Norwalk, with absentee ballot applications, election results, campaign finance deadlines and board meeting dates." },
  { name: "Huron County Clerk of Courts", category: "Government", subcategory: "Courts", url: "https://huroncountyclerk.com/", description: "Office of Clerk Gina M. Hartman at the courthouse, 2 East Main St. in Norwalk; the Title Office is at 305 Shady Lane Dr., Suite 101." },
  { name: "Huron County Clerk of Courts Case Search", category: "Government", subcategory: "Courts", url: "https://apps.huroncountyclerk.com/", description: "CaseLook online record search and court calendar for Common Pleas Court cases, run by the Clerk of Courts." },
  { name: "Huron County Common Pleas Court", category: "Government", subcategory: "Courts", url: "https://www.huroncountycommonpleas.org/", description: "General division at 2 East Main St., Suite 202 in Norwalk, with jury duty, probation, mediation and forms; Judge James W. Conway presides." },
  { name: "Huron County Probate and Juvenile Court", category: "Government", subcategory: "Courts", url: "https://www.huroncounty-oh.gov/departments/probate_and_juvenile_court/index.php", description: "Probate (Room 106) and Juvenile (Room 101) divisions at the courthouse, 2 East Main St. in Norwalk; Judge Timothy L. Cardwell presides." },
  { name: "Norwalk Municipal Court", category: "Government", subcategory: "Courts", url: "http://www.norwalkmunicourt.com/", description: "Municipal court at 45 N. Linwood Ave. in Norwalk, serving all of Huron County except Lyme and Sherman townships; Judge Eric R. Weisenburger presides." },
  { name: "Huron County Prosecutor", category: "Government", subcategory: "Courts", url: "https://www.huroncounty-oh.gov/departments/prosecutor.php", description: "Prosecutor's office at 12 East Main St., 4th floor in Norwalk." },
  { name: "Huron County Public Defender", category: "Government", subcategory: "Courts", url: "https://www.huroncounty-oh.gov/departments/public_defender.php", description: "Public defender's office at 16 East Main St., 2nd floor in Norwalk." },
  { name: "Huron County Law Library", category: "Government", subcategory: "Courts", url: "https://www.huroncounty-oh.gov/departments/law_library.php", description: "County law library at the courthouse, 2 East Main St. in Norwalk." },
  { name: "Huron County Victim Assistance", category: "Government", subcategory: "Courts", url: "https://www.huroncounty-oh.gov/departments/victims_assistance.php", description: "County victim assistance office at 12 East Main St. in Norwalk." },
  { name: "Huron County Sheriff's Office", category: "Government", subcategory: "Public Safety", url: "https://huroncountysheriff.com/", description: "Office of Sheriff Todd Corbin, with the jail, at 255 Shady Lane Dr. in Norwalk." },
  { name: "Huron County Emergency Management Agency", category: "Government", subcategory: "Public Safety", url: "https://www.huroncounty-oh.gov/departments/emergency_management/index.php", description: "County EMA and Homeland Security at 255 Shady Lane Dr., Unit B in Norwalk, which also coordinates the county's 9-1-1 system; alert sign-up and storm-damage reporting are on the page." },
  { name: "Huron County Dog Warden", category: "Government", subcategory: "Public Safety", url: "https://www.huroncounty-oh.gov/departments/dog_warden.php", description: "County dog warden and shelter at 130 Shady Lane, Building E in Norwalk." },
  { name: "Huron County Engineer", category: "Government", subcategory: "Public Works", url: "http://www.huroncountyengineer.org/", description: "Office of Engineer Joseph B. Kovach at 150 Jefferson St. in Norwalk, responsible for county roads and bridges." },
  { name: "Huron County Solid Waste Management", category: "Government", subcategory: "Public Works", url: "https://www.huroncounty-oh.gov/departments/solid_waste_management/index.php", description: "County solid waste office at 180 Milan Ave. in Norwalk, with recycling locations and the transfer station at 2415 Townline Rd. 131 in Willard." },
  { name: "Huron County Building Department", category: "Government", subcategory: "Planning", url: "https://www.huroncounty-oh.gov/departments/building_department_.php", description: "Commercial building, electrical and HVAC permits and contractor registration, administered for the county by SafeBuilt." },
  { name: "Huron Soil and Water Conservation District", category: "Government", subcategory: "Conservation", url: "https://www.huronswcd.com/", description: "The county's soil and water conservation district, with offices at 8 Fair Road in Norwalk." },
  { name: "Huron County Veterans Service Office", category: "Government", subcategory: "Veterans", url: "https://www.huroncountyvets.com/", description: "County veterans service office providing benefits assistance to Huron County veterans and their families." },
  { name: "Senior Express Transportation", category: "Government", subcategory: "Transit", url: "https://sfaconnection.org/services/transportation/", description: "Door-to-door, donation-based rides for county residents age 60 and over, run by Enrichment Centers for Huron County — the county's only public transportation service since NCAT withdrew in January 2026." },
  { name: "City of Norwalk", category: "Government", subcategory: "City", url: "https://www.norwalkoh.com/", description: "City hall at 38 Whittlesey Ave. in Norwalk, the county seat." },
  { name: "City of Willard", category: "Government", subcategory: "City", url: "https://www.willardohio.gov/", description: "City offices at 631 S. Myrtle Ave. in Willard." },
  { name: "City of Bellevue", category: "Government", subcategory: "City", url: "https://thenewcityofbellevue.com/", description: "City offices at 3000 Seneca Industrial Pkwy. in Bellevue, a city that straddles the Huron–Sandusky county line." },
  { name: "Village of Greenwich", category: "Government", subcategory: "Village", url: "https://villageofgreenwich.com/", description: "Village offices at 45 Main St. in Greenwich." },
  { name: "Village of Monroeville", category: "Government", subcategory: "Village", url: "http://www.monroevilleohio.com/", description: "Village offices at 21 North Main St. in Monroeville." },
  { name: "Village of New London", category: "Government", subcategory: "Village", url: "https://www.newlondonoh.com/", description: "Village offices at 115 East Main St. in New London." },
  { name: "Village of North Fairfield", category: "Government", subcategory: "Village", url: "https://northfairfieldv.com/", description: "Village office at 3 Main St. in North Fairfield." },
  { name: "Village of Plymouth", category: "Government", subcategory: "Village", url: "https://www.plymouthoh.org/", description: "Village offices at 48 West Broadway in Plymouth, a village that straddles the Huron–Richland county line." },
  { name: "Village of Wakeman", category: "Government", subcategory: "Village", url: "https://www.wakemanohio.com/", description: "Village offices at 59 Hyde St. in Wakeman." },
  { name: "Huron County Township Trustees", category: "Government", subcategory: "Township", url: "https://www.huroncounty-oh.gov/departments/township_trustees.php", description: "County directory of trustees, fiscal officers and meeting places for all 19 townships — Bronson, Clarksfield, Fairfield, Fitchville, Greenfield, Greenwich, Hartland, Lyme, New Haven, New London, Norwalk, Norwich, Peru, Richmond, Ridgefield, Ripley, Sherman, Townsend and Wakeman." },
  { name: "Lyme Township", category: "Government", subcategory: "Township", url: "https://lymetownship.com/", description: "The only Huron County township with its own website; township building at 5646 Young Rd. near Bellevue." },
  // ---------- Education ----------
  { name: "Norwalk City Schools", category: "Education", subcategory: "K-12", url: "https://www.norwalktruckers.net/", description: "Public district with its central office at 134 Benedict Ave. in Norwalk and six buildings: the high school, middle school, Main Street Intermediate and League, Pleasant and Maplehurst elementaries." },
  { name: "Willard City Schools", category: "Education", subcategory: "K-12", url: "https://www.willard.k12.oh.us/", description: "Public district based at 123 Whisler Ave. in Willard, with an elementary, middle and high school." },
  { name: "Bellevue City Schools", category: "Education", subcategory: "K-12", url: "https://www.bellevueschools.org/", description: "Public district based at 125 North Street in Bellevue, with a preschool, elementary, middle and high school; it serves parts of both Huron and Sandusky counties." },
  { name: "Western Reserve Local Schools", category: "Education", subcategory: "K-12", url: "https://www.western-reserve.org/", description: "Public district at 3765 U.S. Route 20 East in Collins, serving the Collins and Wakeman area of eastern Huron County." },
  { name: "New London Local Schools", category: "Education", subcategory: "K-12", url: "https://www.nlschools.org/", description: "Public district at 2 Wildcat Drive in New London, with an elementary, middle and high school and a digital academy." },
  { name: "South Central Local Schools", category: "Education", subcategory: "K-12", url: "https://www.south-central.org/", description: "Public district at 3305 Greenwich Angling Rd. in Greenwich, with a preschool, elementary, middle and high school." },
  { name: "Monroeville Local Schools", category: "Education", subcategory: "K-12", url: "https://www.monroevilleschools.org/", description: "Public district at 101 West St. in Monroeville, with a preschool and a single K-12 campus." },
  { name: "Plymouth-Shiloh Local Schools", category: "Education", subcategory: "K-12", url: "https://www.plymouthshilohsd.org/", description: "Public district with its board office at 365 Sandusky Street in Plymouth, serving the Plymouth and Shiloh communities on both sides of the Huron–Richland line." },
  { name: "EHOVE Career Center", category: "Education", subcategory: "Career Center", url: "https://www.ehove.net/", description: "Joint vocational school district at 316 W. Mason Rd. in Milan (Erie County) serving Huron County's districts, including Norwalk, Bellevue, Monroeville, New London, South Central, Western Reserve and St. Paul." },
  { name: "North Point Educational Service Center", category: "Education", subcategory: "ESC", url: "https://npesc.socs.net/", description: "Educational service center at 4918 Milan Road in Sandusky whose governing board is elected from Erie, Huron and Ottawa counties." },
  { name: "Norwalk Catholic School / St. Paul High School", category: "Education", subcategory: "Private School", url: "https://www.norwalkcatholic.org/", description: "Catholic preschool-through-12 school in Norwalk, with the early childhood center at 77 State Street, the elementary at 31 Milan Ave. and St. Paul High School (grades 7–12) at 93 East Main Street." },
  { name: "Norwalk Public Library", category: "Education", subcategory: "Library", url: "https://www.norwalk.lib.oh.us/", description: "Independent public library at 46 West Main Street in Norwalk." },
  { name: "Huron County Community Library", category: "Education", subcategory: "Library", url: "https://www.huroncolib.org/", description: "Library headquartered at Willard Memorial Library, 6 West Emerald Street in Willard, with branches in Greenwich (4 New Street), North Fairfield (5 East Main Street) and Wakeman (33 Pleasant Street)." },
  { name: "Bellevue Public Library", category: "Education", subcategory: "Library", url: "https://bellevue.lib.oh.us/", description: "Public library at 224 East Main Street in Bellevue." },
  { name: "New London Public Library", category: "Education", subcategory: "Library", url: "https://newlondonpubliclibrary.org/", description: "Independent public library at 67 S. Main St. in New London." },
  { name: "Monroeville Public Library", category: "Education", subcategory: "Library", url: "https://www.monroevillepl.org/", description: "Independent public library at 34 Monroe Street in Monroeville." },
  // ---------- Health ----------
  { name: "Fisher-Titus Medical Center", category: "Health", subcategory: "Hospital", url: "https://www.fishertitus.org/", description: "Community hospital and health system at 272 Benedict Ave. in Norwalk, founded in 1917, with outpatient sites in Bellevue, New London, Wakeman and Willard." },
  { name: "Mercy Health – Willard Hospital", category: "Health", subcategory: "Hospital", url: "https://www.mercy.com/locations/hospitals/toledo/mercy-health-willard-hospital", description: "Community hospital at 1100 Neal Zick Rd. in Willard, part of Mercy Health, with 24-hour emergency care, intensive care, surgery and maternity services." },
  { name: "Firelands Health The Bellevue Hospital", category: "Health", subcategory: "Hospital", url: "https://www.firelands.com/locations/profile/bellevue-hospital/", description: "Not-for-profit hospital at 1400 W. Main St. in Bellevue, part of Firelands Health since 2025, with emergency, surgical, hospitalist and urgent care." },
  { name: "Huron County Public Health", category: "Health", subcategory: "Public Health", url: "https://www.huroncohealth.com/", description: "The county's general health district at 28 Executive Drive in Norwalk — immunizations, vital records, environmental health inspections and communicable disease control." },
  { name: "North Central Behavioral Health Board", category: "Health", subcategory: "Mental Health", url: "https://ncbhb.org/", description: "Five-county mental health and addiction planning board for Huron, Seneca, Ottawa, Sandusky and Wyandot counties, formed in 2026 and based at 1200 N. State Route 53 in Tiffin; it succeeded the Huron County Board of Mental Health & Addiction Services." },
  { name: "Firelands Counseling & Recovery Services of Huron County", category: "Health", subcategory: "Mental Health", url: "https://www.firelands.com/locations/profile/?id=60", description: "Outpatient mental health and addiction treatment at 34 Executive Drive in Norwalk, with a second office at 290 Progress Drive, Suite B in Bellevue." },
  { name: "Family Life Counseling and Psychiatric Services", category: "Health", subcategory: "Mental Health", url: "https://www.flcps.com/", description: "Nonprofit mental health and addiction recovery provider with a Norwalk office at 175 Milan Avenue and a children's behavioral health center at 34 Woodlawn Ave." },
  { name: "Family Health Services", category: "Health", subcategory: "Clinic", url: "https://www.familyhs.org/", description: "Federally funded community health center serving Huron and Erie counties, with a Norwalk clinic at 265 Benedict Avenue offering primary, dental and behavioral health care on a sliding fee scale." },
  { name: "Community Health Services", category: "Health", subcategory: "Clinic", url: "https://www.chsohio.com/", description: "Fremont-based community health center with a Willard site at 3909 Kok Rd. for medical, dental and behavioral health care." },
  // ---------- Business & Economy ----------
  { name: "Huron County Growth Partnership", category: "Business & Economy", subcategory: "Chamber", url: "https://huroncountyohio.com/", description: "The county's combined chamber of commerce and economic development organization at 12 Benedict Avenue in Norwalk, formed in 2024 from the Huron County Chamber, the Huron County Development Council and the Norwalk Economic Development Corporation." },
  { name: "Willard Community Improvement Corporation", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.willardohio.gov/community-improvement-corporation.html", description: "Not-for-profit corporation promoting industrial, commercial and civic development in Willard, hosted on the city's site." },
  { name: "OSU Extension – Huron County", category: "Business & Economy", subcategory: "Agriculture", url: "https://huron.osu.edu/", description: "Ohio State University Extension office at 180 Milan Ave., Suite 1 in Norwalk — agriculture, family and consumer sciences, community development and 4-H." },
  { name: "Huron County Farm Bureau", category: "Business & Economy", subcategory: "Agriculture", url: "https://ofbf.org/tag/huron-county/", description: "The county Farm Bureau's news and events, published on the Ohio Farm Bureau Federation site; it has no site of its own." },
  { name: "Firelands Electric Cooperative", category: "Business & Economy", subcategory: "Utility", url: "https://www.firelandsec.com/", description: "Member-owned electric utility headquartered at 103 Industrial Drive in New London, serving more than 9,100 homes and businesses in rural Huron, Ashland, Lorain and Richland counties." },
  // ---------- Community & Social ----------
  { name: "Norwalk Area United Fund", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.norwalkareauf.org/", description: "Community funder serving Huron County since 1877, supporting more than 20 local programs in education, health and crisis services; offices at 2 E. Seminary St. in Norwalk." },
  { name: "Huron County Community Foundation", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.huronccf.org/", description: "Community foundation at 12 Benedict Ave. in Norwalk awarding community grants, teacher mini-grants and scholarships to Huron County students." },
  { name: "Firelands Genealogical Society", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.hcc-ogs.org/", description: "Huron County chapter of the Ohio Genealogical Society, operating the Laning-Young Research Library at 9 Case Avenue in Norwalk and publishing county records and cemetery inscriptions." },
  { name: "Kiwanis Club of Norwalk", category: "Community & Social", subcategory: "Service Club", url: "https://k00142.site.kiwanis.org", description: "Kiwanis club running service projects and fundraisers for children in Norwalk and the surrounding area." },
  { name: "The Salvation Army – Norwalk", category: "Community & Social", subcategory: "Food & Assistance", url: "https://easternusa.salvationarmy.org/northeast-ohio/norwalk/", description: "Corps at 55 Whittlesey Avenue in Norwalk with a Tuesday and Thursday soup kitchen, food assistance, youth programs and seasonal aid." },
  { name: "Community Action Commission of Erie, Huron & Richland Counties", category: "Community & Social", subcategory: "Food & Assistance", url: "https://www.cacehr.org/", description: "Community action agency for energy assistance (HEAP, PIPP), Head Start and social services, with Huron County offices at 92 N. Prospect St. and 11 E. League St. in Norwalk and 1530 S. Conwell St. in Willard." },
  { name: "Second Harvest Food Bank of North Central Ohio", category: "Community & Social", subcategory: "Food & Assistance", url: "https://www.secondharvestfoodbank.org/", description: "Regional food bank in Lorain supplying partner pantries and hot-meal programs in Huron, Crawford, Erie and Lorain counties." },
  { name: "Firelands Habitat for Humanity", category: "Community & Social", subcategory: "Housing", url: "https://www.firelandshabitat.org/", description: "Habitat affiliate based in Sandusky that builds and sells affordable homes to qualifying families in Huron and Erie counties and runs a ReStore." },
  { name: "Huron County Humane Society", category: "Community & Social", subcategory: "Animal Welfare", url: "https://www.huroncountyhumanesociety.com/", description: "Animal shelter at 246 Woodlawn Avenue in Norwalk handling adoptions, surrenders and spay/neuter scheduling, and operating the Conway Dog Park." },
  { name: "Enrichment Centers for Huron County", category: "Community & Social", subcategory: "Seniors", url: "https://sfaconnection.org/", description: "Senior services agency at 325 Shady Lane in Norwalk, with a second center at 315 E. Tiffin St. in Willard — meals, Medicare assistance, activities and the Senior Express rides for residents 60 and over." },
  // ---------- Recreation & Tourism ----------
  { name: "Huron County Fair", category: "Recreation & Tourism", subcategory: "Fair", url: "https://www.huroncountyfair.com/", description: "Annual fair of the Huron County Agricultural Society at the fairgrounds, 940 Fair Road in Norwalk, held in mid-August." },
  { name: "Huron County Park District", category: "Recreation & Tourism", subcategory: "Parks", url: "https://huroncountyparkdistrict.square.site/", description: "County park district based in Norwalk, operating the Land Lab on South Norwalk Road for hiking, birding and education." },
  { name: "Norwalk Park & Recreation", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.norwalkrec.com/", description: "City recreation department at the Ernsthausen Recreation Center, 100 Republic St. in Norwalk, running the indoor pool, gym, city parks and shelters including Veterans Memorial Lake Park." },
  { name: "Summit Motorsports Park", category: "Recreation & Tourism", subcategory: "Motorsports", url: "https://summitmotorsportspark.com/", description: "NHRA drag racing facility at 1300 State Route 18 in Norwalk, home of the Summit Racing Equipment NHRA Nationals and the Night Under Fire." },
  { name: "Firelands Historical Society & Museum", category: "Recreation & Tourism", subcategory: "Museum", url: "https://www.firelandsmuseum.com/", description: "Historical society operating the Firelands Museum at the Preston-Wickham House, 4 Case Avenue in Norwalk, open seasonally May through October." },
  { name: "Historic Lyme Village", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://lymevillage.org/", description: "Volunteer-run living history village at 5001 State Route 4 in Lyme Township (Bellevue address), with the John Wright Mansion, Detterman Log Church and National Postmark Museum, open Wednesday–Saturday in summer." },
  { name: "Mad River & NKP Railroad Museum", category: "Recreation & Tourism", subcategory: "Museum", url: "https://www.madrivermuseum.org/", description: "Railroad museum at 253 Southwest Street in Bellevue with full-size vintage rolling stock, open Memorial Day through Labor Day and weekends in May and September." },
  { name: "Star View Drive-In", category: "Recreation & Tourism", subcategory: "Attraction", url: "http://www.starviewdriveintheatre.com/", description: "Drive-in movie theater open since 1949 at 2083 US Highway 20 W, between Monroeville and Norwalk." },
  { name: "Eagle Creek Golf Club", category: "Recreation & Tourism", subcategory: "Golf", url: "http://www.eaglecreekgolf.com/", description: "18-hole public course at 2406 New State Road in Norwalk, with a practice facility, simulator and restaurant." },
  { name: "Twin Lakes Golf Course", category: "Recreation & Tourism", subcategory: "Golf", url: "https://twinlakesbellevue.com/", description: "9-hole public course and restaurant at 100 Decker St. in Bellevue." },
  { name: "Huron County Growth Partnership – Visit Here", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://huroncountyohio.com/visit-here/", description: "Home of the Norwalk Area Visitors Bureau, listing Huron County attractions, trails, shops and the community calendar." },
  { name: "Discover Bellevue", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://www.bellevuetourism.org/", description: "The Bellevue Area Tourism & Visitors Bureau, with a community events calendar and local attractions, dining and lodging." },
  // ---------- News & Media ----------
  { name: "Norwalk Reflector", category: "News & Media", subcategory: "Newspaper", url: "https://www.norwalkreflector.com/", description: "Daily newspaper (Monday–Saturday) covering Norwalk and Huron County news, sports and obituaries; its business office is shared with the Sandusky Register under common ownership." },
  { name: "95.3 WLKR", category: "News & Media", subcategory: "Radio", url: "https://www.wlkrradio.com/", description: "FM station licensed to Norwalk, with local news, a live stream and a community calendar; sister station WLKR Classic is on 1510 AM." },
  { name: "WOHF 92.1 The Wolf", category: "News & Media", subcategory: "Radio", url: "https://www.wohfradio.com/", description: "Classic hits FM station licensed to Bellevue, operated by BAS Broadcasting from Fremont." },
  { name: "Annunciation Radio (WSHB 90.9 FM)", category: "News & Media", subcategory: "Radio", url: "https://www.annunciationradio.com/", description: "Catholic radio network whose WSHB 90.9 FM is licensed to Willard; the network itself is based in Holland, Ohio." },
];
