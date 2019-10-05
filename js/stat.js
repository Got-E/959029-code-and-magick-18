var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var GIST_MAX = 150;
var GIST_WIDTH = 40;
var GIST_GAP = 50;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + (GAP + FONT_GAP)*2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP + (GIST_WIDTH + GIST_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (GIST_WIDTH + GIST_GAP)*i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - GAP - ((GIST_MAX * times[i]) / maxTime) - GAP);
  }

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

  for (var i = 0; i < players.length; i++) {
    ctx.fillRect(CLOUD_X + GAP + (GIST_WIDTH + GIST_GAP)*i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - GAP - ((GIST_MAX * times[i]) / maxTime), GIST_WIDTH, (GIST_MAX * times[i]) / maxTime );
    var randomBlu = 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 50%)';
    ctx.fillStyle = randomBlu;
  }
};
