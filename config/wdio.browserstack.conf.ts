import { config as baseConfig } from './wdio.shared.conf'
import 'dotenv/config'

const isIOS = process.env.PLATFORM == 'ios'? true: false

export const config = {
    ...baseConfig,
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    services: [
        ['browserstack', {
        app: isIOS? 'apps/ios_wiki.zip':'./apps/android_wiki.apk',
         buildIdentifier: '#run ${BUILD_NUMBER} #${DATE_TIME}'
        }]
    ],
    capabilities: isIOS? [{
        "platformName":  "ios",
        "appium:platformVersion" : "18",
        "appium:deviceName": "iPhone 16",
        "bstack:options" : {
            "debug" : "true", 
            "networkLogs" : "true",
            "projectName" : "Wikipedia",
            "buildName" : "build 1.0.1"
        }
    }]:[{
        "platformName":  "android",
        "appium:platformVersion" : "12.0",
        "appium:deviceName": "Samsung Galaxy S22 Ultra",
        "bstack:options" : {
            "debug" : "true", 
            "networkLogs" : "true",
            "projectName" : "Wikipedia",
            "buildName" : "build 1.0.1"
        }
    }]
}