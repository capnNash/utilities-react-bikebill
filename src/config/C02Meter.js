const co2Meter = `{
  "dataTypes": {
    "instantaneous": {
      "attrDisplayName": "Instantaneous value",
      "icon": "svg_Inst",
      "unitSymbol": "ppm",
      "units": "Parts per million"
    },
    "twa": {
      "attrDisplayName": "Average value",
      "icon": "svg_Mean",
      "unitSymbol": "ppm",
      "units": "Parts per million"
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
      "key": "instantaneous",
      "lowerbound": "2",
      "upperbound": "3"
    },
    {
      "key": "twa",
      "lowerbound": "4",
      "upperbound": "5"
    }
  ]
}`;

export default co2Meter;
