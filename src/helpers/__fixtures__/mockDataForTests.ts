import { RawHealthTopic } from "../../types";

export const mockDataForSuggestions: any = [
	{
		Type: "Topic",
		Id: "25",
		Title: "Keep Your Heart Healthy",
		ParentId: -1,
		TranslationId: "25",
	},
	{
		Type: "Topic",
		Id: "327",
		Title: "Get Enough Folic Acid",
		ParentId: -1,
		TranslationId: "327",
	},
	{
		Type: "Category",
		Id: "112",
		Title: "Questions for the Doctor",
		ParentId: "28",
		TranslationId: "112",
	},
	{
		Type: "Category",
		Id: "124",
		Title: "Health Conditions",
		ParentId: -1,
		TranslationId: "124",
	},
	{
		Type: "Category",
		Id: "125",
		Title: "Doctor Visits",
		ParentId: -1,
		TranslationId: "125",
	},
];

export const expectedFunctionResultForSuggestions = ["keep", "your", "heart", "healthy", "get", "enough", "folic", "acid", "questions", "for", "the", "doctor", "health", "conditions", "visits"];

export const mockDataForHealthTopics: RawHealthTopic[] = [
	{
		Type: "Topic",
		Id: "544",
		Title: "Get Your Child the HPV Vaccine",
		TranslationId: "544",
		TranslationTitle: "",
		Categories: "Cervical Cancer, Shots (Vaccines)",
		Populations: "",
		MyHFTitle: "",
		MyHFDescription: "",
		MyHFCategory: "",
		MyHFCategoryHeading: "",
		LastUpdate: "1633632180",
		ImageUrl: "https://health.gov/sites/default/files/2020-01/gychpv.jpg",
		ImageAlt: "Get Your Child the HPV Vaccine",
		AccessibleVersion: "https://health.gov/myhealthfinder/topics/doctor-visits/shots-vaccines/get-your-child-hpv-vaccine",
		RelatedItems: {
			RelatedItem: [
				{
					Type: "Topic",
					Id: "30542",
					Title: "Talk to Your Kids About Sex and Healthy Relationships",
					Url: "https://health.gov/myhealthfinder/topics/everyday-healthy-living/sexual-health/talk-your-kids-about-sex-and-healthy-relationships",
				},
				{
					Type: "Topic",
					Id: "528",
					Title: "Make the Most of Your Child’s Visit to the Doctor (Ages 11 to 14)",
					Url: "https://health.gov/myhealthfinder/topics/doctor-visits/regular-checkups/make-most-your-childs-visit-doctor-ages-11-14",
				},
				{
					Type: "Topic",
					Id: "549",
					Title: "Get Your Pre‑teen’s Shots on Schedule",
					Url: "https://health.gov/myhealthfinder/topics/doctor-visits/shots-vaccines/get-your-pre-teens-shots-schedule",
				},
			],
		},
		Sections: {
			section: [
				{
					Title: "The Basics: Overview",
					Description: "",
					Content: '<p><span><span><span><span><span><span><span><span>All pre-teens need 2 shots of the HPV vaccine when they are age 11 or 12.</span></span></span></span></span></span></span></span></p>\r\n\r\n<h3><span><span><span><span><strong><span><span>What is HPV?</span></span></strong></span></span></span></span></h3>\r\n\r\n<p><span><span><span><span><span><span><span><span>HPV (human papillomavirus) is a very common infection that can cause cancer. Almost 80 million people in the United States have HPV. That\'s about 1 out of 4 Americans.</span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span>HPV infections can cause:</span></span></span></span></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li class="MsoListBullet"><span><span><span><span>Cervical cancer</span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span>Cancer inside the vagina (vaginal cancer) or around the opening of the vagina (vulvar cancer)</span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span>Cancer of the penis (penile cancer)</span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span>Cancer of the anus (anal cancer)</span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span>Cancer of the back of the throat (oropharyngeal cancer)</span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span>Warts in the genital area</span></span></span></span></li>\r\n</ul>\r\n\r\n<p class="MsoListBullet"><span><span><span><span><span>The good news is that the HPV vaccine can prevent many of these diseases.&nbsp;<a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.cdc.gov/hpv/parents/whatishpv.html?_label_=%3Cspan%3ELearn+more+about+HPV%3C%2Fspan%3E"><span>Learn more about HPV</span></a>.</span></span></span></span></span></p>\r\n',
				},
				{
					Title: "The Basics: Recommended Ages",
					Description: "",
					Content: "<h3>When does my child need to get the HPV vaccine?</h3>\r\n\r\n<p><span><span><span><span><span><span><span><span>Doctors recommend that all children get 2 shots of the HPV vaccine at age 11 or 12, but your child can get it as early as age 9. Doctors give the 2 shots 6 to 12 months apart. </span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span>Keep in mind that the HPV vaccine works best if your child gets it at the recommended age. And — like with other vaccines — kids have the best protection when they get all their shots on schedule.</span></span></span></span></span></span></span></p>\r\n\r\n<h4>What if my child is older than age 12?</h4>\r\n\r\n<p><span><span><span><span><span><span><span><span>It’s not too late to protect your child. Teens who didn't get the HPV vaccine when they were younger can still get it now.</span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span>Teens ages 13 to 14 need 2 shots 6 to 12 months apart —&nbsp;just like kids ages 11 to 12. Teens and adults who get their first shot of the vaccine after their 15th birthday will need 3 shots spread out over 6 months.</span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span>Young adults can get the HPV vaccine, too. Everyone can get the vaccine through age 26 — and some adults ages 27 to 45 may decide to get HPV shots after talking with their doctor. But it's still best for your child to get the HPV vaccine at age 11 or 12.</span></span></span></span></span></span></span></p>\r\n\r\n<p><!--[if !supportAnnotations]--><!--[endif]--></p>\r\n",
				},
				{
					Title: "The Basics: Safety and Side Effects",
					Description: "",
					Content:
						'<h3><span><span><span><span><strong><span><span>Is the HPV vaccine safe?</span></span></strong></span></span></span></span></h3>\r\n\r\n<p><span><span><span><span><span><span><span><span>Yes, the vaccine is very safe. It\'s recommended by the Centers for Disease Control and Prevention (CDC), the American Academy of Family Physicians, and the American Academy of Pediatrics. </span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span>For more information about the HPV vaccine, check out:</span></span></span></span></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.cdc.gov/vaccines/parents/diseases/teen/hpv.html?_label_=Vaccine+%28Shot%29+for+Human+Papillomavirus">Vaccine (Shot) for Human Papillomavirus</a></span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.cdc.gov/hpv/infographics/vacc-six-reasons.html?_label_=Reasons+to+Get+HPV+Vaccine">Reasons to Get HPV Vaccine</a></span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/http/www.cdc.gov/hpv/parents/questions-answers.html?_label_=HPV%3A%26nbsp%3BResource+for+Parents">HPV:&nbsp;Resource for Parents</a></span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.cdc.gov/hpv/parents/vaccinesafety.html?_label_=HPV+Vaccination+is+Safe+and+Effective">HPV Vaccination is Safe and Effective</a></span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/http/www.cdc.gov/std/hpv/stdfact-hpv-vaccine-young-women.htm?_label_=HPV+Vaccine+Information+for+Young+Women">HPV Vaccine Information for Young Women</a></span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.cdc.gov/std/hpv/stdfact-hpv-and-men.htm?_label_=HPV+and+Men+%E2%80%94+Fact+Sheet">HPV and Men — Fact Sheet</a></span></span></span></span></li>\r\n</ul>\r\n\r\n<h3><span><span><span><span><strong><span><span>What are the possible side effects of the HPV vaccine?</span></span></strong></span></span></span></span></h3>\r\n\r\n<p><span><span><span><span><span><span><span><span>The most common side effects are pain, redness, or swelling near where the shot was given. Other common side effects are a fever, nausea (upset stomach), headache, and feeling tired.</span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span>Some pre-teens and teens may faint after getting any vaccine, including the HPV vaccine. It\'s a good idea to have your child sit or lie down while getting the shot — and for 15 minutes afterward. </span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span>Keep in mind that the benefits of the HPV vaccine far outweigh the risk of side effects. </span></span></span></span></span></span></span></span></p>\r\n',
				},
				{
					Title: "Take Action: See a Doctor",
					Description: "",
					Content: '<p class="MsoNoSpacing">Help protect your child’s health with the HPV vaccine.</p>\r\n\r\n<h3><span><span><span><span><strong><span><span>Schedule a doctor\'s&nbsp;visit for your child.</span></span></strong></span></span></span></span></h3>\r\n\r\n<p><span><span><span><span><span><span><span><span>Doctors will usually give the first HPV shot during your child’s yearly checkup at age 11 or 12. But your child can get the shots at any doctor\'s visit. Remember, it’s always a good idea to check with your child’s doctor to make sure they’re getting all the recommended vaccines.</span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/health.gov/myhealthfinder/topics/doctor-visits/shots-vaccines/get-your-pre-teens-shots-schedule?_label_=Learn+about+other+vaccines+your+pre-teen+may+need">Learn about other vaccines your pre-teen may need</a>.</span></span></span></span></span></span></span></span></p>\r\n\r\n<h3><span><span><span><span><strong><span><span>Make sure your child gets their HPV shots at the recommended times.</span></span></strong></span></span></span></span></h3>\r\n\r\n<p><span><span><span><span><span><span><span><span>It’s important for your child to get the HPV shots on schedule. To make sure you stay on track, schedule appointments for any remaining shots on the day your child gets the first one. </span></span></span></span></span></span></span></span></p>\r\n',
				},
				{
					Title: "Take Action: Cost and Insurance",
					Description: "",
					Content:
						'<h3><span><span><span><span><strong><span><span>What about cost?</span></span></strong></span></span></span></span></h3>\r\n\r\n<p><span><span><span><span><span><span><span><span>Under the&nbsp;Affordable Care Act, insurance plans must cover recommended vaccines for kids. Depending on your insurance plan, you may be able to get your child\'s HPV vaccine at no cost to you. Check with your insurance company to find out more. </span></span></span></span></span></span></span></span></p>\r\n\r\n<p>Your child may also qualify for free or low-cost health insurance through Medicaid or the Children\'s Health Insurance Program (CHIP). <a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.insurekidsnow.gov/coverage/index.html?_label_=Learn+about+coverage+options+for+your+family">Learn about coverage options for your family</a>.&nbsp;</p>\r\n\r\n<p><span><span><span><span><span><span><span><span>If you don\'t have insurance, you may still be able to get free or low-cost HPV shots for your child. </span></span></span></span></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.cdc.gov/vaccines/programs/vfc/parents/qa-detailed.html?_label_=Find+out+if+your+child+qualifies+for+free+vaccines">Find out if your child qualifies for free vaccines</a></span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.hhs.gov/immunization/get-vaccinated/where/index.html?_label_=Find+a+free+or+low-cost+vaccination+program+in+your+state">Find a free or low-cost vaccination program in your state</a></span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/findahealthcenter.hrsa.gov/?_label_=Find+a+health+center+near+you+and+ask+about+the+HPV+vaccine">Find a health center near you and ask about the HPV vaccine</a></span></span></span></span></li>\r\n</ul>\r\n\r\n<p class="MsoListBullet"><span><span><span><span><span><span><span><span><span>To learn more, check out these resources:</span></span></span></span></span></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li class="list-bullet1"><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.healthcare.gov/preventive-care-children/?_label_=%3Cspan%3EFree+preventive+care+for+children+covered+by+the+Affordable+Care+Act%3C%2Fspan%3E"><span>Free preventive care for children covered by the Affordable Care Act</span></a></span></span></span></li>\r\n\t<li class="list-bullet1"><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.healthcare.gov/health-care-law-protections/?_label_=%3Cspan%3EHow+the+Affordable+Care+Act+protects+you%3C%2Fspan%3E"><span>How the Affordable Care Act protects you</span></a>&nbsp;&nbsp;</span></span></span></li>\r\n\t<li class="list-bullet1"><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/marketplace.cms.gov/technical-assistance-resources/c2c-roadmap.pdf?_label_=%3Cspan%3EUnderstanding+your+health+insurance+and+how+to+use+it+%5BPDF+-+698+KB%5D%3C%2Fspan%3E"><span>Understanding your health insurance and how to use it [PDF - 698 KB]</span></a></span></span></span></li>\r\n</ul>\r\n',
				},
			],
		}
	},
	{
		Type: "Topic",
		Id: "30589",
		Title: "Choosing a Doctor: Quick Tips",
		TranslationId: "30589",
		TranslationTitle: "",
		Categories: "Checkups for Adults",
		Populations: "",
		MyHFTitle: "",
		MyHFDescription: "",
		MyHFCategory: "",
		MyHFCategoryHeading: "",
		LastUpdate: "1623349310",
		ImageUrl: "https://health.gov/sites/default/files/2020-01/cadqt.png",
		ImageAlt: "Health care provider holding a clipboard",
		AccessibleVersion: "https://health.gov/myhealthfinder/topics/doctor-visits/regular-checkups/choosing-doctor-quick-tips",
		RelatedItems: {
			RelatedItem: [
				{
					Type: "Topic",
					Id: "30540",
					Title: "Get Your Well-Woman Visit Every Year",
					Url: "https://health.gov/myhealthfinder/topics/everyday-healthy-living/sexual-health/get-your-well-woman-visit-every-year",
				},
				{
					Type: "Topic",
					Id: "30541",
					Title: "Men: Take Charge of Your Health",
					Url: "https://health.gov/myhealthfinder/topics/doctor-visits/regular-checkups/men-take-charge-your-health",
				},
				{
					Type: "Topic",
					Id: "30545",
					Title: "Prevent Infections When You Get Medical Care",
					Url: "https://health.gov/myhealthfinder/topics/everyday-healthy-living/safety/prevent-infections-when-you-get-medical-care",
				},
			],
		},
		Sections: {
			section: [
				{
					Title: null,
					Description: null,
					Content:
						"<p>When looking for a primary care doctor for yourself or a loved one, it’s important to choose someone you can trust. A primary care doctor can:</p>\r\n\r\n<ul>\r\n\t<li>Help you stay healthy by recommending preventive services, like screening tests and vaccines (shots)</li>\r\n\t<li>Treat many health problems — including physical and mental health issues</li>\r\n\t<li>Refer you to a specialist when you need more help with a specific health issue</li>\r\n</ul>\r\n\r\n<p>When you and your doctor work together as a team, you get better health care. Look for a doctor who:</p>\r\n\r\n<ul>\r\n\t<li>Treats you with respect</li>\r\n\t<li>Listens to your opinions and concerns</li>\r\n\t<li>Encourages you to ask questions</li>\r\n\t<li>Explains things in ways you understand</li>\r\n</ul>\r\n\r\n<p>Try the following tips to find a doctor who’s right for you.</p>\r\n\r\n<h2>Ask for recommendations from people you know.</h2>\r\n\r\n<p>Getting a reference from someone you know and trust is a great way to find a doctor:</p>\r\n\r\n<ul>\r\n\t<li>Ask friends, family members, neighbors, or coworkers if they have a doctor they like</li>\r\n\t<li>If you’re looking for a new doctor because yours is retiring or moving, ask your current doctor for a recommendation</li>\r\n</ul>\r\n\r\n<h2>Check with your insurance company.</h2>\r\n\r\n<p>If you have health insurance, you may need to choose from a list of doctors in your plan's network (doctors that take your insurance plan). Some insurance plans may let you choose a doctor outside your network if you pay more of the cost.</p>\r\n\r\n<p>To find a doctor who takes your insurance:</p>\r\n\r\n<ul>\r\n\t<li>Call your insurance company and ask for a list of doctors near you who take your insurance plan — or use the insurance company’s website to search for a doctor</li>\r\n\t<li>Then call the doctor’s office and ask them to confirm that they take your plan — have your insurance card handy in case they need to know your plan details</li>\r\n</ul>\r\n\r\n<p>If you don’t have health insurance, you’ll have to pay for health care out of pocket (on your own). For help finding health insurance, <a href=\"https://www.healthcare.gov/\">visit HealthCare.gov</a>.</p>\r\n\r\n<h2>Learn more about your top choices.</h2>\r\n\r\n<p>Make a list of the doctors you're interested in. Be sure to think about how easy or difficult it will be to travel to an appointment. Then call their offices to learn more about them. The answers to the following questions may help you make the best decision.</p>\r\n\r\n<p>Questions about the doctor:</p>\r\n\r\n<ul>\r\n\t<li>Is the doctor taking new patients?</li>\r\n\t<li>Is the doctor part of a group practice? If so, who are the other doctors that might help care for me?</li>\r\n\t<li>Who will see me if my doctor isn’t available?</li>\r\n\t<li>Which hospital does the doctor use?</li>\r\n\t<li>Does the doctor have experience treating my medical conditions?</li>\r\n\t<li>Does the doctor have special training or certifications?</li>\r\n</ul>\r\n\r\n<p>Questions about the office:</p>\r\n\r\n<ul>\r\n\t<li>Are evening or weekend appointments available? What about virtual appointments over the phone or on a computer (telemedicine)?</li>\r\n\t<li>What is the cancellation policy?</li>\r\n\t<li>How long will it take to get an appointment?</li>\r\n\t<li>How long do appointments usually last?</li>\r\n\t<li>Can I get lab work and x-rays done in the office?</li>\r\n\t<li>Is there a doctor or nurse who speaks my preferred language?</li>\r\n</ul>\r\n\r\n<h2>Think about your experience after the first visit.</h2>\r\n\r\n<p>Did the doctor and office staff:</p>\r\n\r\n<ul>\r\n\t<li>Make me feel comfortable during my appointment?</li>\r\n\t<li>Explain things in a way that was easy to understand?</li>\r\n\t<li>Listen carefully to me?</li>\r\n\t<li>Show respect for what I had to say?</li>\r\n\t<li>Know important information about my medical history?</li>\r\n\t<li>Spend enough time with me?</li>\r\n\t<li>Give me a chance to ask questions?</li>\r\n</ul>\r\n\r\n<p>If you answer “no” to any of these questions, you may&nbsp;want to keep looking.</p>\r\n",
				},
			],
		}
	}
];

export const expectedFunctionResultForHealthTopics = [
	{
		title: "Get Your Child the HPV Vaccine",
		categories: "Cervical Cancer, Shots (Vaccines)",
		id: "544",
		image: {
			imageUrl: "https://health.gov/sites/default/files/2020-01/gychpv.jpg",
			imageAlt: "Get Your Child the HPV Vaccine",
		},
		relatedItem: [
			{
				id: "30542",
				title: "Talk to Your Kids About Sex and Healthy Relationships",
				url: "https://health.gov/myhealthfinder/topics/everyday-healthy-living/sexual-health/talk-your-kids-about-sex-and-healthy-relationships",
			},
			{	
				id: "528",
				title: "Make the Most of Your Child’s Visit to the Doctor (Ages 11 to 14)",
				url: "https://health.gov/myhealthfinder/topics/doctor-visits/regular-checkups/make-most-your-childs-visit-doctor-ages-11-14",
			},
			{	
				id: "549",
				title: "Get Your Pre‑teen’s Shots on Schedule",
				url: "https://health.gov/myhealthfinder/topics/doctor-visits/shots-vaccines/get-your-pre-teens-shots-schedule",
			},
		],
		sections: [
			{
				id: '00000000-0000-0000-0000-000000000000',
				title: "The Basics: Overview",
				content: '<p><span><span><span><span><span><span><span><span>All pre-teens need 2 shots of the HPV vaccine when they are age 11 or 12.</span></span></span></span></span></span></span></span></p>\r\n\r\n<h3><span><span><span><span><strong><span><span>What is HPV?</span></span></strong></span></span></span></span></h3>\r\n\r\n<p><span><span><span><span><span><span><span><span>HPV (human papillomavirus) is a very common infection that can cause cancer. Almost 80 million people in the United States have HPV. That\'s about 1 out of 4 Americans.</span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span>HPV infections can cause:</span></span></span></span></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li class="MsoListBullet"><span><span><span><span>Cervical cancer</span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span>Cancer inside the vagina (vaginal cancer) or around the opening of the vagina (vulvar cancer)</span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span>Cancer of the penis (penile cancer)</span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span>Cancer of the anus (anal cancer)</span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span>Cancer of the back of the throat (oropharyngeal cancer)</span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span>Warts in the genital area</span></span></span></span></li>\r\n</ul>\r\n\r\n<p class="MsoListBullet"><span><span><span><span><span>The good news is that the HPV vaccine can prevent many of these diseases.&nbsp;<a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.cdc.gov/hpv/parents/whatishpv.html?_label_=%3Cspan%3ELearn+more+about+HPV%3C%2Fspan%3E"><span>Learn more about HPV</span></a>.</span></span></span></span></span></p>\r\n',
			},
			{	
				id: '00000000-0000-0000-0000-000000000000',
				title: "The Basics: Recommended Ages",
				content: "<h3>When does my child need to get the HPV vaccine?</h3>\r\n\r\n<p><span><span><span><span><span><span><span><span>Doctors recommend that all children get 2 shots of the HPV vaccine at age 11 or 12, but your child can get it as early as age 9. Doctors give the 2 shots 6 to 12 months apart. </span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span>Keep in mind that the HPV vaccine works best if your child gets it at the recommended age. And — like with other vaccines — kids have the best protection when they get all their shots on schedule.</span></span></span></span></span></span></span></p>\r\n\r\n<h4>What if my child is older than age 12?</h4>\r\n\r\n<p><span><span><span><span><span><span><span><span>It’s not too late to protect your child. Teens who didn't get the HPV vaccine when they were younger can still get it now.</span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span>Teens ages 13 to 14 need 2 shots 6 to 12 months apart —&nbsp;just like kids ages 11 to 12. Teens and adults who get their first shot of the vaccine after their 15th birthday will need 3 shots spread out over 6 months.</span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span>Young adults can get the HPV vaccine, too. Everyone can get the vaccine through age 26 — and some adults ages 27 to 45 may decide to get HPV shots after talking with their doctor. But it's still best for your child to get the HPV vaccine at age 11 or 12.</span></span></span></span></span></span></span></p>\r\n\r\n<p><!--[if !supportAnnotations]--><!--[endif]--></p>\r\n",
			},
			{	
				id: '00000000-0000-0000-0000-000000000000',
				title: "The Basics: Safety and Side Effects",
				content:
					'<h3><span><span><span><span><strong><span><span>Is the HPV vaccine safe?</span></span></strong></span></span></span></span></h3>\r\n\r\n<p><span><span><span><span><span><span><span><span>Yes, the vaccine is very safe. It\'s recommended by the Centers for Disease Control and Prevention (CDC), the American Academy of Family Physicians, and the American Academy of Pediatrics. </span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span>For more information about the HPV vaccine, check out:</span></span></span></span></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.cdc.gov/vaccines/parents/diseases/teen/hpv.html?_label_=Vaccine+%28Shot%29+for+Human+Papillomavirus">Vaccine (Shot) for Human Papillomavirus</a></span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.cdc.gov/hpv/infographics/vacc-six-reasons.html?_label_=Reasons+to+Get+HPV+Vaccine">Reasons to Get HPV Vaccine</a></span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/http/www.cdc.gov/hpv/parents/questions-answers.html?_label_=HPV%3A%26nbsp%3BResource+for+Parents">HPV:&nbsp;Resource for Parents</a></span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.cdc.gov/hpv/parents/vaccinesafety.html?_label_=HPV+Vaccination+is+Safe+and+Effective">HPV Vaccination is Safe and Effective</a></span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/http/www.cdc.gov/std/hpv/stdfact-hpv-vaccine-young-women.htm?_label_=HPV+Vaccine+Information+for+Young+Women">HPV Vaccine Information for Young Women</a></span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.cdc.gov/std/hpv/stdfact-hpv-and-men.htm?_label_=HPV+and+Men+%E2%80%94+Fact+Sheet">HPV and Men — Fact Sheet</a></span></span></span></span></li>\r\n</ul>\r\n\r\n<h3><span><span><span><span><strong><span><span>What are the possible side effects of the HPV vaccine?</span></span></strong></span></span></span></span></h3>\r\n\r\n<p><span><span><span><span><span><span><span><span>The most common side effects are pain, redness, or swelling near where the shot was given. Other common side effects are a fever, nausea (upset stomach), headache, and feeling tired.</span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span>Some pre-teens and teens may faint after getting any vaccine, including the HPV vaccine. It\'s a good idea to have your child sit or lie down while getting the shot — and for 15 minutes afterward. </span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span>Keep in mind that the benefits of the HPV vaccine far outweigh the risk of side effects. </span></span></span></span></span></span></span></span></p>\r\n',
			},
			{	
				id: '00000000-0000-0000-0000-000000000000',
				title: "Take Action: See a Doctor",
				content: '<p class="MsoNoSpacing">Help protect your child’s health with the HPV vaccine.</p>\r\n\r\n<h3><span><span><span><span><strong><span><span>Schedule a doctor\'s&nbsp;visit for your child.</span></span></strong></span></span></span></span></h3>\r\n\r\n<p><span><span><span><span><span><span><span><span>Doctors will usually give the first HPV shot during your child’s yearly checkup at age 11 or 12. But your child can get the shots at any doctor\'s visit. Remember, it’s always a good idea to check with your child’s doctor to make sure they’re getting all the recommended vaccines.</span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/health.gov/myhealthfinder/topics/doctor-visits/shots-vaccines/get-your-pre-teens-shots-schedule?_label_=Learn+about+other+vaccines+your+pre-teen+may+need">Learn about other vaccines your pre-teen may need</a>.</span></span></span></span></span></span></span></span></p>\r\n\r\n<h3><span><span><span><span><strong><span><span>Make sure your child gets their HPV shots at the recommended times.</span></span></strong></span></span></span></span></h3>\r\n\r\n<p><span><span><span><span><span><span><span><span>It’s important for your child to get the HPV shots on schedule. To make sure you stay on track, schedule appointments for any remaining shots on the day your child gets the first one. </span></span></span></span></span></span></span></span></p>\r\n',
			},
			{	
				id: '00000000-0000-0000-0000-000000000000',
				title: "Take Action: Cost and Insurance",
				content:
					'<h3><span><span><span><span><strong><span><span>What about cost?</span></span></strong></span></span></span></span></h3>\r\n\r\n<p><span><span><span><span><span><span><span><span>Under the&nbsp;Affordable Care Act, insurance plans must cover recommended vaccines for kids. Depending on your insurance plan, you may be able to get your child\'s HPV vaccine at no cost to you. Check with your insurance company to find out more. </span></span></span></span></span></span></span></span></p>\r\n\r\n<p>Your child may also qualify for free or low-cost health insurance through Medicaid or the Children\'s Health Insurance Program (CHIP). <a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.insurekidsnow.gov/coverage/index.html?_label_=Learn+about+coverage+options+for+your+family">Learn about coverage options for your family</a>.&nbsp;</p>\r\n\r\n<p><span><span><span><span><span><span><span><span>If you don\'t have insurance, you may still be able to get free or low-cost HPV shots for your child. </span></span></span></span></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.cdc.gov/vaccines/programs/vfc/parents/qa-detailed.html?_label_=Find+out+if+your+child+qualifies+for+free+vaccines">Find out if your child qualifies for free vaccines</a></span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.hhs.gov/immunization/get-vaccinated/where/index.html?_label_=Find+a+free+or+low-cost+vaccination+program+in+your+state">Find a free or low-cost vaccination program in your state</a></span></span></span></span></li>\r\n\t<li class="MsoListBullet"><span><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/findahealthcenter.hrsa.gov/?_label_=Find+a+health+center+near+you+and+ask+about+the+HPV+vaccine">Find a health center near you and ask about the HPV vaccine</a></span></span></span></span></li>\r\n</ul>\r\n\r\n<p class="MsoListBullet"><span><span><span><span><span><span><span><span><span>To learn more, check out these resources:</span></span></span></span></span></span></span></span></span></p>\r\n\r\n<ul>\r\n\t<li class="list-bullet1"><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.healthcare.gov/preventive-care-children/?_label_=%3Cspan%3EFree+preventive+care+for+children+covered+by+the+Affordable+Care+Act%3C%2Fspan%3E"><span>Free preventive care for children covered by the Affordable Care Act</span></a></span></span></span></li>\r\n\t<li class="list-bullet1"><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/www.healthcare.gov/health-care-law-protections/?_label_=%3Cspan%3EHow+the+Affordable+Care+Act+protects+you%3C%2Fspan%3E"><span>How the Affordable Care Act protects you</span></a>&nbsp;&nbsp;</span></span></span></li>\r\n\t<li class="list-bullet1"><span><span><span><a href="https://health.gov/myhealthfinder/api/outlink/topicsearch.json/https/marketplace.cms.gov/technical-assistance-resources/c2c-roadmap.pdf?_label_=%3Cspan%3EUnderstanding+your+health+insurance+and+how+to+use+it+%5BPDF+-+698+KB%5D%3C%2Fspan%3E"><span>Understanding your health insurance and how to use it [PDF - 698 KB]</span></a></span></span></span></li>\r\n</ul>\r\n',
			},
		],
	},

	{
		title: "Choosing a Doctor: Quick Tips",
		categories: "Checkups for Adults",
		id: "30589",
		image: {
			imageUrl: "https://health.gov/sites/default/files/2020-01/cadqt.png",
			imageAlt: "Health care provider holding a clipboard",
		},
		relatedItem: [
			{	
				id: "30540",
				title: "Get Your Well-Woman Visit Every Year",
				url: "https://health.gov/myhealthfinder/topics/everyday-healthy-living/sexual-health/get-your-well-woman-visit-every-year",
			},
			{	
				id: "30541",
				title: "Men: Take Charge of Your Health",
				url: "https://health.gov/myhealthfinder/topics/doctor-visits/regular-checkups/men-take-charge-your-health",
			},
			{	
				id: "30545",
				title: "Prevent Infections When You Get Medical Care",
				url: "https://health.gov/myhealthfinder/topics/everyday-healthy-living/safety/prevent-infections-when-you-get-medical-care",
			},
		],
		sections: [
			{	
				id: '00000000-0000-0000-0000-000000000000',
				title: null,
				content:
					"<p>When looking for a primary care doctor for yourself or a loved one, it’s important to choose someone you can trust. A primary care doctor can:</p>\r\n\r\n<ul>\r\n\t<li>Help you stay healthy by recommending preventive services, like screening tests and vaccines (shots)</li>\r\n\t<li>Treat many health problems — including physical and mental health issues</li>\r\n\t<li>Refer you to a specialist when you need more help with a specific health issue</li>\r\n</ul>\r\n\r\n<p>When you and your doctor work together as a team, you get better health care. Look for a doctor who:</p>\r\n\r\n<ul>\r\n\t<li>Treats you with respect</li>\r\n\t<li>Listens to your opinions and concerns</li>\r\n\t<li>Encourages you to ask questions</li>\r\n\t<li>Explains things in ways you understand</li>\r\n</ul>\r\n\r\n<p>Try the following tips to find a doctor who’s right for you.</p>\r\n\r\n<h2>Ask for recommendations from people you know.</h2>\r\n\r\n<p>Getting a reference from someone you know and trust is a great way to find a doctor:</p>\r\n\r\n<ul>\r\n\t<li>Ask friends, family members, neighbors, or coworkers if they have a doctor they like</li>\r\n\t<li>If you’re looking for a new doctor because yours is retiring or moving, ask your current doctor for a recommendation</li>\r\n</ul>\r\n\r\n<h2>Check with your insurance company.</h2>\r\n\r\n<p>If you have health insurance, you may need to choose from a list of doctors in your plan's network (doctors that take your insurance plan). Some insurance plans may let you choose a doctor outside your network if you pay more of the cost.</p>\r\n\r\n<p>To find a doctor who takes your insurance:</p>\r\n\r\n<ul>\r\n\t<li>Call your insurance company and ask for a list of doctors near you who take your insurance plan — or use the insurance company’s website to search for a doctor</li>\r\n\t<li>Then call the doctor’s office and ask them to confirm that they take your plan — have your insurance card handy in case they need to know your plan details</li>\r\n</ul>\r\n\r\n<p>If you don’t have health insurance, you’ll have to pay for health care out of pocket (on your own). For help finding health insurance, <a href=\"https://www.healthcare.gov/\">visit HealthCare.gov</a>.</p>\r\n\r\n<h2>Learn more about your top choices.</h2>\r\n\r\n<p>Make a list of the doctors you're interested in. Be sure to think about how easy or difficult it will be to travel to an appointment. Then call their offices to learn more about them. The answers to the following questions may help you make the best decision.</p>\r\n\r\n<p>Questions about the doctor:</p>\r\n\r\n<ul>\r\n\t<li>Is the doctor taking new patients?</li>\r\n\t<li>Is the doctor part of a group practice? If so, who are the other doctors that might help care for me?</li>\r\n\t<li>Who will see me if my doctor isn’t available?</li>\r\n\t<li>Which hospital does the doctor use?</li>\r\n\t<li>Does the doctor have experience treating my medical conditions?</li>\r\n\t<li>Does the doctor have special training or certifications?</li>\r\n</ul>\r\n\r\n<p>Questions about the office:</p>\r\n\r\n<ul>\r\n\t<li>Are evening or weekend appointments available? What about virtual appointments over the phone or on a computer (telemedicine)?</li>\r\n\t<li>What is the cancellation policy?</li>\r\n\t<li>How long will it take to get an appointment?</li>\r\n\t<li>How long do appointments usually last?</li>\r\n\t<li>Can I get lab work and x-rays done in the office?</li>\r\n\t<li>Is there a doctor or nurse who speaks my preferred language?</li>\r\n</ul>\r\n\r\n<h2>Think about your experience after the first visit.</h2>\r\n\r\n<p>Did the doctor and office staff:</p>\r\n\r\n<ul>\r\n\t<li>Make me feel comfortable during my appointment?</li>\r\n\t<li>Explain things in a way that was easy to understand?</li>\r\n\t<li>Listen carefully to me?</li>\r\n\t<li>Show respect for what I had to say?</li>\r\n\t<li>Know important information about my medical history?</li>\r\n\t<li>Spend enough time with me?</li>\r\n\t<li>Give me a chance to ask questions?</li>\r\n</ul>\r\n\r\n<p>If you answer “no” to any of these questions, you may&nbsp;want to keep looking.</p>\r\n",
			},
		],
	},
];
