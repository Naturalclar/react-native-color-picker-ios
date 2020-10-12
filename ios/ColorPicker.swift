@available(iOS 14.0, *)
@objc(RNCColorPicker)
class ColorPickerProxy: UIViewController, UIColorPickerViewControllerDelegate {
        
    var picker: UIColorPickerViewController!
    var options: Dictionary = ["supportsAlpha":false]

    @objc
    func showColorPicker(_ options:NSDictionary){
        self.options["supportsAlpha"]=(options["supportsAlpha"] as? NSNumber) == 1 ? true : false
        
        DispatchQueue.main.async {
            self.launchColorPicker()
        }
    }
    
    func launchColorPicker() {
        let supportsAlpha:Bool = self.options["supportsAlpha"] ?? false
        self.picker = UIColorPickerViewController()
        self.picker.delegate = self
        self.picker.supportsAlpha=supportsAlpha
        
        let root = RCTPresentedViewController()
        root!.present(self.picker, animated: true, completion: nil)

    }
}

