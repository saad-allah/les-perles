function _xd(){

  'use strict';

  mapboxgl.accessToken = 'pk.eyJ1IjoibW91cm5lciIsImEiOiJWWnRiWG1VIn0.j6eccFHpE3Q04XPLI7JxbA';
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'https://data.osmbuildings.org/0.2/rkc8ywdl/style.json',
      center: [-7.633166,33.6054793],
      zoom: 15.42,
      pitch: 60, // pitch in degrees
      bearing: -10, // bearing in degrees
   scrollZoom: false,
      hash: false
  });

  map.addControl(new mapboxgl.NavigationControl());
  map.addControl(new mapboxgl.GeolocateControl());


  // pixels the map pans when the up or down arrow is clicked
  var deltaDistance = 100;

  // degrees the map rotates when the left or right arrow is clicked
  var deltaDegrees = 25;

  function easing(t) {
   return t * (2 - t);
  }
  var needle = document.getElementById('needle')
  $(".zoomout").click(function() {
    
   var zom = map.getZoom();
   map.flyTo({
       zoom: zom - 1
   })
  });
  $(".zoomin").click(function() {
   var zom = map.getZoom();
   map.flyTo({
       zoom: zom + 1
   })


  });



  $(".map-container-needle").click(function() {
   map.easeTo({
       bearing: map.getBearing() - deltaDegrees,
       easing: easing
   });
  });


  // pixels the map pans when the up or down arrow is clicked
  var deltaDistance = 100;
  // degrees the map rotates when the left or right arrow is clicked
  var deltaDegrees = 25;

  function easing(t) {
   return t * (2 - t);
  }
  $(".down").click(function() {
   // down
   map.panBy([0, deltaDistance], {
       easing: easing
   });

  });
  $(".up").click(function() {
   // up
   map.panBy([0, -deltaDistance], {
       easing: easing
   });

  });
  $(".fullScreen").click(function() {
    map.getCanvas().webkitRequestFullScreen(); // there are a few other vendor prefixes to try
    map.resize();

  });

  jQuery('#show').on('click', function() {
    if (jQuery('#kimono-sunAnimatorMenu').hasClass('visiblo')) {
      $('#kimono-sunAnimatorMenu').removeClass('visiblo');
    }
    else
    {
      $('#kimono-sunAnimatorMenu').addClass('visiblo');
    }
  });


  var date = new Date();
      var start = new Date(date.getFullYear(), 0, 1);
      var diff = date - start;
      var day = getDOY(date);
      var time = date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();
      var timeInput = document.getElementById('time');

      var time_rang_now = (date.getHours() * 60 * 60) / 3600;
      if (time_rang_now < 10) {
          time_rang_now = '0' + time_rang_now;
      }


      timeInput.value = time_rang_now;

      timeInput.addEventListener('change', chnageTimeDate);
      timeInput.addEventListener('input', chnageTimeDate);
      var date_input = document.getElementById('firstDate');
  date_input.valueAsDate = new Date();

  date_input.onchange = function(){
     var datetarget= this.value;
     chnageDate(datetarget)
  }
      function chnageTimeDate() {
          var now = date_input.valueAsDate  ;
          diff = now - start;
          var oneDay = 1000 * 60 * 60 * 24;
          var day = Math.floor(diff / oneDay);
          time = +timeInput.value * 3600;
          var time_rang = +timeInput.value;
          date.setHours(Math.floor(time / 60 / 60));
          date.setMinutes(Math.floor(time / 60) % 60);
          date.setSeconds(time % 60);

          draw();
      }
      function chnageDate(datetarget) {
          var now = new Date(datetarget); ;
          diff = now - start;
          var oneDay = 1000 * 60 * 60 * 24;
          var day = Math.floor(diff / oneDay);
          time = +timeInput.value * 3600;
          var time_rang = +timeInput.value;
          date.setDate(day);
          date.setHours(Math.floor(time / 60 / 60));
          date.setMinutes(Math.floor(time / 60) % 60);
          date.setSeconds(time % 60);

          draw();
      }


      function draw() {

          var tr = map.transform;
          var cx = tr.width / 2;
          var cy = tr.height / 2;
          // var r = Math.min(cx, cy) - 5;
          var loc = map.getCenter();
          var sunPos = SunCalc.getPosition(date, loc.lat, loc.lng);
          var sunTimes = SunCalc.getTimes(date, loc.lat, loc.lng);
          var sunAngle = Math.PI / 2 + sunPos.azimuth + tr.angle;
          var sunriseAngle = SunCalc.getPosition(sunTimes.sunrise, loc.lat, loc.lng).azimuth + Math.PI / 2 + tr.angle;
          var sunsetAngle = SunCalc.getPosition(sunTimes.sunset, loc.lat, loc.lng).azimuth + Math.PI / 2 + tr.angle;
          var pitchCos = Math.cos(tr.pitch * Math.PI / 180);

          var m = new Float64Array(16);
          mat4.perspective(m, tr._fov, tr.width / tr.height, 1, 3000);
          mat4.scale(m, m, [1, -1, 1]);
          mat4.translate(m, m, [0, 0, -tr.cameraToCenterDistance]);
          mat4.rotateX(m, m, tr._pitch);
          mat4.rotateZ(m, m, tr.angle);
          mat4.translate(m, m, [-tr.x, -tr.y, 0]);

          var m2 = mat4.create();
          mat4.scale(m2, m2, [tr.width / 2, -tr.height / 2, 1]);
          mat4.translate(m2, m2, [1, -1, 0]);
          mat4.multiply(m, m2, m);

          var coord = tr.pointCoordinate(tr.centerPoint, tr.zoom);
          var p = [
              coord.column * tr.tileSize + Math.sin(-sunPos.azimuth),
              coord.row * tr.tileSize + Math.cos(-sunPos.azimuth), Math.sin(sunPos.altitude), 1
          ];
          vec4.transformMat4(p, p, m);

          var dx = p[0] / p[3] - tr.centerPoint.x;
          var dy = p[1] / p[3] - tr.centerPoint.y;

          var r2 = Math.min(Math.abs(cx / dx), Math.abs(cy / dy)) - 30;



          var isDay = sunPos.altitude > -0.833 * Math.PI / 180;

          map.setLight({
              anchor: 'map',
              position: [1.5, 180 + sunPos.azimuth * 180 / Math.PI, 90 - sunPos.altitude * 180 / Math.PI],
              'position-transition': {
                  duration: 0
              }
          }, {
              duration: 0
          });
      }

      function val(attr, value) {
          if (value !== undefined) {
              attr.baseVal.value = value;
          } else {
              return attr.baseVal.value;
          }
      }
      map.on('load', draw);
      map.on('resize', draw);
      map.on('move', draw);

      function isLeapYear(date) {
          var year = date.getFullYear();
          if ((year & 3) != 0) return false;
          return ((year % 100) != 0 || (year % 400) == 0);
      };

      function getDOY(date) {
          var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
          var mn = date.getMonth();
          var dn = date.getDate();
          var dayOfYear = dayCount[mn] + dn;
          if (mn > 1 && isLeapYear(date)) dayOfYear++;
          return dayOfYear;
      };

      function pad(num) {
          return num <= 9 ? '0' + num : num;
      }

      var path = document.getElementById('kimono-theMotionPath')
      var sunPosition = document.getElementById('kimono-sunPosition');
      var bg = document.getElementById('kimono-sky');
      var pathLength = Math.floor(path.getTotalLength());

      function moveSun(prcnt) {
          prcnt = (prcnt * pathLength) / 100;
          var pt = path.getPointAtLength(prcnt);
          pt.x = Math.round(pt.x);
          pt.y = Math.round(pt.y);
        var  r = -(140 - Math.round(pt.y)) + "px";
          sunPosition.style.webkitTransform = 'translate(' + pt.x + 'px,' + pt.y + 'px)';
          bg.style.backgroundPositionX = r;
      }
      moveSun(0);
      var sliderEl = document.getElementById('time');
      sliderEl.addEventListener('mousemove', function() {
          time = 100 / 24;
          sliderEl.value = this.value;
          var configTime = (sliderEl.value * time);
          moveSun(configTime);
      });

}
if (window.performance) {
  if (performance.navigation.type == 1) {
  _xd();
  }
}
