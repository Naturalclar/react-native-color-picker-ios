#import <React/RCTBridgeModule.h>

#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(RNCColorPicker, NSObject)

RCT_EXTERN_METHOD(showColorPicker:(NSDictionary*)options callback:(RCTResponseSenderBlock*)callback)

@end

