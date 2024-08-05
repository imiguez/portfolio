import React, { FC, useEffect } from 'react'
import { WindowInterface } from '@/interfaces/WindowInterface';
import { BasicWindow } from '../../windowsComponents/BasicWindow';

export const RunnerGame: FC<{ window: WindowInterface }> = (params) => {
    const w = params.window;
  
    useEffect(() => {
      // The iframe must be opened by using the window.open() function in order to allow the embebed web uses the window.opener() function.
      window.open('https://interfaces-tps.neocities.org/html/runnerGame', 'RunnerGame');
    }, []);
  
    return (
      <BasicWindow window={w}>
        <section className='iframe-container'>
          <iframe name='RunnerGame' className='iframe' />
        </section>
      </BasicWindow>
    );
}