function getVideoCardInfo() {
    const gl = document.createElement('canvas').getContext('webgl');

    if (!gl) {
        return {
            error: "no webgl",
        };
    }

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');

    if (debugInfo) {
        return {
            vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
            renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
        };
    }

    return {
        error: "no WEBGL_debug_renderer_info",
    };
}




export default async function antibot() {
    //GPU
    let graphicsCardModel = await getVideoCardInfo().renderer
    let graphicsCardVendor = await getVideoCardInfo().vendor
    
    //Navigator
    let userAgentIndentifier = navigator.userAgent;
    let isWebDriver = navigator.webdriver;

    //Window
    let screenHeight = window.screen.height
    let screenWidth = window.screen.width
    let screenPixelDepth = window.screen.pixelDepth

    return({
        //gpu
        gpuModel: graphicsCardModel, 
        gpuVendor: graphicsCardVendor,
        
        //navigator
        naviagtorUserAgent: userAgentIndentifier,
        naviagtorwebDriver: isWebDriver, 

        //window
        windowScreenHeigh: screenHeight,
        windowScreenWidth: screenWidth,
        windowscreenPixelDepth: screenPixelDepth
    })
}

