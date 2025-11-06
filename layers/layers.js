var wms_layers = [];

var format_ObrasProyectadas_0 = new ol.format.GeoJSON();
var features_ObrasProyectadas_0 = format_ObrasProyectadas_0.readFeatures(json_ObrasProyectadas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObrasProyectadas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObrasProyectadas_0.addFeatures(features_ObrasProyectadas_0);
var lyr_ObrasProyectadas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObrasProyectadas_0, 
                style: style_ObrasProyectadas_0,
                popuplayertitle: 'Obras Proyectadas',
                interactive: true,
                title: '<img src="styles/legend/ObrasProyectadas_0.png" /> Obras Proyectadas'
            });
var format_highway_tertiary_1 = new ol.format.GeoJSON();
var features_highway_tertiary_1 = format_highway_tertiary_1.readFeatures(json_highway_tertiary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_tertiary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_tertiary_1.addFeatures(features_highway_tertiary_1);
var lyr_highway_tertiary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_tertiary_1, 
                style: style_highway_tertiary_1,
                popuplayertitle: 'highway_tertiary',
                interactive: true,
                title: '<img src="styles/legend/highway_tertiary_1.png" /> highway_tertiary'
            });
var format_highway_secondary_2 = new ol.format.GeoJSON();
var features_highway_secondary_2 = format_highway_secondary_2.readFeatures(json_highway_secondary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_secondary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_secondary_2.addFeatures(features_highway_secondary_2);
var lyr_highway_secondary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_secondary_2, 
                style: style_highway_secondary_2,
                popuplayertitle: 'highway_secondary',
                interactive: true,
                title: '<img src="styles/legend/highway_secondary_2.png" /> highway_secondary'
            });
var group_Otros = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Otros'});

lyr_ObrasProyectadas_0.setVisible(true);lyr_highway_tertiary_1.setVisible(true);lyr_highway_secondary_2.setVisible(true);
var layersList = [lyr_ObrasProyectadas_0,lyr_highway_tertiary_1,lyr_highway_secondary_2];
lyr_ObrasProyectadas_0.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_highway_tertiary_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'placement': 'placement', 'turn_lanes': 'turn_lanes', 'maxspeed_b': 'maxspeed_b', 'cycleway_l': 'cycleway_l', 'historic': 'historic', 'abutters': 'abutters', 'turn_lan_1': 'turn_lan_1', 'access': 'access', 'maxspeed_l': 'maxspeed_l', 'bus_lanes': 'bus_lanes', 'name_right': 'name_right', 'name_left': 'name_left', 'alt_name': 'alt_name', 'cycleway_r': 'cycleway_r', 'turn_lan_2': 'turn_lan_2', 'boundary': 'boundary', 'admin_leve': 'admin_leve', 'maxheight': 'maxheight', 'destinatio': 'destinatio', 'oneway_con': 'oneway_con', 'sidewalk_r': 'sidewalk_r', 'sidewalk_l': 'sidewalk_l', 'foot': 'foot', 'tunnel': 'tunnel', 'maxspeed_t': 'maxspeed_t', 'vehicle_co': 'vehicle_co', 'old_name': 'old_name', 'hgv_condit': 'hgv_condit', 'hgv': 'hgv', 'maxspeed_f': 'maxspeed_f', 'layer': 'layer', 'bridge': 'bridge', 'sidewalk': 'sidewalk', 'lanes_forw': 'lanes_forw', 'lanes_fo_1': 'lanes_fo_1', 'lanes_back': 'lanes_back', 'lanes_ba_1': 'lanes_ba_1', 'source_max': 'source_max', 'width': 'width', 'surface': 'surface', 'oneway': 'oneway', 'name': 'name', 'maxspeed': 'maxspeed', 'lit': 'lit', 'lanes': 'lanes', });
lyr_highway_secondary_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'hgv': 'hgv', 'maxspeed_b': 'maxspeed_b', 'maxspeed_c': 'maxspeed_c', 'turn_lanes': 'turn_lanes', 'hgv_condit': 'hgv_condit', 'oneway_hgv': 'oneway_hgv', 'parking_bo': 'parking_bo', 'oneway_bic': 'oneway_bic', 'cycleway_r': 'cycleway_r', 'cycleway_1': 'cycleway_1', 'maxheight': 'maxheight', 'wikipedia': 'wikipedia', 'destinatio': 'destinatio', 'turn_lan_1': 'turn_lan_1', 'lanes_forw': 'lanes_forw', 'lanes_fo_1': 'lanes_fo_1', 'lanes_back': 'lanes_back', 'lanes_ba_1': 'lanes_ba_1', 'width': 'width', 'name_alt': 'name_alt', 'cycleway': 'cycleway', 'name_right': 'name_right', 'name_left': 'name_left', 'access_con': 'access_con', 'access': 'access', 'destinat_1': 'destinat_1', 'placement': 'placement', 'foot': 'foot', 'turn_lan_2': 'turn_lan_2', 'oneway_con': 'oneway_con', 'source_nam': 'source_nam', 'maxspeed_t': 'maxspeed_t', 'alt_name': 'alt_name', 'old_name': 'old_name', 'bridge': 'bridge', 'vehicle_co': 'vehicle_co', 'boundary': 'boundary', 'admin_leve': 'admin_leve', 'source_max': 'source_max', 'sidewalk_r': 'sidewalk_r', 'sidewalk_l': 'sidewalk_l', 'tunnel': 'tunnel', 'layer': 'layer', 'sidewalk': 'sidewalk', 'surface': 'surface', 'oneway': 'oneway', 'name': 'name', 'maxspeed': 'maxspeed', 'lit': 'lit', 'lanes': 'lanes', });
lyr_ObrasProyectadas_0.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_highway_tertiary_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'placement': '', 'turn_lanes': '', 'maxspeed_b': '', 'cycleway_l': '', 'historic': '', 'abutters': '', 'turn_lan_1': '', 'access': '', 'maxspeed_l': '', 'bus_lanes': '', 'name_right': '', 'name_left': '', 'alt_name': '', 'cycleway_r': '', 'turn_lan_2': '', 'boundary': '', 'admin_leve': '', 'maxheight': '', 'destinatio': '', 'oneway_con': '', 'sidewalk_r': '', 'sidewalk_l': '', 'foot': '', 'tunnel': '', 'maxspeed_t': '', 'vehicle_co': '', 'old_name': '', 'hgv_condit': '', 'hgv': '', 'maxspeed_f': '', 'layer': '', 'bridge': '', 'sidewalk': '', 'lanes_forw': '', 'lanes_fo_1': '', 'lanes_back': '', 'lanes_ba_1': '', 'source_max': '', 'width': '', 'surface': '', 'oneway': '', 'name': '', 'maxspeed': '', 'lit': '', 'lanes': '', });
lyr_highway_secondary_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'hgv': '', 'maxspeed_b': '', 'maxspeed_c': '', 'turn_lanes': '', 'hgv_condit': '', 'oneway_hgv': '', 'parking_bo': '', 'oneway_bic': '', 'cycleway_r': '', 'cycleway_1': '', 'maxheight': '', 'wikipedia': '', 'destinatio': '', 'turn_lan_1': '', 'lanes_forw': '', 'lanes_fo_1': '', 'lanes_back': '', 'lanes_ba_1': '', 'width': '', 'name_alt': '', 'cycleway': '', 'name_right': '', 'name_left': '', 'access_con': '', 'access': '', 'destinat_1': '', 'placement': '', 'foot': '', 'turn_lan_2': '', 'oneway_con': '', 'source_nam': '', 'maxspeed_t': '', 'alt_name': '', 'old_name': '', 'bridge': '', 'vehicle_co': '', 'boundary': '', 'admin_leve': '', 'source_max': '', 'sidewalk_r': '', 'sidewalk_l': '', 'tunnel': '', 'layer': '', 'sidewalk': '', 'surface': '', 'oneway': '', 'name': '', 'maxspeed': '', 'lit': '', 'lanes': '', });
lyr_ObrasProyectadas_0.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_highway_tertiary_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'placement': 'no label', 'turn_lanes': 'no label', 'maxspeed_b': 'no label', 'cycleway_l': 'no label', 'historic': 'no label', 'abutters': 'no label', 'turn_lan_1': 'no label', 'access': 'no label', 'maxspeed_l': 'no label', 'bus_lanes': 'no label', 'name_right': 'no label', 'name_left': 'no label', 'alt_name': 'no label', 'cycleway_r': 'no label', 'turn_lan_2': 'no label', 'boundary': 'no label', 'admin_leve': 'no label', 'maxheight': 'no label', 'destinatio': 'no label', 'oneway_con': 'no label', 'sidewalk_r': 'no label', 'sidewalk_l': 'no label', 'foot': 'no label', 'tunnel': 'no label', 'maxspeed_t': 'no label', 'vehicle_co': 'no label', 'old_name': 'no label', 'hgv_condit': 'no label', 'hgv': 'no label', 'maxspeed_f': 'no label', 'layer': 'no label', 'bridge': 'no label', 'sidewalk': 'no label', 'lanes_forw': 'no label', 'lanes_fo_1': 'no label', 'lanes_back': 'no label', 'lanes_ba_1': 'no label', 'source_max': 'no label', 'width': 'no label', 'surface': 'no label', 'oneway': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lit': 'no label', 'lanes': 'no label', });
lyr_highway_secondary_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'hgv': 'no label', 'maxspeed_b': 'no label', 'maxspeed_c': 'no label', 'turn_lanes': 'no label', 'hgv_condit': 'no label', 'oneway_hgv': 'no label', 'parking_bo': 'no label', 'oneway_bic': 'no label', 'cycleway_r': 'no label', 'cycleway_1': 'no label', 'maxheight': 'no label', 'wikipedia': 'no label', 'destinatio': 'no label', 'turn_lan_1': 'no label', 'lanes_forw': 'no label', 'lanes_fo_1': 'no label', 'lanes_back': 'no label', 'lanes_ba_1': 'no label', 'width': 'no label', 'name_alt': 'no label', 'cycleway': 'no label', 'name_right': 'no label', 'name_left': 'no label', 'access_con': 'no label', 'access': 'no label', 'destinat_1': 'no label', 'placement': 'no label', 'foot': 'no label', 'turn_lan_2': 'no label', 'oneway_con': 'no label', 'source_nam': 'no label', 'maxspeed_t': 'no label', 'alt_name': 'no label', 'old_name': 'no label', 'bridge': 'no label', 'vehicle_co': 'no label', 'boundary': 'no label', 'admin_leve': 'no label', 'source_max': 'no label', 'sidewalk_r': 'no label', 'sidewalk_l': 'no label', 'tunnel': 'no label', 'layer': 'no label', 'sidewalk': 'no label', 'surface': 'no label', 'oneway': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lit': 'no label', 'lanes': 'no label', });
lyr_highway_secondary_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});