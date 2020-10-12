@available(iOS 14.0, *)
@objc(RNCColorPicker)
class ColorPickerProxy: UIViewController, UIColorPickerViewControllerDelegate {
        
    var picker: UIColorPickerViewController!
    var supportsAlpha:Bool = false
    var initialColor:UIColor!

    @objc
    func showColorPicker(_ options:NSDictionary){
        self.supportsAlpha=(options["supportsAlpha"] as? NSNumber) == 1 ? true : false
        self.initialColor=RCTConvert.uiColor(options["initialColor"]) ?? UIColor(ciColor: .black)
                                                        
        DispatchQueue.main.async {
            self.launchColorPicker()
        }
    }
    
    func launchColorPicker() {
        self.picker = UIColorPickerViewController()
        self.picker.delegate = self
                
        self.picker.supportsAlpha=self.supportsAlpha
        self.picker.selectedColor=self.initialColor
        
        let root = RCTPresentedViewController()
        root!.present(self.picker, animated: true, completion: nil)

    }
}

