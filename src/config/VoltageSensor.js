const voltageSensor = `{
  "dataTypes": {
    "voltage": {
      "attrDisplayName": "Voltage",
      "icon": "svg_Generic",
      "unitSymbol": "V",
      "units": "Volts"
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
      "key": "voltage",
      "lowerbound": "",
      "upperbound": ""
    }
  ]
}`;

export default voltageSensor;