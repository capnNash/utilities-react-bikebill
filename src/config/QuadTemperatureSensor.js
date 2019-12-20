const quadTemperatureSensor = `{
  "dataTypes": {
    "probe1temperature": {
      "attrDisplayName": "Outside Air",
      "icon": "svg_Temperature",
      "unitSymbol": "°F",
      "units": "Fahrenheit"
    },
    "probe2temperature": {
      "attrDisplayName": "Inside Air",
      "icon": "svg_Temperature",
      "unitSymbol": "°F",
      "units": "Fahrenheit"
    },
    "probe3temperature": {
      "attrDisplayName": "Mixed Air",
      "icon": "svg_Temperature",
      "unitSymbol": "°F",
      "units": "Fahrenheit"
    },
    "probe4temperature": {
      "attrDisplayName": "Outlet",
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
      "key": "probe1temperature",
      "lowerbound": "6",
      "upperbound": "7"
    },
    {
      "key": "probe2temperature",
      "lowerbound": "1",
      "upperbound": "2"
    },
    {
      "key": "probe3temperature",
      "lowerbound": "2",
      "upperbound": "3"
    },
    {
      "key": "probe4temperature",
      "lowerbound": "4",
      "upperbound": "5"
    }
  ]
}`;

export default quadTemperatureSensor;