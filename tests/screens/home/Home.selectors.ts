import BaseClass from "../baseClass";

export class HomeSelectors extends BaseClass {
    // get LoginBtn(){return $('~Login')}
    get FeaturedHeader() {return this.getSelector('**/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeCollectionView/XCUIElementTypeOther[1]', 'org.wikipedia.alpha:id/view_card_header_title')}
}