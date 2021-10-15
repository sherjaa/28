let $ = function (x) {
	return document.querySelector(x);
};

var korsatish = $('#korsatish');
var password = $('#password');
var btn = $('.btn');
var login = $('#login');
var wrap = $('.wrapper');
korsatish.addEventListener('click', () => {
	if (korsatish.classList == 'fas fa-eye') {
		password.type = 'text';
		korsatish.classList = 'fas fa-eye-slash';
		return;	
	}
	else{
		password.type = 'password';
		korsatish.classList = 'fas fa-eye';
		return;
	}
});
