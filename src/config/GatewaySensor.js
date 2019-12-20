const gatewaySensor = `{
  "dataTypes": {
    "FIX_ME!": {
      "attrDisplayName": "Metric 1",
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
      "key": "FIX_ME!",
      "lowerbound": "",
      "upperbound": ""
    }
  ]
}`;

export default gatewaySensor;

