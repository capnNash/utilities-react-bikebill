const differentialPressureSensor = `{
  "dataTypes": {
    "pascal": {
      "attrDisplayName": "Pressure",
      "icon": "svg_Pressure",
      "unitSymbol": "Pa",
      "units": "Pascal"
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
      "key": "pascal",
      "lowerbound": "",
      "upperbound": ""
    }
  ]
}`;

export default differentialPressureSensor;
