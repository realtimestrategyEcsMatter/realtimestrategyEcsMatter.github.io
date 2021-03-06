
//mouse event "thread"
app.renderer.plugins.interaction.on('pointerdown', (event) => {
  touchDown = true;
  mx = event.data.global.x;
  my = event.data.global.y;
  //  console.log( event.data.global );
});


//Follow wayPoints
function system_followWayPoints(container){

  if(!container.wayPoints)return;

  if(!container.wayPoints[0])return;

  var wp  = container.wayPoints[0];

  var a   = Math.atan2(wp[1] - container.y, wp[0] - container.x);

  if (getDistance([wp[1] - container.y, wp[0] - container.x]) < 3){
    container.wayPoints.splice(0,1);
    return;
  }

  this.d = getUnitVector(a);

  //container.rotation -= 0.01; //just testing

  container.x += this.d[0] * 2;
  container.y += this.d[1] * 2;
}


//movement function
function system_moveArmy(container) {
  var a = Math.atan2(my - container.y, mx - container.x);

  if (getDistance([my - container.y, mx - container.x]) < 3) return;

  this.d = getUnitVector(a);

  //container.rotation -= 0.01; //just testing

  container.x += this.d[0] * 2;
  container.y += this.d[1] * 2;
}
