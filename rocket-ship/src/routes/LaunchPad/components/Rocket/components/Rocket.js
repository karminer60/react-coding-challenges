import React, { useState, Component } from 'react';
import RocketCore from './RocketCore';

export function FunctionalRocket() {
  
  //Stop the Functional rocket from taking off
  //button to prevent it from taking off
  const [initialLaunchTime] = useState(Date.now() + 10);

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
}

export class ClassRocket extends Component {
  //Stop the Class rocket from taking off
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now() + 10 
    };
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
