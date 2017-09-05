function [tc t a block Seeker Ladder1 Ladder2 Ladder FLAG_FASTER] = presentTrial(colorFlags,FLAG_FASTER,type,tc,t,a,block,Seeker,imagetex,inputDevice,anchor,w,Step,Ladder1,Ladder2,Ladder,oval2imRatio,standardImHeight,standardImArea,ArrowSize,ArrowPosX,ArrowPosY,arrow_duration,MRI,pahandle,wave,fid,chunkSize)

% updated 1-8-15 to standardize area instead of height

%recalc each time;it'll only increase every two.
t(type)=floor((tc(type)+1)/2);
OCI=0.5;
% numSeekerEvents=size(Seeker{type},1);
numSeekerEvents=size(Seeker{type},1);
block1Size = [9 4];
red=[255,0,0,255];
orange=[255,128,0,255];
grey=[120 120 120];
white = [255 255 255];
flagThickness=5;
giantFrameThickness=95;
highThresh = .750;
lowThresh = .500;

if FLAG_FASTER==2
    ovalColor = red;  %red [255,0,0,255]
    Screen('TextColor',w,red);
elseif FLAG_FASTER==1
    ovalColor = orange; %orange [255,128,0,255]
    Screen('TextColor',w,orange);
else
    ovalColor = white;
    Screen('TextColor',w,white);
end

for typeTemp=1:2
    if tc(typeTemp)==1
        partialSums(typeTemp) = 0;
    else
        partialSums(typeTemp) = sum(Seeker{typeTemp}(1:(tc(typeTemp)-1),15));
    end
end

theoreticalStartTime = sum(partialSums);
Seeker{type}(tc(type),16) = theoreticalStartTime;
Seeker{type}(tc(type)+1,16) = theoreticalStartTime+1.5;

if Seeker{type}(tc(type),3)~=2, %% ie this is not a NULL event
    imDims = Screen('Rect', imagetex{type}(t(type)));
    imHeight=imDims(4)-imDims(2);
    imWidth=imDims(3)-imDims(1);
    %     imDims = imDims/imHeight*standardImHeight;
    areaScalingFactor = standardImArea/(imHeight*imWidth);
    scaledHeight = imHeight*sqrt(areaScalingFactor);
    imDims = imDims/imHeight*scaledHeight;
    imrect = CenterRect(imDims,Screen('Rect',w));
    Screen('DrawTexture',w,imagetex{type}(t(type)),[],imrect);
    Screen('FrameOval',w,ovalColor,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness+flagThickness);
    Screen('FrameOval',w,grey,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness);
    
    %     while GetSecs - anchor < Seeker{type}(tc(type),16),
    while GetSecs - anchor < theoreticalStartTime
    end; %waits to synch beginning of trial with 'true' start
    
    Screen('Flip',w);
    trial_start_time = GetSecs;
    Seeker{type}(tc(type),12)=trial_start_time-anchor; %absolute time since beginning of task
    WaitSecs(OCI);
end;

if Seeker{type}(tc(type),3)~=2, %% ie this is not a NULL event
    Screen('DrawTexture',w,imagetex{type}(t(type)),[],imrect);
    Screen('FrameOval',w,ovalColor,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness+flagThickness);
    Screen('FrameOval',w,grey,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness);
    Screen('TextSize',w,ArrowSize);
    Screen('TextFont',w,'Arial');
    if (Seeker{type}(tc(type),4)==0),
        Screen('DrawText',w,'<', ArrowPosX, ArrowPosY);
    else,
        Screen('DrawText',w,'>', ArrowPosX+10, ArrowPosY);
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
                Seeker{type}(tc(type),7)=KbName(tmp(1));
                Seeker{type}(tc(type),9)=GetSecs-arrow_start_time; %RT in col 9
                noresp=0;
            end;
        else,
            if keyIsDown & noresp,
                try,
                    tmp=KbName(keyCode);
                    if length(tmp) > 1 & (tmp(1)==',' | tmp(1)=='.'),
                        Seeker{type}(tc(type),7)=KbName(tmp(2));
                    else,
                        Seeker{type}(tc(type),7)=KbName(tmp(1));
                    end;
                catch,
                    Seeker{type}(tc(type),7)=9999;
                end;
                if t(type)==1 & GetSecs-arrow_start_time<0,
                    Seeker{type}(tc(type),9)=0;
                    Seeker{type}(tc(type),13)=0;
                else,
                    Seeker{type}(tc(type),9)=GetSecs-arrow_start_time; % RT
                end;
                noresp=0;
            end;
        end;
        WaitSecs(0.001);
        if Seeker{type}(tc(type),3)==1 & GetSecs - arrow_start_time >=Seeker{type}(tc(type),6)/1000 & notone,
            %% Psychportaudio
            PsychPortAudio('FillBuffer', pahandle, wave);
            PsychPortAudio('Start', pahandle, 1, 0, 0);
            Seeker{type}(tc(type),14)=GetSecs-arrow_start_time;
            notone=0;
            %WaitSecs(1); % So sound plays for set amount of time; if .05, plays twice, otherwise doen't really make it last longer
            %PsychPortAudio('Stop', pahandle);
            % Try loop to end sound after 1 sec, while
            % still looking for responses-DOESN"T WORK!!!!!
            while GetSecs<Seeker{type}(tc(type),14)+1,
                %%% check for escape key %%%
                [keyIsDown,secs,keyCode] = KbCheck(inputDevice);
                escapekey = KbName('escape');
                if keyIsDown & noresp,
                    try,
                        tmp=KbName(keyCode);
                        if length(tmp) > 1 & (tmp(1)==',' | tmp(1)=='.'),
                            Seeker{type}(tc(type),7)=KbName(tmp(2));
                        else,
                            Seeker{type}(tc(type),7)=KbName(tmp(1));
                        end;
                    catch,
                        Seeker{type}(tc(type),7)=9999;
                    end;
                    if b==1 & GetSecs-arrow_start_time<0,
                        Seeker{type}(tc(type),9)=0;
                        Seeker{type}(tc(type),13)=0;
                    else,
                        Seeker{type}(tc(type),9)=GetSecs-arrow_start_time; % RT
                    end;
                    noresp=0;
                end;
            end;
            %PsychPortAudio('Stop', pahandle);
            %% Old way to play sound
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
    PsychPortAudio('Stop', pahandle); % If do this,
    % response doesn't end loop
end; %end non null

Screen('Flip',w);

while(GetSecs - anchor < theoreticalStartTime + Seeker{type}(tc(type),15)), % just wait until it's the right time
end;

% print trial info to log file
tmpTime=GetSecs;
try,
    fprintf(fid,'%d\t%d\t%d\t%d\t%d\t%d\t%d\t%d\t%0.3f\t%0.3f\t%0.3f\t%0.3f\t%0.3f\t%0.3f\t%0.3f\t%0.3f\n',...
        Seeker{type}(tc(type),1:chunkSize(type)));
catch,   % if sub responds weirdly, trying to print the resp crashes the log file...instead print "ERR"
    fprintf(fid,'ERROR SAVING THIS TRIAL\n');
end;

if colorFlags==1
    trialRT=Seeker{type}(tc(type),9);
    if trialRT > highThresh
        FLAG_FASTER = 2;
    elseif trialRT > lowThresh
        FLAG_FASTER = 1;
    else
        FLAG_FASTER = 0;
    end
end

%after doing trial stuff, increase the tc(type) & other vars as nec
tc(type)=tc(type)+2;

if mod(tc(type),chunkSize(type))==1 & tc(type)>1
    a(type)=a(type)+1;
    %%%LADDER ADJUSTMENT
    % after each 8 trials, this code does the updating of staircases
    %These three loops update each of the ladders
    for c=(tc(type)-chunkSize(type)):(tc(type)-1),
        
        %This runs from one to two, one for each of the ladders
        for d=1:2,
            if (Seeker{type}(c,7)~=0 & Seeker{type}(c,5)==d),	% response logged & correct ladder
                if Ladder{type}(d,1)>=Step, % if you can decrease the SSD, do it, since they failed.
                    Ladder{type}(d,1)=Ladder{type}(d,1)-Step;
                    Ladder{type}(d,2)=-1 % log it as a decrease.
                elseif Ladder{type}(d,1)>0 & Ladder{type}(d,1)<Step, % if you can't lower it, just make it 0.
                    Ladder{type}(d,1)=0;
                    Ladder{type}(d,2)=-1; % log it as a decrease.
                else,
                    Ladder{type}(d,1)=Ladder{type}(d,1); % or if it's 0, keep it there.
                    Ladder{type}(d,2)=0; % log it as no change.
                end;
                if (d==1),
                    [x y]=size(Ladder1{type});
                    Ladder1{type}(x+1,1)=Ladder{type}(d,1);
                else if (d==2),
                        [x y]=size(Ladder2{type});
                        Ladder2{type}(x+1,1)=Ladder{type}(d,1);
                    end;
                end;
            else
                if (Seeker{type}(c,5)==d & Seeker{type}(c,7)==0), % correct ladder but no response
                    
                    Ladder{type}(d,1)=Ladder{type}(d,1)+Step; % increase SSD, since they succeeded
                    Ladder{type}(d,2)=1; % log it as an increase.
                    if (d==1),
                        [x y]=size(Ladder1{type});
                        Ladder1{type}(x+1,1)=Ladder{type}(d,1);
                    else if (d==2),
                            [x y]=size(Ladder2{type});
                            Ladder2{type}(x+1,1)=Ladder{type}(d,1);
                        end;
                    end;
                end;
            end;
        end;
    end
    %Updates the time in each of the subsequent stop trials
    for c=(tc(type)):numSeekerEvents,
        if (Seeker{type}(c,5)~=0), %i.e. staircase trial
            Seeker{type}(c,6)=Ladder{type}(Seeker{type}(c,5),1);
        end;
    end;
    %Updates each of the old trials with a +1 or a -1
    for c=(tc(type)-chunkSize(type)):tc(type)-1,
        if (Seeker{type}(c,5)~=0),
            Seeker{type}(c,8)=Ladder{type}(Seeker{type}(c,5),2);
        end;
    end;
    
end;

if mod(a(type),block1Size(type))==1 & a(type)>1 & mod(tc(type),chunkSize(type))==1
    block(type)=block(type)+1;
end