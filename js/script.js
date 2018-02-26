var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

var fullName = item.altSpellings[2];

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		var fullName = item.altSpellings[2];
		$('<li>').text('Country: ' + item.name).appendTo(countriesList);
		$('<li>').text('Full name: ' + fullName).appendTo(countriesList);
		$('<li>').text('Capital city: '+ item.capital).appendTo(countriesList);
		$('<li>').text('Region: ' + item.region).appendTo(countriesList);
		$('<li>').text('Timezone: ' + item.timezones).appendTo(countriesList);
		$('<li>').text('Population: ' + item.population).appendTo(countriesList);
		$('<li>').text('Area: ' + item.area + " sq. km").appendTo(countriesList);
		$('<li>').text('Currency: ' + item.currencies).appendTo(countriesList);
	})
}