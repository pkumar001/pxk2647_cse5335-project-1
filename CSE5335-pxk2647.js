var express = require("express");
var app = express();
var path = require('path');

var nuclear_power = [
{country:"Argentina",		capital:"Buenos Aires",		lat:"-34.6033",	lng:"-58.3817",	reactor:"3",	capacity:"1627",	generated:"5258.17",	domestic:"4.0"},
{country:"Armenia",			capital:"Yerevan",			lat:"40.1833",	lng:"44.5167",	reactor:"1",	capacity:"375",		generated:"2265.64",	domestic:"30.7"},
{country:"Belgium",			capital:"City of Brussels",	lat:"50.8500",	lng:"4.3500",	reactor:"7",	capacity:"5927",	generated:"32093.74",	domestic:"47.5"},
{country:"Brazil",			capital:"Brasilia",			lat:"-15.7833",	lng:"-47.8667",	reactor:"2",	capacity:"1884",	generated:"14463.39",	domestic:"2.9"},
{country:"Bulgaria",		capital:"Sofia",			lat:"42.7000",	lng:"23.3333",	reactor:"2",	capacity:"1926",	generated:"15013.99",	domestic:"31.8"},
{country:"Canada",			capital:"Ottawa",			lat:"45.4214",	lng:"-75.6919",	reactor:"19",	capacity:"13500",	generated:"98588.12",	domestic:"16.8"},
{country:"China",			capital:"Beijing",			lat:"39.9167",	lng:"116.3833",	reactor:"30",	capacity:"28310",	generated:"123807.69",	domestic:"2.4"},
{country:"Czech Republic",	capital:"Prague",			lat:"50.0833",	lng:"14.4167",	reactor:"6",	capacity:"3904",	generated:"28636.78",	domestic:"35.8"},
{country:"Finland",			capital:"Helsinki",			lat:"60.1708",	lng:"24.9375",	reactor:"4",	capacity:"2752",	generated:"22645.96",	domestic:"34.6"},
{country:"France",			capital:"Paris",			lat:"48.8567",	lng:"2.3508",	reactor:"58",	capacity:"63130",	generated:"418001.40",	domestic:"76.9"},
{country:"Germany",			capital:"Berlin",			lat:"52.5167",	lng:"13.3833",	reactor:"9",	capacity:"12074",	generated:"91783.70",	domestic:"15.8"},
{country:"Hungary",			capital:"Budapest",			lat:"47.4925",	lng:"19.0514",	reactor:"4",	capacity:"1889",	generated:"14777.73",	domestic:"53.6"},
{country:"India",			capital:"New Delhi",		lat:"28.6139",	lng:"77.2090",	reactor:"21",	capacity:"5780",	generated:"37835.00",	domestic:"3.7"},
{country:"Iran",			capital:"Tehran",			lat:"35.6961",	lng:"51.4231",	reactor:"1",	capacity:"915",		generated:"3723.60",	domestic:"1.5"},
{country:"Japan",			capital:"Tokyo",			lat:"35.6833",	lng:"139.6833",	reactor:"48",	capacity:"42388",	generated:"0.00",		domestic:"0.0"},
{country:"Mexico",			capital:"Mexico City",		lat:"19.0000",	lng:"-99.1333",	reactor:"2",	capacity:"1330",	generated:"9311.60",	domestic:"5.6"},
{country:"Netherlands",		capital:"Amsterdam",		lat:"52.3667",	lng:"4.9000",	reactor:"1",	capacity:"482",		generated:"3873.51",	domestic:"4.0"},
{country:"Pakistan",		capital:"Islamabad",		lat:"33.7167",	lng:"73.0667",	reactor:"3",	capacity:"690",		generated:"4577.53",	domestic:"4.3"},
{country:"Romania",			capital:"Bucharest",		lat:"44.4268",	lng:"26.1025",	reactor:"2",	capacity:"1300",	generated:"10753.68",	domestic:"18.5"},
{country:"Russia",			capital:"Moscow",			lat:"55.7500",	lng:"37.6167",	reactor:"34",	capacity:"24654",	generated:"169064.84",	domestic:"18.6"},
{country:"Slovakia",		capital:"Bratislava",		lat:"48.1439",	lng:"17.1097",	reactor:"4",	capacity:"1814",	generated:"14420.34",	domestic:"56.8"},
{country:"Slovenia",		capital:"Ljubljana",		lat:"46.0556",	lng:"14.5083",	reactor:"1",	capacity:"688",		generated:"6060.82",	domestic:"37.2"},
{country:"South Africa",	capital:"Pretoria",			lat:"-25.7461",	lng:"28.1881",	reactor:"2",	capacity:"1860",	generated:"14762.70",	domestic:"6.2"},
{country:"South Korea",		capital:"Seoul",			lat:"37.5667",	lng:"126.9667",	reactor:"23",	capacity:"20717",	generated:"149199.22",	domestic:"30.4"},
{country:"Spain",			capital:"Madrid",			lat:"40.4000",	lng:"-3.7167",	reactor:"7",	capacity:"7121",	generated:"54860.38",	domestic:"20.4"},
{country:"Sweden",			capital:"Stockholm",		lat:"59.3294",	lng:"18.0686",	reactor:"10",	capacity:"9470",	generated:"62270.05",	domestic:"41.5"},
{country:"Switzerland",		capital:"Bern",				lat:"46.9500",	lng:"7.4500",	reactor:"5",	capacity:"3333",	generated:"26467.90",	domestic:"37.9"},
{country:"Taiwan",			capital:"Taipei",			lat:"25.0333",	lng:"121.6333",	reactor:"6",	capacity:"5032",	generated:"40801.06",	domestic:"18.9"},
{country:"Ukraine",			capital:"Kiev",				lat:"50.4500",	lng:"30.5233",	reactor:"15",	capacity:"13107",	generated:"83122.79",	domestic:"49.4"},
{country:"United Kingdom",	capital:"London",			lat:"51.5072",	lng:"-0.1275",	reactor:"16",	capacity:"9373",	generated:"57918.48",	domestic:"17.2"},
{country:"United States",	capital:"Washington, D.C.",	lat:"38.9047",	lng:"-77.0164",	reactor:"100",	capacity:"99244",	generated:"798616.26",	domestic:"19.5"}
];

app.set('port', (process.env.PORT || 5000))

app.get('/', function(req, res)
{
	res.sendFile(path.join(__dirname + '/default.html'));
});

app.get('/data.json',function(req,res)
{
	res.json(nuclear_power);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});