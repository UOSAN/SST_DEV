%%% Original script by LEK %%%

% This script will copy the SST .mat files to the
% analyisReady folder and rename them

% INITIAL SETUP (may need to change these parameters)
cd('C:\Users\bryan\Dropbox (University of Oregon)\Berkman Lab\Devaluation\Tasks\SST_DEV\output')
%cd('/Users/kdestasio/Desktop/SST_DEV/SST_DEV/output')
prefix = 'DEV';
Subs=[4:91 93:135 137:141 143:145 147 149:159 161 163 164 166:174 176:183 185:211 215:220 222:225 228];
%startSub = 1;
%endSub = 144;
startRun = 1;
endRun = 5;
%%
% COPY AND RENAME FILES
%disp(['sub' num2str(s) '*.mat'])
for s=Subs   %for s=startSub:endSub
    
    copyfile(['DEV' num2str(s,'%03.f') '*.mat'],'analysisReady')

    cd analysisReady
    
    for r=startRun:endRun
        try 
            filename = ls(['DEV' num2str(s,'%03.f') '_run' num2str(r) '_*.mat']);
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