function system_moveArmy(container) {
  for (var i = 0; i < container.children.length; i++) {
    var c = container.children[i];
    var xo = Math.random() - Math.random();
    var yo = Math.random() - Math.random();

    c.x = c.x - c.offsetX + xo;
    c.y = c.y - c.offsetY + yo;
    c.offsetX = xo;
    c.offsetY = yo;
  }

  var mousePosition = app.renderer.plugins.interaction.mouse.global;;

  var a = Math.atan2(mousePosition.y - container.y, mousePosition.x - container.x);
  var d = getUnitVector(a);

  container.rotation -= 0.01; //just testing

  container.x += d[0];
  container.y += d[1];
}