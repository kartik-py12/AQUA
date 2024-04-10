  const countryInput = document.getElementById('country-input');
  const checkButton = document.getElementById('check-button');
  const result = document.getElementById('result');

  checkButton.addEventListener('click', () => {
    const countryName = countryInput.value.toLowerCase();
    // Simulate water pollution value based on country (replace with actual data fetching if possible)
    let waterPollutionValue;
    switch (countryName) {

case 'india':
  waterPollutionValue = '18.3';
  break;
case 'china':
  waterPollutionValue = '58.4';
  break;
case 'united states':
  waterPollutionValue = '89.3';
  break;
case 'indonesia':
  waterPollutionValue = '24.9';
  break;
case 'pakistan':
  waterPollutionValue = '15.3';
  break;
case 'nigeria':
  waterPollutionValue = '4.3';
  break;
case 'brazil':
  waterPollutionValue = '45.2';
  break;
case 'bangladesh':
  waterPollutionValue = '26.9';
  break;
case 'russia':
  waterPollutionValue = '55.8';
  break;
case 'ethiopia':
  waterPollutionValue = '11.3';
  break;
case 'mexico':
  waterPollutionValue = '50';
  break;
case 'japan':
  waterPollutionValue = '91.8';
  break;
case 'philippines':
  waterPollutionValue = '34.4';
  break;
case 'egypt':
  waterPollutionValue = '36.7';
  break;
case 'dr congo':
  waterPollutionValue = '13.4';
  break;
case 'vietnam':
  waterPollutionValue = '50.9';
  break;
case 'iran':
  waterPollutionValue = '48.8';
  break;
case 'turkey':
  waterPollutionValue = '47';
  break;
case 'germany':
  waterPollutionValue = '98.6';
  break;
case 'thailand':
  waterPollutionValue = '42.7';
  break;
case 'tanzania':
  waterPollutionValue = '18.4';
  break;
case 'united kingdom':
  waterPollutionValue = '100';
  break;
case 'france':
  waterPollutionValue = '93.8';
  break;
case 'south africa':
  waterPollutionValue = '23.4';
  break;
case 'italy':
  waterPollutionValue = '97.8';
  break;
case 'kenya':
  waterPollutionValue = '13.7';
  break;
case 'myanmar':
  waterPollutionValue = '30';
  break;
case 'colombia':
  waterPollutionValue = '50.1';
  break;
case 'south korea':
  waterPollutionValue = '84.6';
  break;
case 'uganda':
  waterPollutionValue = '17.7';
  break;
case 'sudan':
  waterPollutionValue = '22.6';
  break;
case 'spain':
  waterPollutionValue = '94.8';
  break;
case 'iraq':
  waterPollutionValue = '45.9';
  break;
case 'algeria':
  waterPollutionValue = '49.1';
  break;
case 'argentina':
  waterPollutionValue = '59.5';
  break;
case 'afghanistan':
  waterPollutionValue = '27.8';
  break;
case 'poland':
  waterPollutionValue = '65.7';
  break;
case 'canada':
  waterPollutionValue = '90.9';
  break;
case 'morocco':
  waterPollutionValue = '36.7';
  break;
case 'ukraine':
  waterPollutionValue = '55.1';
  break;
case 'angola':
  waterPollutionValue = '12';
  break;
case 'saudi arabia':
  waterPollutionValue = '51';
  break;
case 'uzbekistan':
  waterPollutionValue = '54';
  break;
case 'mozambique':
  waterPollutionValue = '16.5';
  break;
case 'ghana':
  waterPollutionValue = '20.4';
  break;
case 'peru':
  waterPollutionValue = '42.8';
  break;
case 'malaysia':
  waterPollutionValue = '48.2';
  break;
case 'nepal':
  waterPollutionValue = '25.9';
  break;
case 'madagascar':
  waterPollutionValue = '6.2';
  break;
case 'ivory coast':
  waterPollutionValue = '17';
  break;
case 'venezuela':
  waterPollutionValue = '43.6';
  break;
case 'cameroon':
  waterPollutionValue = '7.5';
  break;
case 'niger':
  waterPollutionValue = '1.7';
  break;
case 'australia':
  waterPollutionValue = '81.2';
  break;
case 'mali':
  waterPollutionValue = '8.3';
  break;
case 'taiwan':
  waterPollutionValue = '67.2';
  break;
case 'burkina faso':
  waterPollutionValue = '7.9';
  break;
case 'sri lanka':
  waterPollutionValue = '46.7';
  break;
case 'malawi':
  waterPollutionValue = '12.1';
  break;
case 'zambia':
  waterPollutionValue = '13.2';
  break;
case 'kazakhstan':
  waterPollutionValue = '56';
  break;
case 'chile':
  waterPollutionValue = '66.8';
  break;
case 'romania':
  waterPollutionValue = '55.4';
  break;
case 'ecuador':
  waterPollutionValue = '46.7';
  break;
case 'guatemala':
  waterPollutionValue = '27.2';
  break;
case 'senegal':
  waterPollutionValue = '13';
  break;
case 'netherlands':
  waterPollutionValue = '100';
  break;
case 'cambodia':
  waterPollutionValue = '33.3';
  break;
case 'zimbabwe':
  waterPollutionValue = '16.2';
  break;
case 'guinea':
  waterPollutionValue = '11';
  break;
case 'rwanda':
  waterPollutionValue = '17';
  break;
case 'benin':
  waterPollutionValue = '13.6';
  break;
case 'burundi':
  waterPollutionValue = '5.4';
  break;
case 'bolivia':
  waterPollutionValue = '38.5';
  break;
case 'tunisia':
  waterPollutionValue = '49.1';
  break;
case 'haiti':
  waterPollutionValue = '13.9';
  break;
case 'belgium':
  waterPollutionValue = '93';
  break;
case 'dominican republic':
  waterPollutionValue = '35.2';
  break;
case 'jordan':
  waterPollutionValue = '54.4';
  break;
case 'cuba':
  waterPollutionValue = '46';
  break;
case 'honduras':
  waterPollutionValue = '30.9';
  break;
case 'sweden':
  waterPollutionValue = '97.9';
  break;
case 'papua new guinea':
  waterPollutionValue = '15.8';
  break;
case 'czech republic':
  waterPollutionValue = '65.2';
  break;
case 'azerbaijan':
  waterPollutionValue = '46.5';
  break;
case 'tajikistan':
  waterPollutionValue = '31.7';
  break;
case 'greece':
  waterPollutionValue = '100';
  break;
case 'portugal':
  waterPollutionValue = '85.7';
  break;
case 'hungary':
  waterPollutionValue = '60.6';
  break;
case 'united arab emirates':
  waterPollutionValue = '51.7';
  break;
case 'belarus':
  waterPollutionValue = '60.7';
  break;
case 'israel':
  waterPollutionValue = '93.8';
  break;
case 'togo':
  waterPollutionValue = '4.9';
  break;
case 'sierra leone':
  waterPollutionValue = '11.6';
  break;
case 'austria':
  waterPollutionValue = '100';
  break;
case 'switzerland':
  waterPollutionValue = '100';
  break;
case 'laos':
  waterPollutionValue = '26.1';
  break;
case 'nicaragua':
  waterPollutionValue = '42.2';
  break;
case 'serbia':
  waterPollutionValue = '60.5';
  break;
case 'paraguay':
  waterPollutionValue = '45.2';
  break;
case 'kyrgyzstan':
  waterPollutionValue = '47.3';
  break;
case 'bulgaria':
  waterPollutionValue = '58';
  break;
case 'turkmenistan':
  waterPollutionValue = '47.7';
  break;
case 'el salvador':
  waterPollutionValue = '40.8';
  break;
case 'republic of the congo':
  waterPollutionValue = '14.5';
  break;
case 'singapore':
  waterPollutionValue = '88.9';
  break;
case 'denmark':
  waterPollutionValue = '95.8';
  break;
case 'slovakia':
  waterPollutionValue = '64.6';
  break;
case 'finland':
  waterPollutionValue = '100';
  break;
case 'liberia':
  waterPollutionValue = '9.5';
  break;
case 'norway':
  waterPollutionValue = '100';
  break;
case 'new zealand':
  waterPollutionValue = '74.5';
  break;
case 'costa rica':
  waterPollutionValue = '55.3';
  break;
case 'lebanon':
  waterPollutionValue = '46.8';
  break;
case 'ireland':
  waterPollutionValue = '100';
  break;
case 'mauritania':
  waterPollutionValue = '13.6';
  break;
case 'oman':
  waterPollutionValue = '46.5';
  break;
case 'panama':
  waterPollutionValue = '41.7';
  break;
case 'kuwait':
  waterPollutionValue = '57.2';
  break;
case 'croatia':
  waterPollutionValue = '63.3';
  break;
case 'eritrea':
  waterPollutionValue = '6.4';
  break;
case 'georgia':
  waterPollutionValue = '52.3';
  break;
case 'mongolia':
  waterPollutionValue = '43.8';
  break;
case 'uruguay':
  waterPollutionValue = '61.8';
  break;
case 'moldova':
  waterPollutionValue = '50.8';
  break;
case 'bosnia and herzegovina':
  waterPollutionValue = '57.3';
  break;
case 'gambia':
  waterPollutionValue = '19';
  break;
case 'albania':
  waterPollutionValue = '50.3';
  break;
case 'jamaica':
  waterPollutionValue = '47.3';
  break;
case 'armenia':
  waterPollutionValue = '61.7';
  break;
case 'qatar':
  waterPollutionValue = '57';
  break;
case 'botswana':
  waterPollutionValue = '20.2';
  break;
case 'lithuania':
  waterPollutionValue = '57.4';
  break;
case 'namibia':
  waterPollutionValue = '18.9';
  break;
case 'gabon':
  waterPollutionValue = '27.2';
  break;
case 'lesotho':
  waterPollutionValue = '7.2';
  break;
case 'guinea-bissau':
  waterPollutionValue = '6.6';
  break;
case 'slovenia':
  waterPollutionValue = '70.3';
  break;
case 'north macedonia':
  waterPollutionValue = '58.3';
  break;
case 'latvia':
  waterPollutionValue = '57.7';
  break;
case 'equatorial guinea':
  waterPollutionValue = '29.6';
  break;
case 'trinidad and tobago':
  waterPollutionValue = '48.5';
  break;
case 'bahrain':
  waterPollutionValue = '20.1';
  break;
case 'timor-leste':
  waterPollutionValue = '26.2';
  break;
case 'estonia':
  waterPollutionValue = '59.2';
  break;
case 'mauritius':
  waterPollutionValue = '63.6';
  break;
case 'cyprus':
  waterPollutionValue = '91.7';
  break;
case 'eswatini':
  waterPollutionValue = '12.2';
  break;
case 'djibouti':
  waterPollutionValue = '18.2';
  break;
case 'fiji':
  waterPollutionValue = '32';
  break;
case 'comoros':
  waterPollutionValue = '15.4';
  break;
case 'guyana':
  waterPollutionValue = '32.6';
  break;
case 'bhutan':
  waterPollutionValue = '31.5';
  break;
case 'solomon islands':
  waterPollutionValue = '14.4';
  break;
case 'luxembourg':
  waterPollutionValue = '97.8';
  break;
case 'suriname':
  waterPollutionValue = '35.4';
  break;
case 'montenegro':
  waterPollutionValue = '56.8';
  break;
case 'cape verde':
  waterPollutionValue = '34.5';
  break;
case 'malta':
  waterPollutionValue = '100';
  break;
case 'maldives':
  waterPollutionValue = '44.2';
  break;
case 'brunei':
  waterPollutionValue = '79.9';
  break;
case 'belize':
  waterPollutionValue = '39.6';
  break;
case 'bahamas':
  waterPollutionValue = '47.8';
  break;
case 'iceland':
  waterPollutionValue = '100';
  break;
case 'vanuatu':
  waterPollutionValue = '21.4';
  break;
case 'barbados':
  waterPollutionValue = '47.8';
  break;
case 'sao tome and principe':
  waterPollutionValue = '34.1';
  break;
case 'samoa':
  waterPollutionValue = '40.4';
  break;
case 'saint lucia':
  waterPollutionValue = '42.2';
  break;
case 'kiribati':
  waterPollutionValue = '15.6';
  break;
case 'grenada':
  waterPollutionValue = '44.4';
  break;
case 'micronesia':
  waterPollutionValue = '33';
  break;
case 'tonga':
  waterPollutionValue = '42.8';
  break;
case 'seychelles':
  waterPollutionValue = '45.8';
  break;
case 'saint vincent and the grenadines':
  waterPollutionValue = '41.1';
  break;
case 'antigua and barbuda':
  waterPollutionValue = '45.2';
  break;
case 'dominica':
  waterPollutionValue = '43.5';
  break;
case 'marshall islands':
  waterPollutionValue = '30.3';
  break;


      default:
        waterPollutionValue = 'Data not available';
    }
    result.textContent = `Water pollution index for ${countryName}: ${waterPollutionValue}`;
  });
