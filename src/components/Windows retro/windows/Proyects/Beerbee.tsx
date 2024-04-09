import { WindowInterface } from '@/interfaces/WindowInterface';
import { FC, useEffect } from 'react';
import React from 'react';
import { BasicWindow } from '../../windows components/BasicWindow';
import { useWindowsStore } from '@/store/windowsStore';

export const Beerbee: FC<{ window: WindowInterface }> = (params) => {
  const w = params.window;
  const { focusWindow } = useWindowsStore();

  useEffect(() => {
    // The iframe must be opened by using the window.open() function in order to allow the embebed web uses the window.opener() function.
    window.open('https://beerbee.neocities.org/', 'BeerbeeIframe');
    window.onmessage = ((event: any) => {
      if (event.origin === 'https://beerbee.neocities.org')
        focusWindow(w);
    });
  }, []);

  return (
    <BasicWindow window={w}>
      <section className='iframe-container' >
        <iframe name='BeerbeeIframe' className='iframe'/>
      </section>
    </BasicWindow>
  );
};