var buttonGetStarted = document.getElementById('button-get-started');
var arrowChevronForward = document.getElementById('arrow-forward');
var buttonGetStartedFree = document.getElementById('button-get-started-free');
var arrowChevronForwardFree = document.getElementById('arrow-get-started-free');
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
