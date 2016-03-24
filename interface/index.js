// var MyModule = {
//   ratio: 0,
//   update: function(node) {
//     j3(node).attr('rotation', '0,' + this.ratio + ',0');
//     this.ratio += 3;
//   },
//   start: function(node) {
//     console.log('MyModule started', node);
//   },
//   terminate: function(node) {
//     console.log('MyModule terminated', node);
//   }
// };

class MyModule {
  constructor() {
    console.log('MyModule constructor');
    this.ratio = 0;
  }
  update(node) {
    j3(node).attr('rotation', '0,' + this.ratio + ',0');
    this.ratio += 3;
  }
  start(node) {
    console.log('MyModule started', node);
  }
  terminate(node) {
    console.log('MyModule terminated', node);
  }
}

j3(function() {
  // console.log(j3('<mesh geo="cube" mat="phongMaterial" position="-3,3,3"></mesh><mesh geo="cube" mat="phongMaterial" position="3,3,3"></mesh>'));
  // setTimeout(function() {
  //   j3('#container').append('<mesh id="mesh1" geo="cube" mat="phongMaterial" position="-3,1,3" />');
  //   console.log(j3('scenes').get(0).props.getProp('elem').outerHTML);
  //   j3('#mesh1').appendTo('#container1');
  //   console.log(j3('scenes').get(0).props.getProp('elem').outerHTML);
  //   setTimeout(function() {
  //     j3('mesh').hide();
  //     setTimeout(function() {
  //       j3('#mesh1').show();
  //     }, 500);
  //   }, 500);
  // }, 500);
  [2, -2, -6].forEach(function(i) {
    j3('#container').append('<mesh geo="cube" mat="phongMaterial" position="' + i + ',1,3"></mesh>');
  });
  var myModuleMesh = j3("mesh[geo=cube]").module(MyModule);
  myModuleMesh[1].enabled = false;
  var myModuleLights = j3("#lights").module(MyModule);
  // console.log(myModule);
  // console.log('module enabled');
  // setTimeout(function() {
  //   j3(j3('mesh[geo=cube]')[1]).remove();
  // }, 1000);
  var mesh1 = j3(j3('mesh[geo=cube]')[1]);
  mesh1.animate({
    position: '2, 8, 3',
    rotation: 'y(180d)',
  }, 2000, function(node) {
    console.log('finished');
    // console.log(this.props.getProp('module'));
    // j3(this).remove();
  }).animate({
    position: '-2, 8, 3',
  }).animate({
    position: '2, 5, 1',
  }, "slow", function() {
    // j3(this).remove();
  });
  // mesh1.animate({
  //   position: '2, 8, 3',
  // }, {
  //   duration: 1000,
  //   queue: true,
  // }).animate({
  //   rotation: 'y(180d)',
  // }, {
  //   duration: 1000,
  //   queue: true,
  // });
  // mesh1.animate({
  //   position: '2, 8, 3',
  // }, {
  //   duration: 4000,
  //   queue: false,
  // }).animate({
  //   position: '2, 7, 3',
  // }, {
  //   duration: 2000,
  //   queue: false,
  // });
});
