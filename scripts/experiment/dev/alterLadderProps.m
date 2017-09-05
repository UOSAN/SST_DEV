cd('/Users/laurenkahn/Desktop/interSSTriskCue/scripts/ladderFiles/RiskNeut_2814')
numChunks = [18 9];
sizeChunks = [7 14];
numSubs = 60;
% numSubs = 60;
numRuns = 10;

for s = 2:numSubs
    for r = 1:numRuns
        
        chunk = cell(2,18);
        ladder = cell(2,18);
        eventMat = cell(1,2);
        concatChunks = cell(1,2);
        load(['dub_st' num2str(s) 'b' num2str(r) '.mat']);
        
        for t = 1:2
            concatChunks{t} = [];
            concatLadders{t} = [];
            
            for ch = 1:numChunks(t)
                chunk{t,ch} = [ones(1,2) zeros(1,sizeChunks(t)-2)];
                chunk{t,ch} = Shuffle(chunk{t,ch});
                concatChunks{t} = [concatChunks{t} chunk{t,ch}];
                
                ladder{t,ch} = [1 2];
                ladder{t,ch} = Shuffle(ladder{t,ch});
                concatLadders{t} = [concatLadders{t} ladder{t,ch}];
            end
            
            trialcode{t}(253:256,:)=[];
            %%% MAKE MATRIX
            trialInd = [1:2:251];
            
            trialcode{t}(trialInd,1) = (concatChunks{t})'; %trial type
            isGo = trialcode{t}(:,1)==0;
            isStop = trialcode{t}(:,1)==1;
            trialcode{t}(isStop,5) = (concatLadders{t})'; %ladder type
            
        end

        
        %%% save as ladder file
        save(['dub_st' num2str(s) 'b' num2str(r) '.mat'],'trialcode');
        
    end
end



