
        //.............................Gulf Cooperation Council...................................

      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Commodity', 'Export Units', 'Export Weight', 'Export Value (1000 SR)', 'ReExport Units', 'ReExport Weight', 'ReExport Value (1000 SR)'],
          ['Camels for sport and beauty contests', 72.022, 8.529, 261.020,3.076 ,801 , 3.770],
          ['MEAT, CONS. BWLS & EXTREM. OF TURKEY/CHICKEN:GALL. DOM.', 0, 12.905, 234.720, 0, 0, 0],
          ['OTHER MILK, SWEETENED', 0, 128.211, 276.560, 0, 1, 4],
          ['YOGURT', 0, 184.504, 881.096, 0, 2 ,128],
	  ['OTHER CHEESE', 0, 92.279, 777.413, 0, 132, 3.425],
	  ['OTHER MIXURES OF JUICES', 0, 287.804, 931.894, 0, 187, 847],
	  ['OTHER AROMATIC HYDROCARBON MIXTURES', 0, 786.630, 1553.124, 0, 25, 94],
	  ['CRUDE PETROLEUM OILS', 0, 10729.505, 14748.741, 0, 0, 0]
	 ]);

        var options = {
                chart: {
                title: ' Gulf Cooperation Council',
            subtitle: ' 2015',
          },
            bars: 'vertical' // Required for Material Bar Charts.   horizontal
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }


//................................Other Arab League Countries..................................

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['Commodity', 'Export Units', 'Export Weight', 'Export Value (1000 SR)', 'ReExport Units', 'ReExport Weight', 'ReExport Value (1000 SR)'],
        ['OTHER CHEESE', 0, 12.561, 163.203, 0, 371, 2.857],
        ['OTHER CORN OIL', 0, 22.477, 155.207, 0, 130, 567],
        ['REFINED SUGAR CRYSTALS', 0, 84.251, 157.077, 0, 46, 94],
        ['SWEAT BISCUITS', 0, 29.584, 142.782, 0, 449, 2.489],
        ['CRISPS (AS POP CORN, CHIPS AND THE LIKE)', 0, 19.119, 158.042, 0, 112, 513]
    ]);

    var options = {
        title: 'Other Arab League Countries',
        subtitle: '2015',
        vAxis: { title: 'value' },
        hAxis: { title: 'Commodity' },
        seriesType: 'bars',
        series: { 5: { type: 'line' } }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

//.............................Islamic not Arabic countrie...............................

google.charts.load('current', { 'packages': ['line'] });
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Commodity');
    data.addColumn('number', 'Export Units');
    data.addColumn('number', 'Export Weight');
    data.addColumn('number', 'Export Value (1000 SR)');
    data.addColumn('number', 'ReExport Units');
    data.addColumn('number', 'ReExport Weight');
    data.addColumn('number', 'ReExport Value (1000 SR)');
    data.addRows([
        ['FRESH DATES', 0, 10.796, 47.576, 0, 0, 0],
        ['XYLOLE', 0, 136.520, 692.591, 0, 0, 0],
        ['CRUDE PETROLEUM OILS', 0, 13782.154, 19094.013, 0, 0, 0],
        ['FULL WHOLE NAPHTHA', 0, 31.956, 60.618, 0, 0, 0]
    ]);


    var options = {
        chart: {
            title: 'Islamic not Arabic countries',
            subtitle: '2015'
        },
        axes: {
            y: {
                0: { side: 'top' }
            }
        }
    };

    var chart = new google.charts.Line(document.getElementById('line_top_x'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}