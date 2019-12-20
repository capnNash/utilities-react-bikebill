//FIXME: set the units and unit symbol for totalcurrentaccumulation below.

const threePhaseCurrentMeter = `{
  "dataTypes": {
    "phase1average": {
      "attrDisplayName": "P1 Avg",
      "icon": "svg_Mean",
      "unitSymbol": "A",
      "units": "Amperes"
    },
    "phase1duty": {
      "attrDisplayName": "P1 Duty",
      "icon": "svg_Generic",
      "unitSymbol": "%",
      "units": "Percentage"
    },
    "phase1max": {
      "attrDisplayName": "P1 Max",
      "icon": "svg_Max",
      "unitSymbol": "A",
      "units": "Amperes"
    },
    "phase1min": {
      "attrDisplayName": "P1 Min",
      "icon": "svg_Min",
      "unitSymbol": "A",
      "units": "Amperes"
    },
    "phase2average": {
      "attrDisplayName": "P2 Avg",
      "icon": "svg_Mean",
      "unitSymbol": "A",
      "units": "Amperes"
    },
    "phase2duty": {
      "attrDisplayName": "P2 Duty",
      "icon": "svg_Generic",
      "unitSymbol": "%",
      "units": "Percentage"
    },
    "phase2max": {
      "attrDisplayName": "P2 Max",
      "icon": "svg_Max",
      "unitSymbol": "A",
      "units": "Amperes"
    },
    "phase2min": {
      "attrDisplayName": "P2 Min",
      "icon": "svg_Min",
      "unitSymbol": "A",
      "units": "Amperes"
    },
    "phase3average": {
      "attrDisplayName": "P2 Avg",
      "icon": "svg_Mean",
      "unitSymbol": "A",
      "units": "Amperes"
    },
    "phase3duty": {
      "attrDisplayName": "P2 Duty",
      "icon": "svg_Generic",
      "unitSymbol": "%",values working
      "units": "Percentage"
    },
    "phase3max": {
      "attrDisplayName": "P3 Max",
      "icon": "svg_Max",
      "unitSymbol": "A",
      "units": "Amperes"
    },
    "phase3min": {
      "attrDisplayName": "P3 Min",
      "icon": "svg_Min",
      "unitSymbol": "A",
      "units": "Amperes"
    },
    "totalcurrentaccumulation": {
      "attrDisplayName": "Total",
      "icon": "svg_Generic",
      "unitSymbol": "Ah",
      "units": "Ampere Hour"
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
      "key": "phase3max",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "phase2max",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "phase1duty",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "phase1max",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "phase3duty",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "totalcurrentaccumulation",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "phase3min",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "phase1min",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "phase2min",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "phase3average",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "phase2duty",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "phase2average",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "phase1average",
      "lowerbound": "",
      "upperbound": ""
    }
  ]
}`;

export default threePhaseCurrentMeter;
