var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnilloGAM_1 = new ol.format.GeoJSON();
var features_AnilloGAM_1 = format_AnilloGAM_1.readFeatures(json_AnilloGAM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnilloGAM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnilloGAM_1.addFeatures(features_AnilloGAM_1);
var lyr_AnilloGAM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnilloGAM_1, 
                style: style_AnilloGAM_1,
                popuplayertitle: 'Anillo GAM',
                interactive: true,
                title: '<img src="styles/legend/AnilloGAM_1.png" /> Anillo GAM'
            });
var format_Inundaciones_Oreamuno_2 = new ol.format.GeoJSON();
var features_Inundaciones_Oreamuno_2 = format_Inundaciones_Oreamuno_2.readFeatures(json_Inundaciones_Oreamuno_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inundaciones_Oreamuno_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inundaciones_Oreamuno_2.addFeatures(features_Inundaciones_Oreamuno_2);
var lyr_Inundaciones_Oreamuno_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inundaciones_Oreamuno_2, 
                style: style_Inundaciones_Oreamuno_2,
                popuplayertitle: 'Inundaciones_Oreamuno',
                interactive: true,
                title: '<img src="styles/legend/Inundaciones_Oreamuno_2.png" /> Inundaciones_Oreamuno'
            });
var format_Distritos_Oreamuno_3 = new ol.format.GeoJSON();
var features_Distritos_Oreamuno_3 = format_Distritos_Oreamuno_3.readFeatures(json_Distritos_Oreamuno_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritos_Oreamuno_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritos_Oreamuno_3.addFeatures(features_Distritos_Oreamuno_3);
var lyr_Distritos_Oreamuno_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distritos_Oreamuno_3, 
                style: style_Distritos_Oreamuno_3,
                popuplayertitle: 'Distritos_Oreamuno',
                interactive: true,
                title: '<img src="styles/legend/Distritos_Oreamuno_3.png" /> Distritos_Oreamuno'
            });
var format_Vialidad_Oreamuno_4 = new ol.format.GeoJSON();
var features_Vialidad_Oreamuno_4 = format_Vialidad_Oreamuno_4.readFeatures(json_Vialidad_Oreamuno_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vialidad_Oreamuno_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vialidad_Oreamuno_4.addFeatures(features_Vialidad_Oreamuno_4);
var lyr_Vialidad_Oreamuno_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vialidad_Oreamuno_4, 
                style: style_Vialidad_Oreamuno_4,
                popuplayertitle: 'Vialidad_Oreamuno',
                interactive: true,
                title: '<img src="styles/legend/Vialidad_Oreamuno_4.png" /> Vialidad_Oreamuno'
            });
var format_ASADAS_5 = new ol.format.GeoJSON();
var features_ASADAS_5 = format_ASADAS_5.readFeatures(json_ASADAS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASADAS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASADAS_5.addFeatures(features_ASADAS_5);
var lyr_ASADAS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASADAS_5, 
                style: style_ASADAS_5,
                popuplayertitle: 'ASADAS',
                interactive: true,
                title: '<img src="styles/legend/ASADAS_5.png" /> ASADAS'
            });
var format_Rios_Oreamuno_6 = new ol.format.GeoJSON();
var features_Rios_Oreamuno_6 = format_Rios_Oreamuno_6.readFeatures(json_Rios_Oreamuno_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_Oreamuno_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_Oreamuno_6.addFeatures(features_Rios_Oreamuno_6);
var lyr_Rios_Oreamuno_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_Oreamuno_6, 
                style: style_Rios_Oreamuno_6,
                popuplayertitle: 'Rios_Oreamuno',
                interactive: true,
                title: '<img src="styles/legend/Rios_Oreamuno_6.png" /> Rios_Oreamuno'
            });
var format_Rutas_Autobus_Oreamuno_7 = new ol.format.GeoJSON();
var features_Rutas_Autobus_Oreamuno_7 = format_Rutas_Autobus_Oreamuno_7.readFeatures(json_Rutas_Autobus_Oreamuno_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutas_Autobus_Oreamuno_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_Autobus_Oreamuno_7.addFeatures(features_Rutas_Autobus_Oreamuno_7);
var lyr_Rutas_Autobus_Oreamuno_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rutas_Autobus_Oreamuno_7, 
                style: style_Rutas_Autobus_Oreamuno_7,
                popuplayertitle: 'Rutas_Autobus_Oreamuno',
                interactive: true,
                title: '<img src="styles/legend/Rutas_Autobus_Oreamuno_7.png" /> Rutas_Autobus_Oreamuno'
            });
var format_Fallas_Oreamuno_8 = new ol.format.GeoJSON();
var features_Fallas_Oreamuno_8 = format_Fallas_Oreamuno_8.readFeatures(json_Fallas_Oreamuno_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fallas_Oreamuno_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fallas_Oreamuno_8.addFeatures(features_Fallas_Oreamuno_8);
var lyr_Fallas_Oreamuno_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fallas_Oreamuno_8, 
                style: style_Fallas_Oreamuno_8,
                popuplayertitle: 'Fallas_Oreamuno',
                interactive: true,
                title: '<img src="styles/legend/Fallas_Oreamuno_8.png" /> Fallas_Oreamuno'
            });
var format_Coronas_deslizamiento_Oreamuno_9 = new ol.format.GeoJSON();
var features_Coronas_deslizamiento_Oreamuno_9 = format_Coronas_deslizamiento_Oreamuno_9.readFeatures(json_Coronas_deslizamiento_Oreamuno_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coronas_deslizamiento_Oreamuno_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coronas_deslizamiento_Oreamuno_9.addFeatures(features_Coronas_deslizamiento_Oreamuno_9);
var lyr_Coronas_deslizamiento_Oreamuno_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coronas_deslizamiento_Oreamuno_9, 
                style: style_Coronas_deslizamiento_Oreamuno_9,
                popuplayertitle: 'Coronas_deslizamiento_Oreamuno',
                interactive: true,
                title: '<img src="styles/legend/Coronas_deslizamiento_Oreamuno_9.png" /> Coronas_deslizamiento_Oreamuno'
            });
var lyr_Pendientes_015_Oreamuno_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pendientes_0-15_Oreamuno<br />\
    <img src="styles/legend/Pendientes_015_Oreamuno_10_0.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Pendientes_015_Oreamuno_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9344931.759403, 1101691.454276, -9328631.608023, 1135537.888218]
        })
    });
var lyr_DEMOreamuno_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEMOreamuno<br />\
    <img src="styles/legend/DEMOreamuno_11_0.png" /> 473.023<br />\
    <img src="styles/legend/DEMOreamuno_11_1.png" /> 3403.63<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEMOreamuno_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9344931.759403, 1101691.454276, -9328631.608023, 1135537.888218]
        })
    });
var lyr_PendientesReclasisificasZH_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PendientesReclasisificasZH<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_0.png" /> 0<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_1.png" /> 1<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_2.png" /> 2<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_3.png" /> 3<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_4.png" /> 4<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_5.png" /> 5<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_6.png" /> 6<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_7.png" /> 7<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_8.png" /> 8<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_9.png" /> 9<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_10.png" /> 10<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_11.png" /> 11<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_12.png" /> 12<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_13.png" /> 13<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_14.png" /> 14<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_15.png" /> 15<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_16.png" /> 16<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_17.png" /> 17<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_18.png" /> 18<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_19.png" /> 19<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_20.png" /> 20<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_21.png" /> 21<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_22.png" /> 22<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_23.png" /> 23<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_24.png" /> 24<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_25.png" /> 25<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_26.png" /> 26<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_27.png" /> 27<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_28.png" /> 28<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_29.png" /> 29<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_30.png" /> 30<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_31.png" /> 31<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_32.png" /> 32<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_33.png" /> 33<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_34.png" /> 34<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_35.png" /> 35<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_36.png" /> 36<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_37.png" /> 37<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_38.png" /> 38<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_39.png" /> 39<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_40.png" /> 40<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_41.png" /> 41<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_42.png" /> 42<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_43.png" /> 43<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_44.png" /> 44<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_45.png" /> 45<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_46.png" /> 46<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_47.png" /> 47<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_48.png" /> 48<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_49.png" /> 49<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_50.png" /> 50<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_51.png" /> 51<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_52.png" /> 52<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_53.png" /> 53<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_54.png" /> 54<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_55.png" /> 55<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_56.png" /> 56<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_57.png" /> 57<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_58.png" /> 58<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_59.png" /> 59<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_60.png" /> 60<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_61.png" /> 61<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_62.png" /> 62<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_63.png" /> 63<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_64.png" /> 64<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_65.png" /> 65<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_66.png" /> 66<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_67.png" /> 67<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_68.png" /> 68<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_69.png" /> 69<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_70.png" /> 70<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_71.png" /> 71<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_72.png" /> 72<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_73.png" /> 73<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_74.png" /> 74<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_75.png" /> 75<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_76.png" /> 76<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_77.png" /> 77<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_78.png" /> 78<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_79.png" /> 79<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_80.png" /> 80<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_81.png" /> 81<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_82.png" /> 82<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_83.png" /> 83<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_84.png" /> 84<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_85.png" /> 85<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_86.png" /> 86<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_87.png" /> 87<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_88.png" /> 88<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_89.png" /> 89<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_90.png" /> 90<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_91.png" /> 91<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_92.png" /> 92<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_93.png" /> 93<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_94.png" /> 94<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_95.png" /> 95<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_96.png" /> 96<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_97.png" /> 97<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_98.png" /> 98<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_99.png" /> 99<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_100.png" /> 100<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_101.png" /> 101<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_102.png" /> 102<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_103.png" /> 103<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_104.png" /> 104<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_105.png" /> 105<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_106.png" /> 106<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_107.png" /> 107<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_108.png" /> 108<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_109.png" /> 109<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_110.png" /> 110<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_111.png" /> 111<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_112.png" /> 112<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_113.png" /> 113<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_114.png" /> 114<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_115.png" /> 115<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_116.png" /> 116<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_117.png" /> 117<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_118.png" /> 118<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_119.png" /> 119<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_120.png" /> 120<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_121.png" /> 121<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_122.png" /> 122<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_123.png" /> 123<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_124.png" /> 124<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_125.png" /> 125<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_126.png" /> 126<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_127.png" /> 127<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_128.png" /> 128<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_129.png" /> 129<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_130.png" /> 130<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_131.png" /> 131<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_132.png" /> 132<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_133.png" /> 133<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_134.png" /> 134<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_135.png" /> 135<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_136.png" /> 136<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_137.png" /> 137<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_138.png" /> 138<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_139.png" /> 139<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_140.png" /> 140<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_141.png" /> 141<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_142.png" /> 142<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_143.png" /> 143<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_144.png" /> 144<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_145.png" /> 145<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_146.png" /> 146<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_147.png" /> 147<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_148.png" /> 148<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_149.png" /> 149<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_150.png" /> 150<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_151.png" /> 151<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_152.png" /> 152<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_153.png" /> 153<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_154.png" /> 154<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_155.png" /> 155<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_156.png" /> 156<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_157.png" /> 157<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_158.png" /> 158<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_159.png" /> 159<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_160.png" /> 160<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_161.png" /> 161<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_162.png" /> 162<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_163.png" /> 163<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_164.png" /> 164<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_165.png" /> 165<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_166.png" /> 166<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_167.png" /> 167<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_168.png" /> 168<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_169.png" /> 169<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_170.png" /> 170<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_171.png" /> 171<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_172.png" /> 172<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_173.png" /> 173<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_174.png" /> 174<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_175.png" /> 175<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_176.png" /> 176<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_177.png" /> 177<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_178.png" /> 178<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_179.png" /> 179<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_180.png" /> 180<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_181.png" /> 181<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_182.png" /> 182<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_183.png" /> 183<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_184.png" /> 184<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_185.png" /> 185<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_186.png" /> 186<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_187.png" /> 187<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_188.png" /> 188<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_189.png" /> 189<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_190.png" /> 190<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_191.png" /> 191<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_192.png" /> 192<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_193.png" /> 193<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_194.png" /> 194<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_195.png" /> 195<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_196.png" /> 196<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_197.png" /> 197<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_198.png" /> 198<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_199.png" /> 199<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_200.png" /> 200<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_201.png" /> 201<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_202.png" /> 202<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_203.png" /> 203<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_204.png" /> 204<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_205.png" /> 205<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_206.png" /> 206<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_207.png" /> 207<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_208.png" /> 208<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_209.png" /> 209<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_210.png" /> 210<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_211.png" /> 211<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_212.png" /> 212<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_213.png" /> 213<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_214.png" /> 214<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_215.png" /> 215<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_216.png" /> 216<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_217.png" /> 217<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_218.png" /> 218<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_219.png" /> 219<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_220.png" /> 220<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_221.png" /> 221<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_222.png" /> 222<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_223.png" /> 223<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_224.png" /> 224<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_225.png" /> 225<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_226.png" /> 226<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_227.png" /> 227<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_228.png" /> 228<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_229.png" /> 229<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_230.png" /> 230<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_231.png" /> 231<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_232.png" /> 232<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_233.png" /> 233<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_234.png" /> 234<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_235.png" /> 235<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_236.png" /> 236<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_237.png" /> 237<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_238.png" /> 238<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_239.png" /> 239<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_240.png" /> 240<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_241.png" /> 241<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_242.png" /> 242<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_243.png" /> 243<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_244.png" /> 244<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_245.png" /> 245<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_246.png" /> 246<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_247.png" /> 247<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_248.png" /> 248<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_249.png" /> 249<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_250.png" /> 250<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_251.png" /> 251<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_252.png" /> 252<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_253.png" /> 253<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_254.png" /> 254<br />\
    <img src="styles/legend/PendientesReclasisificasZH_12_255.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PendientesReclasisificasZH_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9344931.759403, 1101691.454276, -9328631.608023, 1135537.888218]
        })
    });
var format_CapcidadSuelo_Oreamuno_13 = new ol.format.GeoJSON();
var features_CapcidadSuelo_Oreamuno_13 = format_CapcidadSuelo_Oreamuno_13.readFeatures(json_CapcidadSuelo_Oreamuno_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapcidadSuelo_Oreamuno_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapcidadSuelo_Oreamuno_13.addFeatures(features_CapcidadSuelo_Oreamuno_13);
var lyr_CapcidadSuelo_Oreamuno_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapcidadSuelo_Oreamuno_13, 
                style: style_CapcidadSuelo_Oreamuno_13,
                popuplayertitle: 'CapcidadSuelo_Oreamuno',
                interactive: false,
    title: 'CapcidadSuelo_Oreamuno<br />\
    <img src="styles/legend/CapcidadSuelo_Oreamuno_13_0.png" /> 3<br />\
    <img src="styles/legend/CapcidadSuelo_Oreamuno_13_1.png" /> 4<br />\
    <img src="styles/legend/CapcidadSuelo_Oreamuno_13_2.png" /> 6<br />' });
var format_Shape_Oreamuno_14 = new ol.format.GeoJSON();
var features_Shape_Oreamuno_14 = format_Shape_Oreamuno_14.readFeatures(json_Shape_Oreamuno_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shape_Oreamuno_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shape_Oreamuno_14.addFeatures(features_Shape_Oreamuno_14);
var lyr_Shape_Oreamuno_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shape_Oreamuno_14, 
                style: style_Shape_Oreamuno_14,
                popuplayertitle: 'Shape_Oreamuno',
                interactive: true,
                title: '<img src="styles/legend/Shape_Oreamuno_14.png" /> Shape_Oreamuno'
            });
var format_Zona_Agropecuaria_15 = new ol.format.GeoJSON();
var features_Zona_Agropecuaria_15 = format_Zona_Agropecuaria_15.readFeatures(json_Zona_Agropecuaria_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_Agropecuaria_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_Agropecuaria_15.addFeatures(features_Zona_Agropecuaria_15);
var lyr_Zona_Agropecuaria_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_Agropecuaria_15, 
                style: style_Zona_Agropecuaria_15,
                popuplayertitle: 'Zona_Agropecuaria',
                interactive: true,
                title: '<img src="styles/legend/Zona_Agropecuaria_15.png" /> Zona_Agropecuaria'
            });
var format_Zona_Agricola_16 = new ol.format.GeoJSON();
var features_Zona_Agricola_16 = format_Zona_Agricola_16.readFeatures(json_Zona_Agricola_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_Agricola_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_Agricola_16.addFeatures(features_Zona_Agricola_16);
var lyr_Zona_Agricola_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_Agricola_16, 
                style: style_Zona_Agricola_16,
                popuplayertitle: 'Zona_Agricola',
                interactive: true,
                title: '<img src="styles/legend/Zona_Agricola_16.png" /> Zona_Agricola'
            });
var format_Uso_Residencial_17 = new ol.format.GeoJSON();
var features_Uso_Residencial_17 = format_Uso_Residencial_17.readFeatures(json_Uso_Residencial_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uso_Residencial_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uso_Residencial_17.addFeatures(features_Uso_Residencial_17);
var lyr_Uso_Residencial_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uso_Residencial_17, 
                style: style_Uso_Residencial_17,
                popuplayertitle: 'Uso_Residencial',
                interactive: true,
                title: '<img src="styles/legend/Uso_Residencial_17.png" /> Uso_Residencial'
            });
var format_Uso_Mixto_18 = new ol.format.GeoJSON();
var features_Uso_Mixto_18 = format_Uso_Mixto_18.readFeatures(json_Uso_Mixto_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uso_Mixto_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uso_Mixto_18.addFeatures(features_Uso_Mixto_18);
var lyr_Uso_Mixto_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uso_Mixto_18, 
                style: style_Uso_Mixto_18,
                popuplayertitle: 'Uso_Mixto',
                interactive: true,
                title: '<img src="styles/legend/Uso_Mixto_18.png" /> Uso_Mixto'
            });
var format_Uso_Comercial_19 = new ol.format.GeoJSON();
var features_Uso_Comercial_19 = format_Uso_Comercial_19.readFeatures(json_Uso_Comercial_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uso_Comercial_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uso_Comercial_19.addFeatures(features_Uso_Comercial_19);
var lyr_Uso_Comercial_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uso_Comercial_19, 
                style: style_Uso_Comercial_19,
                popuplayertitle: 'Uso_Comercial',
                interactive: true,
                title: '<img src="styles/legend/Uso_Comercial_19.png" /> Uso_Comercial'
            });
var format_Publico_Institucional_20 = new ol.format.GeoJSON();
var features_Publico_Institucional_20 = format_Publico_Institucional_20.readFeatures(json_Publico_Institucional_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Publico_Institucional_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Publico_Institucional_20.addFeatures(features_Publico_Institucional_20);
var lyr_Publico_Institucional_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Publico_Institucional_20, 
                style: style_Publico_Institucional_20,
                popuplayertitle: 'Publico_Institucional',
                interactive: true,
                title: '<img src="styles/legend/Publico_Institucional_20.png" /> Publico_Institucional'
            });
var format_Zona_Industrial_21 = new ol.format.GeoJSON();
var features_Zona_Industrial_21 = format_Zona_Industrial_21.readFeatures(json_Zona_Industrial_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_Industrial_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_Industrial_21.addFeatures(features_Zona_Industrial_21);
var lyr_Zona_Industrial_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_Industrial_21, 
                style: style_Zona_Industrial_21,
                popuplayertitle: 'Zona_Industrial',
                interactive: true,
                title: '<img src="styles/legend/Zona_Industrial_21.png" /> Zona_Industrial'
            });
var format_Crecimiento_Futuro_22 = new ol.format.GeoJSON();
var features_Crecimiento_Futuro_22 = format_Crecimiento_Futuro_22.readFeatures(json_Crecimiento_Futuro_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crecimiento_Futuro_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crecimiento_Futuro_22.addFeatures(features_Crecimiento_Futuro_22);
var lyr_Crecimiento_Futuro_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Crecimiento_Futuro_22, 
                style: style_Crecimiento_Futuro_22,
                popuplayertitle: 'Crecimiento_Futuro',
                interactive: true,
                title: '<img src="styles/legend/Crecimiento_Futuro_22.png" /> Crecimiento_Futuro'
            });
var format_Centros_de_poblacion_23 = new ol.format.GeoJSON();
var features_Centros_de_poblacion_23 = format_Centros_de_poblacion_23.readFeatures(json_Centros_de_poblacion_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centros_de_poblacion_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centros_de_poblacion_23.addFeatures(features_Centros_de_poblacion_23);
var lyr_Centros_de_poblacion_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centros_de_poblacion_23, 
                style: style_Centros_de_poblacion_23,
                popuplayertitle: 'Centros_de_poblacion',
                interactive: true,
                title: '<img src="styles/legend/Centros_de_poblacion_23.png" /> Centros_de_poblacion'
            });
var format_AreasSilvestresOreamuno_24 = new ol.format.GeoJSON();
var features_AreasSilvestresOreamuno_24 = format_AreasSilvestresOreamuno_24.readFeatures(json_AreasSilvestresOreamuno_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreasSilvestresOreamuno_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasSilvestresOreamuno_24.addFeatures(features_AreasSilvestresOreamuno_24);
var lyr_AreasSilvestresOreamuno_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreasSilvestresOreamuno_24, 
                style: style_AreasSilvestresOreamuno_24,
                popuplayertitle: 'AreasSilvestresOreamuno',
                interactive: true,
                title: '<img src="styles/legend/AreasSilvestresOreamuno_24.png" /> AreasSilvestresOreamuno'
            });
var format_Zona_amortiguamiento_25 = new ol.format.GeoJSON();
var features_Zona_amortiguamiento_25 = format_Zona_amortiguamiento_25.readFeatures(json_Zona_amortiguamiento_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_amortiguamiento_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_amortiguamiento_25.addFeatures(features_Zona_amortiguamiento_25);
var lyr_Zona_amortiguamiento_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_amortiguamiento_25, 
                style: style_Zona_amortiguamiento_25,
                popuplayertitle: 'Zona_amortiguamiento',
                interactive: true,
                title: '<img src="styles/legend/Zona_amortiguamiento_25.png" /> Zona_amortiguamiento'
            });
var format_Zona_Proteccion_26 = new ol.format.GeoJSON();
var features_Zona_Proteccion_26 = format_Zona_Proteccion_26.readFeatures(json_Zona_Proteccion_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_Proteccion_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_Proteccion_26.addFeatures(features_Zona_Proteccion_26);
var lyr_Zona_Proteccion_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_Proteccion_26, 
                style: style_Zona_Proteccion_26,
                popuplayertitle: 'Zona_Proteccion',
                interactive: true,
                title: '<img src="styles/legend/Zona_Proteccion_26.png" /> Zona_Proteccion'
            });
var format_ZonaUrbana_27 = new ol.format.GeoJSON();
var features_ZonaUrbana_27 = format_ZonaUrbana_27.readFeatures(json_ZonaUrbana_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaUrbana_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaUrbana_27.addFeatures(features_ZonaUrbana_27);
var lyr_ZonaUrbana_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaUrbana_27, 
                style: style_ZonaUrbana_27,
                popuplayertitle: 'Zona Urbana',
                interactive: true,
                title: '<img src="styles/legend/ZonaUrbana_27.png" /> Zona Urbana'
            });
var group_Zonificacin = new ol.layer.Group({
                                layers: [lyr_CapcidadSuelo_Oreamuno_13,lyr_Shape_Oreamuno_14,lyr_Zona_Agropecuaria_15,lyr_Zona_Agricola_16,lyr_Uso_Residencial_17,lyr_Uso_Mixto_18,lyr_Uso_Comercial_19,lyr_Publico_Institucional_20,lyr_Zona_Industrial_21,lyr_Crecimiento_Futuro_22,lyr_Centros_de_poblacion_23,lyr_AreasSilvestresOreamuno_24,lyr_Zona_amortiguamiento_25,lyr_Zona_Proteccion_26,lyr_ZonaUrbana_27,],
                                fold: 'close',
                                title: 'Zonificación'});
var group_CapasRaster = new ol.layer.Group({
                                layers: [lyr_Pendientes_015_Oreamuno_10,lyr_DEMOreamuno_11,lyr_PendientesReclasisificasZH_12,],
                                fold: 'close',
                                title: 'Capas Raster'});
var group_Shapes = new ol.layer.Group({
                                layers: [lyr_AnilloGAM_1,lyr_Inundaciones_Oreamuno_2,lyr_Distritos_Oreamuno_3,lyr_Vialidad_Oreamuno_4,lyr_ASADAS_5,lyr_Rios_Oreamuno_6,lyr_Rutas_Autobus_Oreamuno_7,lyr_Fallas_Oreamuno_8,lyr_Coronas_deslizamiento_Oreamuno_9,],
                                fold: 'close',
                                title: 'Shapes'});

lyr_GoogleSatellite_0.setVisible(true);lyr_AnilloGAM_1.setVisible(true);lyr_Inundaciones_Oreamuno_2.setVisible(true);lyr_Distritos_Oreamuno_3.setVisible(true);lyr_Vialidad_Oreamuno_4.setVisible(true);lyr_ASADAS_5.setVisible(true);lyr_Rios_Oreamuno_6.setVisible(true);lyr_Rutas_Autobus_Oreamuno_7.setVisible(true);lyr_Fallas_Oreamuno_8.setVisible(true);lyr_Coronas_deslizamiento_Oreamuno_9.setVisible(true);lyr_Pendientes_015_Oreamuno_10.setVisible(false);lyr_DEMOreamuno_11.setVisible(false);lyr_PendientesReclasisificasZH_12.setVisible(false);lyr_CapcidadSuelo_Oreamuno_13.setVisible(true);lyr_Shape_Oreamuno_14.setVisible(true);lyr_Zona_Agropecuaria_15.setVisible(true);lyr_Zona_Agricola_16.setVisible(true);lyr_Uso_Residencial_17.setVisible(true);lyr_Uso_Mixto_18.setVisible(true);lyr_Uso_Comercial_19.setVisible(true);lyr_Publico_Institucional_20.setVisible(true);lyr_Zona_Industrial_21.setVisible(true);lyr_Crecimiento_Futuro_22.setVisible(true);lyr_Centros_de_poblacion_23.setVisible(true);lyr_AreasSilvestresOreamuno_24.setVisible(true);lyr_Zona_amortiguamiento_25.setVisible(true);lyr_Zona_Proteccion_26.setVisible(true);lyr_ZonaUrbana_27.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Shapes,group_CapasRaster,group_Zonificacin];
lyr_AnilloGAM_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Inundaciones_Oreamuno_2.set('fieldAliases', {'FID_': 'FID_', 'ENTITY': 'ENTITY', 'LAYER': 'LAYER', 'COLOR': 'COLOR', 'LINETYPE': 'LINETYPE', 'ELEVATION': 'ELEVATION', 'LINEWT': 'LINEWT', 'REFNAME': 'REFNAME', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Distritos_Oreamuno_3.set('fieldAliases', {'FID_CENSO_': 'FID_CENSO_', 'PROVINCIA': 'PROVINCIA', 'NCANTON': 'NCANTON', 'NDISTRITO': 'NDISTRITO', 'PROV': 'PROV', 'CANTON': 'CANTON', 'DISTRITO': 'DISTRITO', 'CODDIST': 'CODDIST', 'POB_1997_M': 'POB_1997_M', 'POB_1997_H': 'POB_1997_H', 'POB_2000_H': 'POB_2000_H', 'POB_2000_M': 'POB_2000_M', 'VIVIENDA_O': 'VIVIENDA_O', 'VIVIENDA_D': 'VIVIENDA_D', 'VIVIENDA_C': 'VIVIENDA_C', 'POB_2011_M': 'POB_2011_M', 'POB_2011_H': 'POB_2011_H', 'VIV_O_2011': 'VIV_O_2011', 'VIV_D_2011': 'VIV_D_2011', 'VIV_C_2011': 'VIV_C_2011', 'AREA': 'AREA', });
lyr_Vialidad_Oreamuno_4.set('fieldAliases', {'RUTA': 'RUTA', 'TIPO': 'TIPO', 'LONGITUD': 'LONGITUD', 'DE_RUTA': 'DE_RUTA', 'URBANOS': 'URBANOS', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_ASADAS_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Región': 'Región', 'Ente_Opera': 'Ente_Opera', 'PROVINCIA': 'PROVINCIA', 'Cantón': 'Cantón', 'DISTRITO': 'DISTRITO', '______DATO': '______DATO', 'Teléfono_': 'Teléfono_', 'Fax': 'Fax', 'Correo': 'Correo', 'Dirección': 'Dirección', '______COOR': '______COOR', 'Norte': 'Norte', 'Este': 'Este', '______CARA': '______CARA', 'Local_Aten': 'Local_Aten', 'Tipo_Admin': 'Tipo_Admin', 'Tipo_Ubica': 'Tipo_Ubica', 'Calificaci': 'Calificaci', 'Dominio': 'Dominio', 'HasthTAG': 'HasthTAG', '______SERV': '______SERV', 'Fijo_Domic': 'Fijo_Domic', 'Medido_Dom': 'Medido_Dom', 'Fijo_Empre': 'Fijo_Empre', 'Medido_Emp': 'Medido_Emp', 'Hidrantes': 'Hidrantes', 'Servicios_': 'Servicios_', 'Poblacion_': 'Poblacion_', '______SE_1': '______SE_1', 'Serv_Proy_': 'Serv_Proy_', 'Pobl_Abast': 'Pobl_Abast', '______COMU': '______COMU', 'IDEO': 'IDEO', 'PKENTEOPER': 'PKENTEOPER', 'Comunidade': 'Comunidade', 'Cantidad_F': 'Cantidad_F', 'Total_Caud': 'Total_Caud', 'Caudal_Req': 'Caudal_Req', 'Aprobados_': 'Aprobados_', 'Longitud': 'Longitud', 'Latitud': 'Latitud', '___COORDEN': '___COORDEN', 'IMAGEN_ENT': 'IMAGEN_ENT', });
lyr_Rios_Oreamuno_6.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CATEGORIA': 'CATEGORIA', });
lyr_Rutas_Autobus_Oreamuno_7.set('fieldAliases', {'id': 'id', 'ruta': 'ruta', 'identifica': 'identifica', 'descripcio': 'descripcio', 'sentido': 'sentido', });
lyr_Fallas_Oreamuno_8.set('fieldAliases', {'FID_': 'FID_', 'ENTITY': 'ENTITY', 'LEVEL': 'LEVEL', 'LAYER': 'LAYER', 'COLOR': 'COLOR', 'LINETYPE': 'LINETYPE', 'ELEVATION': 'ELEVATION', 'LINEWT': 'LINEWT', 'REFNAME': 'REFNAME', });
lyr_Coronas_deslizamiento_Oreamuno_9.set('fieldAliases', {'FID_': 'FID_', 'ENTITY': 'ENTITY', 'LEVEL': 'LEVEL', 'LAYER': 'LAYER', 'COLOR': 'COLOR', 'LINETYPE': 'LINETYPE', 'ELEVATION': 'ELEVATION', 'LINEWT': 'LINEWT', 'REFNAME': 'REFNAME', });
lyr_CapcidadSuelo_Oreamuno_13.set('fieldAliases', {'Cap_uso': 'Cap_uso', 'ID': 'ID', });
lyr_Shape_Oreamuno_14.set('fieldAliases', {'FID': 'FID', });
lyr_Zona_Agropecuaria_15.set('fieldAliases', {'FID': 'FID', });
lyr_Zona_Agricola_16.set('fieldAliases', {'Cap_uso': 'Cap_uso', 'ID': 'ID', 'id_2': 'id_2', });
lyr_Uso_Residencial_17.set('fieldAliases', {'Tipo': 'Tipo', 'Tipo_2': 'Tipo_2', });
lyr_Uso_Mixto_18.set('fieldAliases', {'id': 'id', });
lyr_Uso_Comercial_19.set('fieldAliases', {'id': 'id', });
lyr_Publico_Institucional_20.set('fieldAliases', {'id': 'id', });
lyr_Zona_Industrial_21.set('fieldAliases', {'id': 'id', });
lyr_Crecimiento_Futuro_22.set('fieldAliases', {'id': 'id', });
lyr_Centros_de_poblacion_23.set('fieldAliases', {'id': 'id', });
lyr_AreasSilvestresOreamuno_24.set('fieldAliases', {'codigo': 'codigo', 'nombre_asp': 'nombre_asp', 'cat_manejo': 'cat_manejo', 'estatus': 'estatus', 'siglas_cat': 'siglas_cat', 'nombre_ac': 'nombre_ac', 'siglas_ac': 'siglas_ac', 'descripcio': 'descripcio', 'a_creacion': 'a_creacion', 'n_creacion': 'n_creacion', 'version': 'version', 'area_hecta': 'area_hecta', 'area_km2': 'area_km2', 'a': 'a', });
lyr_Zona_amortiguamiento_25.set('fieldAliases', {'id': 'id', });
lyr_Zona_Proteccion_26.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CATEGORIA': 'CATEGORIA', 'NOMBRE_2': 'NOMBRE_2', 'CATEGORIA_': 'CATEGORIA_', });
lyr_ZonaUrbana_27.set('fieldAliases', {'Tipo': 'Tipo', });
lyr_AnilloGAM_1.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_Inundaciones_Oreamuno_2.set('fieldImages', {'FID_': '', 'ENTITY': '', 'LAYER': '', 'COLOR': '', 'LINETYPE': '', 'ELEVATION': '', 'LINEWT': '', 'REFNAME': '', 'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Distritos_Oreamuno_3.set('fieldImages', {'FID_CENSO_': '', 'PROVINCIA': '', 'NCANTON': '', 'NDISTRITO': '', 'PROV': '', 'CANTON': '', 'DISTRITO': '', 'CODDIST': '', 'POB_1997_M': '', 'POB_1997_H': '', 'POB_2000_H': '', 'POB_2000_M': '', 'VIVIENDA_O': '', 'VIVIENDA_D': '', 'VIVIENDA_C': '', 'POB_2011_M': '', 'POB_2011_H': '', 'VIV_O_2011': '', 'VIV_D_2011': '', 'VIV_C_2011': '', 'AREA': '', });
lyr_Vialidad_Oreamuno_4.set('fieldImages', {'RUTA': '', 'TIPO': '', 'LONGITUD': '', 'DE_RUTA': '', 'URBANOS': '', 'DESCRIPCIO': '', });
lyr_ASADAS_5.set('fieldImages', {'OBJECTID': '', 'Región': '', 'Ente_Opera': '', 'PROVINCIA': '', 'Cantón': '', 'DISTRITO': '', '______DATO': '', 'Teléfono_': '', 'Fax': '', 'Correo': '', 'Dirección': '', '______COOR': '', 'Norte': '', 'Este': '', '______CARA': '', 'Local_Aten': '', 'Tipo_Admin': '', 'Tipo_Ubica': '', 'Calificaci': '', 'Dominio': '', 'HasthTAG': '', '______SERV': '', 'Fijo_Domic': '', 'Medido_Dom': '', 'Fijo_Empre': '', 'Medido_Emp': '', 'Hidrantes': '', 'Servicios_': '', 'Poblacion_': '', '______SE_1': '', 'Serv_Proy_': '', 'Pobl_Abast': '', '______COMU': '', 'IDEO': '', 'PKENTEOPER': '', 'Comunidade': '', 'Cantidad_F': '', 'Total_Caud': '', 'Caudal_Req': '', 'Aprobados_': '', 'Longitud': '', 'Latitud': '', '___COORDEN': '', 'IMAGEN_ENT': '', });
lyr_Rios_Oreamuno_6.set('fieldImages', {'NOMBRE': '', 'CATEGORIA': '', });
lyr_Rutas_Autobus_Oreamuno_7.set('fieldImages', {'id': '', 'ruta': '', 'identifica': '', 'descripcio': '', 'sentido': '', });
lyr_Fallas_Oreamuno_8.set('fieldImages', {'FID_': '', 'ENTITY': '', 'LEVEL': '', 'LAYER': '', 'COLOR': '', 'LINETYPE': '', 'ELEVATION': '', 'LINEWT': '', 'REFNAME': '', });
lyr_Coronas_deslizamiento_Oreamuno_9.set('fieldImages', {'FID_': '', 'ENTITY': '', 'LEVEL': '', 'LAYER': '', 'COLOR': '', 'LINETYPE': '', 'ELEVATION': '', 'LINEWT': '', 'REFNAME': '', });
lyr_CapcidadSuelo_Oreamuno_13.set('fieldImages', {'Cap_uso': 'TextEdit', 'ID': 'TextEdit', });
lyr_Shape_Oreamuno_14.set('fieldImages', {'FID': 'TextEdit', });
lyr_Zona_Agropecuaria_15.set('fieldImages', {'FID': 'TextEdit', });
lyr_Zona_Agricola_16.set('fieldImages', {'Cap_uso': 'TextEdit', 'ID': 'TextEdit', 'id_2': 'TextEdit', });
lyr_Uso_Residencial_17.set('fieldImages', {'Tipo': 'TextEdit', 'Tipo_2': 'TextEdit', });
lyr_Uso_Mixto_18.set('fieldImages', {'id': 'TextEdit', });
lyr_Uso_Comercial_19.set('fieldImages', {'id': 'TextEdit', });
lyr_Publico_Institucional_20.set('fieldImages', {'id': 'TextEdit', });
lyr_Zona_Industrial_21.set('fieldImages', {'id': 'TextEdit', });
lyr_Crecimiento_Futuro_22.set('fieldImages', {'id': 'TextEdit', });
lyr_Centros_de_poblacion_23.set('fieldImages', {'id': 'TextEdit', });
lyr_AreasSilvestresOreamuno_24.set('fieldImages', {'codigo': 'TextEdit', 'nombre_asp': 'TextEdit', 'cat_manejo': 'TextEdit', 'estatus': 'TextEdit', 'siglas_cat': 'TextEdit', 'nombre_ac': 'TextEdit', 'siglas_ac': 'TextEdit', 'descripcio': 'TextEdit', 'a_creacion': 'TextEdit', 'n_creacion': 'TextEdit', 'version': 'TextEdit', 'area_hecta': 'TextEdit', 'area_km2': 'TextEdit', 'a': 'TextEdit', });
lyr_Zona_amortiguamiento_25.set('fieldImages', {'id': 'TextEdit', });
lyr_Zona_Proteccion_26.set('fieldImages', {'NOMBRE': 'TextEdit', 'CATEGORIA': 'TextEdit', 'NOMBRE_2': 'TextEdit', 'CATEGORIA_': 'TextEdit', });
lyr_ZonaUrbana_27.set('fieldImages', {'Tipo': 'TextEdit', });
lyr_AnilloGAM_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Inundaciones_Oreamuno_2.set('fieldLabels', {'FID_': 'no label', 'ENTITY': 'no label', 'LAYER': 'no label', 'COLOR': 'no label', 'LINETYPE': 'no label', 'ELEVATION': 'no label', 'LINEWT': 'no label', 'REFNAME': 'no label', 'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Distritos_Oreamuno_3.set('fieldLabels', {'FID_CENSO_': 'no label', 'PROVINCIA': 'no label', 'NCANTON': 'no label', 'NDISTRITO': 'no label', 'PROV': 'no label', 'CANTON': 'no label', 'DISTRITO': 'no label', 'CODDIST': 'no label', 'POB_1997_M': 'no label', 'POB_1997_H': 'no label', 'POB_2000_H': 'no label', 'POB_2000_M': 'no label', 'VIVIENDA_O': 'no label', 'VIVIENDA_D': 'no label', 'VIVIENDA_C': 'no label', 'POB_2011_M': 'no label', 'POB_2011_H': 'no label', 'VIV_O_2011': 'no label', 'VIV_D_2011': 'no label', 'VIV_C_2011': 'no label', 'AREA': 'no label', });
lyr_Vialidad_Oreamuno_4.set('fieldLabels', {'RUTA': 'no label', 'TIPO': 'no label', 'LONGITUD': 'no label', 'DE_RUTA': 'no label', 'URBANOS': 'no label', 'DESCRIPCIO': 'no label', });
lyr_ASADAS_5.set('fieldLabels', {'OBJECTID': 'no label', 'Región': 'no label', 'Ente_Opera': 'no label', 'PROVINCIA': 'no label', 'Cantón': 'no label', 'DISTRITO': 'no label', '______DATO': 'no label', 'Teléfono_': 'no label', 'Fax': 'no label', 'Correo': 'no label', 'Dirección': 'no label', '______COOR': 'no label', 'Norte': 'no label', 'Este': 'no label', '______CARA': 'no label', 'Local_Aten': 'no label', 'Tipo_Admin': 'no label', 'Tipo_Ubica': 'no label', 'Calificaci': 'no label', 'Dominio': 'no label', 'HasthTAG': 'no label', '______SERV': 'no label', 'Fijo_Domic': 'no label', 'Medido_Dom': 'no label', 'Fijo_Empre': 'no label', 'Medido_Emp': 'no label', 'Hidrantes': 'no label', 'Servicios_': 'no label', 'Poblacion_': 'no label', '______SE_1': 'no label', 'Serv_Proy_': 'no label', 'Pobl_Abast': 'no label', '______COMU': 'no label', 'IDEO': 'no label', 'PKENTEOPER': 'no label', 'Comunidade': 'no label', 'Cantidad_F': 'no label', 'Total_Caud': 'no label', 'Caudal_Req': 'no label', 'Aprobados_': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', '___COORDEN': 'no label', 'IMAGEN_ENT': 'no label', });
lyr_Rios_Oreamuno_6.set('fieldLabels', {'NOMBRE': 'no label', 'CATEGORIA': 'no label', });
lyr_Rutas_Autobus_Oreamuno_7.set('fieldLabels', {'id': 'no label', 'ruta': 'no label', 'identifica': 'no label', 'descripcio': 'no label', 'sentido': 'no label', });
lyr_Fallas_Oreamuno_8.set('fieldLabels', {'FID_': 'no label', 'ENTITY': 'no label', 'LEVEL': 'no label', 'LAYER': 'no label', 'COLOR': 'no label', 'LINETYPE': 'no label', 'ELEVATION': 'no label', 'LINEWT': 'no label', 'REFNAME': 'no label', });
lyr_Coronas_deslizamiento_Oreamuno_9.set('fieldLabels', {'FID_': 'no label', 'ENTITY': 'no label', 'LEVEL': 'no label', 'LAYER': 'no label', 'COLOR': 'no label', 'LINETYPE': 'no label', 'ELEVATION': 'no label', 'LINEWT': 'no label', 'REFNAME': 'no label', });
lyr_CapcidadSuelo_Oreamuno_13.set('fieldLabels', {'Cap_uso': 'no label', 'ID': 'no label', });
lyr_Shape_Oreamuno_14.set('fieldLabels', {'FID': 'no label', });
lyr_Zona_Agropecuaria_15.set('fieldLabels', {'FID': 'no label', });
lyr_Zona_Agricola_16.set('fieldLabels', {'Cap_uso': 'no label', 'ID': 'no label', 'id_2': 'no label', });
lyr_Uso_Residencial_17.set('fieldLabels', {'Tipo': 'no label', 'Tipo_2': 'no label', });
lyr_Uso_Mixto_18.set('fieldLabels', {'id': 'no label', });
lyr_Uso_Comercial_19.set('fieldLabels', {'id': 'no label', });
lyr_Publico_Institucional_20.set('fieldLabels', {'id': 'no label', });
lyr_Zona_Industrial_21.set('fieldLabels', {'id': 'no label', });
lyr_Crecimiento_Futuro_22.set('fieldLabels', {'id': 'no label', });
lyr_Centros_de_poblacion_23.set('fieldLabels', {'id': 'no label', });
lyr_AreasSilvestresOreamuno_24.set('fieldLabels', {'codigo': 'no label', 'nombre_asp': 'no label', 'cat_manejo': 'no label', 'estatus': 'no label', 'siglas_cat': 'no label', 'nombre_ac': 'no label', 'siglas_ac': 'no label', 'descripcio': 'no label', 'a_creacion': 'no label', 'n_creacion': 'no label', 'version': 'no label', 'area_hecta': 'no label', 'area_km2': 'no label', 'a': 'no label', });
lyr_Zona_amortiguamiento_25.set('fieldLabels', {'id': 'no label', });
lyr_Zona_Proteccion_26.set('fieldLabels', {'NOMBRE': 'no label', 'CATEGORIA': 'no label', 'NOMBRE_2': 'no label', 'CATEGORIA_': 'no label', });
lyr_ZonaUrbana_27.set('fieldLabels', {'Tipo': 'no label', });
lyr_ZonaUrbana_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});