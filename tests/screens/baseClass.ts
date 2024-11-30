export default class BaseClass {
    appName: string
    constructor(){
        this.appName = 'WebDriveIO'
    }

getPlatformSelector(selectorIOS: string, selectorAndroid: string) {
return driver.isAndroid? selectorAndroid : selectorIOS    
}

    getSelector(IOSPredicate: string, AndroidPredicate: string, method='resourceId') {
        const selectorIOS = `-ios predicate string:${IOSPredicate}`
        //driver.findElements(AppiumBy.iOSNsPredicateString("isVisible == 1"))
        //`$(~${IOSPredicate})`
        const selectorAndroid = `android=new UiSelector().${method}("${AndroidPredicate}")`
        return $(this.getPlatformSelector(selectorIOS, selectorAndroid))
    }
}