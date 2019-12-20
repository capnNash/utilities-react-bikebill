const humiditySensor = `{
  "dataTypes": {
    "dewpoint": {
      "attrDisplayName": "Dew Point Temp",
      "icon": "svg_Temperature",
      "unitSymbol": "°F",
      "units": "Fahrenheit"
    },
    "humidity": {
      "attrDisplayName": "Moisture",
      "icon": "svg_Humidity",
      "unitSymbol": "%",
      "units": "Percentage"
    },
    "temperature": {
      "attrDisplayName": "Temp",
      "icon": "svg_Temperature",
      "unitSymbol": "°F",
      "units": "Fahrenheit"
    },
    "signal": {
      "attrDisplayName": "Signal",
      "icon": "svg_Signal",
      "unitSymbol": "%",
      "units": "Percentage"
    },
    "state": {
      "attrDisplayName": "State",
      "icon": "svg_State",
      "unitSymbol": "%",
      "units": "Percentage"
    },
    "battery": {
      "attrDisplayName": "Battery",
      "icon": "svg_Battery",
      "unitSymbol": "%",
      "units": "Percentage"
    }
  },
  "thresholds": [
    {
      "key": "dewpoint",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "temperature",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "humidity",
      "lowerbound": "",
      "upperbound": ""
    }
  ]
}`;

export default humiditySensor;

