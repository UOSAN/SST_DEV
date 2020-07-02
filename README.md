# Stop Signal task for Devaluation

## Introduction

The Stop-Signal task (SST) presents image stimuli of foods, followed by an arrow. The participant is supposed to indicate the arrow direction, except when the stop signal occurs.

## How to run the task

1. Launch the PsychoPy Builder.
2. Open the file `SST.psyexp`.
3. Start the experiment by selecting the Tools -> Run menu item
4. Fill in the subject number, the session number, and the run number. Sessions 1 and 2 are in-scanners sessions, while sessions 3, 4, and 5 are behavioral sessions. Specifying run number of 0 will run a practice version of the task. The task will start automatically after that.

## Task description

The task starts by displaying instruction text. The instruction text is displayed until the user presses one of the response buttons, in the behavioral version, or the trigger signal is received from the MRI, in the scanner version. The instruction text for the behavioral version is:
```
Press the left button (LEFT index finger) if you see <
Press the right button (RIGHT index finger) if you see >
Press the button as QUICKLY and as ACCURATELY
as you can when you see the arrow.
But if you hear a beep, try very hard to STOP
yourself from pressing the button on that arrow only.
GOING and STOPPING are equally important.
So DO NOT slow down your response to wait for the beep,
because then you are no longer going when you are supposed to.
You won''t always be able to stop when you hear a beep,
but as long as you go quickly all of the time
(while pushing the correct button for arrow direction),
and can stop some of the time, you are doing the task correctly.
Ask the experimenter if you have any questions.
Press any key to go on.
```
In the scanner version it is:
```
Calibrating scanner.
Please hold VERY still.
```

Trials are repeated 128 times.

### Trial structure

1. Display the image stimulus through a circular aperture on a grey background. The boarder of the circular aperture is 10 pixels wide and white initially.
2. After ~1s (0.5s plus jitter with mean of 0.5s) display a go cue of left or right pointing arrow, which is also white initially.
3. On stop trials, issue the stop signal, which is a sound, after the stop signal delay elapses.
4. The participant responds by pressing a button with the left or right index finger.

If the participant is slow in reacting, make the circular aperture border and the arrow red if the response time is greater than 0.75s, and orange if it is between 0.5s and 0.75s.

5. Display a grey background for an intertrial interval of variable duration (M = 1400 ms jittered following a gamma distribution).

The stop signal delay is determined by two independent staircases that adjust by 50 ms after each stop trial using a staircase function that increases for successful stops and decreases for failed stops. The initial values for the two staircases are 0.25s and 0.35s.

Each run consists of 128 trials (containing 96 go trials and 32 stop trials) and lasts approximately 6 minutes.

## Configuration

On the first run of each session, the image ratings from the ImageSelection task are used to determine which images to display for the unhealthy food condition. The trial order is read from the input/ladderFiles/\*_UvH.mat files.

## Developer documentation

Developed with PsychoPy v2020.1.2
