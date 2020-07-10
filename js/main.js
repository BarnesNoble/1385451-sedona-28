var openerElem = document.querySelector('.button-search');
var modalElem = document.querySelector('.modal');

if (openerElem) {
	openerElem.addEventListener('click', function (evt) {
		evt.preventDefault();
		modalElem.classList.toggle('modal-open');
	});
}