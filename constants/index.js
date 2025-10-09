const navLinks = [
 {
	id: "cocktails",
	title: "Electrolytes",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "work",
	title: "The Formula",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
 {
	name: "Citrus Charge",
	country: "Zesty Lemon & Sea Salt",
	detail: "Sachet Box",
	price: "$19.99",
 },
 {
	name: "Berry Boost",
	country: "Wild Berries & Coconut Water",
	detail: "Sachet Box",
	price: "$19.99",
 },
 {
	name: "Tropical Surge",
	country: "Pineapple, Mango & Citrus",
	detail: "Sachet Box",
	price: "$19.99",
 },
 {
	name: "Arctic Wave",
	country: "Blue Raspberry & Mint",
	detail: "Sachet Box",
	price: "$19.99",
 },
];

const mockTailLists = [
 {
	name: "Hydra+ Smart Water Bottle",
	country: "US",
	detail: "BPA-free stainless-steel bottle",
	price: "$10",
 },
 {
	name: "Hydra+ Active Tee",
	country: "US",
	detail: "Lightweight, moisture-wicking performance shirt",
	price: "$49",
 },
 {
	name: "Hydra+ Gym Towel",
	country: "CA",
	detail: "Microfiber quick-dry towel",
	price: "$20",
 },
 {
	name: "Hydra+ Performance Cap",
	country: "IE",
	detail: "Breathable mesh cap with adjustable strap",
	price: "$29",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Clean, Sugar-Free Formula",
 "Portable & Convenient",
 "Mediterranean-Inspired Flavors",
 "EU-Certified Quality",
];

const goodLists = [
 "Athletes who push limits",
 "Professionals beating the midday crash",
 "Travelers staying hydrated in heat",
 "Everyday people who care about wellness",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Citrus Charge",
	image: "/images/drink1.png",
	title: "A Zesty Classic That Never Fails",
	description:
	 "Bright, tangy, and refreshing — Citrus Charge blends lemon zest with a hint of Mediterranean sea salt to deliver clean, natural hydration. It’s the taste of summer energy in every sip.",
 },
 {
	id: 2,
	name: "Berry Boost",
	image: "/images/drink2.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Sweet yet balanced, Berry Boost combines antioxidant-rich wild berries with subtle coconut water notes for smooth, refreshing recovery. It’s your go-to post-workout recharge.",
 },
 {
	id: 3,
	name: "Tropical Surge",
	image: "/images/drink3.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Escape to the coast with Tropical Surge, a bold mix of pineapple, mango, and citrus that tastes like a holiday — minus the sugar. Hydration never felt this vibrant.",
 },
 {
	id: 4,
	name: "Arctic Wave",
	image: "/images/drink4.png",
	title: "Crafted With Care, Poured With Love",
	description:
	 "Cool, crisp, and invigorating — Arctic Wave pairs blue raspberry with a minty chill for instant refreshment. The flavor built for focus, endurance, and all-day performance.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};