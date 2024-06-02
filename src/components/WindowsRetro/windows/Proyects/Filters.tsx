import { WindowInterface } from '@/interfaces/WindowInterface';
import { FC, useEffect } from 'react';
import React from 'react';
import { useWindowsStore } from '@/store/windowsStore';
import { BasicWindow } from '../../windowsComponents/BasicWindow';

export const Filters: FC<{ window: WindowInterface }> = (params) => {
  const w = params.window;
  const { focusWindow } = useWindowsStore();

  useEffect(() => {
    // The iframe must be opened by using the window.open() function in order to allow the embebed web uses the window.opener() function.
    window.open('https://interfaces-tps.neocities.org/html/filters.html', 'FiltersIframe');
    window.onmessage = ((event: any) => {
      if (event.origin === 'https://interfaces-tps.neocities.org' && event.data === 'filters')
        focusWindow(w);
    });
  }, []);

  return (
    <BasicWindow window={w}>
      <section className='iframe-container' >
        <iframe name='FiltersIframe' className='iframe'/>
      </section>
    </BasicWindow>
  );
};