var wms_layers = [];

var format_Top_5_Party_List_0 = new ol.format.GeoJSON();
var features_Top_5_Party_List_0 = format_Top_5_Party_List_0.readFeatures(json_Top_5_Party_List_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Top_5_Party_List_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Top_5_Party_List_0.addFeatures(features_Top_5_Party_List_0);
var lyr_Top_5_Party_List_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Top_5_Party_List_0, 
                style: style_Top_5_Party_List_0,
                interactive: true,
    title: 'Top_5_Party_List<br />\
    <img src="styles/legend/Top_5_Party_List_0_0.png" /> 6.47 - 11.15<br />\
    <img src="styles/legend/Top_5_Party_List_0_1.png" /> 11.15 - 12.15<br />\
    <img src="styles/legend/Top_5_Party_List_0_2.png" /> 12.15 - 14.37<br />\
    <img src="styles/legend/Top_5_Party_List_0_3.png" /> 14.37 - 17.41<br />\
    <img src="styles/legend/Top_5_Party_List_0_4.png" /> 17.41 - 18.38<br />\
    <img src="styles/legend/Top_5_Party_List_0_5.png" /> 18.38 - 22.33<br />\
    <img src="styles/legend/Top_5_Party_List_0_6.png" /> 22.33 - 26.02<br />\
    <img src="styles/legend/Top_5_Party_List_0_7.png" /> 26.02 - 33.66<br />\
    <img src="styles/legend/Top_5_Party_List_0_8.png" /> 33.66 - 47.67<br />\
    <img src="styles/legend/Top_5_Party_List_0_9.png" /> 47.67 - 81.07<br />'
        });

lyr_Top_5_Party_List_0.setVisible(true);
var layersList = [lyr_Top_5_Party_List_0];
lyr_Top_5_Party_List_0.set('fieldAliases', {'fid': 'fid', 'Provinces': 'Provinces', 'Regions': 'Regions', 'Region Cod': 'Region Cod', 'Country': 'Country', 'Province': 'Province', '1st': '1st', '1st_NVotes': '1st_NVotes', '1st_PVotes': '1st_PVotes', '2nd': '2nd', '2nd_NVotes': '2nd_NVotes', '2nd_PVotes': '2nd_PVotes', '3rd': '3rd', '3rd_NVotes': '3rd_NVotes', '3rd_PVotes': '3rd_PVotes', '4th': '4th', '4th_NVotes': '4th_NVotes', '4th_PVotes': '4th_PVotes', '5th': '5th', '5th_NVotes': '5th_NVotes', '5th_PVotes': '5th_PVotes', });
lyr_Top_5_Party_List_0.set('fieldImages', {'fid': 'Hidden', 'Provinces': 'Hidden', 'Regions': 'Hidden', 'Region Cod': 'Hidden', 'Country': 'Hidden', 'Province': 'TextEdit', '1st': 'TextEdit', '1st_NVotes': 'Range', '1st_PVotes': 'TextEdit', '2nd': 'TextEdit', '2nd_NVotes': 'Range', '2nd_PVotes': 'TextEdit', '3rd': 'TextEdit', '3rd_NVotes': 'Range', '3rd_PVotes': 'TextEdit', '4th': 'TextEdit', '4th_NVotes': 'Range', '4th_PVotes': 'TextEdit', '5th': 'TextEdit', '5th_NVotes': 'Range', '5th_PVotes': 'TextEdit', });
lyr_Top_5_Party_List_0.set('fieldLabels', {'Province': 'no label', '1st': 'no label', '1st_NVotes': 'no label', '1st_PVotes': 'no label', '2nd': 'no label', '2nd_NVotes': 'no label', '2nd_PVotes': 'no label', '3rd': 'no label', '3rd_NVotes': 'no label', '3rd_PVotes': 'no label', '4th': 'no label', '4th_NVotes': 'no label', '4th_PVotes': 'no label', '5th': 'no label', '5th_NVotes': 'no label', '5th_PVotes': 'no label', });
lyr_Top_5_Party_List_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});