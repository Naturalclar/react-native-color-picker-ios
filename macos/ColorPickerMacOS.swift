import AppKit

@objc(RNCColorPicker)
class RNCColorPicker: NSObject, NSWindowDelegate {
    var colorPanel: NSColorPanel?

    var callback: RCTResponseSenderBlock?
    var color: NSColor?
    var supportsAlpha: Bool?
    
    @objc static func requiresMainQueueSetup() -> Bool {
        return true
    }
    
    @objc func showColorPicker(_ options:NSDictionary, callback:@escaping RCTResponseSenderBlock) {
        DispatchQueue.main.async {
            let colorPanel = NSColorPanel.shared
            if options["supportsAlpha"] as? NSNumber == 1 {
                colorPanel.showsAlpha = true
            } else {
                colorPanel.showsAlpha = false
            }
            colorPanel.color = RCTConvert.nsColor(options["initialColor"])
            colorPanel.setTarget(self)
            colorPanel.setAction(#selector(self.changeColor))
            colorPanel.makeKeyAndOrderFront(self)
            colorPanel.delegate = self
            self.callback = callback
            self.colorPanel = colorPanel
        }
    }
    
    @objc func changeColor(_ sender: NSColorPanel?) {
        if let cp = sender {
            self.color = cp.color
        }
    }
    
    func windowWillClose(_ notification: Notification) {
        if let selectedColor = color?.cgColor, let callback = self.callback {
            let colorString = RCTColorToHexString(selectedColor)
            callback([colorString])
            self.colorPanel?.delegate = nil
            self.callback = nil
            self.colorPanel = nil
        }
    }
}
