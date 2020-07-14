# Stop Signal task for Devaluation

## Introduction

The Stop-Signal task (SST) presents image stimuli of foods, followed by an arrow. The participant is supposed to indicate the arrow direction, except when the stop signal occurs.

## How to run the task

1. When this task is run online, via pavlovia.org, make sure that a participant-specific conditions files, containing the names of images to be displayed in order, have been created in the `html/` folder. The conditions files are named `DEV999_1_conditions.csv` for participant 999 for session 1. This can be done by starting the Python version of the task and moving the created conditions files. Then, these changes have to be pushed to gitlab.pavlovia.org.
2. Create the experiment URL with a query string that specifies the participant number, the session number, and the run number. For example, for participant 888, in session 3, performing run number 1, the URL must include `participant=888&session=3&run_number=1`. After this URL is accessed, the images will be downloaded to the participant's computer, then the task will start automatically.

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

## Developer documentation

Developed with PsychoPy v2020.1.2
