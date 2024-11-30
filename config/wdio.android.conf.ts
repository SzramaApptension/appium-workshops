import type { Options, Capabilities } from '@wdio/types'
import {config as baseConfig } from './wdio.appium.conf'

const baseCapabilities =
  baseConfig.capabilities as Capabilities.RemoteCapabilities[]

export const config: Options.Testrunner = {...baseConfig,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel XL API 32',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'apps/android_wiki.apk',
        'appium:appWaitActivity': '*',
        'appium:autoGrantPermissions': true,
        ...baseCapabilities[0]
    }],
}