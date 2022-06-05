import React from 'react';
import { render, Text } from 'react-pixi-fiber';
import { container } from './games/container';
import './reset.less';

const App: React.FC = () => {
  return <Text text="Hello World!" x={200} y={200} />;
};

render(<App />, container);
