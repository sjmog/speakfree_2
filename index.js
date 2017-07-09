var StopsFactory = function() {
  var all = [
    ["a", "b", "c", "d", "e", "f"],
    ["g", "h", "i", "j", "k", "l"],
    ["m", "n", "o", "p", "q", "r"],
    ["s", "t", "u", "v", "w", "x"],
    ["y", "z", "0", "1", "2", "3"],
    ["4", "5", "6", "7", "8", "9"]
  ]

  var reset = function() {
    return all.map(function(stops) { return stops[0] })
  };

  var at = function(value) {
    return all.filter(function(stops) { 
      return stops.includes(value) 
    })[0];
  };

  return {
    reset: reset,
    at: at
  }
};

var Stops = new StopsFactory();

var Button = function(value, isOutputting) {
  this.value = value;
  this.isOutputting = isOutputting;
};

Button.prototype._appendOrRender = function() {
  if(this.isOutputting) { 
    AppendText(this.value);
    Render(Stops.reset(), !this.isOutputting);
  } else {
    Render(Stops.at(this.value), !this.isOutputting);
  };
}

Button.prototype.render = function(container) {
  const button = document.createElement('button');
  button.innerText = this.value;
  button.addEventListener('mousedown', this._appendOrRender.bind(this))

  container.prepend(button);
};

var Render = function(stops, isOutputting) {
  const container = document.getElementById('main');
  container.innerHTML = '';

  var buttons = stops.map(function(stop) { return new Button(stop, isOutputting) })

  for (var i = buttons.length - 1; i >= 0; i--) {
    buttons[i].render(container);
  }
};

var AppendText = function(text) {
  const textContainer = document.getElementById('output');
  output.append(text);
}

Render(Stops.reset(), false);
