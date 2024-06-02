import { useWindowsStore } from '@/store/windowsStore';
import React, { FC, useEffect } from 'react'
import { WindowInterface } from '@/interfaces/WindowInterface';
import { BasicWindow } from '../../windowsComponents/BasicWindow';

export const RunnerGame: FC<{ window: WindowInterface }> = (params) => {
    const w = params.window;
    const { focusWindow } = useWindowsStore();
  
    useEffect(() => {
      // The iframe must be opened by using the window.open() function in order to allow the embebed web uses the window.opener() function.
      window.open('https://interfaces-tps.neocities.org/html/runnerGame', 'RunnerGame');
      window.onmessage = ((event: any) => {
        if (event.origin === 'https://interfaces-tps.neocities.org' && event.data === 'runnerGame')
          focusWindow(w);
      });
    }, []);
  
    return (
      <BasicWindow window={w} additionalStyles={{maxHeight: 440}} >
        <section className='iframe-container'>
          <iframe name='RunnerGame' className='iframe' />
        </section>
      </BasicWindow>
    );
}