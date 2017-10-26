revision_date='4-26-17';

cd('~/Desktop/REV/REV_SST/output/analysisReady');
steps=16;
exclude = [4 5 7 8 12 14 15 25 28 30 33 40 42 45 61 63 64 66 71 72 79 81 83 85 87 92 95 96 99 101 103 105 106 112 113 116 120 122 123 125 128 132 133 139 143]; % If you want to exclude any numbers, put them in this vector (e.g. exclude = [5 20];)
numSubs = 144;
numRuns = 14;

% These two codes should reflect what's in the response column of the Seeker variable
% You'll specify exceptions to this rule below
% leftButton=91;
% rightButton=94;
% studyPrefix='INC'; % You'll use this in your analysisReady data filenames
leftButtonList=[197,91];
rightButtonList=[198,94];
studyPrefix='REV'; % You'll use this in your analysisReady data filenames

%% DEFINE EXCEPTIONS TO BUTTON RULE
% Make each exception a string for what subject (s) and what run (2) it
% applies
% problemSubjects = [2,12];
% problemRuns= {2,{3,4,5}};
% switchRule = 'LEFT = rightButton;RIGHT = leftButton;'
% alternativeRules={switchRule,switchRule};

buttonRuleExceptions = dlmread('../../info/systematicWrongButtons.txt','\t');

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

if numSubs<10
    placeholder = '00';
elseif numSubs<100
    placeholder = '0';
else placeholder = '';
end

%%%%%%

NRCount = dlmread(['../../compiledResults/upto' studyPrefix placeholder num2str(numSubs) '/initialCheck/NRCount.txt'],'\t');
NRCountNeut = dlmread(['../../compiledResults/upto' studyPrefix placeholder num2str(numSubs) '/initialCheck/NRCountNeut.txt'],'\t');

% Initialize variables
results = nan(numSubs,numRuns,10);
neutResults = nan(numSubs,numRuns,10);

for s=1:numSubs
    if find(exclude==s)
        % keep as NaNs
    else
        for r=1:numRuns
            filename=[studyPrefix '_sub' num2str(s) '_run' num2str(r)];
            if exist([filename '.mat'])
                
                problemSubIdx = find(buttonRuleExceptions(:,1)==s);
                problemRunIdx = find(buttonRuleExceptions(:,2)==r);
                probRow = intersect(problemSubIdx,problemRunIdx);
                
                if isnan(buttonRuleExceptions(probRow,3))
                    % keep this run as NaNs
                else
                    
                    if r<3|r>12 % scanning run
                        dub=0;
                        LEFT=leftButtonList(2);
                        RIGHT=rightButtonList(2);
                    else % training run
                        dub=1;
                        LEFT=leftButtonList(1);
                        RIGHT=rightButtonList(1);
                    end
                    
                    if ~isempty(probRow)
                        LEFT = buttonRuleExceptions(probRow,3);
                        RIGHT = buttonRuleExceptions(probRow,4);
                    end
                    
                    [GRTmean GRTmedian StDevGRT SSRT GRTquant SSRTquant GRTint SSRTint PctInhib SSDfifty] = extractSSTResults(filename,RIGHT,LEFT,steps,dub);
                    results(s,r,1:10) = [GRTmean GRTmedian StDevGRT SSRT GRTquant SSRTquant GRTint SSRTint mean(PctInhib) SSDfifty];
                    
                    if dub==1 % If it's a training run
                        dub=2; % Also analyze neutral output
                        [GRTmean GRTmedian StDevGRT SSRT GRTquant SSRTquant GRTint SSRTint PctInhib SSDfifty] = extractSSTResults(filename,RIGHT,LEFT,steps,dub);
                        neutResults(s,r,1:10) = [GRTmean GRTmedian StDevGRT SSRT GRTquant SSRTquant GRTint SSRTint mean(PctInhib) SSDfifty];
                    end
                    
                end
            end
        end
    end
end

GRTmean_results = results(:,:,1);
GRTmedian_results = results(:,:,2);
GRTmedian_GoOnly_results = results(:,:,3);
SSRT_results = results(:,:,4);
GRTquant_results = results(:,:,5);
SSRTquant_results = results(:,:,6);
GRTint_results = results(:,:,7);
SSRTint_results = results(:,:,8);
PctInhib_results = results(:,:,9);
SSD_results = results(:,:,10);
NRCount_results = NRCount;

GRTmean_neutResults = neutResults(:,:,1);
GRTmedian_neutResults = neutResults(:,:,2);
GRTmedian_GoOnly_neutResults = neutResults(:,:,3);
SSRT_neutResults = neutResults(:,:,4);
GRTquant_neutResults = neutResults(:,:,5);
SSRTquant_neutResults = neutResults(:,:,6);
GRTint_neutResults = neutResults(:,:,7);
SSRTint_neutResults = neutResults(:,:,8);
PctInhib_neutResults = neutResults(:,:,9);
SSD_neutResults = neutResults(:,:,10);
NRCount_neutResults = NRCountNeut;

%%%%%%%% SAVE VARIABLES (txt & mat)

varList = {'GRTmean','GRTmedian','SSRT','GRTquant','GRTint','SSRTint','PctInhib','SSD','NRCount'};

for v=1:length(varList)
    currentVar = varList{v};
    command1 = ['dlmwrite([''../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs) '/singleVarTxts/' studyPrefix '_'' varList{v} num2str(steps) ''.txt''],' currentVar '_results,''delimiter'',''\t'');'];
    eval(command1);
    command2 = ['dlmwrite([''../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs) '/singleVarTxts/' studyPrefix '_neut_'' varList{v} num2str(steps) ''.txt''],' currentVar '_neutResults,''delimiter'',''\t'');'];
    eval(command2);
end

save(['../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs) '/varMats/resultVars' num2str(steps)],'GRTmean_results','GRTmedian_results','SSRT_results','GRTquant_results','SSRTquant_results','GRTint_results','SSRTint_results','SSD_results','PctInhib_results','NRCount')
save(['../../compiledResults/upTo' studyPrefix placeholder num2str(numSubs) '/varMats/neutResultVars' num2str(steps)],'GRTmean_neutResults','GRTmedian_neutResults','SSRT_neutResults','GRTquant_neutResults','SSRTquant_neutResults','GRTint_neutResults','SSRTint_neutResults','SSD_neutResults','PctInhib_neutResults','NRCountNeut')
