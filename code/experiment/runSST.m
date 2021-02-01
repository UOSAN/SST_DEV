%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%% Stopfmri %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%% Adam Aron 12-01-2005
%%% Adapted for OSX Psychtoolbox by Jessica Cohen 12/2005
%%% Modified for use with new BMC trigger-same device as button box by JC 1/07
%%% Sound updated and modified for Jess' dissertation by JC 10/08
%%% LEK 2014/12/23
% updated 1-8-15 to standardize area instead of height
% updated 2-9-15 to adjust numbering for images (out of 1772)

function SST_DEV()

clear PsychHID;
clear all;
exptCode = 'DEV';
% output version
script_name='Stopfmri: optimized SSD tracker for fMRI';
revision_date='02-07-18';
notes={'Design developed by Aron, Newman and Poldrack, based on Aron et al. 2003'};
rng('default')
rng('shuffle')
testing = 0; % change to testing = 1 if you don't have access to dropbox but have ImageSelection on the desktop

% DIR.loc = input('Where is the task directory? (0=Desktop, 1=Dropbox): ');
DIR.study = '~/Desktop/DEV/';
DIR.task = [DIR.study filesep 'SST_DEV/'];

DIR.img = [DIR.task '/stimuli/CategorizedImages/'];
DIR.input = [DIR.task filesep 'input/'];
DIR.output = [DIR.task filesep 'output/'];
% DIR.output_dropbox = '/Users/jonsnow/Desktop';
DIR.output_dropbox = '~/Dropbox (University of Oregon)/UO-SAN Lab/Berkman Lab/Devaluation/Tasks/SST_DEV/output';
if testing
    DIR.imSel = '~/Desktop/ImageSelection';
else DIR.imSel = '~/Dropbox (University of Oregon)/UO-SAN Lab/Berkman Lab/Devaluation/Tasks/ImageSelection';
end

addpath(genpath(DIR.task))
addpath(genpath(DIR.img))

% PARAMETERS
colorFlags=1;
trialsPerType = 64; %will be 64
numTypes = 2; % will be 2
trialsPerRun=trialsPerType*numTypes; % for testing; will be 128
TRIAL = struct;
TRIAL.FLAG_FASTER = 0;
jitterListFile='jitter.txt';

% read in user info
fprintf('%s (revised %s)\n',script_name, revision_date);
subject_code=input('Enter subject number (3 digits): ');
sub_session=input('What session is this? (Enter a number 1 through 5): ');
MRI=input('Are you scanning? 1 if yes, 0 if no: ');
cd(DIR.input)
postjitter = textread(jitterListFile, '%n','delimiter', '\t', 'whitespace', '', 'commentstyle', 'matlab' );

if subject_code<10
    placeholder = '00';
elseif subject_code<100
    placeholder = '0';
else placeholder = '';
end

% CALL FUNCTION TO GET HEALTHY & UNHEALTHY IMAGES
[hStim uStim] = getStim(DIR,trialsPerType,subject_code,placeholder);
% outputs SHUFFLED hStim & uStim

if subject_code<10
    placeholder = '00';
elseif subject_code<100
    placeholder = '0';
else
    placeholder = '';
end

% Check to make sure this sub & session doesn't exist:
subNsess = dir([DIR.output_dropbox filesep 'DEV' placeholder num2str(subject_code) '_run' num2str(sub_session) '*']);

if ~isempty(subNsess) && subject_code ~= 999
    error('You already ran subject %d session %d.',subject_code,sub_session);
end

if sub_session==1,
    LADDER1IN=250; %input('Ladder1 start val (e.g. 250): ');
    LADDER2IN=350; %input('Ladder2 start val (e.g. 350): ');
    %Ladder Starts (in ms):
    Ladder1=LADDER1IN;
    Ladder(1,1)=LADDER1IN;
    Ladder2=LADDER2IN;
    Ladder(2,1)=LADDER2IN;
elseif sub_session>1, %% this code looks up the last value in each staircase
    sub_session_temp = sub_session;
    %     trackfile=input('Enter name of subject''s previous ''mat'' file to open: ','s');
    
    %Find most recent output file
    prevSession = sub_session; 
    subOutputFiles = [];
    while isempty(subOutputFiles) & prevSession > 0 % keep going until you find an output file or until you've gotten to 0 (meaning there are none)
        prevSession = prevSession-1; % on next iteration of while loop, try one session prior
        if testing
            subOutputFiles = dir([DIR.output filesep 'DEV' placeholder num2str(subject_code) '_run' num2str(prevSession) '*']);
        else subOutputFiles = dir([DIR.output_dropbox filesep 'DEV' placeholder num2str(subject_code) '_run' num2str(prevSession) '*']);
        end
    end
    
    if isempty(subOutputFiles) %if you looked thru all session #s and there are still no output files
        warning('Could not find previous output file; using defaults')
        % Use the defaults that would be given at session 1
        LADDER1IN=250; %input('Ladder1 start val (e.g. 250): ');
        LADDER2IN=350; %input('Ladder2 start val (e.g. 350): ');
        %Ladder Starts (in ms):
        Ladder1=LADDER1IN;
        Ladder(1,1)=LADDER1IN;
        Ladder2=LADDER2IN;
        Ladder(2,1)=LADDER2IN;
    else
        if prevSession < sub_session-1
            warning('Using output file from session %d',prevSession)
        end
        
        [~,idx] = sort([subOutputFiles.datenum]);
        trackfile = subOutputFiles(idx(end)).name
        cd(DIR.output_dropbox)
        load(trackfile);
        clear Seeker; %gets rid of this so it won't interfere with current Seeker
        
        startval=length(Ladder1);
        Ladder(1,1)=Ladder1(startval);
        Ladder(2,1)=Ladder2(startval);
        sub_session = sub_session_temp;
    end
end

%load relevant Ladder file for scan (there MUST be st1b1.mat & st1b2.mat)
inputfile=sprintf('s%dr%d_UvH.mat',subject_code,sub_session);
load(['ladderFiles/' inputfile]); % variable is trialcode

% GET STIM IN U-H ORDER
UvH_trials = UvH(UvH<2); % get rid of null events
hIdx = UvH_trials==1; % find healthy events
uIdx = UvH_trials==0; % find unhealthy events

% FOR TESTING ONLY: repeat images as needed
if trialsPerType < sum(hIdx)
    repsNeeded = ceil(sum(hIdx)/trialsPerType);
    hStim = repmat(hStim,repsNeeded);
    hStim = hStim(1:sum(hIdx))';
    warning('repeating healthy stim %d times',repsNeeded)
end

if trialsPerType < sum(uIdx)
    repsNeeded = ceil(sum(uIdx)/trialsPerType);
    uStim = repmat(uStim,repsNeeded);
    uStim = uStim(1:sum(uIdx))';
    warning('repeating unhealthy stim %d times',repsNeeded)
end

stim=cell(sum(hIdx)+sum(uIdx),1); % set up cell array
stim(hIdx) = hStim; % insert healthy images
stim(uIdx) = uStim; % insert unhealthy images

exploreStimOrder = [stim mat2cell(UvH_trials,ones(128,1),1)];
save([DIR.output filesep 'stimPrezOrder_DEV' placeholder num2str(subject_code) '_run' num2str(sub_session) '.mat'],'stim','UvH','uStim','hStim','exploreStimOrder')
save([DIR.output_dropbox filesep 'stimPrezOrder_DEV' placeholder num2str(subject_code) '_run' num2str(sub_session) '.mat'],'stim','UvH','uStim','hStim','exploreStimOrder')
% write trial-by-trial data to a text logfile
d=clock;
logfile=sprintf('sub%d_scan%d_stopsig.log',subject_code,sub_session);
fprintf('A log of this session will be saved to %s\n',logfile);
fid=fopen(logfile,'a');
if fid<1,
    error('could not open logfile!');
end;

fprintf(fid,'Started: %s %2.0f:%02.0f\n',date,d(4),d(5));
WaitSecs(1);

%Seed random number generator
rand('state',subject_code);

try,  % goes with catch at end of script
    
    %% set up INPUT DEVICES
    [inputDevice, ~] = setUpDevices(MRI);
    
    % set up SCREENS
    Screen('Preference', 'SkipSyncTests', 1);
    [xcenter ycenter w L_arrow_tex R_arrow_tex] = setUpScreens();
    
    %Preload stim
    imagetex = zeros(1,trialsPerRun); %initialize imagetex for pics
    for i=1:trialsPerRun
        img = imread(stim{i});
        itex = Screen('MakeTexture', w, img);
        imagetex(i) = itex;
    end
    cd([DIR.task 'output'])
    
    %Adaptable Constants
    % "chunks", will always be size 64:
    NUMCHUNKS=4;  %gngscan has 4 blocks of 64 (2 scans with 2 blocks of 64 each--but says 128 b/c of interspersed null events)
    Step=50;
    ISI=1.5; %set at 1.5
    BSI=1 ;  %NB, see figure in GNG4manual (set at 1 for scan)
    
    %%% FEEDBACK VARIABLES
    if MRI==1,
        %trigger = KbName('t');
        trigger = [52];
        blue = KbName('b');
        yellow = KbName('y');
        green = KbName('g');
        red = KbName('r');
        %LEFT=[98 5 10];   %blue (5) green (10)
        LEFT = [91];
        RIGHT=[94];
        %RIGHT=[121 28 21]; %yellow (28) red (21)
    else,
        LEFT=[197];  %<
        RIGHT=[198]; %>
    end;
    
    if sub_session==1;
        error_var=zeros(1, NUMCHUNKS/2);
        rt = zeros(1, NUMCHUNKS/2);
        count_rt = zeros(1, NUMCHUNKS/2);
    end;
    
    %%%% Setting up the sound stuff
    SOUND = configSound();
    
    %%%%%%%%%%%%%% Stimuli and Response on same matrix, pre-determined
    % The first column is trial number;
    % The second column is numchunks number (1-NUMCHUNKS);
    % The third column is 0 = Go, 1 = NoGo; 2 is null, 3 is notrial (kluge, see opt_stop.m)
    % The fourth column is 0=left, 1=right arrow; 2 is null
    % The fifth column is ladder number (1-2);
    % The sixth column is the value currently in "LadderX", corresponding to SSD
    % The seventh column is subject response (no response is 0);
    % The eighth column is ladder movement (-1 for down, +1 for up, 0 for N/A)
    % The ninth column is their reaction time (sec)
    % The tenth column is their actual SSD (for error-check)
    % The 11th column is their actual SSD plus time taken to run the command
    % The 12th column is absolute time since beginning of task that trial begins
    % The 13th column is the time elapsed since the beginning of the block at moment when arrows are shown
    % The 14th column is the actual SSD for error check (time from arrow displayed to beep played)
    % The 15th column is the duration of the trial from trialcode
    % The 16th column is the time_course from trialcode
    % The 17th column is the UvH code (0=unhealthy, 1=healthy, 2=null)
    
    %this puts trialcode into Seeker
    % trialcode was generated in opt_stop and is balanced for 4 staircase types every 16 trials, and arrow direction
    %  see opt_stop.m in /gng/optmize/stopping/
    % because of interdigitated null and true trial, there will thus be four staircases per 32 trials in trialcode
    
    trialcode(trialcode(:,1)<2,2) = trialcode(trialcode(:,1)<2,2)+postjitter; % ADDS M=500ms of jitter to length of cue
    
    for  tc=1:256,                         %go/nogo        arrow dir       staircase    initial staircase value                    duration       timecourse
        trialcode(tc,3)=sum(trialcode(1:tc-1,2));
        if trialcode(tc,5)>0,
            Seeker(tc,:) = [tc sub_session  trialcode(tc,1) trialcode(tc,4) trialcode(tc,5) Ladder(trialcode(tc,5)) 0 0 0 0 0 0 0 0 trialcode(tc,2) trialcode(tc,3)];
        else,
            Seeker(tc,:) = [tc sub_session trialcode(tc,1) trialcode(tc,4) trialcode(tc,5) 0 0 0 0 0 0 0 0 0 trialcode(tc,2) trialcode(tc,3)];
        end;
    end;
    
    Seeker(:,end+1) = UvH;
    
    %%%%%%%%%%%%%%%%%%%%%%%%%% TRIAL PREP %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    
    displayPrepScreens(MRI,w,xcenter,ycenter);
    if MRI==1,
        secs=KbTriggerWait(trigger,inputDevice);
        %secs = KbTriggerWait(KbName('t'),controlDevice);
    else, % If using the keyboard, allow any key as input
        noresp=1;
        while noresp,
            [keyIsDown,secs,keyCode] = KbCheck(inputDevice);
            if keyIsDown & noresp,
                noresp=0;
            end;
        end;
        WaitSecs(0.001);
    end;
    % WaitSecs(0.5);  % prevent key spillover--ONLY FOR BEHAV VERSION
    
    if MRI==1
        DisableKeysForKbCheck(trigger); % So trigger is no longer detected
    end
    
    %%%%%%%%%%%%%%%%%%%%%% TRIAL PRESENTATION %%%%%%%%%%%%%%%%%%%%%%
    
    TRIAL.anchor=GetSecs;
    TRIAL.Pos=1;
    
    for block=1:2, %2	  %because of way it's designed, there are two blocks for every scan
        for a=1:8, %8     %  now we have 8 chunks of 8 trials (but we use 16 because of the null interspersed trials)
            for b=1:16,   %  (but we use 16 because of the null interspersed trials)
                %%%%%%%% FUNCTION CREATED BY LEK 12/23/14 %%%%%%%%
                tc=(block-1)*8*16+(a-1)*16+b;
                trialnum=floor((tc+1)/2);
                if trialnum <= size(imagetex,2)
                    [TRIAL Seeker] = presentTrial(w,MRI,Seeker,inputDevice,TRIAL,SOUND,postjitter,trialnum,b,imagetex,L_arrow_tex,R_arrow_tex,fid,colorFlags);
                end
            end; % end of trial loop
            
            [Seeker,Ladder,Ladder1,Ladder2] = ladderAdjustment(TRIAL.Pos,Seeker,Ladder,Ladder1,Ladder2,Step);
            
        end; %end of miniblock
    end; %end block loop
    
    % Close the audio device:
    PsychPortAudio('Close', SOUND.pahandle);
    
catch,    % (goes with try, line 61)
    rethrow(lasterror);
    Screen('CloseAll');
    ShowCursor;
end;

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% SAVE DATA %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
d=clock;
outfile=sprintf('DEV%s%d_run%d_%s_%02.0f-%02.0f.mat',placeholder,subject_code,sub_session,date,d(4),d(5));
Snd('Close');

try,
    save(outfile, 'Seeker', 'Ladder1', 'Ladder2', 'subject_code', 'sub_session');
catch,
    fprintf('couldn''t save %s\n saving to stopsig_fmri.mat\n',outfile);
    save stopsig_fmri;
end;
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
WaitSecs(3);
Screen('TextSize',w,36);
Screen('TextFont',w,'Ariel');
Screen('DrawText',w,'Great Job. Thank you!',xcenter-200,ycenter);
Screen('Flip',w);


copyfile([DIR.output filesep outfile],DIR.output_dropbox); %% COME BACK

WaitSecs(1);
Screen('Flip',w);
Screen('CloseAll');
ShowCursor;
end

function [hStim uStim] = getStim(DIR,trialsPerType,subject_code,placeholder)
% GET HEALTHY IMAGES
hStimStruct = dir([DIR.img filesep 'Healthy' filesep 'healthy*.jpg']);
hStimCell = struct2cell(hStimStruct)';
hStim = hStimCell(:,1);
hStim = Shuffle(hStim);
save current
hStim = hStim(1:trialsPerType);

% pick top trialsPerType for unhealthy images
if trialsPerType <= length(hStim)
    hStim = hStim(1:trialsPerType);
else
    error('Not enough healthy stim!')
end

% GET UNHEALTHY images
% Load ratings .mat
save current
copyfile([DIR.imSel '/output/Categorized/DEV' placeholder num2str(subject_code) '_ratings.mat'], [DIR.input filesep 'ratingFiles/'])

load([DIR.input filesep 'ratingFiles' filesep 'DEV' placeholder num2str(subject_code) '_ratings.mat'])
tiers = cell2mat(ImgRatings_sorted(:,2));
ratings = cell2mat(ImgRatings_sorted(:,1));
cravedIdx = (tiers > 0) & (ratings > 0); % only select images from craved categories
cravedStim = ImgRatings_sorted(cravedIdx,1:3);
cravedTiers = cell2mat(cravedStim(:,2));
cravedRatings = cell2mat(cravedStim(:,1));

% shuffle within each rating FOR CRAVED STIM ONLY
minRating = 1;
maxRating = 4;
for r=minRating:maxRating
    %Find stim of rating r & shuffle them
    rIdx = (cravedRatings==r & cravedTiers > 0);
    stimWithinRating = cravedStim(rIdx,3);
    if ~isempty(stimWithinRating) 
        stimWithinRating = Shuffle(stimWithinRating);
        
        % Append to beginning of cravedStim list
        if exist('cravedStim_shufWithin')==1
            cravedStim_shufWithin = [stimWithinRating; cravedStim_shufWithin];
        else
            cravedStim_shufWithin = stimWithinRating;
        end
    end
end

checkShuffle = [ImgRatings_sorted(cravedIdx,:) cravedStim_shufWithin];
% can check to see that images were successfully shuffled within rating.
% pick top trialsPerType for unhealthy images
if trialsPerType <= length(cravedStim_shufWithin)
    uStim = cravedStim_shufWithin(1:trialsPerType);
else
    warning('Not enough unhealthy stim!')
    numReps = ceil(trialsPerType/length(cravedStim_shufWithin));
    stimWReps = {};
    for r=1:numReps
        stimWReps = [stimWReps; cravedStim_shufWithin];
    end
    uStim = stimWReps(1:trialsPerType);
end

hStim = Shuffle(hStim);
uStim = Shuffle(uStim);

end

function [xcenter ycenter w L_arrow_tex R_arrow_tex] = setUpScreens()

% Screen('Preference','SkipSyncTests',1);
fprintf('setting up screen\n');
screens=Screen('Screens');
screenNumber=max(screens);
w=Screen('OpenWindow', screenNumber,0,[],32,2);
[wWidth, wHeight]=Screen('WindowSize', w);
grayLevel=120;
Screen('FillRect', w, grayLevel);
Screen('Flip', w);
Screen('BlendFunction',w,'GL_SRC_ALPHA','GL_ONE_MINUS_SRC_ALPHA'); % allows transparency values to take effect

black=BlackIndex(w); % Should equal 0.
white=WhiteIndex(w); % Should equal 255.
red=[255,0,0];
orange=[255,128,0];

xcenter=wWidth/2;
ycenter=wHeight/2;

theFont='Arial';
Screen('TextSize',w,36);
Screen('TextFont',w,theFont);
Screen('TextColor',w,white);

% Create textures for arrows to be drawn in each trial
for color = 1:3
    [L_arrow, ~, alphaL] = imread(['L_arrow' num2str(color) '.png']);
    L_arrow(:,:,4)=alphaL; % set alpha layer
    L_arrow_tex(color) = Screen('MakeTexture',w,L_arrow);
    
    [R_arrow, ~, alphaR] = imread(['R_arrow' num2str(color) '.png']);
    R_arrow(:,:,4)=alphaR; % set alpha layer
    R_arrow_tex(color) = Screen('MakeTexture',w,R_arrow);
end

HideCursor;
end

function [SOUND] = configSound()    
    %%%% Psychportaudio
    SOUND=struct;
    load soundfile.mat %%% NEED SOMETHING PERSONALIZED TO ME????? I.E. IF WANT THE SOUND HIGHER??
    SOUND.wave=sin(1:0.25:1000);
    %freq=Fy*1.5; % change this to change freq of tone
    freq=22254;
    nrchannels = size(SOUND.wave,1);
    % Default to auto-selected default output device:
    deviceid = -1;
    % Request latency mode 2, which used to be the best one in our measurement:
    reqlatencyclass = 2; % class 2 empirically the best, 3 & 4 == 2
    % Initialize driver, request low-latency preinit:
    InitializePsychSound(1);
    % Open audio device for low-latency output:
    SOUND.pahandle = PsychPortAudio('Open', deviceid, [], reqlatencyclass, freq, nrchannels);
    %Play the sound
    PsychPortAudio('FillBuffer', SOUND.pahandle, SOUND.wave);
    PsychPortAudio('Start', SOUND.pahandle, 1, 0, 0);
    WaitSecs(1);
    PsychPortAudio('Stop', SOUND.pahandle);
    %%%% Old way
    %     Snd('Open');
    %     samp = 22254.545454;
    %     aud_stim = sin(1:0.25:1000);
    %     Snd('Play',aud_stim,samp);
end

function displayPrepScreens(MRI,w,xcenter,ycenter)

% startstring = sprintf('Get ready for scan number %d!',sub_session);
% Screen('DrawText',w,startstring,100,100);

% updated 3-24-15 to include exptCond variable for control vs. experimental
% group

if MRI==1
    DrawFormattedText(w,'Scanner calibrating.','center',ycenter-25);
    DrawFormattedText(w,'Please hold VERY still.','center',ycenter+25);
    Screen('Flip',w);
else
    Screen('DrawText',w,'Press the left button (LEFT index finger) if you see <',100,100); %from Lauren's practice task
    Screen('DrawText',w,'Press the right button (RIGHT index finger) if you see >',100,130); %from Lauren'spractice task
    Screen('DrawText',w,'Press the button as QUICKLY and as ACCURATELY',100,180); %all from Lauren's practice task
    Screen('DrawText',w,'as you can when you see the arrow.',100,210);
    Screen('DrawText',w,'But if you hear a beep, try very hard to STOP',100,240);
    Screen('DrawText',w,'yourself from pressing the button on that arrow only.',100,270);
    Screen('DrawText',w,'GOING and STOPPING are equally important.',100,300);
    Screen('DrawText',w,'So DO NOT slow down your response to wait for the beep,',100,330);
    Screen('DrawText',w,'because then you are no longer going when you are supposed to.',100,360);
    Screen('DrawText',w,'You won''t always be able to stop when you hear a beep,',100,390);
    Screen('DrawText',w,'but as long as you go quickly all of the time',100,420);
    Screen('DrawText',w,'(while pushing the correct button for arrow direction),',100,450);
    Screen('DrawText',w,'and can stop some of the time, you are doing the task correctly.',100,480);
    Screen('DrawText',w,'Ask the experimenter if you have any questions.',100,530);
    Screen('DrawText',w,'Press any key to go on.',100,560);
    Screen('Flip',w);
end;
end

function [TRIAL Seeker] = presentTrial(w,MRI,Seeker,inputDevice,TRIAL,SOUND,postjitter,trialnum,b,imagetex,L_arrow_tex,R_arrow_tex,fid,colorFlags)

Pos = TRIAL.Pos;
anchor = TRIAL.anchor;

arrow_duration=1; %because stim duration is 1.5 secs in opt_stop
standardImHeight = 400;
standardImArea=standardImHeight*standardImHeight;
oval2imRatio=1.8;

% updated 1-8-15 to standardize area instead of height
OCI=0.5 + postjitter(trialnum);

red=[255,0,0];
orange=[255,128,0];
grey=[120 120 120];
white = [255 255 255];
black = [0 0 0];
flagThickness=5;
highThresh = .750;
lowThresh = .500;
giantFrameThickness=200;
ovalOutline = 0;


if TRIAL.FLAG_FASTER==2
    ovalColor = red;  %red [255,0,0,255]
    Screen('TextColor',w,red);
elseif TRIAL.FLAG_FASTER==1
    ovalColor = orange; %orange [255,128,0,255]
    Screen('TextColor',w,orange);
else
    ovalColor = white;
    Screen('TextColor',w,white);
end


if Seeker(Pos,3)~=2, % ie this is not a NULL event
    imDims = Screen('Rect', imagetex(trialnum));
    imHeight=imDims(4)-imDims(2);
    imWidth=imDims(3)-imDims(1);
    areaScalingFactor = standardImArea/(imHeight*imWidth);
    scaledHeight = imHeight*sqrt(areaScalingFactor);
    imDims = imDims/imHeight*scaledHeight;
    
    imrect = CenterRect(imDims,Screen('Rect',w));
    Screen('DrawTexture',w,imagetex(trialnum),[],imrect);
    if ovalOutline
        Screen('FrameOval',w,black,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness+flagThickness+2);
        Screen('FrameOval',w,ovalColor,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness+flagThickness);
        Screen('FrameOval',w,black,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness);
        Screen('FrameOval',w,grey,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness-2);
    end
    Screen('FrameOval',w,ovalColor,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness+flagThickness);
    Screen('FrameOval',w,grey,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness);
    
    while GetSecs - anchor < Seeker(Pos,16),
    end; %waits to synch beginning of trial with 'true' start
    
    Screen('Flip',w);
    trial_start_time = GetSecs;
    Seeker(Pos,12)=trial_start_time-anchor; %absolute time since beginning of task
    WaitSecs(OCI);
end;

if Seeker(Pos,3)~=2, % ie this is not a NULL event
    Screen('DrawTexture',w,imagetex(trialnum),[],imrect);
    if ovalOutline
        Screen('FrameOval',w,black,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness+flagThickness+2);
        Screen('FrameOval',w,ovalColor,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness+flagThickness);
        Screen('FrameOval',w,black,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness);
        Screen('FrameOval',w,grey,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness-2);
    end
    Screen('FrameOval',w,ovalColor,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness+flagThickness);
    Screen('FrameOval',w,grey,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness);
    
    if (Seeker(Pos,4)==0),
        Screen('DrawTexture',w,L_arrow_tex(TRIAL.FLAG_FASTER+1))
    else,
        Screen('DrawTexture',w,R_arrow_tex(TRIAL.FLAG_FASTER+1))
    end;
    noresp=1;
    notone=1;
    Screen('Flip',w);
    arrow_start_time = GetSecs;
    
    
    while (GetSecs-arrow_start_time < arrow_duration & noresp),
        [keyIsDown,secs,keyCode] = KbCheck(inputDevice);
        if MRI==1,
            if keyIsDown & noresp,
                tmp=KbName(keyCode);
                Seeker(Pos,7)=KbName(tmp(1));
                Seeker(Pos,9)=GetSecs-arrow_start_time;
                noresp=0;
            end;
        else,
            if keyIsDown & noresp,
                try,
                    tmp=KbName(keyCode);
                    if length(tmp) > 1 & (tmp(1)==',' | tmp(1)=='.'),
                        Seeker(Pos,7)=KbName(tmp(2));
                    else,
                        Seeker(Pos,7)=KbName(tmp(1));
                    end;
                catch,
                    Seeker(Pos,7)=9999;
                end;
                if b==1 & GetSecs-arrow_start_time<0,
                    Seeker(Pos,9)=0;
                    Seeker(Pos,13)=0;
                else,
                    Seeker(Pos,9)=GetSecs-arrow_start_time; % RT
                end;
                noresp=0;
            end;
        end;
        WaitSecs(0.001);
        if Seeker(Pos,3)==1 & GetSecs - arrow_start_time >=Seeker(Pos,6)/1000 & notone,
            %% Psychportaudio
            PsychPortAudio('FillBuffer', SOUND.pahandle, SOUND.wave);
            PsychPortAudio('Start', SOUND.pahandle, 1, 0, 0);
            Seeker(Pos,14)=GetSecs-arrow_start_time;
            notone=0;
            %WaitSecs(1); % So sound plays for set amount of time; if .05, plays twice, otherwise doen't really make it last longer
            %PsychPortAudio('Stop', pahandle);
            % Try loop to end sound after 1 sec, while
            % still looking for responses-DOESN"T WORK!!!!!
            while GetSecs<Seeker(Pos,14)+1,
                %%% check for escape key %%%
                [keyIsDown,secs,keyCode] = KbCheck(inputDevice);
                escapekey = KbName('escape');
                if keyIsDown & noresp,
                    try,
                        tmp=KbName(keyCode);
                        if length(tmp) > 1 & (tmp(1)==',' | tmp(1)=='.'),
                            Seeker(Pos,7)=KbName(tmp(2));
                        else,
                            Seeker(Pos,7)=KbName(tmp(1));
                        end;
                    catch,
                        Seeker(Pos,7)=9999;
                    end;
                    if b==1 & GetSecs-arrow_start_time<0,
                        Seeker(Pos,9)=0;
                        Seeker(Pos,13)=0;
                    else
                        Seeker(Pos,9)=GetSecs-arrow_start_time; % RT
                    end;
                    noresp=0;
                end;
            end;
            %PsychPortAudio('Stop', pahandle);
            % Old way to play sound
            %Snd('Play',aud_stim,samp);
            %Seeker(Pos,14)=GetSecs-arrow_start_time;
            %notone=0;
        end;
        % To try to get stopping sound outside of sound
        % loop so can collect responses as well; if do
        % this, it doesn't play
        %                         if GetSecs-Seeker(Pos,14)>=1,
        %                             % Stop playback:
        %                             PsychPortAudio('Stop', pahandle);
        %                         end;
    end; %end while
    PsychPortAudio('Stop', SOUND.pahandle); % If do this,
    % response doesn't end loop
end; %end non null

Screen('Flip',w);

while(GetSecs - anchor < Seeker(Pos,16) + Seeker(Pos,15)),
end;

% print trial info to log file
tmpTime=GetSecs;
try,
    fprintf(fid,'%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%0.3f\t%0.3f\t%0.3f\t%0.3f\t%0.3f\t%0.3f\t%0.3f\t%0.3f\n',...
        Seeker(Pos,1:16));
catch,   % if sub responds weirdly, trying to print the resp crashes the log file...instead print "ERR"
    fprintf(fid,'ERROR SAVING THIS TRIAL\n');
end;


if Seeker(Pos,3)~=2, % ie this is not a NULL event
    if colorFlags==1
        trialRT=Seeker(Pos,9);
        if trialRT > highThresh
            TRIAL.FLAG_FASTER = 2;
        elseif trialRT > lowThresh
            TRIAL.FLAG_FASTER = 1;
        else
            TRIAL.FLAG_FASTER = 0;
        end
    end
end

TRIAL.Pos=TRIAL.Pos+1;
end

function [Seeker,Ladder,Ladder1,Ladder2] = ladderAdjustment(Pos,Seeker,Ladder,Ladder1,Ladder2,Step)
% Pos is not unintentional; TRIAL.pos is called as the first argument in the main script

% after each 8 trials, this code does the updating of staircases
%These three loops update each of the ladders

for c=(Pos-16):Pos-1,
    %This runs from one to two, one for each of the ladders
    for d=1:2,
        % NOTE: Stop trials should be the only ones where Seeker(c,5)==d
        if (Seeker(c,5)==d & Seeker(c,7)~=0),	% if it's a stop trial & there is a response (FAILED STOP)
            if Ladder(d,1)>=Step, % if you can subtract the Step amount, do it!
                Ladder(d,1)=Ladder(d,1)-Step; % lower the SSD for next trial
                Ladder(d,2)=-1; % mark that you lowered the SSD
            elseif Ladder(d,1)>0 & Ladder(d,1)<Step, % if you can't subtract the Step amount, just set to 0
                Ladder(d,1)=0;
                Ladder(d,2)=-1;
            else, % if SSD<=0 don't change it
                Ladder(d,1)=Ladder(d,1);
                Ladder(d,2)=0; % and mark that you didn't
            end;
            if (d==1), % for Ladder1:
                [x y]=size(Ladder1);
                Ladder1(x+1,1)=Ladder(d,1); % log latest SSD value
            elseif (d==2), % also for Ladder2:
                [x y]=size(Ladder2);
                Ladder2(x+1,1)=Ladder(d,1); % log latest SSD value
            end
            
        elseif (Seeker(c,5)==d & Seeker(c,7)==0), % if no response & stop trial (CORRECT STOP)
            Ladder(d,1)=Ladder(d,1)+Step; % increase the SSD
            Ladder(d,2)=1; % mark that you increased the SSD
            if (d==1) % for Ladder1:
                [x y]=size(Ladder1);
                Ladder1(x+1,1)=Ladder(d,1); % log latest SSD value
            elseif (d==2) % also for Ladder2:
                [x y]=size(Ladder2);
                Ladder2(x+1,1)=Ladder(d,1); % log latest SSD value
            end
        end
    end
end

%Updates the time in each of the subsequent stop trials
for c=Pos:256,
    if (Seeker(c,5)~=0), %i.e. staircase/STOP trial
        Seeker(c,6)=Ladder(Seeker(c,5),1); % change Seeker SSD value to be current SSD from now on
    end;
end;

%Updates each of the old trials with a +1 or a -1
for c=(Pos-16):Pos-1,
    if (Seeker(c,5)~=0), % for 2 STOP trials within last block
        Seeker(c,8)=Ladder(Seeker(c,5),2); % indicate staircase direction
    end;
end;
end
    
