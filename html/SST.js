/************ 
 * Sst Test *
 ************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([(- 0.059), (- 0.059), (- 0.059)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'SST';  // from the Builder filename that created this script
let expInfo = {'participant': '999', 'session': '1', 'run_number': '1'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
  {name: 'L_arrow1.png', path: './resources/stimuli/arrows/L_arrow1.png'},
  {name: 'L_arrow2.png', path: './resources/stimuli/arrows/L_arrow2.png'},
  {name: 'L_arrow3.png', path: './resources/stimuli/arrows/L_arrow3.png'},
  {name: 'R_arrow1.png', path: './resources/stimuli/arrows/R_arrow1.png'},
  {name: 'R_arrow2.png', path: './resources/stimuli/arrows/R_arrow2.png'},
  {name: 'R_arrow3.png', path: './resources/stimuli/arrows/R_arrow3.png'},
  {name: 'sound.wav', path: './resources/sound.wav'},
  {name: 'circle.png', path: './resources/circle.png'},
  {name: 'circle_white.png', path: './resources/circle_white.png'},
  {name: 'circle_red.png', path: './resources/circle_red.png'},
  {name: 'circle_orange.png', path: './resources/circle_orange.png'},
  {name: 'conditions_file.csv', path: './resources/DEV999_1_conditions.csv'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy35.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy35.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy21.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy21.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy123.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy123.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy122.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy122.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy20.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy20.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy34.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy34.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy36.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy36.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy120.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy120.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy121.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy121.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy109.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy109.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy37.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy37.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy23.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy23.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy27.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy27.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy33.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy33.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy119.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy119.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy118.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy118.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy124.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy124.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy130.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy130.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy32.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy32.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy132.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy132.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy19.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy19.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy56.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy56.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy95.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy95.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy81.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy81.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy80.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy80.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy94.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy94.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy57.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy57.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy2.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy2.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy41.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy41.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy55.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy55.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy82.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy82.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy96.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy96.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy83.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy83.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy54.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy54.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy68.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy68.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy5.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy5.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy50.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy50.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy87.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy87.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy93.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy93.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy92.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy92.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy86.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy86.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy79.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy79.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy51.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy51.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy45.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy45.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy53.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy53.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy90.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy90.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy84.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy84.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy85.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy85.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy91.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy91.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy46.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy46.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy52.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy52.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy77.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy77.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy63.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy63.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy88.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy88.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy89.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy89.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy62.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy62.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy76.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy76.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy9.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy9.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy48.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy48.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy60.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy60.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy75.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy75.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy61.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy61.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy49.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy49.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy8.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy8.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy65.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy65.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy71.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy71.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy59.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy59.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy58.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy58.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy70.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy70.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy64.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy64.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy72.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy72.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy66.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy66.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy67.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy67.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy73.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy73.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy14.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy14.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy116.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy116.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy117.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy117.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy29.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy29.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy115.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy115.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy114.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy114.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy110.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy110.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy111.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy111.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy11.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy11.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy39.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy39.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy113.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy113.jpg'},
  {name: 'stimuli/CategorizedImages/Healthy/healthy112.jpg', path: './resources/stimuli/CategorizedImages/Healthy/healthy112.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood05.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood05.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood11.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood11.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood10.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood10.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood04.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood04.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood12.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood12.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood06.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood06.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood07.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood07.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood13.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood13.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood17.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood17.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood03.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood03.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood02.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood02.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood16.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood16.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood14.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood14.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood28.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood28.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood29.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood29.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood15.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood15.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood01.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood01.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood18.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood18.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood24.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood24.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood30.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood30.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood25.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood25.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood19.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood19.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood27.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood27.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood26.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood26.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood22.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood22.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood23.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood23.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood21.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood21.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood09.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood09.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood08.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood08.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/FastFood/FastFood20.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/FastFood/FastFood20.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts22.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts22.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts23.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts23.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts21.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts21.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts09.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts09.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts08.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts08.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts20.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts20.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts18.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts18.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts24.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts24.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts30.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts30.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts25.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts25.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts19.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts19.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts27.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts27.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts26.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts26.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts17.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts17.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts03.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts03.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts02.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts02.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts16.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts16.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts14.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts14.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts28.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts28.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts29.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts29.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts15.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts15.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts01.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts01.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts05.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts05.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts11.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts11.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts10.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts10.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts04.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts04.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts12.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts12.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts06.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts06.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts07.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts07.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Donuts/Donuts13.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Donuts/Donuts13.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats13.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats13.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats07.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats07.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats06.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats06.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats12.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats12.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats04.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats04.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats10.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats10.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats11.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats11.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats05.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats05.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats29.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats29.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats01.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats01.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats15.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats15.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats14.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats14.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats28.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats28.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats16.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats16.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats02.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats02.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats03.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats03.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats17.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats17.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats26.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats26.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats27.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats27.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats25.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats25.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats19.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats19.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats18.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats18.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats30.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats30.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats24.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats24.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats08.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats08.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats20.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats20.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats21.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats21.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats09.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats09.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats23.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats23.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats22.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/ProcessedMeats/ProcessedMeats22.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks02.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks02.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks16.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks16.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks17.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks17.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks03.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks03.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks29.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks29.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks15.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks15.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks01.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks01.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks14.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks14.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks28.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks28.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks10.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks10.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks04.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks04.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks05.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks05.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks11.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks11.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks07.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks07.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks13.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks13.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks12.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks12.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks06.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks06.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks23.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks23.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks22.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks22.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks08.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks08.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks20.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks20.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks21.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks21.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks09.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks09.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks25.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks25.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks19.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks19.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks18.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks18.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks24.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks24.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks30.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks30.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks26.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks26.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks27.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SaltySnacks/SaltySnacks27.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate22.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate22.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate23.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate23.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate09.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate09.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate21.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate21.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate20.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate20.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate08.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate08.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate24.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate24.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate30.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate30.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate18.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate18.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate19.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate19.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate25.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate25.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate27.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate27.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate26.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate26.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate17.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate17.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate03.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate03.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate02.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate02.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate16.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate16.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate28.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate28.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate14.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate14.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate15.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate15.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate01.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate01.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate29.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate29.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate05.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate05.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate11.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate11.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate10.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate10.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate04.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate04.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate12.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate12.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate06.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate06.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate07.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate07.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate13.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Chocolate/Chocolate13.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta14.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta14.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta28.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta28.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta29.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta29.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta15.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta15.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta01.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta01.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta17.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta17.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta03.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta03.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta02.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta02.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta16.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta16.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta12.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta12.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta06.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta06.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta07.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta07.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta13.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta13.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta05.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta05.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta11.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta11.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta10.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta10.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta04.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta04.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta21.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta21.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta09.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta09.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta08.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta08.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta20.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta20.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta22.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta22.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta23.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta23.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta27.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta27.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta26.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta26.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta18.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta18.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta24.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta24.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta30.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta30.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta25.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta25.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pasta/Pasta19.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pasta/Pasta19.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries02.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries02.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries16.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries16.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries17.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries17.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries03.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries03.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries15.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries15.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries01.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries01.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries29.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries29.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries28.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries28.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries14.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries14.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries10.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries10.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries04.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries04.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries05.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries05.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries11.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries11.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries07.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries07.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries13.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries13.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries12.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries12.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries06.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries06.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries23.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries23.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries22.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries22.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries20.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries20.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries08.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries08.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries09.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries09.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries21.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries21.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries19.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries19.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries25.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries25.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries24.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries24.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries30.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries30.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries18.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries18.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries26.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries26.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Fries/Fries27.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Fries/Fries27.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream29.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream29.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream15.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream15.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream01.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream01.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream14.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream14.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream28.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream28.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream02.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream02.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream16.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream16.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream17.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream17.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream03.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream03.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream07.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream07.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream13.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream13.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream12.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream12.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream06.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream06.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream10.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream10.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream04.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream04.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream05.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream05.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream11.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream11.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream08.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream08.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream20.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream20.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream21.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream21.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream09.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream09.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream23.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream23.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream22.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream22.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream26.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream26.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream27.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream27.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream25.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream25.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream19.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream19.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream18.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream18.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream24.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream24.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/IceCream/IceCream30.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/IceCream/IceCream30.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque05.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque05.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque11.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque11.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque10.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque10.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque04.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque04.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque12.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque12.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque06.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque06.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque07.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque07.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque13.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque13.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque17.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque17.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque03.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque03.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque02.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque02.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque16.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque16.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque14.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque14.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque28.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque28.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque29.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque29.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque15.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque15.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque01.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque01.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque18.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque18.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque24.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque24.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque30.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque30.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque25.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque25.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque19.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque19.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque27.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque27.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque26.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque26.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque22.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque22.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque23.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque23.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque21.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque21.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque09.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque09.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque08.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque08.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque20.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Barbeque/Barbeque20.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza21.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza21.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza09.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza09.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza08.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza08.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza20.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza20.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza22.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza22.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza23.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza23.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza27.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza27.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza26.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza26.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza18.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza18.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza30.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza30.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza24.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza24.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza25.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza25.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza19.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza19.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza14.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza14.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza28.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza28.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza29.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza29.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza01.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza01.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza15.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza15.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza03.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza03.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza17.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza17.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza16.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza16.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza02.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza02.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza06.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza06.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza12.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza12.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza13.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza13.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza07.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza07.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza11.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza11.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza05.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza05.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza04.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza04.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Pizza/Pizza10.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Pizza/Pizza10.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy07.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy07.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy13.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy13.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy12.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy12.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy06.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy06.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy10.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy10.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy04.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy04.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy05.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy05.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy11.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy11.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy29.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy29.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy15.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy15.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy01.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy01.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy14.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy14.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy28.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy28.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy02.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy02.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy16.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy16.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy17.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy17.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy03.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy03.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy26.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy26.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy27.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy27.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy25.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy25.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy19.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy19.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy18.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy18.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy24.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy24.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy30.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy30.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy08.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy08.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy20.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy20.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy21.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy21.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy09.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy09.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy23.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy23.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Candy/Candy22.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Candy/Candy22.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies27.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies27.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies26.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies26.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies30.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies30.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies24.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies24.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies18.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies18.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies19.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies19.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies25.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies25.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies09.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies09.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies21.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies21.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies20.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies20.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies08.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies08.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies22.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies22.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies23.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies23.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies06.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies06.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies12.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies12.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies13.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies13.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies07.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies07.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies11.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies11.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies05.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies05.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies04.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies04.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies10.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies10.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies28.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies28.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies14.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies14.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies01.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies01.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies15.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies15.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies29.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies29.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies03.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies03.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies17.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies17.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies16.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies16.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/Cookies/Cookies02.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/Cookies/Cookies02.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks10.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks10.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks04.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks04.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks05.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks05.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks11.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks11.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks07.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks07.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks13.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks13.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks12.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks12.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks06.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks06.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks02.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks02.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks16.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks16.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks17.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks17.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks03.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks03.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks29.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks29.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks15.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks15.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks01.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks01.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks14.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks14.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks28.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks28.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks25.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks25.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks19.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks19.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks18.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks18.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks24.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks24.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks30.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks30.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks26.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks26.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks27.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks27.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks23.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks23.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks22.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks22.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks08.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks08.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks20.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks20.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks21.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks21.jpg'},
  {name: 'stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks09.jpg', path: './resources/stimuli/CategorizedImages/Unhealthy/SoftDrinks/SoftDrinks09.jpg'},
  ]
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

function getstuff() {
  
    const resourceValue = psychoJS.serverManager.getResource(conditions_file);
    const workbook = XLSX.read(new Uint8Array(resourceValue), { type: "array" });
    
    // we consider only the first worksheet:
    
    if (workbook.SheetNames.length === 0)
    throw 'workbook should contain at least one worksheet';
    
    const sheetName = workbook.SheetNames[0];
    
    const worksheet = workbook.Sheets[sheetName];
    
    // worksheet to array of arrays (the first array contains the fields):
    
    const sheet = XLSX.utils.sheet_to_json(worksheet, { header: 1, blankrows: false });
    
    const fields = sheet.shift();
    
    // (*) select conditions:
    
    const selectedRows = sheet;
    
    // (*) return the selected conditions as an array of 'object as map':
    // [
    // 		{field0: value0-0, field1: value0-1, ...}
    //		{field0: value1-0, field1: value1-1, ...}
    //		...
    // ]
    
    let trialList = new Array(selectedRows.length - 1);
}


var setupClock;
var participant;
var session;
var run_number;
var orange;
var red;
var white;
var color;
var arrow;
var border;
var sound_volume;
var staircase;
var conditions_file;
var start_text_str;
var instructionsClock;
var start_text;
var start_trigger;
var trialClock;
var image_stimulus;
var circle_border;
var arrow_image;
var stop_signal_sound;
var key_resp;
var intertrialClock;
var endClock;
var end_text;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  function is_mri_session(session) {
      return ((session === "1") || (session === "2"));
  }
  participant = expInfo["participant"];
  session = expInfo["session"];
  run_number = expInfo["run_number"];
  orange = [1, 0, (- 1)];
  red = [1, (- 1), (- 1)];
  white = [1, 1, 1];
  color = white;
  arrow = "L_arrow1.png";
  border = 'circle_white.png'
  sound_volume = 1;
  staircase = {[1]: 0.25, [2]: 0.35, [0]: 0.0};
  conditions_file = 'conditions_file.csv';
  
  session = expInfo["session"];
  if (is_mri_session(session)) {
    start_text_str = "Scanner calibrating.\nPlease hold VERY still.";
  } else {
    start_text_str = "Press the left button (LEFT index finger) if you see <\nPress the right button (RIGHT index finger) if you see >\nPress the button as QUICKLY and as ACCURATELY\nas you can when you see the arrow.\nBut if you hear a beep, try very hard to STOP\nyourself from pressing the button on that arrow only.\nGOING and STOPPING are equally important.\nSo DO NOT slow down your response to wait for the beep,\nbecause then you are no longer going when you are supposed to.\nYou wont always be able to stop when you hear a beep,\nbut as long as you go quickly all of the time\n(while pushing the correct button for arrow direction),\nand can stop some of the time, you are doing the task correctly.\nAsk the experimenter if you have any questions.\nPress any key to go on.\n";
  }
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  start_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  start_trigger = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  image_stimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_stimulus', units : undefined, 
    image : undefined, mask : 'circle.png',
    ori : 0, pos : [0, 0],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  
  circle_border = new visual.ImageStim({
    win : psychoJS.window,
    name : 'circle_border', units : undefined, 
    image : border, mask : undefined,
    ori : 0, pos : [0, 0],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  
  arrow_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'arrow_image', units : undefined, 
    image : arrow, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  stop_signal_sound = new sound.Sound({
    win: psychoJS.window,
    value: 'sound.wav'
    });
  stop_signal_sound.setVolume(1.0);
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "intertrial"
  intertrialClock = new util.Clock();
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Great Job. Thank you!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var setupComponents;
function setupRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function setupRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'setup'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'setup'-------
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _start_trigger_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    start_text.setText(start_text_str);
    start_trigger.keys = undefined;
    start_trigger.rt = undefined;
    _start_trigger_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(start_text);
    instructionsComponents.push(start_trigger);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_text* updates
    if (t >= 0.0 && start_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_text.tStart = t;  // (not accounting for frame time here)
      start_text.frameNStart = frameN;  // exact frame index
      
      start_text.setAutoDraw(true);
    }

    
    // *start_trigger* updates
    if (t >= 0.0 && start_trigger.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_trigger.tStart = t;  // (not accounting for frame time here)
      start_trigger.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_trigger.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_trigger.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_trigger.clearEvents(); });
    }

    if (start_trigger.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_trigger.getKeys({keyList: [], waitRelease: false});
      _start_trigger_allKeys = _start_trigger_allKeys.concat(theseKeys);
      if (_start_trigger_allKeys.length > 0) {
        start_trigger.keys = _start_trigger_allKeys[_start_trigger_allKeys.length - 1].name;  // just the last key pressed
        start_trigger.rt = _start_trigger_allKeys[_start_trigger_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: conditions_file,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(intertrialRoutineBegin(snapshot));
    thisScheduler.add(intertrialRoutineEachFrame(snapshot));
    thisScheduler.add(intertrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    image_stimulus.setImage(image_file);
    circle_border.setImage(border);
    arrow_image.setImage(arrow);
    stop_signal_sound.setVolume(sound_volume);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    if ((trial_type === "nogo")) {
        sound_volume = 1;
    } else {
        sound_volume = 0;
    }
    stop_signal_sound.setVolume(sound_volume, {"log": false});
    if ((trials.thisN === 0)) {
        arrow = (arrow_direction + "_arrow1.png");
    }
    
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(image_stimulus);
    trialComponents.push(circle_border);
    trialComponents.push(arrow_image);
    trialComponents.push(stop_signal_sound);
    trialComponents.push(key_resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_stimulus* updates
    if (t >= 0.0 && image_stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_stimulus.tStart = t;  // (not accounting for frame time here)
      image_stimulus.frameNStart = frameN;  // exact frame index
      
      image_stimulus.setAutoDraw(true);
    }

    if (image_stimulus.status === PsychoJS.Status.STARTED && Boolean((key_resp.status == FINISHED))) {
      image_stimulus.setAutoDraw(false);
    }
    
    // *circle_border* updates
    if (t >= (jitter_duration + 0.5) && circle_border.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      circle_border.tStart = t;  // (not accounting for frame time here)
      circle_border.frameNStart = frameN;  // exact frame index
      
      circle_border.setAutoDraw(true);
    }
    
    if (circle_border.status === PsychoJS.Status.STARTED && Boolean((key_resp.status == FINISHED))) {
      circle_border.setAutoDraw(false);
    }
    
    // *arrow_image* updates
    if (t >= (jitter_duration + 0.5) && arrow_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_image.tStart = t;  // (not accounting for frame time here)
      arrow_image.frameNStart = frameN;  // exact frame index
      
      arrow_image.setAutoDraw(true);
    }

    if (arrow_image.status === PsychoJS.Status.STARTED && Boolean((key_resp.status == FINISHED))) {
      arrow_image.setAutoDraw(false);
    }
    // start/stop stop_signal_sound
    if (t >= (staircase[staircase_number] + 1) && stop_signal_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_signal_sound.tStart = t;  // (not accounting for frame time here)
      stop_signal_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ stop_signal_sound.play(); });  // screen flip
      stop_signal_sound.status = PsychoJS.Status.STARTED;
    }
    frameRemains = (staircase[staircase_number] + 1) + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stop_signal_sound.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stop_signal_sound.stop();
      stop_signal_sound.status = PsychoJS.Status.FINISHED;
      if (0.25 > 0.5) {
        stop_signal_sound.stop();  // stop the sound (if longer than duration)
        stop_signal_sound.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *key_resp* updates
    if (t >= 1.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    frameRemains = 1.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: [], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var response;
var step_size;
var high_threshold;
var low_threshold;
var response_time;
function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    stop_signal_sound.stop();  // ensure sound has stopped at end of routine
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    response = key_resp.keys;
    step_size = 0.05;
    if ((trial_type === "nogo")) {
        if (response) {
            if ((staircase[staircase_number] >= step_size)) {
                staircase[staircase_number] = (staircase[staircase_number] - step_size);
            }
        } else {
            staircase[staircase_number] = (staircase[staircase_number] + step_size);
        }
    }
    high_threshold = 0.75;
    low_threshold = 0.5;
    response_time = key_resp.rt;
    if (response_time === undefined) {
      response_time = 0.0;
    }

    if ((response_time > high_threshold)) {
        color = red;
        border = 'circle_red.png';
        arrow = (arrow_direction + "_arrow3.png");
    } else {
        if ((response_time > low_threshold)) {
            color = orange;
            border = 'circle_orange.png';
            arrow = (arrow_direction + "_arrow2.png");
        } else {
            color = white;
            border = 'circle_white.png';
            arrow = (arrow_direction + "_arrow1.png");
        }
    }
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var intertrialComponents;
function intertrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'intertrial'-------
    t = 0;
    intertrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    intertrialComponents = [];
    
    for (const thisComponent of intertrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function intertrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'intertrial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = intertrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of intertrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intertrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'intertrial'-------
    for (const thisComponent of intertrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "intertrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var endComponents;
function endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
