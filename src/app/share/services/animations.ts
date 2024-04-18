import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export let fadeUp = trigger('fadeUp', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 0.2s cubic-bezier(.14,.44,.5,.9)')]),
]);
export let fadeUp1 = trigger('fadeUp1', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 0.5s cubic-bezier(.14,.44,.5,.9)')]),
]);
export let fadeUp2 = trigger('fadeUp2', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 0.8s cubic-bezier(.14,.44,.5,.9)')]),
]);
export let fadeUp3 = trigger('fadeUp3', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 1.1s cubic-bezier(.14,.44,.5,.9)')]),
]);
export let fadeUp4 = trigger('fadeUp4', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 1.4s cubic-bezier(.14,.44,.5,.9)')]),
]);
export let fadeUp5 = trigger('fadeUp5', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 1.7s cubic-bezier(.14,.44,.5,.9)')]),
]);
export let fadeUp6 = trigger('fadeUp6', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 2s cubic-bezier(.14,.44,.5,.9)')]),
]);
export let fadeUp7 = trigger('fadeUp7', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 2.3s cubic-bezier(.14,.44,.5,.9)')]),
]);
export let fadeUp8 = trigger('fadeUp8', [
  state('void', style({ opacity: 0, transform: 'translateY(80px)' })),
  transition('void => *', [animate('1.4s 2.6s cubic-bezier(.14,.44,.5,.9)')]),
]);

export let fadeLeft = trigger('fadeLeft', [
  state('void', style({ opacity: 0, transform: 'translate(80px)' })),
  transition('void => *', [animate('1.4s 0.5s cubic-bezier(.14,.44,.5,.9)')]),
]);
