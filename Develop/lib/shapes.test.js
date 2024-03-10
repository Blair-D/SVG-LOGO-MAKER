const shapeTest = new Triangle();
shape.setColor("pink");
expect(shape.render()).toEqual('<polygon  points="100,100 150,50 50,50" fill="pink" />');

