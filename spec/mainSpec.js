describe('DOM', () => {
	beforeEach(() => {
		document.body.insertAdjacentHTML('afterbegin', getBodyContent());
	});

	afterEach(function () {
		document.body.removeChild(document.getElementById('wrapper'));
	});

	it('should have a string type of card mark content element', () => {
		const cardMarkContent =
			document.querySelector('.card__mark').textContent;

		expect(cardMarkContent).toBeInstanceOf(String);
	});

	it("should have a title element that contains 'Join our community' word in first section element", () => {
		const sectionEls = document.querySelectorAll('section');
		const firstSectionEl = sectionEls[0];
		const cardTitleEl = firstSectionEl.querySelector('.card__title');
		const cardTitle = cardTitleEl.textContent.trim();

		expect(cardTitle).toMatch(/Join our community/);
	});

	it('should have three section elements', () => {
		const sectionEls = document.querySelectorAll('section');

		expect(sectionEls).toHaveSize(3);
	});

	it("should have a word 'Coding exercises' as one of why us points", () => {
		const whyUsPointEls = document.querySelectorAll('.card__list li');

		const whyUsPoints = [];

		for (let i = 0; i < whyUsPointEls.length; i++) {
			const whyUsPoint = whyUsPointEls[i].textContent;
			whyUsPoints.push(whyUsPoint);
		}

		expect(whyUsPoints).toContain('Coding exercises');
	});
});
