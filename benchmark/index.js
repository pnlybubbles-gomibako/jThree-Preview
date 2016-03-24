var MyModule = {
  ratio: 0,
  update: function(node) {
    j3(node).attr('rotation', '0,' + this.ratio + ',0');
    this.ratio += 3;
  },
  start: function(node) {
    console.log('MyModule started', node);
  },
  terminate: function(node) {
    console.log('MyModule terminated', node);
  }
};

j3(function() {
  const len = 10;
  const pow = 1;
  j3('#container').attr('position', (- len * pow / 2) + ',' + (- len * pow / 2) + ',' + (- len * pow / 2))
  for (let x = 0; x < len; x++) {
    for (let y = 0; y < len; y++) {
      for (let z = 0; z < len; z++) {
        j3('#container').append('<mesh geo="cube" mat="phongMaterial" scale="0.1" position="' + x * pow + ',' + y * pow + ',' + z * pow + '"></mesh>');
      }
    }
  }
  j3('#container').module(MyModule);
  console.log(j3('#container'));
});
