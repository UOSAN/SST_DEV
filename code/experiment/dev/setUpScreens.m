function [w xcenter ycenter L_arrow_tex R_arrow_tex] = setUpScreens()

Screen('Preference','SkipSyncTests',1);
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