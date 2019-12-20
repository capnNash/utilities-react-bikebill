// FIXME: The AirSpeedSensor does not have a name in it's data. See "FIX_ME!" below.

const airSpeedSensorConfig = `{
  "dataTypes": {
    "FIX_ME!": {
      "attrDisplayName": "Air Speed",
      "icon": "svg_AirSpeed",
      "unitSymbol": "m/s",
      "units": "Meters per second"
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
      "key": "THRESHOLD_KEY",
      "lowerbound": "",
      "upperbound": ""
    }
  ]
}`;

export default airSpeedSensorConfig;