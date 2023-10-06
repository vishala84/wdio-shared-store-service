const {config} = require('./wdio.conf');


// Appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        automationName: 'UiAutomator2',
        noReset: true,
        appPackage: 'appPackage',
        appActivity: 'appActivity',
        deviceName: 'Pixel 6',
        platformVersion: '11',
        udid: 'udid',
        path: '/',
    },
];

// ============
// Specs
// ============
config.specs = [
    './src/features/**/*.feature',
];

/**
 * Login Details - Email and password for id3 login
 */
export const credentials={
    user1:{
        email1 : '',
        password1: ''
    },
    user2:{
        email2: '',
        password2: ''
    }
}

exports.config = config;
