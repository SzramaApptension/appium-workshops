import BaseClass from "../baseClass";

export class OnboardingSelectors extends BaseClass {
    get ContinueBtn() {return this.getSelector('name == "Next" AND label == "Next" AND value == "Next"', 'org.wikipedia.alpha:id/fragment_onboarding_forward_button')}
    get GetStartedBtn() {return this.getSelector('name == "Get started" AND label == "Get started" AND type == "XCUIElementTypeButton"', 'org.wikipedia.alpha:id/fragment_onboarding_done_button')}
}

