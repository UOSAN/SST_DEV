/************ 
 * Sst Test *
 ************/

import { PsychoJS, ServerManager } from './lib/core-2020.1.js';
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
let expInfo = {'participant': '', 'session': '3', 'run_number': '1'};

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

// Determine the name of the conditions file based on the participant number and run number
util.addInfoFromUrl(expInfo);
var conditions_file;
var conditions_file_path;
conditions_file = 'conditions_file.csv';
conditions_file_path = './DEV' + expInfo['participant'] + '_' + expInfo['session'] + '_conditions.csv';

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
  {name: conditions_file, path: conditions_file_path}
  ]
  });

  
// Based on the contents of the conditions file, download only the image resources needed.
function condition_file_download() {
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
  
  let image_files = []
  for (const element of selectedRows) {
    image_files.push({name: (element[4]), path: ('./resources/' + element[4])});
  }
  
  psychoJS.downloadResources(image_files);
}


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
  
  condition_file_download();
    
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
