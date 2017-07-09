var eyeTrackingFactory = function(tracker) {
  var _draw = function(x, y) {
    var div = document.createElement('div');
    div.position = 'absolute';
    div.left = x;
    div.top = y;
  }

  var initialize = function() {
    tracker.setGazeListener(function(data, elapsedTime) {
      if (data == null) {
        return;
      }
      _draw(data.x, data.y);
    }).begin()
      .showPredictionPoints(true);
  }

  return {
    initialize: initialize
  }
};

var eyeTracking = new eyeTrackingFactory(webgazer);
eyeTracking.initialize();
