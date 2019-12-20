const ductTemperatureSensor = `{
  "dataTypes": {
    "ducttemperature": {
      "attrDisplayName": "Duct Temp",
      "icon": "svg_Pressure",
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
      "key": "ducttemperature",
      "lowerbound": "",
      "upperbound": ""
    }
  ]
}`;

export default ductTemperatureSensor;
