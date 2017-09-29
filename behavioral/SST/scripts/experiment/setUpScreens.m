function [w ArrowSize ArrowPosX ArrowPosY xcenter ycenter] = setUpScreens()

Screen('Preference','SkipSyncTests',1);
fprintf('setting up screen\n');
screens=Screen('Screens');
screenNumber=max(screens);
w=Screen('OpenWindow', screenNumber,0,[],32,2);
[wWidth, wHeight]=Screen('WindowSize', w);
grayLevel=120;
Screen('FillRect', w, grayLevel);
Screen('Flip', w);

black=BlackIndex(w); % Should equal 0.
white=WhiteIndex(w); % Should equal 255.

xcenter=wWidth/2;
ycenter=wHeight/2;

theFont='Arial';
Screen('TextSize',w,36);
Screen('TextFont',w,theFont);
Screen('TextColor',w,white);

ArrowSize=150;
ArrowPosX=xcenter-48;
ArrowPosY=ycenter-86;
% CircleSize=150;
% CirclePosX=xcenter-CircleSize/2;
% CirclePosY=ycenter-CircleSize/2;

HideCursor;