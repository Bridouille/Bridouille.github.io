export const contactEmail = 'nicobr65@gmail.com';
export const githubUrl = 'https://github.com/Bridouille';
export const playDeveloperUrl = 'https://play.google.com/store/apps/developer?id=Studio%20Bridoux%20AB';

const play = (id: string) => `https://play.google.com/store/apps/details?id=${id}`;

export const apps = {
  flightPass: {
    name: 'Flight Pass',
    href: 'https://flight-pass.app/',
    play: play('com.flight.manager.scanner'),
  },
  crossfitTimer: {
    name: 'CrossFit Timer',
    href: '/crossfit-timer/',
    play: play('com.crossfit.interval.timer'),
    privacy: '/crossfit-timer-privacy-policy/',
  },
  heartrateMonitor: {
    name: 'Heart Rate Monitor',
    href: '/heartrate-monitor/',
    play: play('com.heartrate.monitor.sensor'),
    privacy: '/heartrate-monitor-privacy-policy/',
  },
};
