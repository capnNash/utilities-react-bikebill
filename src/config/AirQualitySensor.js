const airQualitySensor = `{ 
  "dataTypes":{  
     "micrograms":{  
        "attrDisplayName":"Air Quality",
        "icon":"svg_AirQuality",
        "unitSymbol":"μg/m^3",
        "units":"Micrograms per cubic meter"
     },
     "signal":{  
        "attrDisplayName":"Signal",
        "icon":"svg_Signal",
        "unitSymbol":"%",
        "units":"Percentage"
     },
     "state":{  
        "attrDisplayName":"State",
        "icon":"svg_State",
        "unitSymbol":"%",
        "units":"Percentage"
     },
     "battery":{  
        "attrDisplayName":"Battery",
        "icon":"svg_Battery",
        "unitSymbol":"%",
        "units":"Percentage"
     }
  },
  "thresholds":[  
     {  
        "key":"micrograms",
        "lowerbound":"2",
        "upperbound":"3"
     }
  ]
}`;

export default airQualitySensor;
