import airQualitySensor from './config/AirQualitySensor';
import airSpeedSensorConfig from './config/AirSpeedSensor';
import co2Meter from './config/C02Meter';
import differentialPressureSensor from './config/DifferentialPressureSensor';
import ductTemperatureSensor from './config/DuctTemperatureSensor';
import humiditySensor from './config/HumiditySensor';
import gatewaySensor from './config/GatewaySensor';
import quadTemperatureSensor from './config/QuadTemperatureSensor';
import threePhaseCurrentMeter from './config/ThreePhaseCurrentMeter';
import vibrationSensor from './config/VibrationSensor';
import voltageSensor from './config/VoltageSensor';

export default class Sensor {
  
  constructor(rawSensor) {
    if (rawSensor.configdata && rawSensor.configData !== "{}") {
      this.configData = rawSensor.configdata;
    } else {
      switch (rawSensor.type) {
      case 'AirQuality':
        this.configData = airQualitySensor;
        break;
      case 'AirSpeed':
        this.configData = airSpeedSensorConfig;
        break;
      case 'CO2Meter':
        this.configData = co2Meter;  
        break;
      case 'DifferentialPressure':
        this.configData = differentialPressureSensor;  
        break;
      case 'DuctTemperature':
        this.configData = ductTemperatureSensor;  
        break;  
      case 'Humidity':
        this.configData = humiditySensor;
        break;
      case 'Gateway':
        this.configData = gatewaySensor;
        break;
      case 'QuadTemperature':
        this.configData = quadTemperatureSensor;  
        break; 
      case 'ThreePhaseCurrentMeter':
        this.configData = threePhaseCurrentMeter;
        break;
      case 'Vibration':
        this.configData = vibrationSensor;
        break;
      case 'Voltage':
        this.configData = voltageSensor;
        break;
      default:
        this.configData = rawSensor.configdata;
      }
    }
    this.configDataObj = JSON.parse(this.configData);
    this.allowCertificateAuth = rawSensor.allow_certificate_auth;
    this.allowKeyAuth = rawSensor.allow_key_auth;
    this.certificate = rawSensor.certificate;
    this.createdDate = rawSensor.created_date;
    this.data = rawSensor.data;
    this.dataObj = rawSensor.data ? JSON.parse(rawSensor.data) : undefined;
    this.dataSheetUrl = rawSensor.data_sheet_url;
    this.dataTimestamp = rawSensor.datatimestamp;
    this.description = rawSensor.description;
    this.deviceKey = rawSensor.device_key;
    this.enabled = rawSensor.enabled; //boolean
    this.hasKeys = rawSensor.has_keys; //boolean
    this.lastActiveDate = rawSensor.last_active_date;
    this.location = rawSensor.location;
    this.manufacturer = rawSensor.manufacturer;
    this.modelName = rawSensor.modelname;
    this.name = rawSensor.name;
    this.partNumber = rawSensor.partnumber;
    this.sensorId = rawSensor.sensorid;
    this.sensorTimestamp = rawSensor.sensortimestamp;
    this.signal = rawSensor.signal;
    this.state = rawSensor.state;
    this.systemKey = rawSensor.system_key;
    this.type = rawSensor.type;
    this.typeImage = '../../assets/img/svg/GenericSensor.svg';
    this.voltage = rawSensor.voltage;
  }

  getDisplayName = () => {
    if (this.configDataObj.displayName) {
      return this.configDataObj.displayName;
    } else if( this.configDataObj.deviceName) {
      return this.configDataObj.deviceName;
    }
    return this.name;
  }

  getDeviceId = () => {
    if (this.configDataObj.deviceId) {
      return this.configDataObj.deviceId;
    }
    return this.deviceId;
  } 

  getFrequency= () => {
    if (this.configDataObj.frequency) {
      return this.configDataObj.frequency;
    }
    return undefined;
  }

  getMyDataDisplayName = (key) => {
    const myConfigDataTypes = this.configDataObj.dataTypes;
    if (myConfigDataTypes.hasOwnProperty(key)) {
      return myConfigDataTypes[key].attrDisplayName;
    }
    return key;
  }

  getMyIcon = (key) => {
    const myConfigDataTypes = this.configDataObj.dataTypes;
    if (myConfigDataTypes.hasOwnProperty(key)) {
      return myConfigDataTypes[key].icon;
    }
    return key;
  }

  getMyUnitSymbol = (key) => {
    const myConfigDataTypes = this.configDataObj.dataTypes;
    if (myConfigDataTypes.hasOwnProperty(key)) {
      return myConfigDataTypes[key].unitSymbol;
    }
    return key;
  }

  getMyUnits = (key) => {
    const myConfigDataTypes = this.configDataObj.dataTypes;
    if (myConfigDataTypes.hasOwnProperty(key)) {
      return myConfigDataTypes[key].attrUnits;
    }
    return key;
  }

  getMetrics = () => {
    if (this.voltage === undefined) {
      return {};
    }

    const metricsList = ['battery', 'signal', 'state'];
    const myConfigDataTypes = this.configDataObj.dataTypes;

    return metricsList.map( (key) => {
      const myMetrics = {};
      myMetrics['attrDisplayName'] = myConfigDataTypes[key].attrDisplayName;
      myMetrics['icon'] = myConfigDataTypes[key].icon;
      myMetrics['unitSymbol'] = myConfigDataTypes[key].unitSymbol;
      myMetrics['units'] = myConfigDataTypes[key].units;
      
      // had do do this long-hand because we have voltage but want battery.
      switch (key) {
      case 'battery':
        myMetrics['value'] = this.voltage;
        break;
      case 'signal':
        myMetrics['value'] = this.signal;
        break;
      case 'state':
        myMetrics['state'] = this.state;
        break;
      default:
        myMetrics['value'] = undefined;
      } 

      return myMetrics;
    });
    
  }

  getData = () => {
    if (this.dataObj === undefined) {
      return {};
    }
    const myConfigDataTypes = this.configDataObj.dataTypes;
      
    return Object.keys(this.dataObj).map( (key) => {
      const myData = {};
      myData['attrDisplayName'] = this.getMyDataDisplayName(key);
      myData['icon'] = this.getMyIcon(key);
      myData['unitSymbol'] = this.getMyUnitSymbol(key);
      myData['units'] = this.getMyUnitSymbol(key);
        
      //todo: Need some smarter rounding logic here
      const value= this.dataObj[key];
      if (myConfigDataTypes[key].units === 'Fahrenheit') {
        myData['value'] = this.celsiusToFahrenheit(value);
      } else {
        myData['value'] = value;
      }
      return myData;
    }); 
  }

  celsiusToFahrenheit = celsius => celsius * 9 / 5 + 32;
  fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

}
