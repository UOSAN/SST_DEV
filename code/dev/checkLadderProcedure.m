function checkLadderProcedure(subCode)

ladderDir = '~/Desktop/SST_DEV/input/ladderFiles/';
outputDir = '~/Desktop/SST_DEV/output/';

load([ladderDir filesep 's' num2str(subCode) 'r1_UvH.mat'])

fprintf('checking that the ladder file has the appropriate distribution of trials:\n\n')
trialType = trialcode(:,1);
isStop = trialType==1;
isGo = trialType==0;
isNull = trialType==2;
healthyGos = sum(trialcode(isGo,6)==1);
unhealthyGos = sum(trialcode(isGo,6)==0);
healthyStops = sum(trialcode(isStop,6)==1);
unhealthyStops = sum(trialcode(isStop,6)==0);
nullsCodedCorrectly = sum(trialcode(isNull,6)==2);
stopEventsInLadderCol = sum(trialcode(:,5)>0);

fprintf('%d gos and %d stops for Healthy trials\n%d gos and %d stops for Unhealthy trials \n',healthyGos,healthyStops,unhealthyGos,unhealthyStops)
fprintf('%d null events coded correctly in the H v H column\n',nullsCodedCorrectly)
fprintf('%d stop events according to the ladder column\n',stopEventsInLadderCol)

% fprintf('\nchecking that stimuli presentation order matches the ladder file:\n\n')
% load([outputDir filesep 'stimPrezOrder_DEV' num2str(subCode) '.mat' ])

fprintf('\nLoad the stim prez order file and look at exploreStimOrder to check further\n\n')

fprintf('checking that the output Seeker reflects appropriate adjustment\n\n') 
% once you test it with full 128 trials, better able to check final Seeker output 

trackfile=input('Enter name of subject''s completed ''mat'' file to open: ','s');
load(trackfile)

seekerGos = Seeker(:,3)==0;
seekerStops = Seeker(:,3)==1;
seekerHealthy = Seeker(:,17)==1;
seekerUnhealthy = Seeker(:,17)==0;

healthyGos = sum(seekerGos & seekerHealthy);
unhealthyGos = sum(seekerGos & seekerUnhealthy);
healthyStops = sum(seekerStops & seekerHealthy);
unhealthyStops = sum(seekerStops & seekerUnhealthy);

fprintf('%d gos and %d stops for Healthy trials\n%d gos and %d stops for Unhealthy trials \n',healthyGos,healthyStops,unhealthyGos,unhealthyStops)
SSDtrials = Seeker(:,6)>0;
staircaseTrials = abs(Seeker(:,8))>0;
SSDgo = sum(SSDtrials&isGo);
staircaseGo = sum(staircaseTrials&isGo);
fprintf('%d SSDs logged on Go trials\n%d staircase directions logged on Go trials \n(Both should be 0) \n',SSDgo,staircaseGo)

end