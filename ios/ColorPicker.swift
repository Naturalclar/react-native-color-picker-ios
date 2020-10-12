import SwiftUI

@available(iOS 14.0, *)
@objc(RNCColorPicker)
class ColorPickerProxy: UIViewController, UIColorPickerViewControllerDelegate {
        
    var picker: UIColorPickerViewController!

    override func viewDidLoad() {
        super.viewDidLoad()
        print("View Controller loaded...")
    }
    @objc
    func showColorPicker(){
        DispatchQueue.main.async {
            self.launchColorPicker()
        }
    }
    
    func launchColorPicker() {
        self.picker = UIColorPickerViewController()
        self.picker.delegate = self
        
        let root = RCTPresentedViewController()
        root!.present(self.picker, animated: true, completion: nil)

    }
}

