/** Toggle Proximity audio level via Touch10 */
const xapi = require('xapi');

function onGuiEvent(event){
  if (event.WidgetId === 'toggleButton'){
    const mode = event.Value;
    
    if(mode === 'on'){
      volume = 70;
      xapi.config.set('Audio Ultrasound MaxVolume', volume);
      
      alert("Proximity turned on");
     
    }else{
      var volume = 0;
      xapi.config.set('Audio Ultrasound MaxVolume', volume);
      
      alert("Proximity turned off");
      
    }
  }
}

function alert(myMessage) {
  xapi.command('UserInterface Message Alert Display', {
    Title: "Notification",
    Text: myMessage,
    Duration: 5,
  });
}

xapi.event.on('UserInterface Extensions Widget Action', onGuiEvent);