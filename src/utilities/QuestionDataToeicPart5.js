let data = [
	{
		question: 'Dr. Braun will write …… letters only for interns who master every task expected of a junior copy editor',
		a: "recommends",
		b: "recommendation",
		c: "recommended",
		d: "recommended",
		correct: "b"
	},
	{
		question: "The …… of a new chief financial officer at Veracore Industries was announced on April 6",
		a: "appoint",
		b: "appoints",
		c: "appointed",
		d: "appointment",
		correct: "d"
	},
	{
		question: "After a six-month probationary period, city employees are …… to take vacation days",
		a: "beneficial",
		b: "eligible",
		c: "convenient",
		d: "relevant",
		correct: "b"
	},
	{
		question: "Ms. Larensky is applying with several different agencies to obtain the permits …… for the outdoor art event",
		a: "required",
		b: "requiring",
		c: "requires",
		d: "will require",
		correct: "a"
	},
	{
		question: "This letter serves as …… that we have received and processed your credit-card cancellation request",
		a: "confirm",
		b: "confirmed",
		c: "confirmable",
		d: "confirmation",
		correct: "d"
	},
	{
		question: "Many people at the company have industry experience, but only a handful of …… can see the future importance of current trends",
		a: "we",
		b: "us",
		c: "our",
		d: "ourselves",
		correct: "b"
	},
	{
		question: "The new furniture for the conference room is scheduled to be delivered …… on Tuesday",
		a: "hardly",
		b: "comfortably",
		c: "early",
		d: "eagerly",
		correct: "c"
	},
	{
		question: "Toucan Database System is designed to perform a detailed financial analysis …… .",
		a: "automate",
		b: "automatic",
		c: "automated",
		d: "automatically",
		correct: "d"
	},
	{
		question: "The city council approved the bill to increase funding for its road improvement …… .",
		a: "statement",
		b: "permission",
		c: "project",
		d: "ability",
		correct: "c"
	},
	{
		question: "The Neighborhood Involvement Program honors residents …… volunteer their time to help Egin City",
		a: "for",
		b: "who",
		c: "those",
		d: "as",
		correct: "b"
	},
	{
		question: "Several architects …… intriguing design plans for the Hadler Building’s addition",
		a: "proposing",
		b: "proposed",
		c: "proposal",
		d: "proposals",
		correct: "b"
	},
	{
		question: "The updated training program is limited to site supervisors …… the Casey Medical Care system",
		a: "within",
		b: "until",
		c: "during",
		d: "since",
		correct: "a"
	},
	{
		question: "Mr. Koizumi must complete the cost estimate before he …… for the conference",
		a: "will leave",
		b: "leaves",
		c: "leaving",
		d: "left",
		correct: "b"
	},
	{
		question: "Although the new X150 printer is …… to other models, It costs only half as much",
		a: "similar",
		b: "likable",
		c: "reflected",
		d: "considerate",
		correct: "a"
	},
	{
		question: "To address budget deficits, Lunere County plans to limit spending and …… tourism",
		a: "promote",
		b: "declare",
		c: "obtain",
		d: "benefit",
		correct: "a"
	},
	{
		question: "Operating instructions are posted above the printer so you can …… refer to them",
		a: "consecutively",
		b: "standardly",
		c: "namely",
		d: "easily",
		correct: "d"
	},
	{
		question: "The Vickwell Historical Museum will be closed for renovations …… on Monday, September 10",
		a: "will begin",
		b: "has begun",
		c: "beginner",
		d: "beginning",
		correct: "d"
	},
	{
		question: "Finley Plant Nursery implements the …… latest agricultural techniques",
		a: "so",
		b: "more",
		c: "very",
		d: "much",
		correct: "c"
	},
	{
		question: "According to the compensation guidelines, employees who regularly complete their work …… it is due may receive bonuses",
		a: "before",
		b: "how",
		c: "why",
		d: "either",
		correct: "a"
	},
	{
		question: "Thank you for your …… in the Foxdale Apartments community enhancement survey",
		a: "participant",
		b: "participation",
		c: "participate",
		d: "participated",
		correct: "b"
	},
	{
		question: "Solar energy has become a key …… in the development of additional energy resources throughout the region",
		a: "factor",
		b: "position",
		c: "instructor",
		d: "composition",
		correct: "a"
	},
	{
		question: "The LPN auto company has issued a special report to address concerns …… the fuel efficiency of its vehicles",
		a: "excluding",
		b: "during",
		c: "following",
		d: "regarding",
		correct: "d"
	},
	{
		question: "This year's company retreat will focus on techniques that help people think more …… ",
		a: "create",
		b: "creative",
		c: "creativity",
		d: "creatively",
		correct: "d"
	},
	{
		question: "Employees must …… requests for time off to Ms. Cheung for approval",
		a: "apply",
		b: "submit",
		c: "vacate",
		d: "oppose",
		correct: "b"
	},
	{
		question: "Board members are free to discuss the issues among …… before the formal votes are taken",
		a: "themselves",
		b: "theirs",
		c: "their",
		d: "they",
		correct: "a"
	},
	{
		question: "Judging by ticket sales, Fen Jiang’s first attempt at directing a film was …… a success",
		a: "clear",
		b: "clearly",
		c: "clearer",
		d: "clearing",
		correct: "b"
	},
	{
		question: "…… the Nolan Credit Union parking area is now open to the public, a section has been reserved for credit union employees",
		a: "While",
		b: "When",
		c: "For",
		d: "But",
		correct: "a"
	},
	{
		question: "Pharmacy technicians are responsible for verifying and processing prescriptions …… they are requested by a physician",
		a: "as well as",
		b: "as soon as",
		c: "in regard to",
		d: "in addition to",
		correct: "b"
	},
	{
		question: "All laboratory personnel must attend the clinical safety workshop to ensure …… with new regulations",
		a: "activation",
		b: "fulfillment",
		c: "compliance",
		d: "indication",
		correct: "c"
	},
	{
		question: "The travel …… will be processed as soon as they are received",
		a: "document",
		b: "documents",
		c: "documented",
		d: "documenting",
		correct: "b"
	},
	{
		question: " …… change your seating assignment, visit the reservations page on our Web site",
		a: "For",
		b: "Across",
		c: "With",
		d: "To",
		correct: "d"
	},
	{
		question: "The president of Somchai Bank rides …… bicycle to work every day, except when it rains",
		a: "he",
		b: "him",
		c: "his",
		d: "himself",
		correct: "c"
	},
	{
		question: "Agents who have not yet registered for next week’s Insurance Excellence Forum must do so …… .",
		a: "closely",
		b: "formerly",
		c: "nearly",
		d: "immediately",
		correct: "d"
	},
	{
		question: "Matos Realty has developed two …… methods of identifying undervaluedproperties",
		a: "different",
		b: "differently",
		c: "difference",
		d: "differences",
		correct: "a"
	},
	{
		question: "Wearing lab coats and safety goggles is a …… for all laboratory workers",
		a: "training",
		b: "fulfillment",
		c: "specialization",
		d: "requirement",
		correct: "d"
	},
	{
		question: "The manufacturer …… that the filter be cleaned at least once a month for optimal performance",
		a: "remembers",
		b: "recognizes",
		c: "recommends",
		d: "registers",
		correct: "c"
	},
	{
		question: "Before selecting a Dagle steel door, measure the door opening …… .",
		a: "careful",
		b: "caring",
		c: "carefully",
		d: "cares",
		correct: "c"
	},
	{
		question: "Okpara employees should contact their supervisors by 10:00 a.m. …… they expect to miss a day of work",
		a: "if",
		b: "soon",
		c: "only",
		d: "then",
		correct: "a"
	},
	{
		question: "The director has requested a …… of the costs of short- and long-term rental agreements",
		a: "comparable",
		b: "comparison",
		c: "compared",
		d: "comparative",
		correct: "b"
	},
	{
		question: "Ms. Yi of Lakesview Catering says that five trays of appetizers are more than …… for fifty guests",
		a: "able",
		b: "numerous",
		c: "sure",
		d: "enough",
		correct: "d"
	},
	{
		question: "Canada’s Pan Rail Corporation will no longer …… freight into the United States",
		a: "transport",
		b: "transporting",
		c: "transports",
		d: "transported",
		correct: "a"
	},
	{
		question: "According to experts, Flash Maxe dishwashing detergent consistently delivers …… results",
		a: "exceptionally",
		b: "exceptional",
		c: "exception",
		d: "exceptions",
		correct: "b"
	},
	{
		question: "When picking up identification badges, employees need to show …… of employment at Ekmekci Associates",
		a: "process",
		b: "analysis",
		c: "proof",
		d: "basis",
		correct: "c"
	},
	{
		question: "Roxy Koenig is …… seeking a new venue for her summer concert since the Hazelton Music Hall is being renovated",
		a: "actively",
		b: "activity",
		c: "active",
		d: "activate",
		correct: "a"
	},
	{
		question: "Prospective tenants must provide at least two references …… their application",
		a: "too",
		b: "in addition",
		c: "moreover",
		d: "along with",
		correct: "d"
	},
	{
		question: "While Ms. MoJinsky has little experience in technical support, her knowledge of computer systems is …….",
		a: "extensive",
		b: "clever",
		c: "considered",
		d: "eager",
		correct: "a"
	},
	{
		question: "Please refer to the attached flowchart, which describes the …… of responsibilities among the various leadership positions",
		a: "support",
		b: "attention",
		c: "division",
		d: "statement",
		correct: "c"
	},
	{
		question: "A good project manager strives …… communication between departments whenever possible",
		a: "to enhance",
		b: "enhances",
		c: "is enhancing",
		d: "enhanced",
		correct: "a"
	},
	{
		question: "Same-day appointments can usually be scheduled, although not …… with your usual doctor",
		a: "expectedly",
		b: "necessarily",
		c: "preventively",
		d: "permanently",
		correct: "b"
	},
	{
		question: "In the photograph, President Tang can be seen standing …… Dr. Dervishi",
		a: "from",
		b: "reverse",
		c: "opposite",
		d: "distant",
		correct: "c"
	},
	{
		question: "The new location of the Bentier Company is easily …… by car or bus",
		a: "access",
		b: "accessibly",
		c: "accessible",
		d: "accessibility",
		correct: "c"
	},
	{
		question: "A rise in energy prices will mostly affect businesses …… energy consumption is high",
		a: "its",
		b: "which",
		c: "whose",
		d: "more",
		correct: "c"
	},
	{
		question: "City officials have …… Harmon Avenue businesses that street repairs will be completed within 48 hours",
		a: "assured",
		b: "arranged",
		c: "disclosed",
		d: "committed",
		correct: "a"
	},
	{
		question: "Nominations for the …… seat on the Gitterman Holdings Board of Trustees must be submitted by Friday",
		a: "approaching",
		b: "adjustable",
		c: "vacant",
		d: "united",
		correct: "c"
	},
	{
		question: "Our department …… the policy meeting last Monday, but we had a scheduling conflict",
		a: "can attend",
		b: "must have attended",
		c: "should attend",
		d: "would have attended",
		correct: "d"
	},
	{
		question: "…… the effectiveness of Maisey Stanton's leadership on the town council, she will likely win next week’s mayoral election",
		a: "Since",
		b: "Given",
		c: "Among",
		d: "Upon",
		correct: "b"
	},
	{
		question: "Bamer Corporation’s record profits resulted from the recent …… to identify operating efficiencies",
		a: "initiative",
		b: "initiating",
		c: "initiation",
		d: "initiator",
		correct: "a"
	},
	{
		question: "Customers still tend to place short notices in the classified section …… there is no longer a mandated word limit",
		a: "as if",
		b: "so that",
		c: "in case",
		d: "even though",
		correct: "d"
	},
	{
		question: "All shelves in the holiday merchandise section need to remain …… stocked",
		a: "full",
		b: "fully",
		c: "fuller",
		d: "fullest",
		correct: "b"
	},
	{
		question: "…… to the exercise room is included with your stay at the Bay land Hotel",
		a: "Access",
		b: "Accessed",
		c: "Accessing",
		d: "Accessible",
		correct: "a"
	},
	{
		question: "…… to the exercise room is included with your stay at the Bay land Hotel",
		a: "Access",
		b: "Accessed",
		c: "Accessing",
		d: "Accessible",
		correct: "a"
	},
	{
		question: "Mr. Okello’s promotion means that …… will supervise a larger team",
		a: "he",
		b: "his",
		c: "him",
		d: "himself",
		correct: "a"
	},
	{
		question: "Juniper Worldwide, Inc., will be …… payroll service providers on January 1",
		a: "changing",
		b: "attending",
		c: "holding",
		d: "turning",
		correct: "a"
	},
	{
		question: "The Valletta Visitor Centre offers daily boat rides …… the city’s historic waterfront",
		a: "between",
		b: "along",
		c: "below",
		d: "apart",
		correct: "b"
	},
	{
		question: "Ultrora Action's T-Pro tennis shoe is the lightest …… on the market right now",
		a: "that",
		b: "any",
		c: "one",
		d: "either",
		correct: "c"
	},
	{
		question: "Duram Biscuit Corp. is able to …… good deals with its wholesale suppliers",
		a: "negotiating",
		b: "negotiates",
		c: "negotiated",
		d: "negotiate",
		correct: "d"
	},
	{
		question: "At Razani Marketing, there are …… opportunities for professional advancement",
		a: "plenty",
		b: "each",
		c: "very",
		d: "many",
		correct: "d"
	},
	{
		question: "Parking on Dahakno Street will be prohibited for the next few days …… emergency repairs to water lines",
		a: "so that",
		b: "as a result",
		c: "in order to",
		d: "because of",
		correct: "d"
	},
	{
		question: "Accountants applying for the training must obtain a …… from their supervisor",
		a: "referring",
		b: "referred",
		c: "referral",
		d: "refer",
		correct: "c"
	},
	{
		question: "The evaluation report will be completed …… after the auditors inspect the laboratory",
		a: "when",
		b: "only",
		c: "still",
		d: "most",
		correct: "b"
	},
	{
		question: "In light of our recent expansion, it will be …… to hire another administrative assistant by June 1",
		a: "necessitating",
		b: "necessary",
		c: "necessarily",
		d: "necessities",
		correct: "b"
	},
	{
		question: "Due to low registration, the communications workshop scheduled for July 2 will be postponed …… further notice",
		a: "until",
		b: "onto",
		c: "since",
		d: "all",
		correct: "a"
	},
	{
		question: "The initial response to the beta version of the software allows us to be …… optimistic about future product sales",
		a: "fairness",
		b: "fairest",
		c: "fairly",
		d: "fair",
		correct: "c"
	},
	{
		question: "Orvale School’s business mentors are retired executives with a …… of expertise across a wide range of industries",
		a: "wealth",
		b: "height",
		c: "labor",
		d: "fame",
		correct: "a"
	},
	{
		question: "OThank you for your interest in our …… line of compact refrigerators",
		a: "update",
		b: "updated",
		c: "updates",
		d: "updating",
		correct: "b"
	},
	{
		question: "The judges may begin to review the entries …… the deadline for submitting slogans has passed",
		a: "how",
		b: "nor",
		c: "now that",
		d: "whether",
		correct: "c"
	},
	{
		question: "On his daily radio show, Trade Biz, Antonio Koslor …… business news from all over the globe",
		a: "analysis",
		b: "analyzer",
		c: "analyzes",
		d: "analyzing",
		correct: "c"
	},
	{
		question: "The purchase of The New Lagos Reporter will not lead to changes …… editorial staff",
		a: "in",
		b: "again",
		c: "positions",
		d: "ultimately",
		correct: "a"
	},
	{
		question: "Professor Reginald Layke’s proposal for an additional course in business management was approved in a …… short time",
		a: "surprised",
		b: "surprise",
		c: "surprisingly",
		d: "surprising",
		correct: "c"
	},
	{
		question: "With the completion of its airport, Honokai Island’s tourism …… has improved dramatically",
		a: "economical",
		b: "economic",
		c: "economize",
		d: "economy",
		correct: "d"
	},
	{
		question: "Brock’s Bistro has requested that we …… the number of dinner guests by Monday",
		a: "personify",
		b: "magnify",
		c: "specify",
		d: "testify",
		correct: "c"
	},
	{
		question: "Doi Textiles, Inc., is well-known …… the fashion world as being a trendsetter for young women’s clothing",
		a: "toward",
		b: "throughout",
		c: "regarding",
		d: "aboard",
		correct: "b"
	},
	{
		question: "To sign up for any class at Routen Academy, simply complete the online …… form at www.routenacademy.edu",
		a: "enrollment",
		b: "inventory",
		c: "complaint",
		d: "solicitation",
		correct: "a"
	},
	{
		question: "A reception will be held to introduce the newly …… director of marketing to the employees of Kaulana Industries",
		a: "appoint",
		b: "appoints",
		c: "appointed",
		d: "appointing",
		correct: "c"
	},
	{
		question: "To fill two vacant positions on its benefits committee, Adidion Labs …… employees who are ready for a challenge",
		a: "seeking",
		b: "is seeking",
		c: "are sought",
		d: "have been sought",
		correct: "b"
	},
	{
		question: "The software for tracking orders has been …… successful as it has greatlydecreased time spent on the task",
		a: "haltingly",
		b: "intimately",
		c: "permissibly",
		d: "markedly",
		correct: "d"
	},
	{
		question: "Lately the community sports program has had a surplus of volunteers, …… are students",
		a: "inasmuch as",
		b: "the reason being",
		c: "because of them",
		d: "most of whom",
		correct: "d"
	},
	{
		question: "Please use the attached survey to let us know how …… your recent stay at the Copper Mine Inn was",
		a: "knowledgeable",
		b: "considerable",
		c: "enjoyable",
		d: "available",
		correct: "c"
	},
	{
		question: "Sales clerks at Sylla Bazaar receive additional pay when...... work in the evening",
		a: "their",
		b: "they",
		c: "theirs",
		d: "them",
		correct: "b"
	},
	{
		question: "Because humidity can ...... wood, the climate in furniture storage units must be controlled",
		a: "damage",
		b: "damaging",
		c: "damaged",
		d: "damages",
		correct: "a"
	},
	{
		question: "The updated safety manual includes guidelines ...... the entire factory",
		a: "so",
		b: "and",
		c: "both",
		d: "for",
		correct: "d"
	},
	{
		question: "A limited ...... of time for questions will be granted following Mr. Tanaka’s speech",
		a: "value",
		b: "record",
		c: "amount",
		d: "setting",
		correct: "c"
	},
	{
		question: "At Correia Electronics, we are ...... researching appliance technology",
		a: "continual",
		b: "continues",
		c: "continue",
		d: "continually",
		correct: "d"
	},
	{
		question: "At Imprint Eyewear, most prescription eyeglasses can be made ...... two business days",
		a: "since",
		b: "to",
		c: "against",
		d: "within",
		correct: "d"
	},
	{
		question: "Investing in ...... properties as possible can be risky but is often lucrative",
		a: "as much",
		b: "as many",
		c: "so much",
		d: "so many",
		correct: "b"
	},
	{
		question: "After interviewing Ms. Garcia personally the company president ...... the committee’s decision to hire her as chief financial officer",
		a: "finalized",
		b: "designed",
		c: "hosted",
		d: "created",
		correct: "a"
	},
	{
		question: "Construction of the Yukimura Building ...... because of modifications in the architectural plans",
		a: "postpones",
		b: "has been postponed",
		c: "will have postponed",
		d: "is postponing",
		correct: "b"
	},
	{
		question: "Please inform Ms. Montgomery of any ...... to your office supplies order before 2:00 P.M",
		a: "announcements",
		b: "conversions",
		c: "adjustments",
		d: "commitments",
		correct: "c"
	},
	{
		question: "All Buchler Energy customers are encouraged to sign up for electronic statements ...... paper ones",
		a: "except",
		b: "through",
		c: "instead of",
		d: "according to",
		correct: "c"
	},
	{
		question: "In her letter of reference, Ms. Eisner indicates that Mr. Patel’s ability to work well with others is his most ...... quality",
		a: "admiration",
		b: "admiring",
		c: "admire",
		d: "admirable",
		correct: "d"
	},
	{
		question: "This Friday, all employees may depart two hours before closing ...... their manager requires them to stay",
		a: "either",
		b: "nor",
		c: "because",
		d: "unless",
		correct: "d"
	},
	{
		question: "The Science Career Fair is an exciting opportunity for job seekers to meet with ...... from major companies in the field",
		a: "recruit",
		b: "recruiting",
		c: "recruitments",
		d: "recruiters",
		correct: "d"
	},
	{
		question: "The songs on Sophia Vestra’s new album are ...... the most innovative musical arrangements of her career",
		a: "beside",
		b: "over",
		c: "among",
		d: "upon",
		correct: "c"
	},
	{
		question: "The research indicates that ...... in Chestnut Valley has remained stable over the past two years",
		a: "tourists",
		b: "tours",
		c: "tourism",
		d: "toured",
		correct: "c"
	},
	{
		question: "Online orders are handled by Mr. Clark’s team, ...... regular mail orders are overseen by Ms. Adauto's group",
		a: "while",
		b: "until",
		c: "despite",
		d: "whether",
		correct: "a"
	},
	{
		question: "After the ...... upgrades have been implemented, the production process should run more efficiently",
		a: "suggest",
		b: "suggested",
		c: "suggesting",
		d: "suggests",
		correct: "b"
	},
	{
		question: "Panjan Air, an airline ...... in Singapore, is offering budget flights to Bangkok and Jakarta",
		a: "stored",
		b: "stayed",
		c: "based",
		d: "moved",
		correct: "c"
	},
	{
		question: "Mesmio, provider of premium television content, welcomes ...... ideas for improving our service",
		a: "specifics",
		b: "specifies",
		c: "specific",
		d: "specify",
		correct: "c"
	},
	{
		question: "The conclusions from our analysis turned out to be ...... applicable to the budget problem",
		a: "directing",
		b: "directly",
		c: "directs",
		d: "direct",
		correct: "b"
	},
	{
		question: "The proposal ...... the vacant land on Spring Street into a community garden will be voted on this Monday",
		a: "to transform",
		b: "transformation",
		c: "is transforming",
		d: "transformed",
		correct: "a"
	},
	{
		question: "After quality control inspectors ...... that all specifications are met, the product can be shipped",
		a: "affect",
		b: "replace",
		c: "certify",
		d: "associate",
		correct: "c"
	},
	{
		question: "The ...... meadowlands surrounding the museum are designated as wildlife habitat",
		a: "ethical",
		b: "vast",
		c: "absolute",
		d: "economic",
		correct: "b"
	},
	{
		question: "...... of Mitesh Sandu’s international performances was filmed for the documentary",
		a: "All",
		b: "Others",
		c: "Their own",
		d: "Each one",
		correct: "d"
	},
	{
		question: "New tax incentives reward local businesses ...... decrease their water consumption",
		a: "will",
		b: "when",
		c: "that",
		d: "if",
		correct: "c"
	},
	{
		question: "Based on new data, Min-Soo Trucking’s proposal to expand its business to Southeast Asia would be only ...... successful",
		a: "conspicuously",
		b: "marginally",
		c: "regrettably",
		d: "intriguingly",
		correct: "b"
	},
];

export function getQuestions() {
	console.log('length: ', data.length);
	let result = [];
	let copiedData = [...data]
	for(let i = 0; i < 15; i ++) {
		let index = Math.floor(Math.random() * copiedData.length);
		result.push(copiedData.splice(index, 1)[0]);
	}
	return result;
}

export function getQuestion(number, questionData){
	if (questionData === null) {
		return "";
	}
	return questionData[number - 1] !== undefined ? questionData[number - 1].question : "";
}

export function getAnswerA(number, questionData) {
	if (questionData === null) {
		return "";
	}
	return questionData[number - 1] !== undefined ? questionData[number - 1].a : "";
}

export function getAnswerB(number, questionData) {
	if (questionData === null) {
		return "";
	}
	return questionData[number - 1] !== undefined ? questionData[number - 1].b : "";
}

export function getAnswerC(number, questionData) {
	if (questionData === null) {
		return "";
	}
	return questionData[number - 1] !== undefined ? questionData[number - 1].c : "";
}

export function getAnswerD(number, questionData) {
	if (questionData === null) {
		return "";
	}
	return questionData[number - 1] !== undefined ? questionData[number - 1].d : "";
}

export function getCorrectAnswer(number, questionData) {
	if (questionData === null) {
		return "";
	}
	return questionData[number - 1] !== undefined ? questionData[number - 1].correct: "";
}

export function isCorrectAnswer(number, answer , questionData) {
	if (questionData === null) {
		return "";
	}
	return questionData[number - 1] !== undefined ? questionData[number - 1].correct === answer : false;
}