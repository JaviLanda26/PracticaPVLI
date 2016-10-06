var nave = {
  _grafico: 'image.png',
  _position: {x:10, y:10},

  moverseIzq: function () { this._position.x -= 2; },
  moverseDch: function () { this._position.x += 2; },
  disparar: function () { console.log('PUM!'); }
};

var enemigo = {
  _grafico: 'image2.png',
  _position: {x:10, y:100},
  _direccionActual: 'derecha',
  _puntuacion: 100,

  moverseIzq: function () { this._position.x -= 2;},
  moverseDch: function () { this._position.x += 2; },
  avanzar: function () { this._position.y += 2; },
  disparar: function () { console.log('PUM!'); }
};

/*
function newPoint(x, y) {
  var obj = {};
  obj.x = x;
  obj.y = y;
  return obj;
}


function newShot(position, velocity) {
  var obj = {};
  obj._position = position;
  obj._velocity = velocity;
  obj.advance = newShot.api.advance;
  return obj;
}


newShot.api = {
  advance: function () {
    this._position.y += this._velocity;
  }
};
*/