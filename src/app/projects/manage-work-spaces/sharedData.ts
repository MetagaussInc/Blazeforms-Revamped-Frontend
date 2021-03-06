export class SharedData{

    public getCountries(){
        return this.countryList;
    }
    
    public getTimezones(){
        return this.timezoneList;
    }

    public getLanguages(){
        return this.languageList;
    }

    public getCurrencies(){
        return this.currencyList;
    }

    public countryList: Array<{ value: string, label: string }> = [
        { value: 'AF', label: 'Afghanistan' },
        { value: 'AX', label: 'Åland Islands' },
        { value: 'AL', label: 'Albania' },
        { value: 'DZ', label: 'Algeria' },
        { value: 'AS', label: 'American Samoa' },
        { value: 'AD', label: 'Andorra' },
        { value: 'AO', label: 'Angola' },
        { value: 'AI', label: 'Anguilla' },
        { value: 'AQ', label: 'Antarctica' },
        { value: 'AG', label: 'Antigua and Barbuda' },
        { value: 'AR', label: 'Argentina' },
        { value: 'AM', label: 'Armenia' },
        { value: 'AW', label: 'Aruba' },
        { value: 'AU', label: 'Australia' },
        { value: 'AT', label: 'Austria' },
        { value: 'AZ', label: 'Azerbaijan' },
        { value: 'BS', label: 'Bahamas' },
        { value: 'BH', label: 'Bahrain' },
        { value: 'BD', label: 'Bangladesh' },
        { value: 'BB', label: 'Barbados' },
        { value: 'BY', label: 'Belarus' },
        { value: 'BE', label: 'Belgium' },
        { value: 'BZ', label: 'Belize' },
        { value: 'BJ', label: 'Benin' },
        { value: 'BM', label: 'Bermuda' },
        { value: 'BT', label: 'Bhutan' },
        { value: 'BO', label: 'Bolivia, Plurinational State of' },
        { value: 'BA', label: 'Bosnia and Herzegovina' },
        { value: 'BW', label: 'Botswana' },
        { value: 'BV', label: 'Bouvet Island' },
        { value: 'BR', label: 'Brazil' },
        { value: 'IO', label: 'British Indian Ocean Territory' },
        { value: 'BN', label: 'Brunei Darussalam' },
        { value: 'BG', label: 'Bulgaria' },
        { value: 'BF', label: 'Burkina Faso' },
        { value: 'BI', label: 'Burundi' },
        { value: 'KH', label: 'Cambodia' },
        { value: 'CM', label: 'Cameroon' },
        { value: 'CA', label: 'Canada' },
        { value: 'CV', label: 'Cape Verde' },
        { value: 'KY', label: 'Cayman Islands' },
        { value: 'CF', label: 'Central African Republic' },
        { value: 'TD', label: 'Chad' },
        { value: 'CL', label: 'Chile' },
        { value: 'CN', label: 'China' },
        { value: 'CX', label: 'Christmas Island' },
        { value: 'CC', label: 'Cocos (Keeling) Islands' },
        { value: 'CO', label: 'Colombia' },
        { value: 'KM', label: 'Comoros' },
        { value: 'CG', label: 'Congo' },
        { value: 'CD', label: 'Congo, the Democratic Republic of the' },
        { value: 'CK', label: 'Cook Islands' },
        { value: 'CR', label: 'Costa Rica' },
        { value: 'CI', label: 'Côte d\'Ivoire' },
        { value: 'HR', label: 'Croatia' },
        { value: 'CU', label: 'Cuba' },
        { value: 'CY', label: 'Cyprus' },
        { value: 'CZ', label: 'Czech Republic' },
        { value: 'DK', label: 'Denmark' },
        { value: 'DJ', label: 'Djibouti' },
        { value: 'DM', label: 'Dominica' },
        { value: 'DO', label: 'Dominican Republic' },
        { value: 'EC', label: 'Ecuador' },
        { value: 'EG', label: 'Egypt' },
        { value: 'SV', label: 'El Salvador' },
        { value: 'GQ', label: 'Equatorial Guinea' },
        { value: 'ER', label: 'Eritrea' },
        { value: 'EE', label: 'Estonia' },
        { value: 'ET', label: 'Ethiopia' },
        { value: 'FK', label: 'Falkland Islands (Malvinas)' },
        { value: 'FO', label: 'Faroe Islands' },
        { value: 'FJ', label: 'Fiji' },
        { value: 'FI', label: 'Finland' },
        { value: 'FR', label: 'France' },
        { value: 'GF', label: 'French Guiana' },
        { value: 'PF', label: 'French Polynesia' },
        { value: 'TF', label: 'French Southern Territories' },
        { value: 'GA', label: 'Gabon' },
        { value: 'GM', label: 'Gambia' },
        { value: 'GE', label: 'Georgia' },
        { value: 'DE', label: 'Germany' },
        { value: 'GH', label: 'Ghana' },
        { value: 'GI', label: 'Gibraltar' },
        { value: 'GR', label: 'Greece' },
        { value: 'GL', label: 'Greenland' },
        { value: 'GD', label: 'Grenada' },
        { value: 'GP', label: 'Guadeloupe' },
        { value: 'GU', label: 'Guam' },
        { value: 'GT', label: 'Guatemala' },
        { value: 'GG', label: 'Guernsey' },
        { value: 'GN', label: 'Guinea' },
        { value: 'GW', label: 'Guinea-Bissau' },
        { value: 'GY', label: 'Guyana' },
        { value: 'HT', label: 'Haiti' },
        { value: 'HM', label: 'Heard Island and McDonald Islands' },
        { value: 'VA', label: 'Holy See (Vatican City State)' },
        { value: 'HN', label: 'Honduras' },
        { value: 'HK', label: 'Hong Kong' },
        { value: 'HU', label: 'Hungary' },
        { value: 'IS', label: 'Iceland' },
        { value: 'IN', label: 'India' },
        { value: 'ID', label: 'Indonesia' },
        { value: 'IR', label: 'Iran, Islamic Republic of' },
        { value: 'IQ', label: 'Iraq' },
        { value: 'IE', label: 'Ireland' },
        { value: 'IM', label: 'Isle of Man' },
        { value: 'IL', label: 'Israel' },
        { value: 'IT', label: 'Italy' },
        { value: 'JM', label: 'Jamaica' },
        { value: 'JP', label: 'Japan' },
        { value: 'JE', label: 'Jersey' },
        { value: 'JO', label: 'Jordan' },
        { value: 'KZ', label: 'Kazakhstan' },
        { value: 'KE', label: 'Kenya' },
        { value: 'KI', label: 'Kiribati' },
        { value: 'KP', label: 'Korea, Democratic People\'s Republic of' },
        { value: 'KR', label: 'Korea, Republic of' },
        { value: 'KW', label: 'Kuwait' },
        { value: 'KG', label: 'Kyrgyzstan' },
        { value: 'LA', label: 'Lao People\'s Democratic Republic' },
        { value: 'LV', label: 'Latvia' },
        { value: 'LB', label: 'Lebanon' },
        { value: 'LS', label: 'Lesotho' },
        { value: 'LR', label: 'Liberia' },
        { value: 'LY', label: 'Libyan Arab Jamahiriya' },
        { value: 'LI', label: 'Liechtenstein' },
        { value: 'LT', label: 'Lithuania' },
        { value: 'LU', label: 'Luxembourg' },
        { value: 'MO', label: 'Macao' },
        { value: 'MK', label: 'Macedonia, the former Yugoslav Republic of' },
        { value: 'MG', label: 'Madagascar' },
        { value: 'MW', label: 'Malawi' },
        { value: 'MY', label: 'Malaysia' },
        { value: 'MV', label: 'Maldives' },
        { value: 'ML', label: 'Mali' },
        { value: 'MT', label: 'Malta' },
        { value: 'MH', label: 'Marshall Islands' },
        { value: 'MQ', label: 'Martinique' },
        { value: 'MR', label: 'Mauritania' },
        { value: 'MU', label: 'Mauritius' },
        { value: 'YT', label: 'Mayotte' },
        { value: 'MX', label: 'Mexico' },
        { value: 'FM', label: 'Micronesia, Federated States of' },
        { value: 'MD', label: 'Moldova, Republic of' },
        { value: 'MC', label: 'Monaco' },
        { value: 'MN', label: 'Mongolia' },
        { value: 'ME', label: 'Montenegro' },
        { value: 'MS', label: 'Montserrat' },
        { value: 'MA', label: 'Morocco' },
        { value: 'MZ', label: 'Mozambique' },
        { value: 'MM', label: 'Myanmar' },
        { value: 'NA', label: 'Namibia' },
        { value: 'NR', label: 'Nauru' },
        { value: 'NP', label: 'Nepal' },
        { value: 'NL', label: 'Netherlands' },
        { value: 'AN', label: 'Netherlands Antilles' },
        { value: 'NC', label: 'New Caledonia' },
        { value: 'NZ', label: 'New Zealand' },
        { value: 'NI', label: 'Nicaragua' },
        { value: 'NE', label: 'Niger' },
        { value: 'NG', label: 'Nigeria' },
        { value: 'NU', label: 'Niue' },
        { value: 'NF', label: 'Norfolk Island' },
        { value: 'MP', label: 'Northern Mariana Islands' },
        { value: 'NO', label: 'Norway' },
        { value: 'OM', label: 'Oman' },
        { value: 'PK', label: 'Pakistan' },
        { value: 'PW', label: 'Palau' },
        { value: 'PS', label: 'Palestinian Territory, Occupied' },
        { value: 'PA', label: 'Panama' },
        { value: 'PG', label: 'Papua New Guinea' },
        { value: 'PY', label: 'Paraguay' },
        { value: 'PE', label: 'Peru' },
        { value: 'PH', label: 'Philippines' },
        { value: 'PN', label: 'Pitcairn' },
        { value: 'PL', label: 'Poland' },
        { value: 'PT', label: 'Portugal' },
        { value: 'PR', label: 'Puerto Rico' },
        { value: 'QA', label: 'Qatar' },
        { value: 'RE', label: 'R&eacute;union' },
        { value: 'RO', label: 'Romania' },
        { value: 'RU', label: 'Russian Federation' },
        { value: 'RW', label: 'Rwanda' },
        { value: 'BL', label: 'Saint Barth&eacute;lemy' },
        { value: 'SH', label: 'Saint Helena, Ascension and Tristan da Cunha' },
        { value: 'KN', label: 'Saint Kitts and Nevis' },
        { value: 'LC', label: 'Saint Lucia' },
        { value: 'MF', label: 'Saint Martin (French part)' },
        { value: 'PM', label: 'Saint Pierre and Miquelon' },
        { value: 'VC', label: 'Saint Vincent and the Grenadines' },
        { value: 'WS', label: 'Samoa' },
        { value: 'SM', label: 'San Marino' },
        { value: 'ST', label: 'Sao Tome and Principe' },
        { value: 'SA', label: 'Saudi Arabia' },
        { value: 'SN', label: 'Senegal' },
        { value: 'RS', label: 'Serbia' },
        { value: 'SC', label: 'Seychelles' },
        { value: 'SL', label: 'Sierra Leone' },
        { value: 'SG', label: 'Singapore' },
        { value: 'SK', label: 'Slovakia' },
        { value: 'SI', label: 'Slovenia' },
        { value: 'SB', label: 'Solomon Islands' },
        { value: 'SO', label: 'Somalia' },
        { value: 'ZA', label: 'South Africa' },
        { value: 'GS', label: 'South Georgia and the South Sandwich Islands' },
        { value: 'ES', label: 'Spain' },
        { value: 'LK', label: 'Sri Lanka' },
        { value: 'SD', label: 'Sudan' },
        { value: 'SR', label: 'Suriname' },
        { value: 'SJ', label: 'Svalbard and Jan Mayen' },
        { value: 'SZ', label: 'Swaziland' },
        { value: 'SE', label: 'Sweden' },
        { value: 'CH', label: 'Switzerland' },
        { value: 'SY', label: 'Syrian Arab Republic' },
        { value: 'TW', label: 'Taiwan, Province of China' },
        { value: 'TJ', label: 'Tajikistan' },
        { value: 'TZ', label: 'Tanzania, United Republic of' },
        { value: 'TH', label: 'Thailand' },
        { value: 'TL', label: 'Timor-Leste' },
        { value: 'TG', label: 'Togo' },
        { value: 'TK', label: 'Tokelau' },
        { value: 'TO', label: 'Tonga' },
        { value: 'TT', label: 'Trinidad and Tobago' },
        { value: 'TN', label: 'Tunisia' },
        { value: 'TR', label: 'Turkey' },
        { value: 'TM', label: 'Turkmenistan' },
        { value: 'TC', label: 'Turks and Caicos Islands' },
        { value: 'TV', label: 'Tuvalu' },
        { value: 'UG', label: 'Uganda' },
        { value: 'UA', label: 'Ukraine' },
        { value: 'AE', label: 'United Arab Emirates' },
        { value: 'GB', label: 'United Kingdom' },
        { value: 'US', label: 'United States' },
        { value: 'UM', label: 'United States Minor Outlying Islands' },
        { value: 'UY', label: 'Uruguay' },
        { value: 'UZ', label: 'Uzbekistan' },
        { value: 'VU', label: 'Vanuatu' },
        { value: 'VE', label: 'Venezuela, Bolivarian Republic of' },
        { value: 'VN', label: 'Viet Nam' },
        { value: 'VG', label: 'Virgin Islands, British' },
        { value: 'VI', label: 'Virgin Islands, U.S.' },
        { value: 'WF', label: 'Wallis and Futuna' },
        { value: 'EH', label: 'Western Sahara' },
        { value: 'YE', label: 'Yemen' },
        { value: 'ZM', label: 'Zambia' },
        { value: 'ZW', label: 'Zimbabwe' }
    ];

    public timezoneList: Array<{ value: string, label: string }> = [
        { value: '1', label: '(UTC-12:00) International Date Line West' },
        { value: '2', label: '(UTC-11:00) Coordinated Universal Time-11' },
        { value: '3', label: '(UTC-10:00) Aleutian Islands' },
        { value: '4', label: '(UTC-10:00) Hawaii' },
        { value: '5', label: '(UTC-09:30) Marquesas Islands' },
        { value: '6', label: '(UTC-09:00) Alaska' },
        { value: '7', label: '(UTC-09:00) Coordinated Universal Time-09' },
        { value: '8', label: '(UTC-08:00) Baja California' },
        { value: '9', label: '(UTC-08:00) Coordinated Universal Time-08' },
        { value: '10', label: '(UTC-08:00) Pacific Time (US & Canada)' },
        { value: '11', label: '(UTC-07:00) Arizona' },
        { value: '12', label: '(UTC-07:00) Chihuahua, La Paz, Mazatlan' },
        { value: '13', label: '(UTC-07:00) Mountain Time (US & Canada)' },
        { value: '14', label: '(UTC-06:00) Central America' },
        { value: '15', label: '(UTC-06:00) Central Time (US & Canada)' },
        { value: '16', label: '(UTC-06:00) Easter Island' },
        { value: '17', label: '(UTC-06:00) Guadalajara, Mexico City, Monterrey' },
        { value: '18', label: '(UTC-06:00) Saskatchewan' },
        { value: '19', label: '(UTC-05:00) Bogota, Lima, Quito, Rio Branco' },
        { value: '20', label: '(UTC-05:00) Chetumal' },
        { value: '21', label: '(UTC-05:00) Eastern Time (US & Canada)' },
        { value: '22', label: '(UTC-05:00) Haiti' },
        { value: '23', label: '(UTC-05:00) Havana' },
        { value: '24', label: '(UTC-05:00) Indiana (East)' },
        { value: '25', label: '(UTC-04:00) Asuncion' },
        { value: '26', label: '(UTC-04:00) Atlantic Time (Canada)' },
        { value: '27', label: '(UTC-04:00) Caracas' },
        { value: '28', label: '(UTC-04:00) Cuiaba' },
        { value: '29', label: '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan' },
        { value: '30', label: '(UTC-04:00) Santiago' },
        { value: '31', label: '(UTC-04:00) Turks and Caicos' },
        { value: '32', label: '(UTC-03:30) Newfoundland' },
        { value: '33', label: '(UTC-03:00) Araguaina' },
        { value: '34', label: '(UTC-03:00) Brasilia' },
        { value: '35', label: '(UTC-03:00) Cayenne, Fortaleza' },
        { value: '36', label: '(UTC-03:00) City of Buenos Aires' },
        { value: '37', label: '(UTC-03:00) Greenland' },
        { value: '38', label: '(UTC-03:00) Montevideo' },
        { value: '39', label: '(UTC-03:00) Saint Pierre and Miquelon' },
        { value: '40', label: '(UTC-03:00) Salvador' },
        { value: '41', label: '(UTC-02:00) Coordinated Universal Time-02' },
        { value: '42', label: '(UTC-02:00) Mid-Atlantic - Old' },
        { value: '43', label: '(UTC-01:00) Azores' },
        { value: '44', label: '(UTC-01:00) Cabo Verde Is.' },
        { value: '45', label: '(UTC) Coordinated Universal Time' },
        { value: '46', label: '(UTC+00:00) Casablanca' },
        { value: '47', label: '(UTC+00:00) Dublin, Edinburgh, Lisbon, London' },
        { value: '48', label: '(UTC+00:00) Monrovia, Reykjavik' },
        { value: '49', label: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna' },
        { value: '50', label: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague' },
        { value: '51', label: '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris' },
        { value: '52', label: '(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb' },
        { value: '53', label: '(UTC+01:00) West Central Africa' },
        { value: '54', label: '(UTC+01:00) Windhoek' },
        { value: '55', label: '(UTC+02:00) Amman' },
        { value: '56', label: '(UTC+02:00) Athens, Bucharest' },
        { value: '57', label: '(UTC+02:00) Beirut' },
        { value: '58', label: '(UTC+02:00) Cairo' },
        { value: '59', label: '(UTC+02:00) Chisinau' },
        { value: '60', label: '(UTC+02:00) Damascus' },
        { value: '61', label: '(UTC+02:00) Gaza, Hebron' },
        { value: '62', label: '(UTC+02:00) Harare, Pretoria' },
        { value: '63', label: '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius' },
        { value: '64', label: '(UTC+02:00) Jerusalem' },
        { value: '65', label: '(UTC+02:00) Kaliningrad' },
        { value: '66', label: '(UTC+02:00) Tripoli' },
        { value: '67', label: '(UTC+03:00) Baghdad' },
        { value: '68', label: '(UTC+03:00) Istanbul' },
        { value: '69', label: '(UTC+03:00) Kuwait, Riyadh' },
        { value: '70', label: '(UTC+03:00) Minsk' },
        { value: '71', label: '(UTC+03:00) Moscow, St. Petersburg, Volgograd' },
        { value: '72', label: '(UTC+03:00) Nairobi' },
        { value: '73', label: '(UTC+03:30) Tehran' },
        { value: '74', label: '(UTC+04:00) Abu Dhabi, Muscat' },
        { value: '75', label: '(UTC+04:00) Astrakhan, Ulyanovsk' },
        { value: '76', label: '(UTC+04:00) Baku' },
        { value: '77', label: '(UTC+04:00) Izhevsk, Samara' },
        { value: '78', label: '(UTC+04:00) Port Louis' },
        { value: '79', label: '(UTC+04:00) Tbilisi' },
        { value: '80', label: '(UTC+04:00) Yerevan' },
        { value: '81', label: '(UTC+04:30) Kabul' },
        { value: '82', label: '(UTC+05:00) Ashgabat, Tashkent' },
        { value: '83', label: '(UTC+05:00) Ekaterinburg' },
        { value: '84', label: '(UTC+05:00) Islamabad, Karachi' },
        { value: '85', label: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi' },
        { value: '86', label: '(UTC+05:30) Sri Jayawardenepura' },
        { value: '87', label: '(UTC+05:45) Kathmandu' },
        { value: '88', label: '(UTC+06:00) Astana' },
        { value: '89', label: '(UTC+06:00) Dhaka' },
        { value: '90', label: '(UTC+06:00) Omsk' },
        { value: '91', label: '(UTC+06:30) Yangon (Rangoon)' },
        { value: '92', label: '(UTC+07:00) Bangkok, Hanoi, Jakarta' },
        { value: '93', label: '(UTC+07:00) Barnaul, Gorno-Altaysk' },
        { value: '94', label: '(UTC+07:00) Hovd' },
        { value: '95', label: '(UTC+07:00) Krasnoyarsk' },
        { value: '96', label: '(UTC+07:00) Novosibirsk' },
        { value: '97', label: '(UTC+07:00) Tomsk' },
        { value: '98', label: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi' },
        { value: '99', label: '(UTC+08:00) Irkutsk' },
        { value: '100', label: '(UTC+08:00) Kuala Lumpur, Singapore' },
        { value: '101', label: '(UTC+08:00) Perth' },
        { value: '102', label: '(UTC+08:00) Taipei' },
        { value: '103', label: '(UTC+08:00) Ulaanbaatar' },
        { value: '104', label: '(UTC+08:30) Pyongyang' },
        { value: '105', label: '(UTC+08:45) Eucla' },
        { value: '106', label: '(UTC+09:00) Chita' },
        { value: '107', label: '(UTC+09:00) Osaka, Sapporo, Tokyo' },
        { value: '108', label: '(UTC+09:00) Seoul' },
        { value: '109', label: '(UTC+09:00) Yakutsk' },
        { value: '110', label: '(UTC+09:30) Adelaide' },
        { value: '111', label: '(UTC+09:30) Darwin' },
        { value: '112', label: '(UTC+10:00) Brisbane' },
        { value: '113', label: '(UTC+10:00) Canberra, Melbourne, Sydney' },
        { value: '114', label: '(UTC+10:00) Guam, Port Moresby' },
        { value: '115', label: '(UTC+10:00) Hobart' },
        { value: '116', label: '(UTC+10:00) Vladivostok' },
        { value: '117', label: '(UTC+10:30) Lord Howe Island' },
        { value: '118', label: '(UTC+11:00) Bougainville Island' },
        { value: '119', label: '(UTC+11:00) Chokurdakh' },
        { value: '120', label: '(UTC+11:00) Magadan' },
        { value: '121', label: '(UTC+11:00) Norfolk Island' },
        { value: '122', label: '(UTC+11:00) Sakhalin' },
        { value: '123', label: '(UTC+11:00) Solomon Is., New Caledonia' },
        { value: '124', label: '(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky' },
        { value: '125', label: '(UTC+12:00) Auckland, Wellington' },
        { value: '126', label: '(UTC+12:00) Coordinated Universal Time+12' },
        { value: '127', label: '(UTC+12:00) Fiji' },
        { value: '128', label: '(UTC+12:00) Petropavlovsk-Kamchatsky - Old' },
        { value: '129', label: '(UTC+12:45) Chatham Islands' },
        { value: '130', label: '(UTC+13:00) Nukualofa' },
        { value: '131', label: '(UTC + 13:00) Samoa' },
        { value: '132', label: '(UTC + 14:00) Kiritimati Island' }
    ];

    public languageList: Array<{ value: string, label: string }> = [
        { value: 'en', label: 'English' },
        { value: 'zh', label: 'Chinese' },
        { value: 'es', label: 'Spanish' },
        { value: 'fr', label: 'French' }
    ];

    public currencyList: Array<{ value: string, label: string }> = [
        { value: 'AF', label: 'Afghan afghani (؋)' },
        { value: 'AX', label: 'Euro (€)' },
        { value: 'AL', label: 'Albanian lek (L)' },
        { value: 'DZ', label: 'Algerian dinar (د.ج)' },
        { value: 'AS', label: 'United States dollar	($)' },
        { value: 'AD', label: 'Euro (€)' },
        { value: 'AO', label: 'Angolan kwanza	(Kz)' },
        { value: 'AI', label: 'Eastern Caribbean dollar	($)' },
        { value: 'AQ', label: 'United States dollar	($)' },
        { value: 'AG', label: 'Eastern Caribbean dollar	($)' },
        { value: 'AR', label: 'Argentine peso	($)' },
        { value: 'AM', label: 'Armenian dram (֏)' },
        { value: 'AW', label: 'Aruban florin (ƒ)' },
        { value: 'AU', label: 'Australian dollar ($)' },
        { value: 'AT', label: 'Euro (€)' },
        { value: 'AZ', label: 'Azerbaijani manat (₼)' },
        { value: 'BS', label: 'Bahamian dollar ($)' },
        { value: 'BH', label: 'Bahraini dinar (.د.ب)' },
        { value: 'BD', label: 'Bangladeshi taka	(৳)' },
        { value: 'BB', label: 'Barbadian dollar	($)' },
        { value: 'BY', label: 'Belarusian ruble	(Br)' },
        { value: 'BE', label: 'Euro	(€)' },
        { value: 'BZ', label: 'Belize dollar ($)' },
        { value: 'BJ', label: 'West African CFA franc	(Fr)' },
        { value: 'BM', label: 'Bermudian dollar	($)' },
        { value: 'BT', label: 'Bhutanese ngultrum	(Nu.)' },
        { value: 'BO', label: 'Boliviano (BOB)' },
        { value: 'BA', label: 'Bosnia and Herzegovina convertible mark (KM)' },
        { value: 'BW', label: 'Botswana pula (P)' },
        { value: 'BV', label: 'Norwegian Krone (NOK)' },
        { value: 'BR', label: 'Brazilian real	(R$)' },
        { value: 'IO', label: 'United States dollar	($)' },
        { value: 'BN', label: 'Brunei dollar ($)' },
        { value: 'BG', label: 'Bulgarian lev (лв)' },
        { value: 'BF', label: 'West African CFA franc	(Fr)' },
        { value: 'BI', label: 'Burundian franc	(Fr)' },
        { value: 'KH', label: 'Cambodian riel (៛)' },
        { value: 'CM', label: 'Central African CFA franc (Fr)' },
        { value: 'CA', label: 'Canadian dollar ($)' },
        { value: 'CV', label: 'Cape Verdean escudo	(Esc)' },
        { value: 'KY', label: 'Cayman Islands dollar ($)' },
        { value: 'CF', label: 'Central African CFA franc (Fr)' },
        { value: 'TD', label: 'Central African CFA franc (Fr)' },
        { value: 'CL', label: 'Chilean peso	($)' },
        { value: 'CN', label: 'Chinese yuan (¥)' },
        { value: 'CX', label: 'Australian dollar (AUD)' },
        { value: 'CC', label: 'Australian dollar ($)' },
        { value: 'CO', label: 'Colombian peso	($)' },
        { value: 'KM', label: 'Comorian franc	(Fr)' },
        { value: 'CG', label: 'Central African CFA franc (Fr)' },
        { value: 'CD', label: 'Congolese franc (Fr)' },
        { value: 'CK', label: 'Cook Islands dollar ($)' },
        { value: 'CR', label: 'Costa Rican colón (₡)' },
        { value: 'CI', label: 'West African CFA franc	(Fr)' },
        { value: 'HR', label: 'Croatian kuna (kn)' },
        { value: 'CU', label: 'Cuban convertible peso	($)' },
        { value: 'CY', label: 'Euro	(€)' },
        { value: 'CZ', label: 'Czech koruna	(Kč)' },
        { value: 'DK', label: 'Danish krone	(kr)' },
        { value: 'DJ', label: 'Djiboutian franc	(Fr)' },
        { value: 'DM', label: 'Eastern Caribbean dollar	($)' },
        { value: 'DO', label: 'Dominican peso	($)' },
        { value: 'EC', label: 'United States dollar	($)' },
        { value: 'EG', label: 'Egyptian pound (£)' },
        { value: 'SV', label: 'United States dollar	($)' },
        { value: 'GQ', label: 'Equatorial Guinea' },
        { value: 'ER', label: 'Central African CFA franc (Fr)' },
        { value: 'EE', label: 'Euro	(€)' },
        { value: 'ET', label: 'Ethiopian birr	(Br)' },
        { value: 'FK', label: 'Falkland Islands pound	(£)' },
        { value: 'FO', label: 'Faroese króna (kr)' },
        { value: 'FJ', label: 'Fijian dollar ($)' },
        { value: 'FI', label: 'Euro	(€)' },
        { value: 'FR', label: 'Euro	(€)' },
        { value: 'GF', label: 'Euro	(€)' },
        { value: 'PF', label: 'CFP franc (Fr)' },
        { value: 'TF', label: 'Euro	(€)' },
        { value: 'GA', label: 'Central African CFA franc (Fr)' },
        { value: 'GM', label: 'Gambian dalasi (D)' },
        { value: 'GE', label: 'Georgian lari (₾)' },
        { value: 'DE', label: 'Euro	(€)' },
        { value: 'GH', label: 'Ghanaian cedi (₵)' },
        { value: 'GI', label: 'Gibraltar pound (£)' },
        { value: 'GR', label: 'Euro	(€)' },
        { value: 'GL', label: 'Danish krone (kr)' },
        { value: 'GD', label: 'Eastern Caribbean dollar	($)' },
        { value: 'GP', label: 'Euro	(€)' },
        { value: 'GU', label: 'United States dollar	($)' },
        { value: 'GT', label: 'Guatemalan quetzal (Q)' },
        { value: 'GG', label: 'Guernsey pound	(£)' },
        { value: 'GN', label: 'Guinean franc (Fr)' },
        { value: 'GW', label: 'West African CFA franc (Fr)' },
        { value: 'GY', label: 'Guyanese dollar ($)' },
        { value: 'HT', label: 'Haitian gourde	(G)' },
        { value: 'HM', label: 'Australian dollar ($)' },
        { value: 'VA', label: 'Holy See (Vatican City State)' },
        { value: 'HN', label: 'Honduran lempira (L)' },
        { value: 'HK', label: 'Hong Kong dollar	($)' },
        { value: 'HU', label: 'Hungarian forint	(Ft)' },
        { value: 'IS', label: 'Icelandic króna	(kr)' },
        { value: 'IN', label: 'Indian rupee	(₹)' },
        { value: 'ID', label: 'Indonesian rupiah	(Rp)' },
        { value: 'IR', label: 'Iranian rial (﷼)' },
        { value: 'IQ', label: 'Iraqi dinar (ع.د)' },
        { value: 'IE', label: 'Euro	(€)' },
        { value: 'IM', label: 'British pound (£)' },
        { value: 'IL', label: 'Israeli new shekel (₪)' },
        { value: 'IT', label: 'Euro	(€)' },
        { value: 'JM', label: 'Jamaican dollar ($)' },
        { value: 'JP', label: 'Japanese yen	(¥)' },
        { value: 'JE', label: 'Jersey pound	(£)' },
        { value: 'JO', label: 'Jordanian dinar (د.ا)' },
        { value: 'KZ', label: 'Kazakhstani tenge	(₸)' },
        { value: 'KE', label: 'Kenyan shilling	(Sh)' },
        { value: 'KI', label: 'Kiribati dollar ($)' },
        { value: 'KP', label: 'North Korean won	(₩)' },
        { value: 'KR', label: 'South Korean won	(₩)' },
        { value: 'KW', label: 'Kuwaiti dinar (د.ك)' },
        { value: 'KG', label: 'Kyrgyzstani som (с)' },
        { value: 'LA', label: 'Lao People\'s Democratic Republic' },
        { value: 'LV', label: 'Lao kip (₭)' },
        { value: 'LB', label: 'Lebanese pound (ل.ل)' },
        { value: 'LS', label: 'Lesotho loti	(L)' },
        { value: 'LR', label: 'Liberian dollar ($)' },
        { value: 'LY', label: 'Libyan dinar (ل.د)' },
        { value: 'LI', label: 'Swiss franc (Fr)' },
        { value: 'LT', label: 'Euro	(€)' },
        { value: 'LU', label: 'Euro	(€)' },
        { value: 'MO', label: 'Macanese pataca (P)' },
        { value: 'MK', label: 'Macedonian denar	(ден)' },
        { value: 'MG', label: 'Malagasy ariary (Ar)' },
        { value: 'MW', label: 'Malawian kwacha (MK)' },
        { value: 'MY', label: 'Malaysian ringgit (RM)' },
        { value: 'MV', label: 'Maldivian rufiyaa (.ރ)' },
        { value: 'ML', label: 'West African CFA franc	(Fr)' },
        { value: 'MT', label: 'Euro	(€)' },
        { value: 'MH', label: 'United States dollar ($)' },
        { value: 'MQ', label: 'Euro (€)' },
        { value: 'MR', label: 'Mauritanian ouguiya	(UM)' },
        { value: 'MU', label: 'Mauritian rupee (₨)' },
        { value: 'YT', label: 'Euro (€)' },
        { value: 'MX', label: 'Mexican peso	($)' },
        { value: 'FM', label: 'United States dollar ($)' },
        { value: 'MD', label: 'Moldovan leu	(L)' },
        { value: 'MC', label: 'Euro (€)' },
        { value: 'MN', label: 'Mongolian tögrög	(₮)' },
        { value: 'ME', label: 'Euro (€)' },
        { value: 'MS', label: 'Eastern Caribbean dollar	($)' },
        { value: 'MA', label: 'Moroccan dirham (د.م.)' },
        { value: 'MZ', label: 'Mozambican metical	(MT)' },
        { value: 'MM', label: 'Burmese kyat (Ks)' },
        { value: 'NA', label: 'Namibian dollar ($)' },
        { value: 'NR', label: 'Australian dollar ($)' },
        { value: 'NP', label: 'Nepalese rupee (₨)' },
        { value: 'NL', label: 'Euro (€)' },
        { value: 'AN', label: 'Netherlands Antillean guilder (NAƒ)' },
        { value: 'NC', label: 'CFP franc (Fr)' },
        { value: 'NZ', label: 'New Zealand dollar ($)' },
        { value: 'NI', label: 'Nicaraguan córdoba (C$)' },
        { value: 'NE', label: 'West African CFA franc	(Fr)' },
        { value: 'NG', label: 'Nigerian naira	(₦)' },
        { value: 'NU', label: 'New Zealand dollar ($)' },
        { value: 'NF', label: 'Australian dollar ($)' },
        { value: 'MP', label: 'United States dollar ($)' },
        { value: 'NO', label: 'Norwegian krone (kr)' },
        { value: 'OM', label: 'Omani rial (ر.ع.)' },
        { value: 'PK', label: 'Pakistani rupee (₨)' },
        { value: 'PW', label: 'United States dollar ($)' },
        { value: 'PS', label: 'Israeli new shekel (₪)' },
        { value: 'PA', label: 'United States dollar ($)' },
        { value: 'PG', label: 'Papua New Guinean kina (K)' },
        { value: 'PY', label: 'Paraguayan guaraní	(₲)' },
        { value: 'PE', label: 'Peruvian sol (S/.)' },
        { value: 'PH', label: 'Philippine piso (₱)' },
        { value: 'PN', label: 'New Zealand dollar ($)' },
        { value: 'PL', label: 'Polish złoty	(zł)' },
        { value: 'PT', label: 'Euro (€)' },
        { value: 'PR', label: 'United States dollar ($)' },
        { value: 'QA', label: 'Qatari riyal (ر.ق)' },
        { value: 'RE', label: 'Euro (€)' },
        { value: 'RO', label: 'Romanian leu (lei)' },
        { value: 'RU', label: 'Russian ruble (₽)' },
        { value: 'RW', label: 'Rwandan franc (Fr)' },
        { value: 'BL', label: 'Euro (€)' },
        { value: 'SH', label: 'Saint Helena pound	(£)' },
        { value: 'KN', label: 'Eastern Caribbean dollar ($)' },
        { value: 'LC', label: 'Eastern Caribbean dollar ($)' },
        { value: 'MF', label: 'Netherlands Antillean guilder' },
        { value: 'PM', label: 'Euro (€)' },
        { value: 'VC', label: 'Eastern Caribbean dollar ($)' },
        { value: 'WS', label: 'Samoan tālā (T)' },
        { value: 'SM', label: 'Euro (€)' },
        { value: 'ST', label: 'São Tomé and Príncipe dobra (Db)' },
        { value: 'SA', label: 'Saudi riyal (ر.س)' },
        { value: 'SN', label: 'West African CFA franc (Fr)' },
        { value: 'RS', label: 'Serbian dinar (дин.)' },
        { value: 'SC', label: 'Seychellois rupee (₨)' },
        { value: 'SL', label: 'Sierra Leonean leone (Le)' },
        { value: 'SG', label: 'Singapore dollar ($)' },
        { value: 'SK', label: 'Euro (€)' },
        { value: 'SI', label: 'Euro (€)' },
        { value: 'SB', label: 'Solomon Islands dollar ($)' },
        { value: 'SO', label: 'Somali shilling (Sh)' },
        { value: 'ZA', label: 'South African rand (R)' },
        { value: 'GS', label: 'British pound (£)' },
        { value: 'ES', label: 'Euro (€)' },
        { value: 'LK', label: 'Sri Lankan rupee (රු)' },
        { value: 'SD', label: 'Sudanese pound (ج.س.)' },
        { value: 'SR', label: 'Surinamese dollar ($)' },
        { value: 'SJ', label: 'Norwegian krone (NOK)' },
        { value: 'SZ', label: 'Swazi lilangeni (L)' },
        { value: 'SE', label: 'Swedish krona (k)r' },
        { value: 'CH', label: 'Swiss franc (Fr)' },
        { value: 'SY', label: 'Syrian pound (ل.س)' },
        { value: 'TW', label: 'New Taiwan dollar ($)' },
        { value: 'TJ', label: 'Tajikistani somoni (ЅМ)' },
        { value: 'TZ', label: 'Tanzanian shilling (Sh)' },
        { value: 'TH', label: 'Thai baht(฿)' },
        { value: 'TL', label: 'United States dollar ($)' },
        { value: 'TG', label: 'West African CFA franc (Fr)' },
        { value: 'TK', label: '‎New Zealand dollar ($)' },
        { value: 'TO', label: 'Tongan paʻanga (T$)' },
        { value: 'TT', label: 'Trinidad and Tobago dollar ($)' },
        { value: 'TN', label: 'Tunisian dinar (د.ت)' },
        { value: 'TR', label: 'Turkish lira (₺)' },
        { value: 'TM', label: 'Turkmenistan manat (m)' },
        { value: 'TC', label: 'Turks and Caicos Islands' },
        { value: 'TV', label: 'Australian dollar ($)' },
        { value: 'UG', label: 'Ugandan shilling	(Sh)' },
        { value: 'UA', label: 'Ukrainian hryvnia (₴)' },
        { value: 'AE', label: 'United Arab Emirates dirham (د.إ)' },
        { value: 'GB', label: 'British pound (£)' },
        { value: 'US', label: 'United States dollar ($)' },
        { value: 'UM', label: 'United States dollar ($)' },
        { value: 'UY', label: 'Uruguayan peso	($)' },
        {value: 'UZ', label: 'Uzbekistani soʻm (soʻm)' },
        { value: 'VU', label: 'Vanuatu vatu (Vt)' },
        { value: 'VE', label: 'Venezuelan bolívar soberano (Bs.S.)' },
        { value: 'VN', label: 'Vietnamese đồng (₫)' },
        { value: 'VG', label: 'United States dollar ($)' },
        { value: 'VI', label: 'United States dollar ($)' },
        { value: 'WF', label: 'CFP franc (Fr)' },
        { value: 'EH', label: 'Mauritanian ouguiya' },
        { value: 'YE', label: 'Yemeni rial (﷼)' },
        { value: 'ZM', label: 'Zambian kwacha (ZK)' },
        { value: 'ZW', label: 'United States dollar ($)' }
    ];
}