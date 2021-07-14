require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-color-picker-ios"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "9.0", :osx => "10.9" }
  s.source       = { :git => "https://github.com/Naturalclar/react-native-color-picker-ios.git", :tag => "#{s.version}" }

  s.ios.source_files = "ios/**/*.{h,m,mm,swift}"
  s.osx.source_files = "macos/**/*.{h,m,mm,swift}"

  s.dependency "React"
end
