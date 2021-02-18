// Cloud Code entry point

Parse.Cloud.define("signalDevice", async (request) => {
    let arduino = request.params.arduino;
    let signal = request.params.signal;
    //TODO: handle sending the signal to the arduinos! 
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    await delay(3000);
    if (signal == 'fail') {
        return false
    } else {
        return true
    }
});