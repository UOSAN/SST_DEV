cd('~/Desktop/SST_DEV/input/ladderFiles/')
numChunks = 16;
sizeChunks = 8;
startSub = 1;
endSub = 119;
numRuns = 5;

% [H, U]
numStops = [6, 26];
numGos = [58, 38];

% unhealthy: 64 trials
% 26 stop, 38 go
% 41% stop, 59% go

% healthy: 64 trials
% 6 stop, 58 go
% 9% stop, 91% go

for s = startSub:endSub
    for r = 1:numRuns
        
        load(['s' num2str(s) 'r' num2str(r) '.mat']);
        
        % get indices for go & stop trials
        trialType = trialcode(:,1);
        isStop = trialType==1;
        isGo = trialType==0;
        isNull = trialType==2;
        
        % healthy=1, unhealthy=0
        stopTypes = [ones(numStops(1),1); zeros(numStops(2),1)];
        goTypes = [ones(numGos(1),1); zeros(numGos(2),1)];
        
        rng('default')
        rng('shuffle')
        stopTypes = Shuffle(stopTypes);
        goTypes = Shuffle(goTypes);
        
        % Make 6th column that denotes H vs U
        trialcode(isStop,6) = stopTypes;
        trialcode(isGo,6) = goTypes;
        trialcode(isNull,6) = 2;
        
        UvH = trialcode(:,6);
        
        %%% save as ladder file
        save(['s' num2str(s) 'r' num2str(r) '_UvH.mat'],'trialcode','UvH');
%         save(['s' num2str(s) 'r' num2str(r) '_altProps.mat'],'trialcode');
        
    end
end



