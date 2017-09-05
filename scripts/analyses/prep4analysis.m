%%% Original script by LEK %%%

% This script will copy the SST .mat files to the
% analyisReady folder and rename them

% INITIAL SETUP (may need to change these parameters)
cd('~/Desktop/REV/REV_SST/output/')
prefix = 'REV';
Subs=[1:3 6 9 10:11 13 16:24 26:27 29 31:32 34:39 41 43 44 46:60 62 65 67:70 73:78 80 82 84 86 88:89 90:91 93:94 97:98 100 102 104 107:111 114:119 121 124 126:127 129:131 134:138 140:142 144];
%startSub = 1;
%endSub = 144;
startRun = 1;
endRun = 14;

% COPY AND RENAME FILES
for s=Subs   %for s=startSub:endSub
    cd pre
    copyfile(['sub' num2str(s) '*.mat'],'../analysisReady')
    cd ..
    
    cd post
    copyfile(['sub' num2str(s) '*.mat'],'../analysisReady')
    cd ..
    
    cd train
    copyfile(['sub' num2str(s) '*.mat'],'../analysisReady')
    cd ..
    
    cd analysisReady
    
    for r=startRun:endRun
        try 
            filename = ls(['sub' num2str(s) '_run' num2str(r) '_*.mat']);
            filename = strtrim(filename);
            if exist(filename,'file') % check that it's a single file
                movefile(filename,[prefix '_sub' num2str(s) '_run' num2str(r) '.mat'])
            else
                fprintf('Multiple files for subject %d run %d\n',s,r)
            end
        catch
            fprintf('No file for subject %d run %d\n',s,r)
        end
    end
    cd ..
end



