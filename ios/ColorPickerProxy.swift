import SwiftUI

@available(iOS 13.0, *)
@objc(RNCColorPicker)
class ColorPickerProxy: RCTViewManager {
    override func view() -> UIView {
        let vc = UIHostingController(rootView: ColorPicker())
        return vc.view
    }
}
