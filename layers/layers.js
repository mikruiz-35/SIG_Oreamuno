var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 0.864000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Zonasdepotencialparques_1 = new ol.format.GeoJSON();
var features_Zonasdepotencialparques_1 = format_Zonasdepotencialparques_1.readFeatures(json_Zonasdepotencialparques_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonasdepotencialparques_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonasdepotencialparques_1.addFeatures(features_Zonasdepotencialparques_1);
var lyr_Zonasdepotencialparques_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonasdepotencialparques_1, 
                style: style_Zonasdepotencialparques_1,
                popuplayertitle: 'Zonas de potencial parques',
                interactive: true,
                title: '<img src="styles/legend/Zonasdepotencialparques_1.png" /> Zonas de potencial parques'
            });
var format_Zonasdepotencialurbano_2 = new ol.format.GeoJSON();
var features_Zonasdepotencialurbano_2 = format_Zonasdepotencialurbano_2.readFeatures(json_Zonasdepotencialurbano_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonasdepotencialurbano_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonasdepotencialurbano_2.addFeatures(features_Zonasdepotencialurbano_2);
var lyr_Zonasdepotencialurbano_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonasdepotencialurbano_2, 
                style: style_Zonasdepotencialurbano_2,
                popuplayertitle: 'Zonas de potencial urbano',
                interactive: true,
                title: '<img src="styles/legend/Zonasdepotencialurbano_2.png" /> Zonas de potencial urbano'
            });
var format_Zonasdevalorpatrimonial_3 = new ol.format.GeoJSON();
var features_Zonasdevalorpatrimonial_3 = format_Zonasdevalorpatrimonial_3.readFeatures(json_Zonasdevalorpatrimonial_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonasdevalorpatrimonial_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonasdevalorpatrimonial_3.addFeatures(features_Zonasdevalorpatrimonial_3);
var lyr_Zonasdevalorpatrimonial_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonasdevalorpatrimonial_3, 
                style: style_Zonasdevalorpatrimonial_3,
                popuplayertitle: 'Zonas de valor patrimonial',
                interactive: true,
                title: '<img src="styles/legend/Zonasdevalorpatrimonial_3.png" /> Zonas de valor patrimonial'
            });
var format_AnilloGAM_4 = new ol.format.GeoJSON();
var features_AnilloGAM_4 = format_AnilloGAM_4.readFeatures(json_AnilloGAM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnilloGAM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnilloGAM_4.addFeatures(features_AnilloGAM_4);
var lyr_AnilloGAM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnilloGAM_4, 
                style: style_AnilloGAM_4,
                popuplayertitle: 'Anillo GAM',
                interactive: true,
                title: '<img src="styles/legend/AnilloGAM_4.png" /> Anillo GAM'
            });
var format_Inundaciones_Oreamuno_5 = new ol.format.GeoJSON();
var features_Inundaciones_Oreamuno_5 = format_Inundaciones_Oreamuno_5.readFeatures(json_Inundaciones_Oreamuno_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inundaciones_Oreamuno_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inundaciones_Oreamuno_5.addFeatures(features_Inundaciones_Oreamuno_5);
var lyr_Inundaciones_Oreamuno_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inundaciones_Oreamuno_5, 
                style: style_Inundaciones_Oreamuno_5,
                popuplayertitle: 'Inundaciones_Oreamuno',
                interactive: true,
                title: '<img src="styles/legend/Inundaciones_Oreamuno_5.png" /> Inundaciones_Oreamuno'
            });
var format_Distritos_Oreamuno_6 = new ol.format.GeoJSON();
var features_Distritos_Oreamuno_6 = format_Distritos_Oreamuno_6.readFeatures(json_Distritos_Oreamuno_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritos_Oreamuno_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritos_Oreamuno_6.addFeatures(features_Distritos_Oreamuno_6);
var lyr_Distritos_Oreamuno_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distritos_Oreamuno_6, 
                style: style_Distritos_Oreamuno_6,
                popuplayertitle: 'Distritos_Oreamuno',
                interactive: true,
    title: 'Distritos_Oreamuno<br />\
    <img src="styles/legend/Distritos_Oreamuno_6_0.png" /> CIPRESES<br />\
    <img src="styles/legend/Distritos_Oreamuno_6_1.png" /> COT<br />\
    <img src="styles/legend/Distritos_Oreamuno_6_2.png" /> POTRERO CERRADO<br />\
    <img src="styles/legend/Distritos_Oreamuno_6_3.png" /> SAN RAFAEL<br />\
    <img src="styles/legend/Distritos_Oreamuno_6_4.png" /> SANTA ROSA<br />' });
var format_Vialidad_Oreamuno_7 = new ol.format.GeoJSON();
var features_Vialidad_Oreamuno_7 = format_Vialidad_Oreamuno_7.readFeatures(json_Vialidad_Oreamuno_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vialidad_Oreamuno_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vialidad_Oreamuno_7.addFeatures(features_Vialidad_Oreamuno_7);
var lyr_Vialidad_Oreamuno_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vialidad_Oreamuno_7, 
                style: style_Vialidad_Oreamuno_7,
                popuplayertitle: 'Vialidad_Oreamuno',
                interactive: true,
    title: 'Vialidad_Oreamuno<br />\
    <img src="styles/legend/Vialidad_Oreamuno_7_0.png" /> PRIMARIA<br />\
    <img src="styles/legend/Vialidad_Oreamuno_7_1.png" /> SECUNDARIA<br />\
    <img src="styles/legend/Vialidad_Oreamuno_7_2.png" /> TERCIARIA<br />\
    <img src="styles/legend/Vialidad_Oreamuno_7_3.png" /> URBANA<br />\
    <img src="styles/legend/Vialidad_Oreamuno_7_4.png" /> VECINAL<br />' });
var format_ASADAS_8 = new ol.format.GeoJSON();
var features_ASADAS_8 = format_ASADAS_8.readFeatures(json_ASADAS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASADAS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASADAS_8.addFeatures(features_ASADAS_8);
var lyr_ASADAS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASADAS_8, 
                style: style_ASADAS_8,
                popuplayertitle: 'ASADAS',
                interactive: true,
                title: '<img src="styles/legend/ASADAS_8.png" /> ASADAS'
            });
var format_Rios_Oreamuno_9 = new ol.format.GeoJSON();
var features_Rios_Oreamuno_9 = format_Rios_Oreamuno_9.readFeatures(json_Rios_Oreamuno_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_Oreamuno_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_Oreamuno_9.addFeatures(features_Rios_Oreamuno_9);
var lyr_Rios_Oreamuno_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_Oreamuno_9, 
                style: style_Rios_Oreamuno_9,
                popuplayertitle: 'Rios_Oreamuno',
                interactive: true,
                title: '<img src="styles/legend/Rios_Oreamuno_9.png" /> Rios_Oreamuno'
            });
var format_Rutas_Autobus_Oreamuno_10 = new ol.format.GeoJSON();
var features_Rutas_Autobus_Oreamuno_10 = format_Rutas_Autobus_Oreamuno_10.readFeatures(json_Rutas_Autobus_Oreamuno_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutas_Autobus_Oreamuno_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_Autobus_Oreamuno_10.addFeatures(features_Rutas_Autobus_Oreamuno_10);
var lyr_Rutas_Autobus_Oreamuno_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rutas_Autobus_Oreamuno_10, 
                style: style_Rutas_Autobus_Oreamuno_10,
                popuplayertitle: 'Rutas_Autobus_Oreamuno',
                interactive: true,
                title: '<img src="styles/legend/Rutas_Autobus_Oreamuno_10.png" /> Rutas_Autobus_Oreamuno'
            });
var format_Fallas_Oreamuno_11 = new ol.format.GeoJSON();
var features_Fallas_Oreamuno_11 = format_Fallas_Oreamuno_11.readFeatures(json_Fallas_Oreamuno_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fallas_Oreamuno_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fallas_Oreamuno_11.addFeatures(features_Fallas_Oreamuno_11);
var lyr_Fallas_Oreamuno_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fallas_Oreamuno_11, 
                style: style_Fallas_Oreamuno_11,
                popuplayertitle: 'Fallas_Oreamuno',
                interactive: true,
                title: '<img src="styles/legend/Fallas_Oreamuno_11.png" /> Fallas_Oreamuno'
            });
var format_Coronas_deslizamiento_Oreamuno_12 = new ol.format.GeoJSON();
var features_Coronas_deslizamiento_Oreamuno_12 = format_Coronas_deslizamiento_Oreamuno_12.readFeatures(json_Coronas_deslizamiento_Oreamuno_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coronas_deslizamiento_Oreamuno_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coronas_deslizamiento_Oreamuno_12.addFeatures(features_Coronas_deslizamiento_Oreamuno_12);
var lyr_Coronas_deslizamiento_Oreamuno_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coronas_deslizamiento_Oreamuno_12, 
                style: style_Coronas_deslizamiento_Oreamuno_12,
                popuplayertitle: 'Coronas_deslizamiento_Oreamuno',
                interactive: true,
                title: '<img src="styles/legend/Coronas_deslizamiento_Oreamuno_12.png" /> Coronas_deslizamiento_Oreamuno'
            });
var format_PropuestaRedVial_13 = new ol.format.GeoJSON();
var features_PropuestaRedVial_13 = format_PropuestaRedVial_13.readFeatures(json_PropuestaRedVial_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PropuestaRedVial_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PropuestaRedVial_13.addFeatures(features_PropuestaRedVial_13);
var lyr_PropuestaRedVial_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PropuestaRedVial_13, 
                style: style_PropuestaRedVial_13,
                popuplayertitle: 'Propuesta Red Vial',
                interactive: true,
                title: '<img src="styles/legend/PropuestaRedVial_13.png" /> Propuesta Red Vial'
            });
var format_Propuesta_Ciclovia_14 = new ol.format.GeoJSON();
var features_Propuesta_Ciclovia_14 = format_Propuesta_Ciclovia_14.readFeatures(json_Propuesta_Ciclovia_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Propuesta_Ciclovia_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Propuesta_Ciclovia_14.addFeatures(features_Propuesta_Ciclovia_14);
var lyr_Propuesta_Ciclovia_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Propuesta_Ciclovia_14, 
                style: style_Propuesta_Ciclovia_14,
                popuplayertitle: 'Propuesta_Ciclovia',
                interactive: true,
                title: '<img src="styles/legend/Propuesta_Ciclovia_14.png" /> Propuesta_Ciclovia'
            });
var lyr_Pendientes_015_Oreamuno_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pendientes_0-15_Oreamuno<br />\
    <img src="styles/legend/Pendientes_015_Oreamuno_15_0.png" /> 0-15% Zona Urbanizable<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Pendientes_015_Oreamuno_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9344931.759403, 1101691.454276, -9328631.608023, 1135537.888218]
        })
    });
var lyr_DEMOreamuno_16 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEMOreamuno<br />\
    <img src="styles/legend/DEMOreamuno_16_0.png" /> 473.023<br />\
    <img src="styles/legend/DEMOreamuno_16_1.png" /> 3403.63<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEMOreamuno_16.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9344931.759403, 1101691.454276, -9328631.608023, 1135537.888218]
        })
    });
var lyr_PendientesReclasisificasZH_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PendientesReclasisificasZH<br />\
    <img src="styles/legend/PendientesReclasisificasZH_17_0.png" /> 0-2% Plano<br />\
    <img src="styles/legend/PendientesReclasisificasZH_17_1.png" /> 2-5% Ligeramente Ondulado<br />\
    <img src="styles/legend/PendientesReclasisificasZH_17_2.png" /> 5-15% Ondulado<br />\
    <img src="styles/legend/PendientesReclasisificasZH_17_3.png" /> 15-30% Fuertemente Ondulada<br />\
    <img src="styles/legend/PendientesReclasisificasZH_17_4.png" /> 30-50% Escarpada<br />\
    <img src="styles/legend/PendientesReclasisificasZH_17_5.png" /> 50-75% Fuertemente Escarpada<br />\
    <img src="styles/legend/PendientesReclasisificasZH_17_6.png" /> >75% Montañosa <br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PendientesReclasisificasZH_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9344931.759403, 1101691.454276, -9328631.608023, 1135537.888218]
        })
    });
var format_CapcidadSuelo_Oreamuno_18 = new ol.format.GeoJSON();
var features_CapcidadSuelo_Oreamuno_18 = format_CapcidadSuelo_Oreamuno_18.readFeatures(json_CapcidadSuelo_Oreamuno_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapcidadSuelo_Oreamuno_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapcidadSuelo_Oreamuno_18.addFeatures(features_CapcidadSuelo_Oreamuno_18);
var lyr_CapcidadSuelo_Oreamuno_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapcidadSuelo_Oreamuno_18, 
                style: style_CapcidadSuelo_Oreamuno_18,
                popuplayertitle: 'CapcidadSuelo_Oreamuno',
                interactive: false,
    title: 'CapcidadSuelo_Oreamuno<br />\
    <img src="styles/legend/CapcidadSuelo_Oreamuno_18_0.png" /> Agropecuario con limitaciones Fuertes<br />\
    <img src="styles/legend/CapcidadSuelo_Oreamuno_18_1.png" /> Cultivos Permanentes <br />\
    <img src="styles/legend/CapcidadSuelo_Oreamuno_18_2.png" /> Agropecuario con limitaciones Moderadas<br />' });
var format_Shape_Oreamuno_19 = new ol.format.GeoJSON();
var features_Shape_Oreamuno_19 = format_Shape_Oreamuno_19.readFeatures(json_Shape_Oreamuno_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shape_Oreamuno_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shape_Oreamuno_19.addFeatures(features_Shape_Oreamuno_19);
var lyr_Shape_Oreamuno_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shape_Oreamuno_19, 
                style: style_Shape_Oreamuno_19,
                popuplayertitle: 'Shape_Oreamuno',
                interactive: true,
                title: '<img src="styles/legend/Shape_Oreamuno_19.png" /> Shape_Oreamuno'
            });
var format_Zona_Agropecuaria_20 = new ol.format.GeoJSON();
var features_Zona_Agropecuaria_20 = format_Zona_Agropecuaria_20.readFeatures(json_Zona_Agropecuaria_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_Agropecuaria_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_Agropecuaria_20.addFeatures(features_Zona_Agropecuaria_20);
var lyr_Zona_Agropecuaria_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_Agropecuaria_20, 
                style: style_Zona_Agropecuaria_20,
                popuplayertitle: 'Zona_Agropecuaria',
                interactive: true,
                title: '<img src="styles/legend/Zona_Agropecuaria_20.png" /> Zona_Agropecuaria'
            });
var format_Zona_Agricola_21 = new ol.format.GeoJSON();
var features_Zona_Agricola_21 = format_Zona_Agricola_21.readFeatures(json_Zona_Agricola_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_Agricola_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_Agricola_21.addFeatures(features_Zona_Agricola_21);
var lyr_Zona_Agricola_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_Agricola_21, 
                style: style_Zona_Agricola_21,
                popuplayertitle: 'Zona_Agricola',
                interactive: true,
                title: '<img src="styles/legend/Zona_Agricola_21.png" /> Zona_Agricola'
            });
var format_Uso_Residencial_22 = new ol.format.GeoJSON();
var features_Uso_Residencial_22 = format_Uso_Residencial_22.readFeatures(json_Uso_Residencial_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uso_Residencial_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uso_Residencial_22.addFeatures(features_Uso_Residencial_22);
var lyr_Uso_Residencial_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uso_Residencial_22, 
                style: style_Uso_Residencial_22,
                popuplayertitle: 'Uso_Residencial',
                interactive: true,
                title: '<img src="styles/legend/Uso_Residencial_22.png" /> Uso_Residencial'
            });
var format_Uso_Mixto_23 = new ol.format.GeoJSON();
var features_Uso_Mixto_23 = format_Uso_Mixto_23.readFeatures(json_Uso_Mixto_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uso_Mixto_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uso_Mixto_23.addFeatures(features_Uso_Mixto_23);
var lyr_Uso_Mixto_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uso_Mixto_23, 
                style: style_Uso_Mixto_23,
                popuplayertitle: 'Uso_Mixto',
                interactive: true,
                title: '<img src="styles/legend/Uso_Mixto_23.png" /> Uso_Mixto'
            });
var format_Uso_Comercial_24 = new ol.format.GeoJSON();
var features_Uso_Comercial_24 = format_Uso_Comercial_24.readFeatures(json_Uso_Comercial_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uso_Comercial_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uso_Comercial_24.addFeatures(features_Uso_Comercial_24);
var lyr_Uso_Comercial_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uso_Comercial_24, 
                style: style_Uso_Comercial_24,
                popuplayertitle: 'Uso_Comercial',
                interactive: true,
                title: '<img src="styles/legend/Uso_Comercial_24.png" /> Uso_Comercial'
            });
var format_Publico_Institucional_25 = new ol.format.GeoJSON();
var features_Publico_Institucional_25 = format_Publico_Institucional_25.readFeatures(json_Publico_Institucional_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Publico_Institucional_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Publico_Institucional_25.addFeatures(features_Publico_Institucional_25);
var lyr_Publico_Institucional_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Publico_Institucional_25, 
                style: style_Publico_Institucional_25,
                popuplayertitle: 'Publico_Institucional',
                interactive: true,
                title: '<img src="styles/legend/Publico_Institucional_25.png" /> Publico_Institucional'
            });
var format_Zona_Industrial_26 = new ol.format.GeoJSON();
var features_Zona_Industrial_26 = format_Zona_Industrial_26.readFeatures(json_Zona_Industrial_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_Industrial_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_Industrial_26.addFeatures(features_Zona_Industrial_26);
var lyr_Zona_Industrial_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_Industrial_26, 
                style: style_Zona_Industrial_26,
                popuplayertitle: 'Zona_Industrial',
                interactive: true,
                title: '<img src="styles/legend/Zona_Industrial_26.png" /> Zona_Industrial'
            });
var format_Crecimiento_Futuro_27 = new ol.format.GeoJSON();
var features_Crecimiento_Futuro_27 = format_Crecimiento_Futuro_27.readFeatures(json_Crecimiento_Futuro_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crecimiento_Futuro_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crecimiento_Futuro_27.addFeatures(features_Crecimiento_Futuro_27);
var lyr_Crecimiento_Futuro_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Crecimiento_Futuro_27, 
                style: style_Crecimiento_Futuro_27,
                popuplayertitle: 'Crecimiento_Futuro',
                interactive: true,
                title: '<img src="styles/legend/Crecimiento_Futuro_27.png" /> Crecimiento_Futuro'
            });
var format_Centros_de_poblacion_28 = new ol.format.GeoJSON();
var features_Centros_de_poblacion_28 = format_Centros_de_poblacion_28.readFeatures(json_Centros_de_poblacion_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centros_de_poblacion_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centros_de_poblacion_28.addFeatures(features_Centros_de_poblacion_28);
var lyr_Centros_de_poblacion_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centros_de_poblacion_28, 
                style: style_Centros_de_poblacion_28,
                popuplayertitle: 'Centros_de_poblacion',
                interactive: true,
                title: '<img src="styles/legend/Centros_de_poblacion_28.png" /> Centros_de_poblacion'
            });
var format_AreasSilvestresOreamuno_29 = new ol.format.GeoJSON();
var features_AreasSilvestresOreamuno_29 = format_AreasSilvestresOreamuno_29.readFeatures(json_AreasSilvestresOreamuno_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreasSilvestresOreamuno_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasSilvestresOreamuno_29.addFeatures(features_AreasSilvestresOreamuno_29);
var lyr_AreasSilvestresOreamuno_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreasSilvestresOreamuno_29, 
                style: style_AreasSilvestresOreamuno_29,
                popuplayertitle: 'AreasSilvestresOreamuno',
                interactive: true,
                title: '<img src="styles/legend/AreasSilvestresOreamuno_29.png" /> AreasSilvestresOreamuno'
            });
var format_Zona_amortiguamiento_30 = new ol.format.GeoJSON();
var features_Zona_amortiguamiento_30 = format_Zona_amortiguamiento_30.readFeatures(json_Zona_amortiguamiento_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_amortiguamiento_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_amortiguamiento_30.addFeatures(features_Zona_amortiguamiento_30);
var lyr_Zona_amortiguamiento_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_amortiguamiento_30, 
                style: style_Zona_amortiguamiento_30,
                popuplayertitle: 'Zona_amortiguamiento',
                interactive: true,
                title: '<img src="styles/legend/Zona_amortiguamiento_30.png" /> Zona_amortiguamiento'
            });
var format_Zona_Proteccion_31 = new ol.format.GeoJSON();
var features_Zona_Proteccion_31 = format_Zona_Proteccion_31.readFeatures(json_Zona_Proteccion_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_Proteccion_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_Proteccion_31.addFeatures(features_Zona_Proteccion_31);
var lyr_Zona_Proteccion_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_Proteccion_31, 
                style: style_Zona_Proteccion_31,
                popuplayertitle: 'Zona_Proteccion',
                interactive: true,
                title: '<img src="styles/legend/Zona_Proteccion_31.png" /> Zona_Proteccion'
            });
var format_ZonaUrbana_32 = new ol.format.GeoJSON();
var features_ZonaUrbana_32 = format_ZonaUrbana_32.readFeatures(json_ZonaUrbana_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaUrbana_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaUrbana_32.addFeatures(features_ZonaUrbana_32);
var lyr_ZonaUrbana_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaUrbana_32, 
                style: style_ZonaUrbana_32,
                popuplayertitle: 'Zona Urbana',
                interactive: true,
                title: '<img src="styles/legend/ZonaUrbana_32.png" /> Zona Urbana'
            });
var group_Zonificacin = new ol.layer.Group({
                                layers: [lyr_CapcidadSuelo_Oreamuno_18,lyr_Shape_Oreamuno_19,lyr_Zona_Agropecuaria_20,lyr_Zona_Agricola_21,lyr_Uso_Residencial_22,lyr_Uso_Mixto_23,lyr_Uso_Comercial_24,lyr_Publico_Institucional_25,lyr_Zona_Industrial_26,lyr_Crecimiento_Futuro_27,lyr_Centros_de_poblacion_28,lyr_AreasSilvestresOreamuno_29,lyr_Zona_amortiguamiento_30,lyr_Zona_Proteccion_31,lyr_ZonaUrbana_32,],
                                fold: 'close',
                                title: 'Zonificación'});
var group_CapasRaster = new ol.layer.Group({
                                layers: [lyr_Pendientes_015_Oreamuno_15,lyr_DEMOreamuno_16,lyr_PendientesReclasisificasZH_17,],
                                fold: 'close',
                                title: 'Capas Raster'});
var group_Shapes = new ol.layer.Group({
                                layers: [lyr_AnilloGAM_4,lyr_Inundaciones_Oreamuno_5,lyr_Distritos_Oreamuno_6,lyr_Vialidad_Oreamuno_7,lyr_ASADAS_8,lyr_Rios_Oreamuno_9,lyr_Rutas_Autobus_Oreamuno_10,lyr_Fallas_Oreamuno_11,lyr_Coronas_deslizamiento_Oreamuno_12,lyr_PropuestaRedVial_13,lyr_Propuesta_Ciclovia_14,],
                                fold: 'close',
                                title: 'Shapes'});
var group_RenovacinUrbana = new ol.layer.Group({
                                layers: [lyr_Zonasdepotencialparques_1,lyr_Zonasdepotencialurbano_2,lyr_Zonasdevalorpatrimonial_3,],
                                fold: 'close',
                                title: 'Renovación Urbana'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Zonasdepotencialparques_1.setVisible(true);lyr_Zonasdepotencialurbano_2.setVisible(true);lyr_Zonasdevalorpatrimonial_3.setVisible(true);lyr_AnilloGAM_4.setVisible(true);lyr_Inundaciones_Oreamuno_5.setVisible(true);lyr_Distritos_Oreamuno_6.setVisible(true);lyr_Vialidad_Oreamuno_7.setVisible(true);lyr_ASADAS_8.setVisible(true);lyr_Rios_Oreamuno_9.setVisible(true);lyr_Rutas_Autobus_Oreamuno_10.setVisible(true);lyr_Fallas_Oreamuno_11.setVisible(true);lyr_Coronas_deslizamiento_Oreamuno_12.setVisible(true);lyr_PropuestaRedVial_13.setVisible(true);lyr_Propuesta_Ciclovia_14.setVisible(true);lyr_Pendientes_015_Oreamuno_15.setVisible(true);lyr_DEMOreamuno_16.setVisible(true);lyr_PendientesReclasisificasZH_17.setVisible(true);lyr_CapcidadSuelo_Oreamuno_18.setVisible(true);lyr_Shape_Oreamuno_19.setVisible(true);lyr_Zona_Agropecuaria_20.setVisible(true);lyr_Zona_Agricola_21.setVisible(true);lyr_Uso_Residencial_22.setVisible(true);lyr_Uso_Mixto_23.setVisible(true);lyr_Uso_Comercial_24.setVisible(true);lyr_Publico_Institucional_25.setVisible(true);lyr_Zona_Industrial_26.setVisible(true);lyr_Crecimiento_Futuro_27.setVisible(true);lyr_Centros_de_poblacion_28.setVisible(true);lyr_AreasSilvestresOreamuno_29.setVisible(true);lyr_Zona_amortiguamiento_30.setVisible(true);lyr_Zona_Proteccion_31.setVisible(true);lyr_ZonaUrbana_32.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_RenovacinUrbana,group_Shapes,group_CapasRaster,group_Zonificacin];
lyr_Zonasdepotencialparques_1.set('fieldAliases', {'id': 'id', });
lyr_Zonasdepotencialurbano_2.set('fieldAliases', {'id': 'id', });
lyr_Zonasdevalorpatrimonial_3.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', });
lyr_AnilloGAM_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Inundaciones_Oreamuno_5.set('fieldAliases', {'FID_': 'FID_', 'ENTITY': 'ENTITY', 'LAYER': 'LAYER', 'COLOR': 'COLOR', 'LINETYPE': 'LINETYPE', 'ELEVATION': 'ELEVATION', 'LINEWT': 'LINEWT', 'REFNAME': 'REFNAME', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Distritos_Oreamuno_6.set('fieldAliases', {'FID_CENSO_': 'FID_CENSO_', 'PROVINCIA': 'PROVINCIA', 'NCANTON': 'NCANTON', 'NDISTRITO': 'NDISTRITO', 'PROV': 'PROV', 'CANTON': 'CANTON', 'DISTRITO': 'DISTRITO', 'CODDIST': 'CODDIST', 'POB_1997_M': 'POB_1997_M', 'POB_1997_H': 'POB_1997_H', 'POB_2000_H': 'POB_2000_H', 'POB_2000_M': 'POB_2000_M', 'VIVIENDA_O': 'VIVIENDA_O', 'VIVIENDA_D': 'VIVIENDA_D', 'VIVIENDA_C': 'VIVIENDA_C', 'POB_2011_M': 'POB_2011_M', 'POB_2011_H': 'POB_2011_H', 'VIV_O_2011': 'VIV_O_2011', 'VIV_D_2011': 'VIV_D_2011', 'VIV_C_2011': 'VIV_C_2011', 'AREA': 'AREA', });
lyr_Vialidad_Oreamuno_7.set('fieldAliases', {'RUTA': 'RUTA', 'TIPO': 'TIPO', 'LONGITUD': 'LONGITUD', 'DE_RUTA': 'DE_RUTA', 'URBANOS': 'URBANOS', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_ASADAS_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Región': 'Región', 'Ente_Opera': 'Ente_Opera', 'PROVINCIA': 'PROVINCIA', 'Cantón': 'Cantón', 'DISTRITO': 'DISTRITO', '______DATO': '______DATO', 'Teléfono_': 'Teléfono_', 'Fax': 'Fax', 'Correo': 'Correo', 'Dirección': 'Dirección', '______COOR': '______COOR', 'Norte': 'Norte', 'Este': 'Este', '______CARA': '______CARA', 'Local_Aten': 'Local_Aten', 'Tipo_Admin': 'Tipo_Admin', 'Tipo_Ubica': 'Tipo_Ubica', 'Calificaci': 'Calificaci', 'Dominio': 'Dominio', 'HasthTAG': 'HasthTAG', '______SERV': '______SERV', 'Fijo_Domic': 'Fijo_Domic', 'Medido_Dom': 'Medido_Dom', 'Fijo_Empre': 'Fijo_Empre', 'Medido_Emp': 'Medido_Emp', 'Hidrantes': 'Hidrantes', 'Servicios_': 'Servicios_', 'Poblacion_': 'Poblacion_', '______SE_1': '______SE_1', 'Serv_Proy_': 'Serv_Proy_', 'Pobl_Abast': 'Pobl_Abast', '______COMU': '______COMU', 'IDEO': 'IDEO', 'PKENTEOPER': 'PKENTEOPER', 'Comunidade': 'Comunidade', 'Cantidad_F': 'Cantidad_F', 'Total_Caud': 'Total_Caud', 'Caudal_Req': 'Caudal_Req', 'Aprobados_': 'Aprobados_', 'Longitud': 'Longitud', 'Latitud': 'Latitud', '___COORDEN': '___COORDEN', 'IMAGEN_ENT': 'IMAGEN_ENT', });
lyr_Rios_Oreamuno_9.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CATEGORIA': 'CATEGORIA', });
lyr_Rutas_Autobus_Oreamuno_10.set('fieldAliases', {'id': 'id', 'ruta': 'ruta', 'identifica': 'identifica', 'descripcio': 'descripcio', 'sentido': 'sentido', });
lyr_Fallas_Oreamuno_11.set('fieldAliases', {'FID_': 'FID_', 'ENTITY': 'ENTITY', 'LEVEL': 'LEVEL', 'LAYER': 'LAYER', 'COLOR': 'COLOR', 'LINETYPE': 'LINETYPE', 'ELEVATION': 'ELEVATION', 'LINEWT': 'LINEWT', 'REFNAME': 'REFNAME', });
lyr_Coronas_deslizamiento_Oreamuno_12.set('fieldAliases', {'FID_': 'FID_', 'ENTITY': 'ENTITY', 'LEVEL': 'LEVEL', 'LAYER': 'LAYER', 'COLOR': 'COLOR', 'LINETYPE': 'LINETYPE', 'ELEVATION': 'ELEVATION', 'LINEWT': 'LINEWT', 'REFNAME': 'REFNAME', });
lyr_PropuestaRedVial_13.set('fieldAliases', {'id': 'id', 'Via': 'Via', });
lyr_Propuesta_Ciclovia_14.set('fieldAliases', {'id': 'id', });
lyr_CapcidadSuelo_Oreamuno_18.set('fieldAliases', {'Cap_uso': 'Cap_uso', 'ID': 'ID', });
lyr_Shape_Oreamuno_19.set('fieldAliases', {'FID': 'FID', });
lyr_Zona_Agropecuaria_20.set('fieldAliases', {'FID': 'FID', });
lyr_Zona_Agricola_21.set('fieldAliases', {'Cap_uso': 'Cap_uso', 'ID': 'ID', 'id_2': 'id_2', });
lyr_Uso_Residencial_22.set('fieldAliases', {'Tipo': 'Tipo', 'Tipo_2': 'Tipo_2', });
lyr_Uso_Mixto_23.set('fieldAliases', {'id': 'id', });
lyr_Uso_Comercial_24.set('fieldAliases', {'id': 'id', });
lyr_Publico_Institucional_25.set('fieldAliases', {'id': 'id', });
lyr_Zona_Industrial_26.set('fieldAliases', {'id': 'id', });
lyr_Crecimiento_Futuro_27.set('fieldAliases', {'id': 'id', });
lyr_Centros_de_poblacion_28.set('fieldAliases', {'id': 'id', });
lyr_AreasSilvestresOreamuno_29.set('fieldAliases', {'codigo': 'codigo', 'nombre_asp': 'nombre_asp', 'cat_manejo': 'cat_manejo', 'estatus': 'estatus', 'siglas_cat': 'siglas_cat', 'nombre_ac': 'nombre_ac', 'siglas_ac': 'siglas_ac', 'descripcio': 'descripcio', 'a_creacion': 'a_creacion', 'n_creacion': 'n_creacion', 'version': 'version', 'area_hecta': 'area_hecta', 'area_km2': 'area_km2', 'a': 'a', });
lyr_Zona_amortiguamiento_30.set('fieldAliases', {'id': 'id', });
lyr_Zona_Proteccion_31.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CATEGORIA': 'CATEGORIA', 'NOMBRE_2': 'NOMBRE_2', 'CATEGORIA_': 'CATEGORIA_', });
lyr_ZonaUrbana_32.set('fieldAliases', {'Tipo': 'Tipo', });
lyr_Zonasdepotencialparques_1.set('fieldImages', {'id': '', });
lyr_Zonasdepotencialurbano_2.set('fieldImages', {'id': '', });
lyr_Zonasdevalorpatrimonial_3.set('fieldImages', {'id': '', 'NOMBRE': '', });
lyr_AnilloGAM_4.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_Inundaciones_Oreamuno_5.set('fieldImages', {'FID_': '', 'ENTITY': '', 'LAYER': '', 'COLOR': '', 'LINETYPE': '', 'ELEVATION': '', 'LINEWT': '', 'REFNAME': '', 'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Distritos_Oreamuno_6.set('fieldImages', {'FID_CENSO_': 'Range', 'PROVINCIA': 'TextEdit', 'NCANTON': 'TextEdit', 'NDISTRITO': 'TextEdit', 'PROV': 'Range', 'CANTON': 'Range', 'DISTRITO': 'Range', 'CODDIST': 'Range', 'POB_1997_M': 'TextEdit', 'POB_1997_H': 'TextEdit', 'POB_2000_H': 'TextEdit', 'POB_2000_M': 'TextEdit', 'VIVIENDA_O': 'TextEdit', 'VIVIENDA_D': 'TextEdit', 'VIVIENDA_C': 'TextEdit', 'POB_2011_M': 'TextEdit', 'POB_2011_H': 'TextEdit', 'VIV_O_2011': 'TextEdit', 'VIV_D_2011': 'TextEdit', 'VIV_C_2011': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Vialidad_Oreamuno_7.set('fieldImages', {'RUTA': 'TextEdit', 'TIPO': 'TextEdit', 'LONGITUD': 'TextEdit', 'DE_RUTA': 'TextEdit', 'URBANOS': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_ASADAS_8.set('fieldImages', {'OBJECTID': '', 'Región': '', 'Ente_Opera': '', 'PROVINCIA': '', 'Cantón': '', 'DISTRITO': '', '______DATO': '', 'Teléfono_': '', 'Fax': '', 'Correo': '', 'Dirección': '', '______COOR': '', 'Norte': '', 'Este': '', '______CARA': '', 'Local_Aten': '', 'Tipo_Admin': '', 'Tipo_Ubica': '', 'Calificaci': '', 'Dominio': '', 'HasthTAG': '', '______SERV': '', 'Fijo_Domic': '', 'Medido_Dom': '', 'Fijo_Empre': '', 'Medido_Emp': '', 'Hidrantes': '', 'Servicios_': '', 'Poblacion_': '', '______SE_1': '', 'Serv_Proy_': '', 'Pobl_Abast': '', '______COMU': '', 'IDEO': '', 'PKENTEOPER': '', 'Comunidade': '', 'Cantidad_F': '', 'Total_Caud': '', 'Caudal_Req': '', 'Aprobados_': '', 'Longitud': '', 'Latitud': '', '___COORDEN': '', 'IMAGEN_ENT': '', });
lyr_Rios_Oreamuno_9.set('fieldImages', {'NOMBRE': '', 'CATEGORIA': '', });
lyr_Rutas_Autobus_Oreamuno_10.set('fieldImages', {'id': '', 'ruta': '', 'identifica': '', 'descripcio': '', 'sentido': '', });
lyr_Fallas_Oreamuno_11.set('fieldImages', {'FID_': '', 'ENTITY': '', 'LEVEL': '', 'LAYER': '', 'COLOR': '', 'LINETYPE': '', 'ELEVATION': '', 'LINEWT': '', 'REFNAME': '', });
lyr_Coronas_deslizamiento_Oreamuno_12.set('fieldImages', {'FID_': '', 'ENTITY': '', 'LEVEL': '', 'LAYER': '', 'COLOR': '', 'LINETYPE': '', 'ELEVATION': '', 'LINEWT': '', 'REFNAME': '', });
lyr_PropuestaRedVial_13.set('fieldImages', {'id': '', 'Via': '', });
lyr_Propuesta_Ciclovia_14.set('fieldImages', {'id': 'TextEdit', });
lyr_CapcidadSuelo_Oreamuno_18.set('fieldImages', {'Cap_uso': 'TextEdit', 'ID': 'TextEdit', });
lyr_Shape_Oreamuno_19.set('fieldImages', {'FID': 'TextEdit', });
lyr_Zona_Agropecuaria_20.set('fieldImages', {'FID': 'TextEdit', });
lyr_Zona_Agricola_21.set('fieldImages', {'Cap_uso': 'TextEdit', 'ID': 'TextEdit', 'id_2': 'TextEdit', });
lyr_Uso_Residencial_22.set('fieldImages', {'Tipo': 'TextEdit', 'Tipo_2': 'TextEdit', });
lyr_Uso_Mixto_23.set('fieldImages', {'id': 'TextEdit', });
lyr_Uso_Comercial_24.set('fieldImages', {'id': 'TextEdit', });
lyr_Publico_Institucional_25.set('fieldImages', {'id': 'TextEdit', });
lyr_Zona_Industrial_26.set('fieldImages', {'id': 'TextEdit', });
lyr_Crecimiento_Futuro_27.set('fieldImages', {'id': 'TextEdit', });
lyr_Centros_de_poblacion_28.set('fieldImages', {'id': 'TextEdit', });
lyr_AreasSilvestresOreamuno_29.set('fieldImages', {'codigo': 'TextEdit', 'nombre_asp': 'TextEdit', 'cat_manejo': 'TextEdit', 'estatus': 'TextEdit', 'siglas_cat': 'TextEdit', 'nombre_ac': 'TextEdit', 'siglas_ac': 'TextEdit', 'descripcio': 'TextEdit', 'a_creacion': 'TextEdit', 'n_creacion': 'TextEdit', 'version': 'TextEdit', 'area_hecta': 'TextEdit', 'area_km2': 'TextEdit', 'a': 'TextEdit', });
lyr_Zona_amortiguamiento_30.set('fieldImages', {'id': 'TextEdit', });
lyr_Zona_Proteccion_31.set('fieldImages', {'NOMBRE': 'TextEdit', 'CATEGORIA': 'TextEdit', 'NOMBRE_2': 'TextEdit', 'CATEGORIA_': 'TextEdit', });
lyr_ZonaUrbana_32.set('fieldImages', {'Tipo': 'TextEdit', });
lyr_Zonasdepotencialparques_1.set('fieldLabels', {'id': 'no label', });
lyr_Zonasdepotencialurbano_2.set('fieldLabels', {'id': 'no label', });
lyr_Zonasdevalorpatrimonial_3.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', });
lyr_AnilloGAM_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Inundaciones_Oreamuno_5.set('fieldLabels', {'FID_': 'no label', 'ENTITY': 'no label', 'LAYER': 'no label', 'COLOR': 'no label', 'LINETYPE': 'no label', 'ELEVATION': 'no label', 'LINEWT': 'no label', 'REFNAME': 'no label', 'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Distritos_Oreamuno_6.set('fieldLabels', {'FID_CENSO_': 'no label', 'PROVINCIA': 'no label', 'NCANTON': 'no label', 'NDISTRITO': 'inline label - visible with data', 'PROV': 'no label', 'CANTON': 'no label', 'DISTRITO': 'no label', 'CODDIST': 'no label', 'POB_1997_M': 'no label', 'POB_1997_H': 'no label', 'POB_2000_H': 'no label', 'POB_2000_M': 'no label', 'VIVIENDA_O': 'no label', 'VIVIENDA_D': 'no label', 'VIVIENDA_C': 'no label', 'POB_2011_M': 'no label', 'POB_2011_H': 'no label', 'VIV_O_2011': 'no label', 'VIV_D_2011': 'no label', 'VIV_C_2011': 'no label', 'AREA': 'no label', });
lyr_Vialidad_Oreamuno_7.set('fieldLabels', {'RUTA': 'no label', 'TIPO': 'no label', 'LONGITUD': 'no label', 'DE_RUTA': 'no label', 'URBANOS': 'no label', 'DESCRIPCIO': 'no label', });
lyr_ASADAS_8.set('fieldLabels', {'OBJECTID': 'no label', 'Región': 'no label', 'Ente_Opera': 'no label', 'PROVINCIA': 'no label', 'Cantón': 'no label', 'DISTRITO': 'no label', '______DATO': 'no label', 'Teléfono_': 'no label', 'Fax': 'no label', 'Correo': 'no label', 'Dirección': 'no label', '______COOR': 'no label', 'Norte': 'no label', 'Este': 'no label', '______CARA': 'no label', 'Local_Aten': 'no label', 'Tipo_Admin': 'no label', 'Tipo_Ubica': 'no label', 'Calificaci': 'no label', 'Dominio': 'no label', 'HasthTAG': 'no label', '______SERV': 'no label', 'Fijo_Domic': 'no label', 'Medido_Dom': 'no label', 'Fijo_Empre': 'no label', 'Medido_Emp': 'no label', 'Hidrantes': 'no label', 'Servicios_': 'no label', 'Poblacion_': 'no label', '______SE_1': 'no label', 'Serv_Proy_': 'no label', 'Pobl_Abast': 'no label', '______COMU': 'no label', 'IDEO': 'no label', 'PKENTEOPER': 'no label', 'Comunidade': 'no label', 'Cantidad_F': 'no label', 'Total_Caud': 'no label', 'Caudal_Req': 'no label', 'Aprobados_': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', '___COORDEN': 'no label', 'IMAGEN_ENT': 'no label', });
lyr_Rios_Oreamuno_9.set('fieldLabels', {'NOMBRE': 'no label', 'CATEGORIA': 'no label', });
lyr_Rutas_Autobus_Oreamuno_10.set('fieldLabels', {'id': 'no label', 'ruta': 'no label', 'identifica': 'no label', 'descripcio': 'no label', 'sentido': 'no label', });
lyr_Fallas_Oreamuno_11.set('fieldLabels', {'FID_': 'no label', 'ENTITY': 'no label', 'LEVEL': 'no label', 'LAYER': 'no label', 'COLOR': 'no label', 'LINETYPE': 'no label', 'ELEVATION': 'no label', 'LINEWT': 'no label', 'REFNAME': 'no label', });
lyr_Coronas_deslizamiento_Oreamuno_12.set('fieldLabels', {'FID_': 'no label', 'ENTITY': 'no label', 'LEVEL': 'no label', 'LAYER': 'no label', 'COLOR': 'no label', 'LINETYPE': 'no label', 'ELEVATION': 'no label', 'LINEWT': 'no label', 'REFNAME': 'no label', });
lyr_PropuestaRedVial_13.set('fieldLabels', {'id': 'no label', 'Via': 'no label', });
lyr_Propuesta_Ciclovia_14.set('fieldLabels', {'id': 'no label', });
lyr_CapcidadSuelo_Oreamuno_18.set('fieldLabels', {'Cap_uso': 'no label', 'ID': 'no label', });
lyr_Shape_Oreamuno_19.set('fieldLabels', {'FID': 'no label', });
lyr_Zona_Agropecuaria_20.set('fieldLabels', {'FID': 'no label', });
lyr_Zona_Agricola_21.set('fieldLabels', {'Cap_uso': 'no label', 'ID': 'no label', 'id_2': 'no label', });
lyr_Uso_Residencial_22.set('fieldLabels', {'Tipo': 'no label', 'Tipo_2': 'no label', });
lyr_Uso_Mixto_23.set('fieldLabels', {'id': 'no label', });
lyr_Uso_Comercial_24.set('fieldLabels', {'id': 'no label', });
lyr_Publico_Institucional_25.set('fieldLabels', {'id': 'no label', });
lyr_Zona_Industrial_26.set('fieldLabels', {'id': 'no label', });
lyr_Crecimiento_Futuro_27.set('fieldLabels', {'id': 'no label', });
lyr_Centros_de_poblacion_28.set('fieldLabels', {'id': 'no label', });
lyr_AreasSilvestresOreamuno_29.set('fieldLabels', {'codigo': 'no label', 'nombre_asp': 'no label', 'cat_manejo': 'no label', 'estatus': 'no label', 'siglas_cat': 'no label', 'nombre_ac': 'no label', 'siglas_ac': 'no label', 'descripcio': 'no label', 'a_creacion': 'no label', 'n_creacion': 'no label', 'version': 'no label', 'area_hecta': 'no label', 'area_km2': 'no label', 'a': 'no label', });
lyr_Zona_amortiguamiento_30.set('fieldLabels', {'id': 'no label', });
lyr_Zona_Proteccion_31.set('fieldLabels', {'NOMBRE': 'no label', 'CATEGORIA': 'no label', 'NOMBRE_2': 'no label', 'CATEGORIA_': 'no label', });
lyr_ZonaUrbana_32.set('fieldLabels', {'Tipo': 'no label', });
lyr_ZonaUrbana_32.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});