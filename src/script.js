var buttonGetStarted = document.getElementById('button-get-started');
var arrowChevronForward = document.getElementById('arrow-forward');
var buttonGetStartedFree = document.getElementById('button-get-started-free');
var arrowChevronForwardFree = document.getElementById('arrow-get-started-free');
var exploreTheAPIButton = document.getElementById('button-explore-the-api');
var exploreTheAPIChevron = document.getElementById('explore-the-api-chevron');
var readTheDocsButton = document.getElementById('button-read-the-docs');
var readTheDocsChevron = document.getElementById('read-the-docs-chevron');
const RIGHT_TO_LEFT = 'right->left';
const LEFT_TO_RIGHT = 'left->right';
const OLD_POS_LEFT = 'old_pos_left';
const OLD_POS_RIGHT = 'old_pos_right';
HTMLElement.prototype.arrowChevronMove = function (direction) {
	switch (direction) {
		case LEFT_TO_RIGHT:
			this.style.left = '7px';
			this.style.transition = 'all 0.25s';
			return;
		case RIGHT_TO_LEFT:
			this.style.right = '7px';
			this.style.transition = 'all 0.25s';
			return;
		case OLD_POS_LEFT:
			this.style.left = '0px';
			this.style.transition = 'all 0.25s';
			return;
		case OLD_POS_RIGHT:
			this.style.right = '0px';
			this.style.transition = 'all 0.25s';
			return;
	}
};
buttonGetStarted.addEventListener('mouseover', function () {
	arrowChevronForward.arrowChevronMove(LEFT_TO_RIGHT);
});

buttonGetStarted.addEventListener('mouseleave', function () {
	arrowChevronForward.arrowChevronMove(OLD_POS_LEFT);
});

buttonGetStartedFree.addEventListener('mouseover', function () {
	arrowChevronForwardFree.arrowChevronMove(LEFT_TO_RIGHT);
});

buttonGetStartedFree.addEventListener('mouseleave', function () {
	arrowChevronForwardFree.arrowChevronMove(OLD_POS_LEFT);
});

exploreTheAPIButton.addEventListener('mouseenter', function() {
	exploreTheAPIChevron.arrowChevronMove(LEFT_TO_RIGHT);
});

exploreTheAPIButton.addEventListener('mouseleave', function () {
	exploreTheAPIChevron.arrowChevronMove(OLD_POS_LEFT);
});

readTheDocsButton.addEventListener('mouseenter', function () {
	readTheDocsChevron.arrowChevronMove(LEFT_TO_RIGHT);
});

readTheDocsButton.addEventListener('mouseleave', function () {
	readTheDocsChevron.arrowChevronMove(OLD_POS_LEFT);
});


//scroll handler
var lastScrollTop = 0;
var navbar = document.getElementById('navbar');
var heightOfNavbar = navbar.clientHeight;
window.addEventListener('scroll', function () {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		navbar.style.top = `-${heightOfNavbar}px`;
		navbar.style.transition = 'all 0.5s';
	} else {
		navbar.style.position = 'fixed';
		navbar.style.zIndex = '10';
		navbar.style.top = '0';
		navbar.style.transition = 'all 0.5s';
	}
	lastScrollTop = scrollTop;
});

var reasons = document.getElementsByClassName('reason');
var contents = document.getElementsByClassName('hide');
var arrowReasonSpan = document.getElementsByClassName('arrow-reason-span');
var imgSlide = document.getElementsByClassName('img-slide');

contents[0].style.paddingBottom = `${contents[0].scrollHeight}px`;
var height = [];
for (let i = 0; i < reasons.length; i++) {
	if (i != 0) {
		arrowReasonSpan[i].classList.add('hidden');
	}
	height.push(contents[i].scrollHeight);
}

for (let index = 0; index < reasons.length; index++) {
	reasons[index].addEventListener('click', function () {
		for (let i = 0; i < contents.length; i++) {
			if (i != index) {
				contents[i].setAttribute('data-selected', 'false');
				contents[i].classList.remove('show');
				contents[i].style.paddingBottom = '0px';
				arrowReasonSpan[i].classList.add('hidden');
				arrowReasonSpan[i].classList.remove('flex');
				imgSlide[i].classList.add('hidden');
				imgSlide[i].classList.remove('block');
			} else {
				contents[i].setAttribute('data-selected', 'true');
				contents[i].classList.add('show');
				contents[i].style.paddingBottom = `${height[i]}px`;
				arrowReasonSpan[i].classList.add('flex');
				arrowReasonSpan[i].classList.remove('hidden');
				imgSlide[index].classList.add('block');
				imgSlide[index].classList.remove('hidden');
			}
		}
	});
}

//intersection observer
const FADE_UP = 'fade-up';
const FADE_DOWN = 'fade-down';
const FADE_LEFT = 'fade-left';
const FADE_RIGHT = 'fade-right';
const FADE_UP_LEFT = 'fade-up-left';
const FADE_UP_RIGHT = 'fade-up-right';
const FADE_DOWN_LEFT = 'fade-down-left';
const FADE_DOWN_RIGHT = 'fade-down-left';

HTMLElement.prototype.addFadeAnimation = function (fadeType, duration) {
	if (fadeType !== null && fadeType !== undefined) {
		this.classList.add(fadeType);
		this.style.animationDuration = `${duration < 0 ? 600 : duration}ms`;
	} else {
		this.classList.add('opacity-100');
	}
};

function addFadeAnimationForArrays(arraysOfElements, typeOfFade, seriated, interval, duration) {
	const observerForArraysOptions = {};
	const observerForArrays = new IntersectionObserver(function (entries,observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (seriated) entry.target.style.animationDelay = `${interval * arraysOfElements.indexOf(entry.target)}ms`;
				if (entry.target instanceof HTMLElement) entry.target.addFadeAnimation(typeOfFade, duration);
				observer.unobserve(entry.target);
			}
		});
	},
	observerForArraysOptions);
	arraysOfElements.forEach((element) => {
		observerForArrays.observe(element);
	});
};


function addFadeAnimationForUniqueElement(uniqueElements, typeOfFade, duration) {
	const observerForUniqueElementOptions = {};
	const observerForUniqueElement = new IntersectionObserver(function (entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (entry.target instanceof HTMLElement) entry.target.addFadeAnimation(typeOfFade, duration);
				observer.unobserve(entry.target);
			}
		});
	},
	observerForUniqueElementOptions);
	observerForUniqueElement.observe(uniqueElements);
};
var imgHeadingSection = document.getElementById('w-node-d621cc28-e0af-c187-1ff6-d218b5d8ece1-3151c08f');
var E_listContainer = document.getElementById('e-list-container');
var redBackgroundImages = document.getElementById('red-background-images');
var marketingContentGroup = document.getElementById('marketing-content-group');
var blueBackgroundImages = document.getElementById('blue-background-images');
var marketingList = document.getElementById('marketing-list');
var reportSectionHeader = document.getElementById('reporting-section-header');
var greenBackgroundImages = document.getElementById('green-background-images');
var reportList = document.getElementById('report-list-container');

;(function () {
	addFadeAnimationForArrays(
		[...document.getElementById('heading-page-section').children],
		FADE_UP,
		true,
		200,
		1000,
	);

	addFadeAnimationForArrays(
		[...document.getElementById('logo-container').children],
		FADE_UP,
		true,
		380,
		1000,
	);

	addFadeAnimationForArrays(
		[...document.getElementById('why-wrapper-content').children],
		FADE_UP,
		false,
		0,
		1000,
	);

	addFadeAnimationForArrays(
		[...document.getElementById('ecommerce-section-header').children],
		FADE_UP,
		false,
		0,
		600,
	);

	var children = [...marketingContentGroup.children][0].children;
	addFadeAnimationForArrays([...children], FADE_UP, true, 500, 700);

	var lastChild = [...marketingContentGroup.children][1].children;
	
	addFadeAnimationForArrays([...lastChild], FADE_UP, true, 2000, 2000);

	addFadeAnimationForArrays(
		[...reportSectionHeader.children],
		FADE_UP,
		true,
		400, 
		650
	)
})();

;(function () {
	addFadeAnimationForUniqueElement(navbar, null, 1000);
	addFadeAnimationForUniqueElement(imgHeadingSection, FADE_UP_LEFT, 600);
	addFadeAnimationForUniqueElement(E_listContainer, FADE_UP, 700);
	addFadeAnimationForUniqueElement(marketingList, FADE_UP, 700);
	addFadeAnimationForUniqueElement(reportList, FADE_UP, 700);

	[...redBackgroundImages.children].forEach((imgContainer) => {
		addFadeAnimationForUniqueElement(imgContainer.children[0], FADE_UP, 700);
	});
	[...blueBackgroundImages.children].forEach((imgContainer) => {
		addFadeAnimationForUniqueElement(imgContainer.children[0], FADE_UP, 700);
	});
	var greenBgImgs = [...greenBackgroundImages.children];
	greenBgImgs.forEach(greenBgImg => {
		addFadeAnimationForUniqueElement(greenBgImg.children[0], FADE_UP, 700);
	})
})();
var pass = true;
var autoChangeTheme = document.getElementById('auto-change-theme');
var darkTheme = document.getElementById('dark-theme-fixed-container');
var developerSection = document.getElementById('developers-section');
var h3Elements = autoChangeTheme.getElementsByTagName('h3');
var strongElements = autoChangeTheme.getElementsByTagName('strong');
var d1 = document.getElementById('d1');
var d2 = document.getElementById('d2');

const changeThemeConfiguration = {
	rootMargin: `-${window.screen.availHeight * 0.4}px`,
}
var isDark = false;
const changeThemeObserver = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
			isDark = true;
			darkTheme.classList.contains('no-active') ? darkTheme.classList.remove('no-active')	: pass;
			darkTheme.classList.add('active-dark-theme');
			if (isDark) {
				autoChangeTheme.style.backgroundColor = 'black';
				developerSection.style.backgroundColor = 'black';
				d1.style.backgroundColor = 'black';
				d2.style.backgroundColor = 'black';
				for (let h3Element of h3Elements) {
					h3Element.style.color = 'white';
				}
				for (let strongElement of strongElements) {
					strongElement.style.color = 'white';
				}
			}
		} else {
			isDark = false;
			darkTheme.classList.contains('active-dark-theme') ? darkTheme.classList.remove('active-dark-theme') : pass;
			darkTheme.classList.add('no-active');
			if (!isDark) {
				autoChangeTheme.style.backgroundColor = 'white';
				developerSection.style.backgroundColor = 'white';
				d1.style.backgroundColor = 'white';
				d2.style.backgroundColor = 'white';
				for (let h3Element of h3Elements) {
					h3Element.style.color = 'black';
				}
				for (let strongElement of strongElements) {
					strongElement.style.color = 'black';
				}
			}
		}
	})
}, changeThemeConfiguration);

changeThemeObserver.observe(autoChangeTheme);
