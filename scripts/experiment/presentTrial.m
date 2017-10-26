function [Pos Seeker FLAG_FASTER] = presentTrial(Pos,Seeker,FLAG_FASTER,colorFlags,MRI,block,a,b,postjitter,imagetex,w,standardImHeight,standardImArea,oval2imRatio,ArrowSize,ArrowPosX,ArrowPosY,arrow_duration,anchor,inputDevice,pahandle,wave,fid)
% updated 1-8-15 to standardize area instead of height

tc=(block-1)*8*16+(a-1)*16+b;
trialnum=floor((tc+1)/2);
OCI=0.5 + postjitter(trialnum);

red=[255,0,0,255];
orange=[255,128,0,255];
grey=[120 120 120];
white = [255 255 255];
flagThickness=5;
highThresh = .750;
lowThresh = .500;
giantFrameThickness=95;

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


if Seeker(Pos,3)~=2, % ie this is not a NULL event
    imDims = Screen('Rect', imagetex(trialnum));
    imHeight=imDims(4)-imDims(2);
    imWidth=imDims(3)-imDims(1);
    %     imDims = imDims/imHeight*standardImHeight;
    areaScalingFactor = standardImArea/(imHeight*imWidth);
    scaledHeight = imHeight*sqrt(areaScalingFactor);
    imDims = imDims/imHeight*scaledHeight;
    
    imrect = CenterRect(imDims,Screen('Rect',w));
    Screen('DrawTexture',w,imagetex(trialnum),[],imrect);
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
    Screen('FrameOval',w,ovalColor,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness+flagThickness);
    Screen('FrameOval',w,grey,CenterRect(imDims*oval2imRatio,Screen('Rect',w)),giantFrameThickness);
    Screen('TextSize',w,ArrowSize);
    Screen('TextFont',w,'Arial');
    if (Seeker(Pos,4)==0),
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
            PsychPortAudio('FillBuffer', pahandle, wave);
            PsychPortAudio('Start', pahandle, 1, 0, 0);
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
    PsychPortAudio('Stop', pahandle); % If do this,
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
            FLAG_FASTER = 2;
        elseif trialRT > lowThresh
            FLAG_FASTER = 1;
        else
            FLAG_FASTER = 0;
        end
    end
end

Pos=Pos+1;
end