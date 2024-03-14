import React, { useEffect, useState } from 'react';

const NotificationsBtn = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    let animationFrameId;
    const tick = () => {
      setTime(new Date());
      animationFrameId = requestAnimationFrame(tick);
    };
    animationFrameId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animationFrameId); // Execute when dismount
    };
  }, []);

  return (
    <button className="notifications-btn">
      <p className="text color-black">
        {time.getHours()}:{time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()} {time.getHours() > 12 ? 'PM' : 'AM'}
      </p>
    </button>
  );
};

export default NotificationsBtn;