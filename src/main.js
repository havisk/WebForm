(function(){
 
let url = 'http://json-data.herokuapp.com/forms';

//fetch Data and do something with it
let promise = $.getJSON(url);

promise.then(function(data){
fetch(data);
});



//template
let genericInput = _.template($('#generic-form').text());
let select = _.template($('#generic-form').text());
let textarea = _.template($('#generic-form').text());


// our do something
let fetch = function (arr) {
	_.each(arr, function (item) {

	var htmlBlock = "";

if (item.type === 'text'|| item.type === 'tel' || item.type ==='email') 
{
	htmlBlock = genericInput(item);
}
// else if (item.type === 'select') {
//   htmlBlock = select;
// }
// else if (item.type === 'textarea') {
//   htmlBlock = textarea;
// }
$('form').append(htmlBlock)

});





// <div class="text-input for-elem">
// let textInput = function (obj){
// 	let template =`
// 	<input value "" type="${type}" placeholder="${label}" id="${obj.icon}"</i>
// 	</div>
// 	`;
	
// }


};

})();

