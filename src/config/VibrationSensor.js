const vibrationSensor = `{
  "dataTypes": {
    "dutycycle": {
      "attrDisplayName": "Duty Cycle",
      "icon": "svg_Frequency",
      "unitSymbol": "%",
      "units": "Percentage"
    },
    "x-axisfrequency": {
      "attrDisplayName": "x freq",
      "icon": "svg_Frequency",
      "unitSymbol": "Hz",
      "units": "Hertz"
    },
    "x-axisspeed": {
      "attrDisplayName": "x speed",
      "icon": "svg_Speed",
      "unitSymbol": "mm/s",
      "units": "Millimeter per second"
    },
    "y-axisfrequency": {
      "attrDisplayName": "y freq",
      "icon": "svg_Frequency",
      "unitSymbol": "Hz",
      "units": "Hertz"
    },
    "y-axisspeed": {
      "attrDisplayName": "y speed",
      "icon": "svg_Speed",
      "unitSymbol": "mm/s",
      "units": "Millimeter per second"
    },
    "z-axisfrequency": {
      "attrDisplayName": "z freq",
      "icon": "svg_Frequency",
      "unitSymbol": "Hz",
      "units": "Hertz"
    },
    "z-axisspeed": {
      "attrDisplayName": "z speed",
      "icon": "svg_Speed",
      "unitSymbol": "mm/s",
      "units": "Millimeter per second"
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
      "key": "y-axisspeed",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "z-axisspeed",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "x-axisfrequency",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "y-axisfrequency",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "x-axisspeed",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "dutycycle",
      "lowerbound": "",
      "upperbound": ""
    },
    {
      "key": "z-axisfrequency",
      "lowerbound": "",
      "upperbound": ""
    }
  ]
}`;

export default vibrationSensor;