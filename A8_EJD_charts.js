// Set a callback to run when the Google Visualization API is loaded.
google.charts.load('current', {'packages':['sankey','corechart', 'bar', 'calendar','annotationchart','geochart']});
google.charts.setOnLoadCallback(drawCharts);
isDarkMode = false;
function getOptions(title) {
    var options = {
        title: title,
        backgroundColor: isDarkMode ? '#2c2c2c' : '#ffffff',
        //titleTextStyle: {color: isDarkMode ? '#ffffff' : '#000000'},
        //legendTextStyle: {color: isDarkMode ? '#ffffff' : '#000000'},
        hAxis: {textStyle: {color: isDarkMode ? '#ffffff' : '#000000'}},
        vAxis: {textStyle: {color: isDarkMode ? '#ffffff' : '#000000'}},
        displayAnnotations: true,
        legend: 'bottom'
    };
    return options;
}

function drawCharts() {
    document.getElementById('modeButton').addEventListener(
        'click',
        function() {
            isDarkMode = !isDarkMode;
            document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
            this.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        }
    );
    drawChartP1();
    drawChartP2();
    drawChartP3();
    drawChartP4();
    drawChartP5();
}

function drawChartP1() {
    var data = new google.visualization.DataTable();
    /*
    data.addColumn('string','Índice');
    data.addColumn('number','2008');
    data.addColumn('number','2010');
    data.addColumn('number','2012');
    data.addColumn('number','2014');
    data.addColumn('number','2016');
    data.addColumn('number','2018');
    data.addRows([
        ['# Personas pobreza',49489496,	52813020, 53349902,	55341556,	53418151, 52425887],
        ['# Personas pobreza extrema', 12328176, 12964690, 11528950,	11442303, 9375581, 9310153]
    ]);
    */
   var data = google.visualization.arrayToDataTable([
        ['Año','# Personas pobreza [millones]','# Personas pobreza extrema [millones]'],
        ['2008',49489496,12328176],
        ['2010',52813020,12964690],
        ['2012',53349902,11528950],
        ['2014',55341556,11442303],
        ['2016',53418151,9375581],
        ['2018',52425887,9310153],
   ]);
    
    var options = getOptions('Personas en pobreza extrema 2008-2018');
    var chart = new google.visualization.BarChart(document.getElementById('p1Chart'));
    
    chart.draw(data, options);
}

function drawChartP2() {
    var data = google.visualization.arrayToDataTable([
        ['Año','% Población pobreza moderada','% Población pobreza extrema'],
        ['2008',33.3,11.0],
        ['2010',34.8,11.3],
        ['2012',35.7,9.8],
        ['2014',36.6,9.5],
        ['2016',35.9,7.6],
        ['2018',34.5,7.4],
    ]);

    var options = getOptions('Pobreza moderada - extrema');
    var chart = new google.visualization.AreaChart(document.getElementById('p2Chart'));

    chart.draw(data, options);
}



function drawChartP3() {
    var data_poverty_states = google.visualization.arrayToDataTable([
        ['Entidad Federativa', '2008', '2010', '2012', '2014', '2016', '2018'],
        ['Aguascalientes',      435.3,  456.8,  467.6,  442.9,  369.7,  351.5],
        ['Baja California',     809.7, 1019.8, 1010.1,  984.9,  789.1,  848.4],
        ['Baja California Sur', 130.5,  203.0,  211.3,  226.2,  175.6,  151.7],
        ['Campeche',            373.1,  425.3,  387.9,  391.0,  405.0,  440.4],
        ['Coahuila',            885.8,  775.9,  799.3,  885.8,  745.9,  691.1],
        ['Colima',              173.4,  230.3,  237.2,  244.9,  248.7,  235.6],
        ['Chiapas',            3682.3, 3866.3, 3782.3, 3961.0, 4114.0, 4174.6],
        ['Chihuahua',          1105.1, 1371.6, 1272.7, 1265.5, 1150.0, 1005.7],
        ['Distrito Federal',   2465.7, 2537.2, 2565.3, 2502.5, 2434.4, 2682.7],
        ['Durango',             791.4,  864.2,  858.7,  761.2,  643.3,  680.0],
        ['Guanajuato',         2403.6, 2703.7, 2525.8, 2683.3, 2489.7, 2587.8],
        ['Guerrero',           2319.6, 2330.0, 2442.9, 2315.4, 2314.7, 2412.2],
        ['Hidalgo',            1443.6, 1477.1, 1465.9, 1547.8, 1478.8, 1311.1],
        ['Jalisco',            2657.1, 2766.7, 3051.0, 2780.2, 2560.6, 2337.6],
        ['México',             6578.2, 6712.1, 7328.7, 8269.9, 8230.2, 7546.5],
        ['Michoacán',          2411.2, 2424.8, 2447.7, 2708.6, 2565.9, 2161.9],
        ['Morelos',             857.6,  782.2,  843.5,  993.7,  965.9, 1013.3],
        ['Nayarit',             444.1,  461.2,  553.5,  488.8,  470.1,  451.0],
        ['Nuevo León',          976.3,  994.4, 1132.9, 1022.7,  737.8,  773.0],
        ['Oaxaca',             2354.4, 2596.3, 2434.6, 2662.7, 2847.3, 2714.7],
        ['Puebla',             3705.6, 3616.3, 3878.1, 3958.8, 3728.2, 3763.7],
        ['Querétaro',           629.1,  767.0,  707.4,  675.7,  635.7,  579.2],
        ['Quintana Roo',        428.1,  471.7,  563.3,  553.0,  471.0,  474.8],
        ['San Luis Potosí',    1304.4, 1375.3, 1354.2, 1338.1, 1267.7, 1229.0],
        ['Sinaloa',             905.6, 1048.6, 1055.6, 1167.1,  929.7,  946.9],
        ['Sonora',              716.9,  905.2,  821.3,  852.1,  831.4,  863.0],
        ['Tabasco',            1188.0, 1291.6, 1149.4, 1169.8, 1228.1, 1320.2],
        ['Tamaulipas',         1097.7, 1301.7, 1315.6, 1330.7, 1156.2, 1287.9],
        ['Tlaxcala',            687.7,  719.0,  711.9,  745.1,  701.8,  645.8],
        ['Veracruz',           3879.0, 4448.0, 4141.8, 4634.2, 5049.5, 5088.6],
        ['Yucatán',             907.0,  958.5,  996.9,  957.9,  901.9,  900.5],
        ['Zacatecas',           742.2,  911.5,  835.5,  819.8,  780.3,  755.2]
    ]);

    var stateChanges = [];
    for (var i = 0; i < data_poverty_states.getNumberOfRows(); i++) {
        var state = data_poverty_states.getValue(i, 0);
        var startValue = data_poverty_states.getValue(i, 1);
        var endValue = data_poverty_states.getValue(i, 6);
        var change = ((endValue - startValue) / startValue) * 100;
        stateChanges.push([state, change]);
    }
    console.log(stateChanges)

    var geoData =  [];
    geoData.push(['State', 'Change']);
    stateChanges.forEach(function(row) {
        geoData.push(row);
    });

    var geoDataTable = google.visualization.arrayToDataTable(geoData);
    var options = {
        //title: 'Cambio porcentual de nivel de pobreza por estado (2008-2018)',
        region: 'MX', // Mexico
        displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: {colors: ['lime', 'red']} // green for decrease, red for increase
    };

    var chart = new google.visualization.GeoChart(document.getElementById('p3Chart'));

    chart.draw(geoDataTable, options);
}

function drawChartP4() {
    var data = google.visualization.arrayToDataTable([
        ['Entidad Federativa', '2008', '2010', '2012', '2014', '2016', '2018'],
        ['Aguascalientes',      435.3,  456.8,  467.6,  442.9,  369.7,  351.5],
        ['Baja California',     809.7, 1019.8, 1010.1,  984.9,  789.1,  848.4],
        ['Baja California Sur', 130.5,  203.0,  211.3,  226.2,  175.6,  151.7],
        ['Campeche',            373.1,  425.3,  387.9,  391.0,  405.0,  440.4],
        ['Coahuila',            885.8,  775.9,  799.3,  885.8,  745.9,  691.1],
        ['Colima',              173.4,  230.3,  237.2,  244.9,  248.7,  235.6],
        ['Chiapas',            3682.3, 3866.3, 3782.3, 3961.0, 4114.0, 4174.6],
        ['Chihuahua',          1105.1, 1371.6, 1272.7, 1265.5, 1150.0, 1005.7],
        ['Distrito Federal',   2465.7, 2537.2, 2565.3, 2502.5, 2434.4, 2682.7],
        ['Durango',             791.4,  864.2,  858.7,  761.2,  643.3,  680.0],
        ['Guanajuato',         2403.6, 2703.7, 2525.8, 2683.3, 2489.7, 2587.8],
        ['Guerrero',           2319.6, 2330.0, 2442.9, 2315.4, 2314.7, 2412.2],
        ['Hidalgo',            1443.6, 1477.1, 1465.9, 1547.8, 1478.8, 1311.1],
        ['Jalisco',            2657.1, 2766.7, 3051.0, 2780.2, 2560.6, 2337.6],
        ['México',             6578.2, 6712.1, 7328.7, 8269.9, 8230.2, 7546.5],
        ['Michoacán',          2411.2, 2424.8, 2447.7, 2708.6, 2565.9, 2161.9],
        ['Morelos',             857.6,  782.2,  843.5,  993.7,  965.9, 1013.3],
        ['Nayarit',             444.1,  461.2,  553.5,  488.8,  470.1,  451.0],
        ['Nuevo León',          976.3,  994.4, 1132.9, 1022.7,  737.8,  773.0],
        ['Oaxaca',             2354.4, 2596.3, 2434.6, 2662.7, 2847.3, 2714.7],
        ['Puebla',             3705.6, 3616.3, 3878.1, 3958.8, 3728.2, 3763.7],
        ['Querétaro',           629.1,  767.0,  707.4,  675.7,  635.7,  579.2],
        ['Quintana Roo',        428.1,  471.7,  563.3,  553.0,  471.0,  474.8],
        ['San Luis Potosí',    1304.4, 1375.3, 1354.2, 1338.1, 1267.7, 1229.0],
        ['Sinaloa',             905.6, 1048.6, 1055.6, 1167.1,  929.7,  946.9],
        ['Sonora',              716.9,  905.2,  821.3,  852.1,  831.4,  863.0],
        ['Tabasco',            1188.0, 1291.6, 1149.4, 1169.8, 1228.1, 1320.2],
        ['Tamaulipas',         1097.7, 1301.7, 1315.6, 1330.7, 1156.2, 1287.9],
        ['Tlaxcala',            687.7,  719.0,  711.9,  745.1,  701.8,  645.8],
        ['Veracruz',           3879.0, 4448.0, 4141.8, 4634.2, 5049.5, 5088.6],
        ['Yucatán',             907.0,  958.5,  996.9,  957.9,  901.9,  900.5],
        ['Zacatecas',           742.2,  911.5,  835.5,  819.8,  780.3,  755.2]
    ]);

    var candleData = [['State', 'Low', 'Open', 'Close', 'High', { role: 'style' }]];
    for (var i = 0; i < data.getNumberOfRows(); i++) {
        var state = data.getValue(i, 0);
        var values = [];
        for (var j = 1; j < data.getNumberOfColumns(); j++) {
            values.push(data.getValue(i, j));
        }
        var low = Math.min.apply(null, values);
        var high = Math.max.apply(null, values);
        var open = values[0];
        var close = values[values.length - 1];
        var color = close >= open ? 'green' : 'red';
        candleData.push([state, low, open, close, high, color]);
    }

    var dataTable = google.visualization.arrayToDataTable(candleData);
    var options = getOptions('Niveles de pobreza por estado (2008-2018)');
    var chart = new google.visualization.CandlestickChart(document.getElementById('p4Chart'));
    chart.draw(dataTable, options);
//    var chart = new google.visualization.PieChart(document.getElementById('p4Chart'));
}

function drawChartP5() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Coahuila', 'Colima', 'Chiapas', 'Chihuahua', 'Ciudad de México', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'],
        ['2008', 435.3, 809.7, 130.5, 373.1, 885.8, 173.4, 3682.3, 1105.1, 2465.7, 791.4, 2403.6, 2319.6, 1443.6, 2657.1, 6578.2, 2411.2, 857.6, 444.1, 976.3, 2354.4, 3705.6, 629.1, 428.1, 1304.4, 905.6, 716.9, 1188.0, 1097.7, 687.7, 3879.0, 907.0, 742.2],
        ['2010', 456.8, 1019.8, 203.0, 425.3, 775.9, 230.3, 3866.3, 1371.6, 2537.2, 864.2, 2703.7, 2330.0, 1477.1, 2766.7, 6712.1, 2424.8, 782.2, 461.2, 994.4, 2596.3, 3616.3, 767.0, 471.7, 1375.3, 1048.6, 905.2, 1291.6, 1301.7, 719.0, 4448.0, 958.5, 911.5],
        ['2012', 467.6, 1010.1, 211.3, 387.9, 799.3, 237.2, 3782.3, 1272.7, 2565.3, 858.7, 2525.8, 2442.9, 1465.9, 3051.0, 7328.7, 2447.7, 843.5, 553.5, 1132.9, 2434.6, 3878.1, 707.4, 563.3, 1354.2, 1055.6, 821.3, 1149.4, 1315.6, 711.9, 4141.8, 996.9, 835.5],
        ['2014', 442.9, 984.9, 226.2, 391.0, 885.8, 244.9, 3961.0, 1265.5, 2502.5, 761.2, 2683.3, 2315.4, 1547.8, 2780.2, 8269.9, 2708.6, 993.7, 488.8, 1022.7, 2662.7, 3958.8, 675.7, 553.0, 1338.1, 1167.1, 852.1, 1169.8, 1330.7, 745.1, 4634.2, 957.9, 819.8],
        ['2016', 369.7, 789.1, 175.6, 405.0, 745.9, 248.7, 4114.0, 1150.0, 2434.4, 643.3, 2489.7, 2314.7, 1478.8, 2560.6, 8230.2, 2565.9, 965.9, 470.1, 737.8, 2847.3, 3728.2, 635.7, 471.0, 1267.7, 929.7, 831.4, 1228.1, 1156.2, 701.8, 5049.5, 901.9, 780.3],
        ['2018', 351.5, 848.4, 151.7, 440.4, 691.1, 235.6, 4174.6, 1005.7, 2682.7, 680.0, 2587.8, 2412.2, 1311.1, 2337.6, 7546.5, 2161.9, 1013.3, 451.0, 773.0, 2714.7, 3763.7, 579.2, 474.8, 1229.0, 946.9, 863.0, 1320.2, 1287.9, 645.8, 5088.6, 900.5, 755.2]
    ]);

    var options = {
        title: 'Niveles de pobreza por estado (2008-2018)',
        curveType: 'function',
        legend: { position: 'bottom' },
        hAxis: { 
            //title: 'Year',
            ticks: ['2008', '2010', '2012', '2014', '2016', '2018']
        },
        vAxis: { title: 'Number of People in Poverty' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('p5Chart'));
    chart.draw(data, options);
}

/*
function drawChartP5() {
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'date', id: 'Date' });
    dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
    dataTable.addRows([
        [new Date(2012, 3, 13), 37032],
        [new Date(2012, 3, 14), 38024],
        [new Date(2012, 3, 15), 38024],
        [new Date(2012, 3, 16), 38108],
        [new Date(2012, 3, 17), 38229],
        // Many rows omitted for brevity.
        [new Date(2013, 9, 4), 38177],
        [new Date(2013, 9, 5), 38705],
        [new Date(2013, 9, 12), 38210],
        [new Date(2013, 9, 13), 38029],
        [new Date(2013, 9, 19), 38823],
        [new Date(2013, 9, 23), 38345],
        [new Date(2013, 9, 24), 38436],
        [new Date(2013, 9, 30), 38447]
    ]);

    var chart = new google.visualization.Calendar(document.getElementById('p5Chart'));
    chart.draw(dataTable, { height: 350 });
}
    */
