import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
export const fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition('void <=> *', [animate('0.5s')]),
]);
export const fadeButtonCard = trigger('fadeButtonCard', [
  state('void', style({ opacity: 0 })),
  transition('void => *', [animate('0.5s')]),
]);

export const fadeUp = trigger('fadeUp', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 0.2s cubic-bezier(.14,.44,.5,.9)')]),
]);
export const fadeUp1 = trigger('fadeUp1', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 0.5s cubic-bezier(.14,.44,.5,.9)')]),
]);
export const fadeUp2 = trigger('fadeUp2', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 0.8s cubic-bezier(.14,.44,.5,.9)')]),
]);
export const fadeUp3 = trigger('fadeUp3', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 1.1s cubic-bezier(.14,.44,.5,.9)')]),
]);
export const fadeUp4 = trigger('fadeUp4', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 1.4s cubic-bezier(.14,.44,.5,.9)')]),
]);
export const fadeUp5 = trigger('fadeUp5', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 1.7s cubic-bezier(.14,.44,.5,.9)')]),
]);
export const fadeUp6 = trigger('fadeUp6', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 2s cubic-bezier(.14,.44,.5,.9)')]),
]);
export const fadeUp7 = trigger('fadeUp7', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 2.3s cubic-bezier(.14,.44,.5,.9)')]),
]);
export const fadeUp8 = trigger('fadeUp8', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 2.6s cubic-bezier(.14,.44,.5,.9)')]),
]);

export const fadeLeft = trigger('fadeLeft', [
  state('void', style({ opacity: 0, transform: 'translate(80px)' })),
  transition('void => *', [animate('1.4s 0.5s cubic-bezier(.14,.44,.5,.9)')]),
]);
export const modalFade = trigger('modalFade', [
  state('void', style({ opacity: 0, transform: 'translateY(150px)' })),
  transition('void => *', [animate('2s 0.5s cubic-bezier(.14,.44,.5,.9)')]),
]);
